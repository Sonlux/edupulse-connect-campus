
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import AcademicCalendar from '@/components/AcademicCalendar';

const AdminCalendar = () => {
  return (
    <DashboardLayout allowedRoles={['admin']}>
      <AcademicCalendar />
    </DashboardLayout>
  );
};

export default AdminCalendar;
