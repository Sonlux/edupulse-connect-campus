
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  BarChart3, 
  Download, 
  Users, 
  TrendingUp, 
  Calendar,
  FileText,
  Award,
  AlertTriangle
} from 'lucide-react';

const ReportsManagement = () => {
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('semester');

  const attendanceData = [
    { subject: 'Data Structures', average: 87, excellent: 15, good: 10, poor: 5 },
    { subject: 'Database Systems', average: 82, excellent: 12, good: 15, poor: 5 },
    { subject: 'Web Development', average: 78, excellent: 10, good: 12, poor: 10 },
    { subject: 'Computer Networks', average: 85, excellent: 18, good: 10, poor: 4 },
    { subject: 'Software Engineering', average: 90, excellent: 20, good: 8, poor: 4 }
  ];

  const gradeDistribution = [
    { grade: 'A+', count: 45, percentage: 28 },
    { grade: 'A', count: 38, percentage: 24 },
    { grade: 'B+', count: 32, percentage: 20 },
    { grade: 'B', count: 25, percentage: 16 },
    { grade: 'C+', count: 15, percentage: 9 },
    { grade: 'C', count: 5, percentage: 3 }
  ];

  const performanceTrend = [
    { month: 'Aug', attendance: 85, avgGrade: 7.8 },
    { month: 'Sep', attendance: 78, avgGrade: 8.1 },
    { month: 'Oct', attendance: 92, avgGrade: 8.5 },
    { month: 'Nov', attendance: 88, avgGrade: 8.3 },
    { month: 'Dec', attendance: 82, avgGrade: 8.0 },
    { month: 'Jan', attendance: 87, avgGrade: 8.4 }
  ];

  const classStatistics = [
    { className: 'CS-A', students: 30, avgAttendance: 87, avgGrade: 8.2, topPerformer: 'John Doe' },
    { className: 'CS-B', students: 32, avgAttendance: 82, avgGrade: 7.9, topPerformer: 'Jane Smith' },
    { className: 'CS-C', students: 28, avgAttendance: 90, avgGrade: 8.5, topPerformer: 'Mike Johnson' }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  const handleExportReport = (type: string) => {
    console.log(`Exporting ${type} report`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Academic Reports & Analytics</h1>
        <div className="flex gap-2">
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              <SelectItem value="cs-a">CS-A</SelectItem>
              <SelectItem value="cs-b">CS-B</SelectItem>
              <SelectItem value="cs-c">CS-C</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semester">This Semester</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">90</div>
            <p className="text-xs text-muted-foreground">
              Across all classes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">86.2%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.15</div>
            <p className="text-xs text-muted-foreground">
              CGPA scale
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">At-Risk Students</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">12</div>
            <p className="text-xs text-muted-foreground">
              Below 75% attendance
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="attendance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="attendance">Attendance Reports</TabsTrigger>
          <TabsTrigger value="grades">Grade Analysis</TabsTrigger>
          <TabsTrigger value="performance">Performance Trends</TabsTrigger>
          <TabsTrigger value="class-stats">Class Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="attendance" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Subject-wise Attendance Analysis</CardTitle>
                <Button onClick={() => handleExportReport('attendance')} variant="outline" className="gap-1">
                  <Download className="h-4 w-4" />
                  Export Report
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="average" fill="#3b82f6" name="Average %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {attendanceData.map((subject, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{subject.subject}</span>
                        <span>{subject.average}% avg</span>
                      </div>
                      <div className="flex gap-1 h-2">
                        <div 
                          className="bg-green-500 rounded" 
                          style={{ width: `${(subject.excellent / 30) * 100}%` }}
                        />
                        <div 
                          className="bg-blue-500 rounded" 
                          style={{ width: `${(subject.good / 30) * 100}%` }}
                        />
                        <div 
                          className="bg-red-500 rounded" 
                          style={{ width: `${(subject.poor / 30) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Excellent: {subject.excellent}</span>
                        <span>Good: {subject.good}</span>
                        <span>Poor: {subject.poor}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Attendance Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={performanceTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="attendance" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="grades" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Grade Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={gradeDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ grade, percentage }) => `${grade}: ${percentage}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {gradeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grade Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {gradeDistribution.map((grade, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span className="font-medium">Grade {grade.grade}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{grade.count} students</div>
                        <div className="text-sm text-gray-600">{grade.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Trends Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={performanceTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="attendance" stroke="#3b82f6" strokeWidth={2} name="Attendance %" />
                  <Line yAxisId="right" type="monotone" dataKey="avgGrade" stroke="#10b981" strokeWidth={2} name="Average Grade" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="class-stats" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Class-wise Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classStatistics.map((cls, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg">{cls.className}</h3>
                      <Badge variant="outline">{cls.students} students</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Avg Attendance</p>
                        <p className="font-bold text-lg">{cls.avgAttendance}%</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Avg Grade</p>
                        <p className="font-bold text-lg">{cls.avgGrade}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Top Performer</p>
                        <p className="font-medium">{cls.topPerformer}</p>
                      </div>
                      <div>
                        <Button size="sm" variant="outline" className="gap-1">
                          <FileText className="h-3 w-3" />
                          Detailed Report
                        </Button>
                      </div>
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

export default ReportsManagement;
