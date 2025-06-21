
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import UserManagement from '@/components/UserManagement';

const AdminUsers = () => {
  return (
    <DashboardLayout allowedRoles={['admin']}>
      <UserManagement />
    </DashboardLayout>
  );
};

export default AdminUsers;
