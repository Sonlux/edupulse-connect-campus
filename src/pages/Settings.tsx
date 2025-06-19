
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import UserSettings from '@/components/UserSettings';

const Settings = () => {
  return (
    <DashboardLayout allowedRoles={['student', 'faculty']}>
      <div className="p-6">
        <UserSettings />
      </div>
    </DashboardLayout>
  );
};

export default Settings;
