import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { PublicRoute } from './components/auth/PublicRoute';
import { AdminRoute } from './components/auth/AdminRoute';

// Pages
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { UseCases } from './pages/UseCases';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';
import { SignUp } from './pages/auth/SignUp';
import { Login } from './pages/auth/Login';
import { Support } from './pages/Support';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Settings } from './pages/settings/Settings';
import { Privacy } from './pages/legal/Privacy';
import { Terms } from './pages/legal/Terms';
import { OnboardingFlow } from './pages/onboarding/OnboardingFlow';
import { WorkflowManagement } from './pages/workflows/WorkflowManagement';
import { WorkflowCreator } from './pages/workflows/WorkflowCreator';
import { IntegrationSetup } from './pages/integrations/IntegrationSetup';
import { ZapierDashboard } from './pages/integrations/ZapierDashboard';
import { AnalyticsDashboard } from './pages/analytics/AnalyticsDashboard';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AgentsDashboard } from './pages/agents/AgentsDashboard';
import { MarketingCampaignDashboard } from './pages/agents/marketing/MarketingCampaignDashboard';
import { PMODashboard } from './pages/agents/pmo/PMODashboard';

// Company Pages
import { Careers } from './pages/company/Careers';
import { Press } from './pages/company/Press';

export function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/use-cases" element={<UseCases />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/press" element={<Press />} />

      {/* Auth Routes */}
      <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />

      {/* Protected Routes */}
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/agents" element={<PrivateRoute><AgentsDashboard /></PrivateRoute>} />
      <Route path="/agents/marketing" element={<PrivateRoute><MarketingCampaignDashboard /></PrivateRoute>} />
      <Route path="/agents/pmo" element={<PrivateRoute><PMODashboard /></PrivateRoute>} />
      <Route path="/workflows" element={<PrivateRoute><WorkflowManagement /></PrivateRoute>} />
      <Route path="/workflows/new" element={<PrivateRoute><WorkflowCreator /></PrivateRoute>} />
      <Route path="/analytics" element={<PrivateRoute><AnalyticsDashboard /></PrivateRoute>} />
      <Route path="/integrations" element={<PrivateRoute><IntegrationSetup /></PrivateRoute>} />
      <Route path="/integrations/zapier" element={<PrivateRoute><ZapierDashboard /></PrivateRoute>} />
      <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
      <Route path="/onboarding" element={<PrivateRoute><OnboardingFlow /></PrivateRoute>} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
    </Routes>
  );
}