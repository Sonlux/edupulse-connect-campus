
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Video, Bell } from 'lucide-react';

export const ClassSchedule = () => {
  const [selectedDay, setSelectedDay] = useState('today');

  const todaySchedule = [
    { 
      time: '09:00 - 10:00', 
      subject: 'Data Structures', 
      room: 'Room 201', 
      type: 'Lecture',
      professor: 'Dr. Sarah Smith',
      isOnline: false,
      isNext: true
    },
    { 
      time: '10:00 - 11:00', 
      subject: 'Database Systems', 
      room: 'Lab 301', 
      type: 'Practical',
      professor: 'Prof. John Doe',
      isOnline: false,
      isNext: false
    },
    { 
      time: '11:30 - 12:30', 
      subject: 'Web Development', 
      room: 'Online', 
      type: 'Lecture',
      professor: 'Dr. Mike Wilson',
      isOnline: true,
      isNext: false
    }
  ];

  const upcomingClasses = [
    { date: 'Tomorrow', subject: 'Computer Networks', time: '09:00 AM' },
    { date: 'Friday', subject: 'Software Engineering', time: '10:00 AM' },
    { date: 'Monday', subject: 'Machine Learning', time: '11:30 AM' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-purple-600" />
          Today's Schedule
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {todaySchedule.map((cls, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-4 border rounded-lg ${
                cls.isNext ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-center min-w-[80px]">
                  <div className="font-bold text-sm">{cls.time.split(' - ')[0]}</div>
                  <div className="text-xs text-gray-500">{cls.time.split(' - ')[1]}</div>
                </div>
                <div>
                  <h3 className="font-semibold flex items-center gap-2">
                    {cls.subject}
                    {cls.isOnline && <Video className="h-4 w-4 text-blue-500" />}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-3 w-3" />
                    {cls.room} • {cls.professor}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={cls.type === 'Lecture' ? 'default' : 'secondary'}>
                  {cls.type}
                </Badge>
                {cls.isNext && (
                  <Badge className="bg-green-600 text-white">
                    Next Class
                  </Badge>
                )}
                <Button variant="outline" size="sm" className="gap-1">
                  <Bell className="h-3 w-3" />
                  Remind
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-3">Upcoming Classes</h4>
          <div className="space-y-2">
            {upcomingClasses.map((cls, index) => (
              <div key={index} className="flex justify-between items-center p-2 border rounded">
                <span className="text-sm">{cls.subject}</span>
                <div className="text-xs text-gray-500">
                  {cls.date} at {cls.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
