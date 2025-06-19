
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import MarkEntry from '@/components/MarkEntry';

const FacultyMarks = () => {
  return (
    <DashboardLayout allowedRoles={['faculty']}>
      <div className="p-6">
        <MarkEntry />
      </div>
    </DashboardLayout>
  );
};

export default FacultyMarks;
