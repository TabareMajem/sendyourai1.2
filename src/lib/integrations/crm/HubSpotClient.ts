import { CRMProvider } from './types';

export class HubSpotClient implements CRMProvider {
  private apiKey: string;
  private baseUrl = 'https://api.hubapi.com/crm/v3';

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
      throw new Error(`HubSpot API error: ${response.statusText}`);
    }

    return response.json();
  }

  async isConnected(): Promise<boolean> {
    try {
      await this.request('/objects/contacts');
      return true;
    } catch {
      return false;
    }
  }

  async createLead(data: {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    status: string;
  }): Promise<string> {
    const response = await this.request('/objects/contacts', {
      method: 'POST',
      body: JSON.stringify({
        properties: {
          firstname: data.firstName,
          lastname: data.lastName,
          email: data.email,
          company: data.company,
          lifecyclestage: data.status
        }
      })
    });

    return response.id;
  }

  async updateLead(id: string, data: Partial<{
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    status: string;
  }>): Promise<void> {
    await this.request(`/objects/contacts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        properties: {
          ...(data.firstName && { firstname: data.firstName }),
          ...(data.lastName && { lastname: data.lastName }),
          ...(data.email && { email: data.email }),
          ...(data.company && { company: data.company }),
          ...(data.status && { lifecyclestage: data.status })
        }
      })
    });
  }

  async getLead(id: string): Promise<any> {
    const response = await this.request(`/objects/contacts/${id}`);
    return response;
  }

  async searchLeads(query: string): Promise<any[]> {
    const response = await this.request('/objects/contacts/search', {
      method: 'POST',
      body: JSON.stringify({
        filterGroups: [{
          filters: [{
            propertyName: 'email',
            operator: 'CONTAINS_TOKEN',
            value: query
          }]
        }]
      })
    });

    return response.results;
  }
}