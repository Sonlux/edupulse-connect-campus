
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Home, 
  Calendar, 
  TrendingUp, 
  MessageSquare, 
  Bell,
  User,
  LogOut,
  Users,
  FileText,
  BarChart3,
  Settings
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AppSidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const studentMenuItems = [
    { title: 'Dashboard', icon: Home, url: '/' },
    { title: 'Attendance', icon: Calendar, url: '/attendance' },
    { title: 'Grades', icon: TrendingUp, url: '/grades' },
    { title: 'Schedule', icon: Calendar, url: '/schedule' },
    { title: 'Assignments', icon: FileText, url: '/assignments' },
    { title: 'Messages', icon: MessageSquare, url: '/messages' },
  ];

  const facultyMenuItems = [
    { title: 'Dashboard', icon: Home, url: '/faculty' },
    { title: 'Classes', icon: Users, url: '/faculty/classes' },
    { title: 'Attendance', icon: Calendar, url: '/faculty/attendance' },
    { title: 'Marks Entry', icon: TrendingUp, url: '/faculty/marks' },
    { title: 'Announcements', icon: Bell, url: '/faculty/announcements' },
    { title: 'Reports', icon: BarChart3, url: '/faculty/reports' },
  ];

  const menuItems = user?.role === 'faculty' ? facultyMenuItems : studentMenuItems;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) return null;

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-lg">EduPulse</span>
        </div>
        <div className="mt-3 space-y-1">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium">{user.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={user.role === 'faculty' ? 'default' : 'secondary'} className="text-xs">
              {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
            </Badge>
            {user.studentId && (
              <Badge variant="outline" className="text-xs">{user.studentId}</Badge>
            )}
            {user.facultyId && (
              <Badge variant="outline" className="text-xs">{user.facultyId}</Badge>
            )}
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/settings" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <Button 
          variant="outline" 
          className="w-full justify-start gap-2" 
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
