import { EmailProvider } from './types';
import { AppError, ErrorCodes } from '../../utils/errors';

export class SendGridClient implements EmailProvider {
  private apiKey: string;
  private baseUrl = 'https://api.sendgrid.com/v3';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async request(endpoint: string, options: RequestInit = {}): Promise<any> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers
      }
    });

    if (!response.ok) {
      throw new AppError(
        'SendGrid API request failed',
        ErrorCodes.INTEGRATION_ERROR,
        response.status
      );
    }

    return response.json();
  }

  async isConnected(): Promise<boolean> {
    try {
      await this.request('/mail/settings');
      return true;
    } catch {
      return false;
    }
  }

  async sendEmail(options: {
    to: string;
    subject: string;
    body: string;
    html?: string;
  }): Promise<string> {
    const msg = {
      personalizations: [{
        to: [{ email: options.to }]
      }],
      from: {
        email: process.env.VITE_SENDGRID_FROM_EMAIL || 'noreply@sendaicompanion.com',
        name: 'Send AI Companion'
      },
      subject: options.subject,
      content: [
        {
          type: 'text/plain',
          value: options.body
        },
        ...(options.html ? [{
          type: 'text/html',
          value: options.html
        }] : [])
      ]
    };

    const response = await this.request('/mail/send', {
      method: 'POST',
      body: JSON.stringify(msg)
    });

    return response.id;
  }
}