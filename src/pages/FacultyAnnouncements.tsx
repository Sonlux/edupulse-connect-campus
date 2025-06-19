
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import AnnouncementManagement from '@/components/AnnouncementManagement';

const FacultyAnnouncements = () => {
  return (
    <DashboardLayout allowedRoles={['faculty']}>
      <div className="p-6">
        <AnnouncementManagement />
      </div>
    </DashboardLayout>
  );
};

export default FacultyAnnouncements;
