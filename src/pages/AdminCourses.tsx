
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import CourseManagement from '@/components/CourseManagement';

const AdminCourses = () => {
  return (
    <DashboardLayout allowedRoles={['admin']}>
      <CourseManagement />
    </DashboardLayout>
  );
};

export default AdminCourses;
