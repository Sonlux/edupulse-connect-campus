
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import ClassManagement from '@/components/ClassManagement';

const FacultyClasses = () => {
  return (
    <DashboardLayout allowedRoles={['faculty']}>
      <div className="p-6">
        <ClassManagement />
      </div>
    </DashboardLayout>
  );
};

export default FacultyClasses;
