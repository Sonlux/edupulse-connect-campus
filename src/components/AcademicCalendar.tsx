
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Plus, Edit, Trash2, Clock, MapPin } from 'lucide-react';

const AcademicCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const events = [
    {
      id: 1,
      title: 'Fall Semester Begins',
      date: '2024-08-15',
      type: 'semester',
      description: 'First day of Fall 2024 semester',
      time: '08:00 AM',
      location: 'Campus Wide'
    },
    {
      id: 2,
      title: 'Midterm Examinations',
      date: '2024-10-15',
      type: 'exam',
      description: 'Midterm exams for all courses',
      time: '09:00 AM',
      location: 'Exam Hall'
    },
    {
      id: 3,
      title: 'Thanksgiving Break',
      date: '2024-11-25',
      type: 'holiday',
      description: 'University closed for Thanksgiving',
      time: 'All Day',
      location: 'Campus Wide'
    },
    {
      id: 4,
      title: 'Final Examinations',
      date: '2024-12-10',
      type: 'exam',
      description: 'Final exams for Fall semester',
      time: '09:00 AM',
      location: 'Exam Hall'
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'semester': return 'bg-blue-500';
      case 'exam': return 'bg-red-500';
      case 'holiday': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getEventTypeBadge = (type: string) => {
    switch (type) {
      case 'semester': return 'default';
      case 'exam': return 'destructive';
      case 'holiday': return 'secondary';
      default: return 'outline';
    }
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Academic Calendar</h1>
          <p className="text-gray-600">Manage academic events, holidays, and important dates</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Event
        </Button>
      </div>

      {/* Calendar Controls */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Month:</label>
              <select 
                value={selectedMonth} 
                onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                className="border rounded px-3 py-1"
              >
                {months.map((month, index) => (
                  <option key={index} value={index}>{month}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Year:</label>
              <select 
                value={selectedYear} 
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                className="border rounded px-3 py-1"
              >
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
              </select>
            </div>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Today
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Event Types Legend */}
      <Card>
        <CardHeader>
          <CardTitle>Event Types</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-sm">Semester Events</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-sm">Examinations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm">Holidays</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Events List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className={`w-4 h-4 ${getEventTypeColor(event.type)} rounded`}></div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{event.title}</h3>
                      <Badge variant={getEventTypeBadge(event.type) as any}>
                        {event.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{event.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Add Events */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button variant="outline" className="h-20 flex-col gap-2">
          <Calendar className="h-6 w-6" />
          <span>Add Semester Event</span>
        </Button>
        <Button variant="outline" className="h-20 flex-col gap-2">
          <Clock className="h-6 w-6" />
          <span>Schedule Exam</span>
        </Button>
        <Button variant="outline" className="h-20 flex-col gap-2">
          <MapPin className="h-6 w-6" />
          <span>Add Holiday</span>
        </Button>
      </div>
    </div>
  );
};

export default AcademicCalendar;
