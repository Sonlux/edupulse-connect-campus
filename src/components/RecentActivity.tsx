
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, BookOpen, MessageSquare, FileText } from 'lucide-react';

export const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'grade',
      title: 'New grade posted',
      description: 'Data Structures - Assignment 3: A+ (95/100)',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      id: 2,
      type: 'attendance',
      title: 'Attendance marked',
      description: 'Present in Database Systems practical',
      time: '4 hours ago',
      icon: CheckCircle,
      color: 'text-blue-600'
    },
    {
      id: 3,
      type: 'assignment',
      title: 'New assignment posted',
      description: 'Web Development - Project 2 due next Friday',
      time: '1 day ago',
      icon: FileText,
      color: 'text-orange-600'
    },
    {
      id: 4,
      type: 'warning',
      title: 'Low attendance warning',
      description: 'Computer Networks attendance is below 75%',
      time: '2 days ago',
      icon: AlertTriangle,
      color: 'text-red-600'
    },
    {
      id: 5,
      type: 'message',
      title: 'New message from faculty',
      description: 'Dr. Smith: Office hours changed to 3-5 PM',
      time: '3 days ago',
      icon: MessageSquare,
      color: 'text-purple-600'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-indigo-600" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50">
              <activity.icon className={`h-5 w-5 mt-0.5 ${activity.color}`} />
              <div className="flex-1">
                <h4 className="font-medium text-sm">{activity.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-2">{activity.time}</p>
              </div>
              <Badge 
                variant={activity.type === 'warning' ? 'destructive' : 'outline'}
                className="text-xs"
              >
                {activity.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
