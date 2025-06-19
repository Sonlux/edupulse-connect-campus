
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import ReportsManagement from '@/components/ReportsManagement';

const FacultyReports = () => {
  return (
    <DashboardLayout allowedRoles={['faculty']}>
      <div className="p-6">
        <ReportsManagement />
      </div>
    </DashboardLayout>
  );
};

export default FacultyReports;
