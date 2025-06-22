
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DepartmentManagement from '@/components/DepartmentManagement';

const AdminDepartments = () => {
  return (
    <DashboardLayout allowedRoles={['admin']}>
      <DepartmentManagement />
    </DashboardLayout>
  );
};

export default AdminDepartments;
