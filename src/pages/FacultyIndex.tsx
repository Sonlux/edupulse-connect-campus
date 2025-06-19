
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import FacultyDashboard from '@/components/FacultyDashboard';

const FacultyIndex = () => {
  return (
    <DashboardLayout allowedRoles={['faculty']}>
      <FacultyDashboard />
    </DashboardLayout>
  );
};

export default FacultyIndex;
