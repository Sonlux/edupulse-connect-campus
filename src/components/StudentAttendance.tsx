
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar } from '@/components/ui/calendar';
import { 
  Users, 
  Calendar as CalendarIcon, 
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';

const StudentAttendance = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  const attendanceData = [
    {
      subject: "Data Structures",
      code: "CS201",
      totalClasses: 45,
      attendedClasses: 42,
      percentage: 93,
      status: "excellent",
      recentAttendance: [
        { date: "2024-01-15", status: "present" },
        { date: "2024-01-12", status: "present" },
        { date: "2024-01-10", status: "absent" },
        { date: "2024-01-08", status: "present" },
        { date: "2024-01-05", status: "present" }
      ]
    },
    {
      subject: "Database Systems", 
      code: "CS202",
      totalClasses: 38,
      attendedClasses: 33,
      percentage: 87,
      status: "good",
      recentAttendance: [
        { date: "2024-01-14", status: "present" },
        { date: "2024-01-11", status: "present" },
        { date: "2024-01-09", status: "present" },
        { date: "2024-01-07", status: "absent" },
        { date: "2024-01-04", status: "present" }
      ]
    },
    {
      subject: "Web Development",
      code: "CS203", 
      totalClasses: 40,
      attendedClasses: 31,
      percentage: 78,
      status: "warning",
      recentAttendance: [
        { date: "2024-01-13", status: "absent" },
        { date: "2024-01-11", status: "present" },
        { date: "2024-01-09", status: "absent" },
        { date: "2024-01-06", status: "present" },
        { date: "2024-01-04", status: "present" }
      ]
    }
  ];

  const overallAttendance = 86;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'warning': return 'text-orange-600 bg-orange-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAttendanceIcon = (status: string) => {
    return status === 'present' ? 
      <CheckCircle className="h-4 w-4 text-green-600" /> : 
      <XCircle className="h-4 w-4 text-red-600" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Attendance</h1>
          <p className="text-gray-600">Track your class attendance</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Overall Attendance</p>
          <p className="text-3xl font-bold text-blue-600">{overallAttendance}%</p>
        </div>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Classes</p>
                <p className="text-2xl font-bold">123</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Classes Attended</p>
                <p className="text-2xl font-bold text-green-600">106</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Classes Missed</p>
                <p className="text-2xl font-bold text-red-600">17</p>
              </div>
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Week</p>
                <p className="text-2xl font-bold text-purple-600">8/10</p>
              </div>
              <CalendarIcon className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject-wise Attendance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Subject-wise Attendance</h2>
          {attendanceData.map((subject, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{subject.subject}</CardTitle>
                    <p className="text-sm text-gray-600">{subject.code}</p>
                  </div>
                  <Badge className={getStatusColor(subject.status)}>
                    {subject.percentage}%
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">
                        {subject.attendedClasses}/{subject.totalClasses} classes
                      </span>
                      <span className="text-sm font-medium">{subject.percentage}%</span>
                    </div>
                    <Progress value={subject.percentage} className="h-2" />
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Recent Attendance</h4>
                    <div className="space-y-1">
                      {subject.recentAttendance.map((attendance, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                          <span>{attendance.date}</span>
                          <div className="flex items-center gap-1">
                            {getAttendanceIcon(attendance.status)}
                            <span className={attendance.status === 'present' ? 'text-green-600' : 'text-red-600'}>
                              {attendance.status === 'present' ? 'Present' : 'Absent'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Calendar View */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Present days</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <XCircle className="h-4 w-4 text-red-600" />
                <span>Absent days</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-yellow-600" />
                <span>Late arrivals</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Warnings */}
      {attendanceData.some(subject => subject.percentage < 80) && (
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-800">
              <AlertTriangle className="h-5 w-5" />
              Attendance Warnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {attendanceData
                .filter(subject => subject.percentage < 80)
                .map((subject, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-orange-800">
                      {subject.subject}: {subject.percentage}% attendance
                    </span>
                    <Badge variant="outline" className="text-orange-600 border-orange-300">
                      Below 80%
                    </Badge>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StudentAttendance;
