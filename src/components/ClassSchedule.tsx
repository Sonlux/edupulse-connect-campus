
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Video } from 'lucide-react';

const ClassSchedule = () => {
  const todaySchedule = [
    {
      time: "09:00 - 10:00",
      subject: "Data Structures",
      room: "Lab 204",
      type: "Practical",
      status: "ongoing"
    },
    {
      time: "10:15 - 11:15",
      subject: "Database Systems",
      room: "Room 301",
      type: "Theory",
      status: "upcoming"
    },
    {
      time: "11:30 - 12:30",
      subject: "Web Development",
      room: "Lab 105",
      type: "Practical",
      status: "upcoming"
    },
    {
      time: "14:00 - 15:00",
      subject: "Machine Learning",
      room: "Room 205",
      type: "Theory",
      status: "upcoming"
    },
    {
      time: "15:15 - 16:15",
      subject: "Software Engineering",
      room: "Room 302",
      type: "Theory",
      status: "upcoming"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-purple-600" />
          Today's Schedule
          <Badge variant="outline" className="ml-auto">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {todaySchedule.map((class_item, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg border-l-4 ${
                class_item.status === 'ongoing' ? 'border-l-green-500 bg-green-50' : 
                'border-l-blue-500 bg-blue-50'
              } transition-all hover:shadow-md`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{class_item.subject}</h3>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getStatusColor(class_item.status)}`}
                    >
                      {class_item.status}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {class_item.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {class_item.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {class_item.room}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {class_item.status === 'ongoing' && (
                    <Button size="sm" className="gap-1">
                      <Video className="h-4 w-4" />
                      Join
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { ClassSchedule };
