
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import AttendanceManagement from '@/components/AttendanceManagement';

const FacultyAttendance = () => {
  return (
    <DashboardLayout allowedRoles={['faculty']}>
      <div className="p-6">
        <AttendanceManagement />
      </div>
    </DashboardLayout>
  );
};

export default FacultyAttendance;
