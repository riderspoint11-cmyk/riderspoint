import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import PartnerRoute from './components/Auth/PartnerRoute';
import AdminRoute from './components/Auth/AdminRoute';

// Page imports
import HomePage from './pages/HomePage';
import BikesListPage from './pages/BikesListPage';
import BikeDetailPage from './pages/BikeDetailPage';
import BookingPage from './pages/BookingPage';
import OffersPage from './pages/OffersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';
import CustomerDashboard from './pages/Customer/Dashboard';
import PartnerOnboardPage from './pages/Partner/OnboardPage';
import PartnerDashboard from './pages/Partner/Dashboard';
import AdminDashboard from './pages/Admin/Dashboard';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/bikes" element={<BikesListPage />} />
          <Route path="/bikes/:id" element={<BikeDetailPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/partners" element={<PartnerOnboardPage />} />

          {/* Protected Customer Routes */}
          <Route 
            path="/book/:id" 
            element={
              <ProtectedRoute>
                <BookingPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <CustomerDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Partner Routes */}
          <Route 
            path="/partner/dashboard" 
            element={
              <PartnerRoute>
                <PartnerDashboard />
              </PartnerRoute>
            } 
          />

          {/* Admin Routes */}
          <Route 
            path="/admin" 
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            } 
          />

          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
