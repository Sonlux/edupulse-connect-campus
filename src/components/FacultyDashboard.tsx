
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Bell,
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react';

const FacultyDashboard = () => {
  const facultyData = {
    name: "Dr. Sarah Smith",
    facultyId: "FAC001",
    department: "Computer Science",
    totalClasses: 5,
    todayClasses: 3,
    pendingMarks: 12,
    totalStudents: 150
  };

  const todayClasses = [
    { time: "09:00 - 10:00", subject: "Data Structures", section: "CS-A", room: "Lab 204", students: 30 },
    { time: "11:30 - 12:30", subject: "Database Systems", section: "CS-B", room: "Room 301", students: 32 },
    { time: "14:00 - 15:00", subject: "Web Development", section: "CS-A", room: "Lab 105", students: 30 }
  ];

  const recentActivities = [
    { type: 'marks', title: 'Marks uploaded for Database Quiz 2', time: '2 hours ago', status: 'completed' },
    { type: 'attendance', title: 'Attendance taken for Data Structures', time: '4 hours ago', status: 'completed' },
    { type: 'announcement', title: 'Posted announcement about assignment deadline', time: '1 day ago', status: 'completed' },
    { type: 'pending', title: 'Pending: Upload marks for Web Dev Assignment', time: '2 days ago', status: 'pending' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {facultyData.name}</h1>
              <p className="text-gray-600">{facultyData.facultyId} • {facultyData.department} Department</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Bell className="h-4 w-4" />
                Notifications
                <Badge variant="destructive" className="ml-1">2</Badge>
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Total Classes</p>
                  <p className="text-3xl font-bold">{facultyData.totalClasses}</p>
                </div>
                <Users className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Today's Classes</p>
                  <p className="text-3xl font-bold">{facultyData.todayClasses}</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Pending Marks</p>
                  <p className="text-3xl font-bold">{facultyData.pendingMarks}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Total Students</p>
                  <p className="text-3xl font-bold">{facultyData.totalStudents}</p>
                </div>
                <Users className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                Today's Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayClasses.map((classItem, index) => (
                  <div key={index} className="p-4 rounded-lg border-l-4 border-l-purple-500 bg-purple-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{classItem.subject}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {classItem.time}
                          </span>
                          <span>{classItem.section}</span>
                          <span>{classItem.room}</span>
                          <span>{classItem.students} students</span>
                        </div>
                      </div>
                      <Button size="sm" className="gap-1">
                        <CheckCircle className="h-4 w-4" />
                        Take Attendance
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`p-2 rounded-full ${
                      activity.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                    }`}>
                      {activity.status === 'completed' ? 
                        <CheckCircle className="h-4 w-4" /> : 
                        <AlertTriangle className="h-4 w-4" />
                      }
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm">{activity.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                    <Badge variant={activity.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
