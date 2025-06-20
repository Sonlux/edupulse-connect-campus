
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Calendar, 
  MessageSquare, 
  Download, 
  Upload, 
  BookOpen,
  Users,
  BarChart3
} from 'lucide-react';

const QuickActions = () => {
  const studentActions = [
    { icon: FileText, label: 'Submit Assignment', color: 'bg-blue-500' },
    { icon: Calendar, label: 'View Schedule', color: 'bg-green-500' },
    { icon: MessageSquare, label: 'Message Faculty', color: 'bg-purple-500' },
    { icon: Download, label: 'Download Materials', color: 'bg-orange-500' },
    { icon: BookOpen, label: 'Access Library', color: 'bg-indigo-500' },
    { icon: BarChart3, label: 'View Progress', color: 'bg-pink-500' }
  ];

  const facultyActions = [
    { icon: Upload, label: 'Upload Materials', color: 'bg-blue-500' },
    { icon: Users, label: 'Manage Classes', color: 'bg-green-500' },
    { icon: FileText, label: 'Create Assignment', color: 'bg-purple-500' },
    { icon: BarChart3, label: 'View Reports', color: 'bg-orange-500' },
    { icon: MessageSquare, label: 'Send Announcement', color: 'bg-indigo-500' },
    { icon: Calendar, label: 'Schedule Meeting', color: 'bg-pink-500' }
  ];

  // For demo, showing student actions
  const actions = studentActions;

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
              onClick={() => console.log(`${action.label} clicked`)}
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
