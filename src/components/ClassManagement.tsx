
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, BookOpen, Calendar, Clock, Plus, Edit, Eye } from 'lucide-react';

const ClassManagement = () => {
  const [selectedClass, setSelectedClass] = useState('');

  const classes = [
    {
      id: 'cs-a-ds',
      name: 'CS-A Data Structures',
      subject: 'Data Structures',
      section: 'CS-A',
      semester: '3rd Semester',
      students: 30,
      schedule: [
        { day: 'Monday', time: '09:00 - 10:00', room: 'Room 201', type: 'Lecture' },
        { day: 'Tuesday', time: '10:00 - 11:00', room: 'Lab 204', type: 'Practical' },
        { day: 'Friday', time: '09:00 - 10:00', room: 'Room 201', type: 'Lecture' }
      ],
      totalClasses: 45,
      completedClasses: 38
    },
    {
      id: 'cs-b-db',
      name: 'CS-B Database Systems',
      subject: 'Database Systems',
      section: 'CS-B',
      semester: '4th Semester',
      students: 32,
      schedule: [
        { day: 'Monday', time: '10:00 - 11:00', room: 'Lab 301', type: 'Practical' },
        { day: 'Tuesday', time: '11:30 - 12:30', room: 'Room 301', type: 'Lecture' },
        { day: 'Thursday', time: '09:00 - 10:00', room: 'Room 301', type: 'Lecture' }
      ],
      totalClasses: 42,
      completedClasses: 35
    }
  ];

  const students = [
    { id: '1', name: 'John Doe', rollNo: 'CS21B1001', attendance: 42, totalClasses: 45, percentage: 93.3 },
    { id: '2', name: 'Jane Smith', rollNo: 'CS21B1002', attendance: 44, totalClasses: 45, percentage: 97.8 },
    { id: '3', name: 'Mike Johnson', rollNo: 'CS21B1003', attendance: 38, totalClasses: 45, percentage: 84.4 },
    { id: '4', name: 'Sarah Wilson', rollNo: 'CS21B1004', attendance: 43, totalClasses: 45, percentage: 95.6 },
    { id: '5', name: 'David Brown', rollNo: 'CS21B1005', attendance: 35, totalClasses: 45, percentage: 77.8 }
  ];

  const getAttendanceStatus = (percentage: number) => {
    if (percentage >= 90) return { label: 'Excellent', variant: 'default' as const };
    if (percentage >= 75) return { label: 'Good', variant: 'secondary' as const };
    if (percentage >= 65) return { label: 'Average', variant: 'outline' as const };
    return { label: 'Poor', variant: 'destructive' as const };
  };

  const selectedClassData = classes.find(c => c.id === selectedClass);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Class Management</h1>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add New Class
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Classes</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classes.length}</div>
            <p className="text-xs text-muted-foreground">
              Active classes this semester
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {classes.reduce((sum, cls) => sum + cls.students, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all classes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Classes Today</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              Scheduled for today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Attendance</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.2%</div>
            <p className="text-xs text-muted-foreground">
              Overall class average
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Classes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {classes.map(cls => (
              <Card key={cls.id} className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{cls.name}</h3>
                        <Badge variant="outline">{cls.semester}</Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {cls.students} students
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          {cls.completedClasses}/{cls.totalClasses} classes
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {cls.schedule.length} sessions/week
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          Progress: {Math.round((cls.completedClasses / cls.totalClasses) * 100)}%
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-1"
                        onClick={() => setSelectedClass(selectedClass === cls.id ? '' : cls.id)}
                      >
                        <Eye className="h-3 w-3" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Edit className="h-3 w-3" />
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedClassData && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Class Schedule - {selectedClassData.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {selectedClassData.schedule.map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{session.day}</div>
                      <div className="text-sm text-muted-foreground">{session.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{session.room}</div>
                      <Badge variant={session.type === 'Lecture' ? 'default' : 'secondary'} className="text-xs">
                        {session.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Student List - {selectedClassData.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Roll No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.slice(0, 5).map(student => {
                    const status = getAttendanceStatus(student.percentage);
                    return (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">{student.rollNo}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.percentage.toFixed(1)}%</TableCell>
                        <TableCell>
                          <Badge variant={status.variant}>
                            {status.label}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ClassManagement;
