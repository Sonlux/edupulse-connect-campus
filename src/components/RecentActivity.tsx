
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, FileText, Calendar, MessageCircle, Award } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      type: 'assignment',
      title: 'Database Design Assignment submitted',
      description: 'You submitted your assignment for Database Systems',
      time: '2 hours ago',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      type: 'grade',
      title: 'New grade posted',
      description: 'Machine Learning Quiz 2 - Grade: A+ (96/100)',
      time: '4 hours ago',
      icon: Award,
      color: 'text-green-600'
    },
    {
      type: 'announcement',
      title: 'Class rescheduled',
      description: 'Software Engineering lecture moved to 2:30 PM',
      time: '6 hours ago',
      icon: Bell,
      color: 'text-orange-600'
    },
    {
      type: 'message',
      title: 'Message from Prof. Smith',
      description: 'Regarding your project proposal submission',
      time: '1 day ago',
      icon: MessageCircle,
      color: 'text-purple-600'
    },
    {
      type: 'event',
      title: 'Upcoming test reminder',
      description: 'Data Structures test scheduled for Friday, 10 AM',
      time: '2 days ago',
      icon: Calendar,
      color: 'text-red-600'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-gray-600" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 text-sm">{activity.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                <p className="text-xs text-gray-500 mt-2">{activity.time}</p>
              </div>
              <Badge variant="outline" className="text-xs">
                {activity.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { RecentActivity };
