
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import AdminDashboard from '@/components/AdminDashboard';

const AdminIndex = () => {
  return (
    <DashboardLayout allowedRoles={['admin']}>
      <AdminDashboard />
    </DashboardLayout>
  );
};

export default AdminIndex;
