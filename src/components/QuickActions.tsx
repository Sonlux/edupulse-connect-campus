
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Calendar, 
  MessageSquare, 
  Download, 
  Upload, 
  BookOpen,
  Users,
  BarChart3,
  Bell,
  Settings
} from 'lucide-react';

const QuickActions = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const studentActions = [
    { icon: FileText, label: 'Submit Assignment', color: 'bg-blue-500', path: '/assignments' },
    { icon: Calendar, label: 'View Schedule', color: 'bg-green-500', path: '/schedule' },
    { icon: MessageSquare, label: 'Message Faculty', color: 'bg-purple-500', path: '/messages' },
    { icon: BarChart3, label: 'View Grades', color: 'bg-orange-500', path: '/grades' },
    { icon: BookOpen, label: 'Attendance', color: 'bg-indigo-500', path: '/attendance' },
    { icon: Settings, label: 'Settings', color: 'bg-pink-500', path: '/settings' }
  ];

  const facultyActions = [
    { icon: Upload, label: 'Upload Materials', color: 'bg-blue-500', path: '/assignments' },
    { icon: Users, label: 'Manage Classes', color: 'bg-green-500', path: '/faculty/classes' },
    { icon: FileText, label: 'Mark Attendance', color: 'bg-purple-500', path: '/faculty/attendance' },
    { icon: BarChart3, label: 'Enter Marks', color: 'bg-orange-500', path: '/faculty/marks' },
    { icon: Bell, label: 'Announcements', color: 'bg-indigo-500', path: '/faculty/announcements' },
    { icon: MessageSquare, label: 'Reports', color: 'bg-pink-500', path: '/faculty/reports' }
  ];

  const actions = user?.role === 'faculty' ? facultyActions : studentActions;

  const handleActionClick = (path: string, label: string) => {
    console.log(`Navigating to ${label} at ${path}`);
    navigate(path);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-20 flex-col gap-2 hover:scale-105 transition-transform"
              onClick={() => handleActionClick(action.path, action.label)}
            >
              <div className={`p-2 rounded-full ${action.color}`}>
                <action.icon className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs text-center">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
