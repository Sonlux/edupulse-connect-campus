
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import DashboardLayout from '@/components/DashboardLayout';
import StudentDashboard from '@/components/StudentDashboard';
import FacultyDashboard from '@/components/FacultyDashboard';
import AdminDashboard from '@/components/AdminDashboard';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  if (user.role === 'admin') {
    return (
      <DashboardLayout allowedRoles={['admin']}>
        <AdminDashboard />
      </DashboardLayout>
    );
  }

  if (user.role === 'faculty') {
    return (
      <DashboardLayout allowedRoles={['faculty']}>
        <FacultyDashboard />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout allowedRoles={['student']}>
      <StudentDashboard />
    </DashboardLayout>
  );
};

export default Index;
