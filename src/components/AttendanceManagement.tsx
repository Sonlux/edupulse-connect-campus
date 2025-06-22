
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  CheckCircle, 
  XCircle, 
  Clock,
  Save,
  Download,
  Upload,
  Calendar as CalendarIcon
} from 'lucide-react';

const AttendanceManagement = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedClass, setSelectedClass] = useState('CS201');

  const classes = [
    { code: 'CS201', name: 'Data Structures', schedule: 'Mon, Wed, Fri 9:00 AM', students: 50 },
    { code: 'CS202', name: 'Database Systems', schedule: 'Tue, Thu 11:00 AM', students: 45 },
    { code: 'CS203', name: 'Web Development', schedule: 'Mon, Wed 2:00 PM', students: 42 }
  ];

  const [students, setStudents] = useState([
    {
      id: 'CS21B1001',
      name: 'Alice Johnson',
      rollNo: '001',
      attendance: {
        '2024-01-15': 'present',
        '2024-01-12': 'present', 
        '2024-01-10': 'absent',
        '2024-01-08': 'present',
        '2024-01-05': 'late'
      },
      totalClasses: 45,
      attendedClasses: 41,
      percentage: 91
    },
    {
      id: 'CS21B1002',
      name: 'Bob Smith', 
      rollNo: '002',
      attendance: {
        '2024-01-15': 'present',
        '2024-01-12': 'absent',
        '2024-01-10': 'present',
        '2024-01-08': 'present',
        '2024-01-05': 'present'
      },
      totalClasses: 45,
      attendedClasses: 38,
      percentage: 84
    },
    {
      id: 'CS21B1003',
      name: 'Charlie Brown',
      rollNo: '003', 
      attendance: {
        '2024-01-15': 'absent',
        '2024-01-12': 'present',
        '2024-01-10': 'present',
        '2024-01-08': 'absent',
        '2024-01-05': 'present'
      },
      totalClasses: 45,
      attendedClasses: 35,
      percentage: 78
    },
    {
      id: 'CS21B1004',
      name: 'Diana Wilson',
      rollNo: '004',
      attendance: {
        '2024-01-15': 'present',
        '2024-01-12': 'present',
        '2024-01-10': 'present', 
        '2024-01-08': 'present',
        '2024-01-05': 'present'
      },
      totalClasses: 45,
      attendedClasses: 43,
      percentage: 96
    },
    {
      id: 'CS21B1005',
      name: 'Eric Davis',
      rollNo: '005',
      attendance: {
        '2024-01-15': 'late',
        '2024-01-12': 'present',
        '2024-01-10': 'absent',
        '2024-01-08': 'present',
        '2024-01-05': 'absent'
      },
      totalClasses: 45,
      attendedClasses: 32,
      percentage: 71
    }
  ]);

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const handleAttendanceChange = (studentId: string, status: 'present' | 'absent' | 'late') => {
    const dateKey = formatDate(selectedDate || new Date());
    setStudents(prev => prev.map(student => {
      if (student.id === studentId) {
        const newAttendance = { ...student.attendance, [dateKey]: status };
        // Recalculate percentage based on new attendance
        const attendanceValues = Object.values(newAttendance);
        const presentCount = attendanceValues.filter(a => a === 'present' || a === 'late').length;
        const percentage = Math.round((presentCount / attendanceValues.length) * 100);
        
        return {
          ...student,
          attendance: newAttendance,
          attendedClasses: presentCount,
          percentage
        };
      }
      return student;
    }));
  };

  const handleSaveAttendance = () => {
    console.log('Saving attendance for:', selectedClass, formatDate(selectedDate || new Date()));
    console.log('Attendance data:', students.map(s => ({
      id: s.id,
      status: s.attendance[formatDate(selectedDate || new Date())]
    })));
  };

  const getAttendanceIcon = (status: string) => {
    switch (status) {
      case 'present': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'absent': return <XCircle className="h-5 w-5 text-red-600" />;
      case 'late': return <Clock className="h-5 w-5 text-yellow-600" />;
      default: return <div className="h-5 w-5 border rounded border-gray-300" />;
    }
  };

  const getStatusColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 bg-green-100';
    if (percentage >= 80) return 'text-blue-600 bg-blue-100';
    if (percentage >= 75) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const currentDateAttendance = students.map(student => ({
    ...student,
    currentStatus: student.attendance[formatDate(selectedDate || new Date())] || 'not_marked'
  }));

  const presentCount = currentDateAttendance.filter(s => s.currentStatus === 'present').length;
  const absentCount = currentDateAttendance.filter(s => s.currentStatus === 'absent').length;
  const lateCount = currentDateAttendance.filter(s => s.currentStatus === 'late').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Attendance Management</h1>
          <p className="text-gray-600">Mark and track student attendance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="mark" className="space-y-4">
        <TabsList>
          <TabsTrigger value="mark">Mark Attendance</TabsTrigger>
          <TabsTrigger value="reports">Attendance Reports</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="mark" className="space-y-4">
          {/* Class Selection and Date */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Select Class</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {classes.map((cls) => (
                    <button
                      key={cls.code}
                      onClick={() => setSelectedClass(cls.code)}
                      className={`w-full p-3 text-left border rounded-lg transition-colors ${
                        selectedClass === cls.code 
                          ? 'bg-blue-50 border-blue-300' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-medium">{cls.code} - {cls.name}</div>
                      <div className="text-sm text-gray-500">{cls.schedule}</div>
                      <div className="text-sm text-gray-500">{cls.students} students</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
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
          </div>

          {/* Attendance Stats for Selected Date */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Students</p>
                    <p className="text-2xl font-bold">{students.length}</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Present</p>
                    <p className="text-2xl font-bold text-green-600">{presentCount}</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Absent</p>
                    <p className="text-2xl font-bold text-red-600">{absentCount}</p>
                  </div>
                  <XCircle className="h-8 w-8 text-red-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Late</p>
                    <p className="text-2xl font-bold text-yellow-600">{lateCount}</p>
                  </div>
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Attendance Marking */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>
                  Mark Attendance - {selectedDate?.toLocaleDateString()}
                </CardTitle>
                <Button onClick={handleSaveAttendance} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Attendance
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Roll No</th>
                        <th className="text-left p-2">Student Name</th>
                        <th className="text-center p-2">Present</th>
                        <th className="text-center p-2">Absent</th>
                        <th className="text-center p-2">Late</th>
                        <th className="text-center p-2">Overall %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentDateAttendance.map((student) => (
                        <tr key={student.id} className="border-b hover:bg-gray-50">
                          <td className="p-2 font-medium">{student.rollNo}</td>
                          <td className="p-2">{student.name}</td>
                          <td className="p-2 text-center">
                            <button
                              onClick={() => handleAttendanceChange(student.id, 'present')}
                              className={`p-2 rounded-full ${
                                student.currentStatus === 'present'
                                  ? 'bg-green-100 text-green-600'
                                  : 'hover:bg-green-50'
                              }`}
                            >
                              <CheckCircle className="h-5 w-5" />
                            </button>
                          </td>
                          <td className="p-2 text-center">
                            <button
                              onClick={() => handleAttendanceChange(student.id, 'absent')}
                              className={`p-2 rounded-full ${
                                student.currentStatus === 'absent'
                                  ? 'bg-red-100 text-red-600'
                                  : 'hover:bg-red-50'
                              }`}
                            >
                              <XCircle className="h-5 w-5" />
                            </button>
                          </td>
                          <td className="p-2 text-center">
                            <button
                              onClick={() => handleAttendanceChange(student.id, 'late')}
                              className={`p-2 rounded-full ${
                                student.currentStatus === 'late'
                                  ? 'bg-yellow-100 text-yellow-600'
                                  : 'hover:bg-yellow-50'
                              }`}
                            >
                              <Clock className="h-5 w-5" />
                            </button>
                          </td>
                          <td className="p-2 text-center">
                            <Badge className={getStatusColor(student.percentage)}>
                              {student.percentage}%
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                Attendance Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {students.map((student) => (
                  <div key={student.id} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{student.name}</h3>
                      <p className="text-sm text-gray-600">Roll No: {student.rollNo}</p>
                      <p className="text-sm text-gray-600">
                        {student.attendedClasses}/{student.totalClasses} classes attended
                      </p>
                    </div>
                    <Badge className={getStatusColor(student.percentage)}>
                      {student.percentage}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <CalendarIcon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">Attendance analytics and charts will be implemented here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AttendanceManagement;
