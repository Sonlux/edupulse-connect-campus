
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  User, 
  Bell,
  Download,
  Plus,
  Filter
} from 'lucide-react';

const StudentSchedule = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [viewMode, setViewMode] = useState('week');

  const scheduleData = {
    Monday: [
      { time: '9:00 AM', subject: 'Database Systems', code: 'CS202', room: 'Room 101', faculty: 'Dr. Smith', type: 'lecture' },
      { time: '11:00 AM', subject: 'Web Development', code: 'CS203', room: 'Lab 201', faculty: 'Prof. Johnson', type: 'lab' },
      { time: '2:00 PM', subject: 'Data Structures', code: 'CS201', room: 'Room 105', faculty: 'Dr. Wilson', type: 'lecture' }
    ],
    Tuesday: [
      { time: '10:00 AM', subject: 'Machine Learning', code: 'CS204', room: 'Room 103', faculty: 'Dr. Brown', type: 'lecture' },
      { time: '1:00 PM', subject: 'Database Systems Lab', code: 'CS202L', room: 'Lab 101', faculty: 'Dr. Smith', type: 'lab' },
      { time: '3:00 PM', subject: 'Seminar', code: 'CS299', room: 'Hall A', faculty: 'Various', type: 'seminar' }
    ],
    Wednesday: [
      { time: '9:00 AM', subject: 'Data Structures', code: 'CS201', room: 'Room 105', faculty: 'Dr. Wilson', type: 'lecture' },
      { time: '11:00 AM', subject: 'Machine Learning Lab', code: 'CS204L', room: 'Lab 301', faculty: 'Dr. Brown', type: 'lab' },
      { time: '2:00 PM', subject: 'Web Development', code: 'CS203', room: 'Room 201', faculty: 'Prof. Johnson', type: 'lecture' }
    ],
    Thursday: [
      { time: '10:00 AM', subject: 'Database Systems', code: 'CS202', room: 'Room 101', faculty: 'Dr. Smith', type: 'lecture' },
      { time: '1:00 PM', subject: 'Data Structures Lab', code: 'CS201L', room: 'Lab 401', faculty: 'Dr. Wilson', type: 'lab' },
      { time: '4:00 PM', subject: 'Project Review', code: 'CS299', room: 'Room 501', faculty: 'All Faculty', type: 'review' }
    ],
    Friday: [
      { time: '9:00 AM', subject: 'Machine Learning', code: 'CS204', room: 'Room 103', faculty: 'Dr. Brown', type: 'lecture' },
      { time: '11:00 AM', subject: 'Web Development Lab', code: 'CS203L', room: 'Lab 201', faculty: 'Prof. Johnson', type: 'lab' }
    ],
    Saturday: [],
    Sunday: []
  };

  const upcomingEvents = [
    { date: '2024-01-18', time: '2:00 PM', event: 'Data Structures Assignment Due', type: 'assignment' },
    { date: '2024-01-20', time: '10:00 AM', event: 'Database Systems Quiz', type: 'quiz' },
    { date: '2024-01-22', time: '9:00 AM', event: 'Machine Learning Project Presentation', type: 'presentation' },
    { date: '2024-01-25', time: '11:00 AM', event: 'Mid-term Exams Begin', type: 'exam' }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'lecture': return 'bg-blue-100 text-blue-800';
      case 'lab': return 'bg-green-100 text-green-800';
      case 'seminar': return 'bg-purple-100 text-purple-800';
      case 'review': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'assignment': return 'bg-blue-100 text-blue-800';
      case 'quiz': return 'bg-yellow-100 text-yellow-800';
      case 'exam': return 'bg-red-100 text-red-800';
      case 'presentation': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const todaysSchedule = scheduleData[new Date().toLocaleDateString('en-US', { weekday: 'long' })] || [];

  const handleAddToCalendar = (event: any) => {
    console.log('Adding to calendar:', event);
  };

  const handleDownloadSchedule = () => {
    console.log('Downloading schedule...');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Class Schedule</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleDownloadSchedule}>
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      {/* Today's Classes Quick View */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Today's Classes
          </CardTitle>
        </CardHeader>
        <CardContent>
          {todaysSchedule.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {todaysSchedule.map((class_, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-sm font-medium text-gray-900">{class_.time}</div>
                    <Badge className={getTypeColor(class_.type)}>
                      {class_.type}
                    </Badge>
                  </div>
                  <h3 className="font-medium text-lg">{class_.subject}</h3>
                  <p className="text-sm text-gray-600">{class_.code}</p>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="h-3 w-3" />
                      {class_.room}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <User className="h-3 w-3" />
                      {class_.faculty}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <CalendarIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>No classes scheduled for today</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Tabs defaultValue="weekly" className="space-y-4">
        <TabsList>
          <TabsTrigger value="weekly">Weekly View</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
            {Object.entries(scheduleData).map(([day, classes]) => (
              <Card key={day}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-center">{day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {classes.length > 0 ? (
                      classes.map((class_, index) => (
                        <div key={index} className="p-3 border rounded-lg text-sm">
                          <div className="font-medium text-xs text-gray-600 mb-1">{class_.time}</div>
                          <div className="font-medium">{class_.subject}</div>
                          <div className="text-xs text-gray-600">{class_.room}</div>
                          <Badge className={`${getTypeColor(class_.type)} text-xs mt-1`}>
                            {class_.type}
                          </Badge>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4 text-gray-400 text-sm">No classes</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Select Date
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Schedule for {selectedDate?.toDateString()}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {selectedDate && scheduleData[selectedDate.toLocaleDateString('en-US', { weekday: 'long' })]?.map((class_, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-sm font-medium">{class_.time}</div>
                        <Badge className={getTypeColor(class_.type)}>
                          {class_.type}
                        </Badge>
                      </div>
                      <h3 className="font-medium">{class_.subject}</h3>
                      <p className="text-sm text-gray-600">{class_.code}</p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <MapPin className="h-3 w-3" />
                          {class_.room}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <User className="h-3 w-3" />
                          {class_.faculty}
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-2"
                        onClick={() => handleAddToCalendar(class_)}
                      >
                        <Bell className="h-3 w-3 mr-1" />
                        Set Reminder
                      </Button>
                    </div>
                  )) || (
                    <div className="text-center py-8 text-gray-500">
                      <CalendarIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>No classes scheduled for this date</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Upcoming Events & Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{event.event}</h3>
                      <p className="text-sm text-gray-600">{event.date} • {event.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getEventTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleAddToCalendar(event)}
                      >
                        <Bell className="h-3 w-3 mr-1" />
                        Remind
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentSchedule;
