import React from 'react';
import {
  Users,
  GraduationCap,
  Stethoscope,
  BadgeDollarSign,
  HeadsetIcon,
  Brain,
  Plane,
  Palette,
  Building2,
  BarChart3,
  Dumbbell
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function UseCases() {
  const { t } = useTranslation('landing');

  const industries = [
    {
      title: t('useCases.industries.hr.title'),
      description: t('useCases.industries.hr.description'),
      icon: Users,
      benefits: [
        'Automated onboarding workflows',
        'Smart performance review scheduling',
        'Employee engagement monitoring'
      ],
      href: '/use-cases/hr'
    },
    {
      title: t('useCases.industries.healthcare.title'),
      description: t('useCases.industries.healthcare.description'),
      icon: Stethoscope,
      benefits: [
        'Patient follow-up automation',
        'Appointment scheduling',
        'Medical records management'
      ],
      href: '/use-cases/healthcare'
    },
    {
      title: t('useCases.industries.ecommerce.title'),
      description: t('useCases.industries.ecommerce.description'),
      icon: Building2,
      benefits: [
        'Inventory management',
        'Order processing',
        'Customer support automation'
      ],
      href: '/use-cases/ecommerce'
    },
    {
      title: t('useCases.industries.realEstate.title'),
      description: t('useCases.industries.realEstate.description'),
      icon: Building2,
      benefits: [
        'Listing automation',
        'Virtual tour scheduling',
        'Lead management'
      ],
      href: '/use-cases/real-estate'
    },
    {
      title: t('useCases.industries.fitness.title'),
      description: t('useCases.industries.fitness.description'),
      icon: Dumbbell,
      benefits: [
        'Workout plan generation',
        'Progress tracking',
        'Nutrition planning'
      ],
      href: '/use-cases/fitness'
    },
    {
      title: 'Travel & Tourism',
      description: 'Streamline travel operations and enhance guest experiences',
      icon: Plane,
      benefits: [
        'Booking automation',
        'Itinerary management',
        'Customer communication',
        'Review management'
      ],
      href: '/use-cases/travel'
    },
    {
      title: 'Education',
      description: 'Transform learning experiences with AI automation',
      icon: GraduationCap,
      benefits: [
        'Course management',
        'Student progress tracking',
        'Assignment automation'
      ],
      href: '/use-cases/education'
    },
    {
      title: 'Financial Services',
      description: 'Automate financial operations and compliance',
      icon: BadgeDollarSign,
      benefits: [
        'Transaction processing',
        'Risk assessment',
        'Compliance monitoring'
      ],
      href: '/use-cases/finance'
    },
    {
      title: 'Creative Industries',
      description: 'Streamline creative workflows and asset management',
      icon: Palette,
      benefits: [
        'Project automation',
        'Asset organization',
        'Collaboration tools'
      ],
      href: '/use-cases/creative'
    },
    {
      title: 'Customer Service',
      description: 'Enhance support operations with AI assistance',
      icon: HeadsetIcon,
      benefits: [
        'Ticket automation',
        'Response suggestions',
        'Customer analytics'
      ],
      href: '/use-cases/customer-service'
    },
    {
      title: 'Data Analytics',
      description: 'Automate data processing and insights generation',
      icon: BarChart3,
      benefits: [
        'Data pipeline automation',
        'Report generation',
        'Insight delivery'
      ],
      href: '/use-cases/analytics'
    },
    {
      title: 'Research & Development',
      description: 'Accelerate innovation with AI-powered workflows',
      icon: Brain,
      benefits: [
        'Literature analysis',
        'Experiment tracking',
        'Documentation automation'
      ],
      href: '/use-cases/research'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t('useCases.title')}</h2>
          <p className="mt-4 text-xl text-gray-600">{t('useCases.subtitle')}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-600 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-600/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.benefits.map((benefit, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}