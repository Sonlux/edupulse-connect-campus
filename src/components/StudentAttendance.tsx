
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { 
  Calendar as CalendarIcon, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  XCircle,
  Clock,
  Filter,
  Download
} from 'lucide-react';
import { AttendanceChart } from './AttendanceChart';

const StudentAttendance = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedSubject, setSelectedSubject] = useState('all');

  const attendanceData = [
    {
      subject: 'Data Structures',
      total: 45,
      present: 41,
      absent: 4,
      percentage: 91.1,
      status: 'excellent',
      lastClass: '2024-01-15',
      nextClass: '2024-01-17'
    },
    {
      subject: 'Database Systems',
      total: 38,
      present: 32,
      absent: 6,
      percentage: 84.2,
      status: 'good',
      lastClass: '2024-01-14',
      nextClass: '2024-01-16'
    },
    {
      subject: 'Web Development',
      total: 42,
      present: 33,
      absent: 9,
      percentage: 78.6,
      status: 'warning',
      lastClass: '2024-01-15',
      nextClass: '2024-01-18'
    },
    {
      subject: 'Machine Learning',
      total: 35,
      present: 33,
      absent: 2,
      percentage: 94.3,
      status: 'excellent',
      lastClass: '2024-01-16',
      nextClass: '2024-01-19'
    }
  ];

  const recentAttendance = [
    { date: '2024-01-16', subject: 'Machine Learning', status: 'present', time: '10:00 AM' },
    { date: '2024-01-15', subject: 'Data Structures', status: 'present', time: '2:00 PM' },
    { date: '2024-01-15', subject: 'Web Development', status: 'absent', time: '11:00 AM' },
    { date: '2024-01-14', subject: 'Database Systems', status: 'present', time: '9:00 AM' },
    { date: '2024-01-12', subject: 'Data Structures', status: 'late', time: '2:00 PM' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'good': return <TrendingUp className="h-4 w-4 text-blue-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      default: return <XCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getAttendanceIcon = (status: string) => {
    switch (status) {
      case 'present': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'absent': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'late': return <Clock className="h-4 w-4 text-orange-500" />;
      default: return <XCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const overallPercentage = Math.round(
    attendanceData.reduce((acc, curr) => acc + curr.percentage, 0) / attendanceData.length
  );

  const handleDownloadReport = () => {
    console.log('Downloading attendance report...');
    // Implementation for downloading report
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{overallPercentage}%</div>
              <p className="text-sm text-gray-600">Overall Attendance</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {attendanceData.reduce((acc, curr) => acc + curr.present, 0)}
              </div>
              <p className="text-sm text-gray-600">Classes Attended</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">
                {attendanceData.reduce((acc, curr) => acc + curr.absent, 0)}
              </div>
              <p className="text-sm text-gray-600">Classes Missed</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Button onClick={handleDownloadReport} className="gap-2">
              <Download className="h-4 w-4" />
              Download Report
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="detailed">Detailed View</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Subject-wise Attendance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Subject-wise Attendance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {attendanceData.map((subject, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-gray-900">{subject.subject}</h3>
                        <p className="text-sm text-gray-600">
                          {subject.present}/{subject.total} classes attended
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">{subject.percentage}%</span>
                        {getStatusIcon(subject.status)}
                      </div>
                    </div>
                    <Progress value={subject.percentage} className="h-2" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Last class: {subject.lastClass}</span>
                      <span>Next class: {subject.nextClass}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Attendance Chart */}
          <AttendanceChart />
        </TabsContent>

        <TabsContent value="detailed" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAttendance.map((record, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {getAttendanceIcon(record.status)}
                      <div>
                        <p className="font-medium">{record.subject}</p>
                        <p className="text-sm text-gray-600">{record.date} • {record.time}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={record.status === 'present' ? 'default' : 
                              record.status === 'late' ? 'secondary' : 'destructive'}
                    >
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
                <CardTitle>Attendance for {selectedDate?.toDateString()}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Data Structures</p>
                        <p className="text-sm text-gray-600">2:00 PM - 3:30 PM</p>
                      </div>
                      <Badge variant="default">Present</Badge>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Database Systems</p>
                        <p className="text-sm text-gray-600">10:00 AM - 11:30 AM</p>
                      </div>
                      <Badge variant="destructive">Absent</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentAttendance;
