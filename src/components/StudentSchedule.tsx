
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Download, Bell } from 'lucide-react';

const StudentSchedule = () => {
  const [selectedDay, setSelectedDay] = useState('monday');

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const schedule = {
    monday: [
      { time: '09:00 - 10:00', subject: 'Data Structures', type: 'Lecture', room: 'Room 201', faculty: 'Dr. Sarah Smith' },
      { time: '10:00 - 11:00', subject: 'Database Systems', type: 'Practical', room: 'Lab 301', faculty: 'Prof. John Doe' },
      { time: '11:30 - 12:30', subject: 'Web Development', type: 'Lecture', room: 'Room 102', faculty: 'Dr. Mike Wilson' },
      { time: '14:00 - 15:00', subject: 'Computer Networks', type: 'Lecture', room: 'Room 205', faculty: 'Dr. Emily Davis' }
    ],
    tuesday: [
      { time: '09:00 - 10:00', subject: 'Software Engineering', type: 'Lecture', room: 'Room 203', faculty: 'Dr. James Brown' },
      { time: '10:00 - 11:00', subject: 'Data Structures', type: 'Practical', room: 'Lab 204', faculty: 'Dr. Sarah Smith' },
      { time: '11:30 - 12:30', subject: 'Database Systems', type: 'Lecture', room: 'Room 301', faculty: 'Prof. John Doe' },
      { time: '14:00 - 15:00', subject: 'Web Development', type: 'Practical', room: 'Lab 102', faculty: 'Dr. Mike Wilson' }
    ],
    wednesday: [
      { time: '09:00 - 10:00', subject: 'Computer Networks', type: 'Practical', room: 'Lab 205', faculty: 'Dr. Emily Davis' },
      { time: '10:00 - 11:00', subject: 'Software Engineering', type: 'Lecture', room: 'Room 203', faculty: 'Dr. James Brown' },
      { time: '11:30 - 12:30', subject: 'Data Structures', type: 'Lecture', room: 'Room 201', faculty: 'Dr. Sarah Smith' }
    ],
    thursday: [
      { time: '09:00 - 10:00', subject: 'Database Systems', type: 'Lecture', room: 'Room 301', faculty: 'Prof. John Doe' },
      { time: '10:00 - 11:00', subject: 'Web Development', type: 'Lecture', room: 'Room 102', faculty: 'Dr. Mike Wilson' },
      { time: '11:30 - 12:30', subject: 'Computer Networks', type: 'Lecture', room: 'Room 205', faculty: 'Dr. Emily Davis' },
      { time: '14:00 - 15:00', subject: 'Software Engineering', type: 'Practical', room: 'Lab 203', faculty: 'Dr. James Brown' }
    ],
    friday: [
      { time: '09:00 - 10:00', subject: 'Data Structures', type: 'Lecture', room: 'Room 201', faculty: 'Dr. Sarah Smith' },
      { time: '10:00 - 11:00', subject: 'Database Systems', type: 'Practical', room: 'Lab 301', faculty: 'Prof. John Doe' },
      { time: '11:30 - 12:30', subject: 'Web Development', type: 'Practical', room: 'Lab 102', faculty: 'Dr. Mike Wilson' }
    ],
    saturday: [
      { time: '09:00 - 10:00', subject: 'Computer Networks', type: 'Lecture', room: 'Room 205', faculty: 'Dr. Emily Davis' },
      { time: '10:00 - 11:00', subject: 'Software Engineering', type: 'Lecture', room: 'Room 203', faculty: 'Dr. James Brown' }
    ]
  };

  const upcomingClasses = [
    { time: '09:00 AM', subject: 'Data Structures', room: 'Room 201', type: 'Lecture', isNext: true },
    { time: '10:00 AM', subject: 'Database Systems', room: 'Lab 301', type: 'Practical', isNext: false },
    { time: '11:30 AM', subject: 'Web Development', room: 'Room 102', type: 'Lecture', isNext: false }
  ];

  const getTypeColor = (type: string) => {
    return type === 'Lecture' ? 'default' : 'secondary';
  };

  const getCurrentDay = () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[new Date().getDay()];
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Class Schedule</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Bell className="h-4 w-4" />
            Set Reminders
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Schedule
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Today's Classes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingClasses.map((cls, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between p-4 border rounded-lg ${
                  cls.isNext ? 'border-blue-500 bg-blue-50 dark:bg-blue-950' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="font-bold text-lg">{cls.time}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{cls.subject}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {cls.room}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={getTypeColor(cls.type) as any}>
                    {cls.type}
                  </Badge>
                  {cls.isNext && (
                    <Badge variant="default" className="bg-green-600">
                      Next Class
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Weekly Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {weekDays.map((day) => (
              <Button
                key={day}
                variant={selectedDay === day.toLowerCase() ? 'default' : 'outline'}
                onClick={() => setSelectedDay(day.toLowerCase())}
                className="min-w-fit"
              >
                {day}
              </Button>
            ))}
          </div>

          <div className="space-y-3">
            {schedule[selectedDay as keyof typeof schedule]?.map((cls, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex items-center gap-4">
                  <div className="text-center min-w-[80px]">
                    <div className="font-medium">{cls.time}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{cls.subject}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {cls.room}
                      </div>
                      <span>•</span>
                      <span>{cls.faculty}</span>
                    </div>
                  </div>
                </div>
                <Badge variant={getTypeColor(cls.type) as any}>
                  {cls.type}
                </Badge>
              </div>
            )) || (
              <div className="text-center py-8 text-muted-foreground">
                No classes scheduled for {selectedDay}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentSchedule;
