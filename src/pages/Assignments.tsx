
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import AssignmentManagement from '@/components/AssignmentManagement';

const Assignments = () => {
  return (
    <DashboardLayout allowedRoles={['student', 'faculty']}>
      <div className="p-6">
        <AssignmentManagement />
      </div>
    </DashboardLayout>
  );
};

export default Assignments;
