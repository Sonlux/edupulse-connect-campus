
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, Download, BarChart3, TrendingUp, Users, Calendar } from 'lucide-react';

const ReportsManagement = () => {
  const [selectedReport, setSelectedReport] = useState('attendance');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('current-month');

  const reportTypes = [
    { value: 'attendance', label: 'Attendance Report', icon: Users },
    { value: 'performance', label: 'Performance Report', icon: TrendingUp },
    { value: 'class-summary', label: 'Class Summary', icon: BarChart3 },
    { value: 'student-progress', label: 'Student Progress', icon: FileText }
  ];

  const attendanceData = [
    { rollNo: 'CS21B1001', name: 'John Doe', totalClasses: 45, attended: 42, percentage: 93.3, status: 'Good' },
    { rollNo: 'CS21B1002', name: 'Jane Smith', totalClasses: 45, attended: 44, percentage: 97.8, status: 'Excellent' },
    { rollNo: 'CS21B1003', name: 'Mike Johnson', totalClasses: 45, attended: 38, percentage: 84.4, status: 'Good' },
    { rollNo: 'CS21B1004', name: 'Sarah Wilson', totalClasses: 45, attended: 43, percentage: 95.6, status: 'Excellent' },
    { rollNo: 'CS21B1005', name: 'David Brown', totalClasses: 45, attended: 35, percentage: 77.8, status: 'Average' }
  ];

  const performanceData = [
    { rollNo: 'CS21B1001', name: 'John Doe', avgMarks: 85.4, grade: 'A', gpa: 8.5, rank: 3 },
    { rollNo: 'CS21B1002', name: 'Jane Smith', avgMarks: 92.1, grade: 'A+', gpa: 9.2, rank: 1 },
    { rollNo: 'CS21B1003', name: 'Mike Johnson', avgMarks: 78.9, grade: 'B+', gpa: 7.9, rank: 8 },
    { rollNo: 'CS21B1004', name: 'Sarah Wilson', avgMarks: 88.7, grade: 'A', gpa: 8.9, rank: 2 },
    { rollNo: 'CS21B1005', name: 'David Brown', avgMarks: 76.2, grade: 'B+', gpa: 7.6, rank: 12 }
  ];

  const classSummary = [
    { subject: 'Data Structures', totalStudents: 30, avgAttendance: 87.5, avgMarks: 82.3, passRate: 96.7 },
    { subject: 'Database Systems', totalStudents: 32, avgAttendance: 85.2, avgMarks: 79.8, passRate: 93.8 },
    { subject: 'Web Development', totalStudents: 28, avgAttendance: 82.1, avgMarks: 77.5, passRate: 89.3 },
    { subject: 'Computer Networks', totalStudents: 30, avgAttendance: 79.8, avgMarks: 75.2, passRate: 86.7 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Excellent': return 'default';
      case 'Good': return 'secondary';
      case 'Average': return 'outline';
      case 'Poor': return 'destructive';
      default: return 'outline';
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': return 'default';
      case 'A': return 'secondary';
      case 'B+': return 'outline';
      default: return 'destructive';
    }
  };

  const renderReportContent = () => {
    switch (selectedReport) {
      case 'attendance':
        return (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Roll No</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Total Classes</TableHead>
                <TableHead>Attended</TableHead>
                <TableHead>Percentage</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceData.map((student, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{student.rollNo}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.totalClasses}</TableCell>
                  <TableCell>{student.attended}</TableCell>
                  <TableCell className="font-medium">{student.percentage}%</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(student.status) as any}>
                      {student.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        );

      case 'performance':
        return (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Roll No</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Avg Marks</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>GPA</TableHead>
                <TableHead>Class Rank</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {performanceData.map((student, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{student.rollNo}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.avgMarks}</TableCell>
                  <TableCell>
                    <Badge variant={getGradeColor(student.grade) as any}>
                      {student.grade}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{student.gpa}</TableCell>
                  <TableCell>{student.rank}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        );

      case 'class-summary':
        return (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Total Students</TableHead>
                <TableHead>Avg Attendance</TableHead>
                <TableHead>Avg Marks</TableHead>
                <TableHead>Pass Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {classSummary.map((cls, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{cls.subject}</TableCell>
                  <TableCell>{cls.totalStudents}</TableCell>
                  <TableCell>{cls.avgAttendance}%</TableCell>
                  <TableCell>{cls.avgMarks}</TableCell>
                  <TableCell className="font-medium">{cls.passRate}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        );

      default:
        return (
          <div className="text-center py-8 text-muted-foreground">
            Select a report type to view data
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export PDF
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Excel
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {reportTypes.map((report) => {
          const IconComponent = report.icon;
          return (
            <Card 
              key={report.value}
              className={`cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${
                selectedReport === report.value ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedReport(report.value)}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{report.label}</CardTitle>
                <IconComponent className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Click to generate report
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Report Filters</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Class/Section</label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Classes</SelectItem>
                  <SelectItem value="cs-a">CS-A</SelectItem>
                  <SelectItem value="cs-b">CS-B</SelectItem>
                  <SelectItem value="cs-c">CS-C</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Time Period</label>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger>
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current-month">Current Month</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="current-semester">Current Semester</SelectItem>
                  <SelectItem value="last-semester">Last Semester</SelectItem>
                  <SelectItem value="academic-year">Academic Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full gap-2">
                <BarChart3 className="h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {reportTypes.find(r => r.value === selectedReport)?.label || 'Report Data'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderReportContent()}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">87.5%</div>
              <p className="text-sm text-muted-foreground">Avg Attendance</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">82.3</div>
              <p className="text-sm text-muted-foreground">Avg Marks</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">92.1%</div>
              <p className="text-sm text-muted-foreground">Pass Rate</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-orange-600">120</div>
              <p className="text-sm text-muted-foreground">Total Students</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsManagement;
