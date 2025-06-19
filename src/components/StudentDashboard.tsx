
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Calendar, 
  TrendingUp, 
  Users, 
  Bell, 
  Clock,
  Target,
  Award,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { AttendanceChart } from './AttendanceChart';
import { GradeChart } from './GradeChart';
import { ClassSchedule } from './ClassSchedule';
import { RecentActivity } from './RecentActivity';

const StudentDashboard = () => {
  const studentData = {
    name: "Alex Johnson",
    id: "CS21B1045",
    semester: "6th Semester",
    cgpa: 8.7,
    currentAttendance: 87,
    totalClasses: 142,
    attendedClasses: 124
  };

  const attendanceData = [
    { subject: "Data Structures", percentage: 92, status: "excellent" },
    { subject: "Database Systems", percentage: 85, status: "good" },
    { subject: "Web Development", percentage: 78, status: "warning" },
    { subject: "Machine Learning", percentage: 94, status: "excellent" },
    { subject: "Software Engineering", percentage: 82, status: "good" }
  ];

  const recentGrades = [
    { subject: "Data Structures", grade: "A+", marks: 94, total: 100 },
    { subject: "Database Systems", grade: "A", marks: 88, total: 100 },
    { subject: "Web Development", grade: "B+", marks: 82, total: 100 },
    { subject: "Machine Learning", grade: "A+", marks: 96, total: 100 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {studentData.name}</h1>
              <p className="text-gray-600">{studentData.id} • {studentData.semester}</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Bell className="h-4 w-4" />
                Notifications
                <Badge variant="destructive" className="ml-1">3</Badge>
              </Button>
              <div className="text-right">
                <p className="text-sm text-gray-500">Current CGPA</p>
                <p className="text-2xl font-bold text-green-600">{studentData.cgpa}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Overall Attendance</p>
                  <p className="text-3xl font-bold">{studentData.currentAttendance}%</p>
                </div>
                <Users className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Classes Attended</p>
                  <p className="text-3xl font-bold">{studentData.attendedClasses}/{studentData.totalClasses}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Current CGPA</p>
                  <p className="text-3xl font-bold">{studentData.cgpa}</p>
                </div>
                <Award className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Upcoming Tests</p>
                  <p className="text-3xl font-bold">2</p>
                </div>
                <Target className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Attendance Overview */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Subject-wise Attendance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {attendanceData.map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{subject.subject}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">{subject.percentage}%</span>
                        {subject.status === 'excellent' && <CheckCircle className="h-4 w-4 text-green-500" />}
                        {subject.status === 'warning' && <AlertTriangle className="h-4 w-4 text-orange-500" />}
                      </div>
                    </div>
                    <Progress 
                      value={subject.percentage} 
                      className={`h-2 ${
                        subject.percentage >= 90 ? 'bg-green-100' : 
                        subject.percentage >= 80 ? 'bg-blue-100' : 'bg-orange-100'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Grades */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Recent Grades
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentGrades.map((grade, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{grade.subject}</p>
                      <p className="text-xs text-gray-600">{grade.marks}/{grade.total}</p>
                    </div>
                    <Badge 
                      variant={grade.grade.includes('A') ? 'default' : 'secondary'}
                      className={grade.grade.includes('A') ? 'bg-green-100 text-green-800' : ''}
                    >
                      {grade.grade}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AttendanceChart />
          <GradeChart />
        </div>

        <div className="mt-6">
          <ClassSchedule />
        </div>

        <div className="mt-6">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
