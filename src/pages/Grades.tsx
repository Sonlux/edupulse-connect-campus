
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import StudentGrades from '@/components/StudentGrades';

const Grades = () => {
  return (
    <DashboardLayout allowedRoles={['student']}>
      <div className="p-6">
        <StudentGrades />
      </div>
    </DashboardLayout>
  );
};

export default Grades;
