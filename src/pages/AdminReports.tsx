
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import ReportsAnalytics from '@/components/ReportsAnalytics';

const AdminReports = () => {
  return (
    <DashboardLayout allowedRoles={['admin']}>
      <ReportsAnalytics />
    </DashboardLayout>
  );
};

export default AdminReports;
