
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import StudentAttendance from '@/components/StudentAttendance';

const Attendance = () => {
  return (
    <DashboardLayout allowedRoles={['student']}>
      <div className="p-6">
        <StudentAttendance />
      </div>
    </DashboardLayout>
  );
};

export default Attendance;
