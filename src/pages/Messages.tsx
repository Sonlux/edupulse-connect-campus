
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import MessagingSystem from '@/components/MessagingSystem';

const Messages = () => {
  return (
    <DashboardLayout allowedRoles={['student', 'faculty']}>
      <div className="p-6">
        <MessagingSystem />
      </div>
    </DashboardLayout>
  );
};

export default Messages;
