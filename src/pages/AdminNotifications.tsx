
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import AdminNotificationCenter from '@/components/AdminNotificationCenter';

const AdminNotifications = () => {
  return (
    <DashboardLayout allowedRoles={['admin']}>
      <AdminNotificationCenter />
    </DashboardLayout>
  );
};

export default AdminNotifications;
