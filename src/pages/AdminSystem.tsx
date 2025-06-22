
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import SystemSettings from '@/components/SystemSettings';

const AdminSystem = () => {
  return (
    <DashboardLayout allowedRoles={['admin']}>
      <SystemSettings />
    </DashboardLayout>
  );
};

export default AdminSystem;
