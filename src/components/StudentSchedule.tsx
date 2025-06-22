
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User,
  BookOpen,
  Bell
} from 'lucide-react';

const StudentSchedule = () => {
  const [selectedDay, setSelectedDay] = useState('monday');

  const weeklySchedule = {
    monday: [
      {
        time: "09:00 - 10:30",
        subject: "Data Structures",
        code: "CS201",
        instructor: "Dr. Smith",
        room: "Lab 101",
        type: "lecture"
      },
      {
        time: "11:00 - 12:30", 
        subject: "Database Systems",
        code: "CS202",
        instructor: "Prof. Johnson",
        room: "Room 205",
        type: "lecture"
      },
      {
        time: "14:00 - 15:30",
        subject: "Web Development",
        code: "CS203",
        instructor: "Dr. Wilson",
        room: "Lab 102",
        type: "practical"
      }
    ],
    tuesday: [
      {
        time: "10:00 - 11:30",
        subject: "Machine Learning",
        code: "CS204",
        instructor: "Dr. Brown",
        room: "Room 301",
        type: "lecture"
      },
      {
        time: "13:00 - 14:30",
        subject: "Data Structures",
        code: "CS201",
        instructor: "Dr. Smith", 
        room: "Lab 101",
        type: "practical"
      }
    ],
    wednesday: [
      {
        time: "09:00 - 10:30",
        subject: "Database Systems",
        code: "CS202",
        instructor: "Prof. Johnson",
        room: "Lab 103",
        type: "practical"
      },
      {
        time: "11:00 - 12:30",
        subject: "Software Engineering",
        code: "CS205",
        instructor: "Dr. Davis",
        room: "Room 401",
        type: "lecture"
      }
    ],
    thursday: [
      {
        time: "10:00 - 11:30",
        subject: "Web Development",
        code: "CS203",
        instructor: "Dr. Wilson",
        room: "Room 205",
        type: "lecture"
      },
      {
        time: "14:00 - 15:30",
        subject: "Machine Learning",
        code: "CS204",
        instructor: "Dr. Brown",
        room: "Lab 104",
        type: "practical"
      }
    ],
    friday: [
      {
        time: "09:00 - 10:30",
        subject: "Software Engineering",
        code: "CS205",
        instructor: "Dr. Davis",
        room: "Lab 105",
        type: "practical"
      },
      {
        time: "11:00 - 12:30",
        subject: "Seminar",
        code: "CS299",
        instructor: "Various",
        room: "Auditorium",
        type: "seminar"
      }
    ]
  };

  const upcomingEvents = [
    {
      title: "Data Structures Mid-term",
      date: "2024-01-20",
      time: "10:00 AM",
      type: "exam",
      room: "Exam Hall A"
    },
    {
      title: "Project Presentation",
      date: "2024-01-22",
      time: "2:00 PM", 
      type: "presentation",
      room: "Room 301"
    },
    {
      title: "Guest Lecture: AI Ethics",
      date: "2024-01-25",
      time: "11:00 AM",
      type: "lecture",
      room: "Auditorium"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'lecture': return 'bg-blue-100 text-blue-800';
      case 'practical': return 'bg-green-100 text-green-800';
      case 'seminar': return 'bg-purple-100 text-purple-800';
      case 'exam': return 'bg-red-100 text-red-800';
      case 'presentation': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const days = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Schedule</h1>
          <p className="text-gray-600">View your weekly class schedule and upcoming events</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Bell className="h-3 w-3" />
            Notifications On
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="weekly" className="space-y-4">
        <TabsList>
          <TabsTrigger value="weekly">Weekly Schedule</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-4">
          {/* Day Selector */}
          <div className="flex gap-2 overflow-x-auto">
            {days.map((day) => (
              <button
                key={day.key}
                onClick={() => setSelectedDay(day.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedDay === day.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>

          {/* Schedule for Selected Day */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold capitalize">{selectedDay} Schedule</h2>
            
            {weeklySchedule[selectedDay as keyof typeof weeklySchedule]?.length > 0 ? (
              <div className="space-y-3">
                {weeklySchedule[selectedDay as keyof typeof weeklySchedule].map((class_, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg">{class_.subject}</h3>
                            <Badge className={getTypeColor(class_.type)}>
                              {class_.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{class_.code}</p>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {class_.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {class_.instructor}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {class_.room}
                            </div>
                          </div>
                        </div>
                        
                        <BookOpen className="h-6 w-6 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600">No classes scheduled for {selectedDay}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.room}
                        </div>
                      </div>
                    </div>
                    <Badge className={getTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">Calendar view will be implemented here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentSchedule;
