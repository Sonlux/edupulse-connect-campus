
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  Download, 
  Filter,
  Calendar,
  Users,
  TrendingUp,
  FileText,
  PieChart,
  LineChart
} from 'lucide-react';

const ReportsManagement = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('current-semester');
  const [selectedClass, setSelectedClass] = useState('all');

  const classes = ['All Classes', 'CS201 - Data Structures', 'CS202 - Database Systems', 'CS203 - Web Development'];
  const periods = [
    { value: 'current-semester', label: 'Current Semester' },
    { value: 'last-month', label: 'Last Month' },
    { value: 'last-semester', label: 'Last Semester' },
    { value: 'academic-year', label: 'Academic Year' }
  ];

  const attendanceData = [
    { class: 'CS201', present: 42, total: 50, percentage: 84 },
    { class: 'CS202', present: 38, total: 45, percentage: 84.4 },
    { class: 'CS203', present: 32, total: 42, percentage: 76.2 }
  ];

  const gradeDistribution = [
    { grade: 'A+', count: 15, percentage: 25 },
    { grade: 'A', count: 18, percentage: 30 },
    { grade: 'B+', count: 12, percentage: 20 },
    { grade: 'B', count: 10, percentage: 16.7 },
    { grade: 'C', count: 3, percentage: 5 },
    { grade: 'F', count: 2, percentage: 3.3 }
  ];

  const performanceMetrics = {
    totalStudents: 137,
    averageAttendance: 84.8,
    averageGrade: 82.5,
    assignmentsCompleted: 78,
    classesHeld: 45,
    improvementRate: 12.3
  };

  const topPerformers = [
    { name: 'Alice Johnson', class: 'CS201', grade: 96, attendance: 98 },
    { name: 'Diana Wilson', class: 'CS202', grade: 94, attendance: 96 },
    { name: 'Bob Smith', class: 'CS201', grade: 92, attendance: 88 },
    { name: 'Emma Davis', class: 'CS203', grade: 89, attendance: 94 },
    { name: 'Frank Miller', class: 'CS202', grade: 87, attendance: 92 }
  ];

  const needsAttention = [
    { name: 'Eric Davis', class: 'CS203', grade: 65, attendance: 71, issue: 'Low attendance' },
    { name: 'Grace Kim', class: 'CS201', grade: 58, attendance: 68, issue: 'Poor performance' },
    { name: 'Henry Brown', class: 'CS202', grade: 62, attendance: 74, issue: 'Missing assignments' }
  ];

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return 'text-green-600 bg-green-100';
    if (grade >= 80) return 'text-blue-600 bg-blue-100';
    if (grade >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 bg-green-100';
    if (percentage >= 80) return 'text-blue-600 bg-blue-100';
    if (percentage >= 75) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Analyze student performance and class metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Filter Controls */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Time Period</label>
              <select 
                className="w-full mt-1 border rounded px-3 py-2"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                {periods.map(period => (
                  <option key={period.value} value={period.value}>{period.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700">Class</label>
              <select 
                className="w-full mt-1 border rounded px-3 py-2"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                {classes.map((cls, index) => (
                  <option key={index} value={cls.toLowerCase()}>{cls}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700">Report Type</label>
              <select className="w-full mt-1 border rounded px-3 py-2">
                <option>Comprehensive Report</option>
                <option>Attendance Report</option>
                <option>Grade Report</option>
                <option>Performance Report</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <p className="text-2xl font-bold">{performanceMetrics.totalStudents}</p>
              <p className="text-sm text-gray-600">Total Students</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <p className="text-2xl font-bold">{performanceMetrics.averageAttendance}%</p>
              <p className="text-sm text-gray-600">Avg Attendance</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <p className="text-2xl font-bold">{performanceMetrics.averageGrade}%</p>
              <p className="text-sm text-gray-600">Avg Grade</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <FileText className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <p className="text-2xl font-bold">{performanceMetrics.assignmentsCompleted}%</p>
              <p className="text-sm text-gray-600">Assignments</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
              <p className="text-2xl font-bold">{performanceMetrics.classesHeld}</p>
              <p className="text-sm text-gray-600">Classes Held</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
              <p className="text-2xl font-bold">+{performanceMetrics.improvementRate}%</p>
              <p className="text-sm text-gray-600">Improvement</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="grades">Grades</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="custom">Custom</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Performers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Top Performers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topPerformers.map((student, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-gray-600">{student.class}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={getGradeColor(student.grade)}>
                          {student.grade}%
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">{student.attendance}% attendance</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Students Needing Attention */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-red-600" />
                  Needs Attention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {needsAttention.map((student, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-gray-600">{student.class}</p>
                        <p className="text-xs text-red-600">{student.issue}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={getGradeColor(student.grade)}>
                          {student.grade}%
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">{student.attendance}% attendance</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Grade Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Grade Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {gradeDistribution.map((grade, index) => (
                  <div key={index} className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold mb-1">{grade.count}</div>
                    <div className="text-sm text-gray-600 mb-1">Grade {grade.grade}</div>
                    <div className="text-xs text-gray-500">{grade.percentage}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Attendance Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {attendanceData.map((classData, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{classData.class}</h3>
                      <p className="text-sm text-gray-600">{classData.present}/{classData.total} students present</p>
                    </div>
                    <Badge className={getAttendanceColor(classData.percentage)}>
                      {classData.percentage}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grades">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Grade Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">Detailed grade analytics and trends will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5" />
                Performance Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <LineChart className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">Performance trends and comparative analysis will be shown here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="custom">
          <Card>
            <CardHeader>
              <CardTitle>Custom Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">Custom report builder will be available here</p>
                <Button className="mt-4">
                  Create Custom Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReportsManagement;
