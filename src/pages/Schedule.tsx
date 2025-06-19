
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import StudentSchedule from '@/components/StudentSchedule';

const Schedule = () => {
  return (
    <DashboardLayout allowedRoles={['student']}>
      <div className="p-6">
        <StudentSchedule />
      </div>
    </DashboardLayout>
  );
};

export default Schedule;
