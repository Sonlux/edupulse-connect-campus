
import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from './AppSidebar';
import ProtectedRoute from './ProtectedRoute';
import ThemeToggle from './ThemeToggle';
import { UserRole } from '@/contexts/AuthContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, allowedRoles }) => {
  return (
    <ProtectedRoute allowedRoles={allowedRoles}>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <main className="flex-1">
            <div className="p-2 border-b bg-white dark:bg-gray-900 flex items-center justify-between">
              <SidebarTrigger />
              <ThemeToggle />
            </div>
            {children}
          </main>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
