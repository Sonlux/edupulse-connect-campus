
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Users, QrCode, Upload, Download } from 'lucide-react';

const AttendanceManagement = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendance, setAttendance] = useState<Record<string, boolean>>({});

  const classes = [
    { id: 'cs-a', name: 'CS-A - Data Structures', time: '09:00 - 10:00', room: 'Lab 204' },
    { id: 'cs-b', name: 'CS-B - Database Systems', time: '11:30 - 12:30', room: 'Room 301' }
  ];

  const students = [
    { id: '1', name: 'John Doe', rollNo: 'CS21B1001', totalClasses: 45, attended: 42 },
    { id: '2', name: 'Jane Smith', rollNo: 'CS21B1002', totalClasses: 45, attended: 44 },
    { id: '3', name: 'Mike Johnson', rollNo: 'CS21B1003', totalClasses: 45, attended: 38 },
    { id: '4', name: 'Sarah Wilson', rollNo: 'CS21B1004', totalClasses: 45, attended: 43 },
    { id: '5', name: 'David Brown', rollNo: 'CS21B1005', totalClasses: 45, attended: 35 }
  ];

  const handleAttendanceChange = (studentId: string, present: boolean) => {
    setAttendance(prev => ({ ...prev, [studentId]: present }));
  };

  const handleMarkAllPresent = () => {
    const newAttendance: Record<string, boolean> = {};
    students.forEach(student => {
      newAttendance[student.id] = true;
    });
    setAttendance(newAttendance);
  };

  const handleMarkAllAbsent = () => {
    const newAttendance: Record<string, boolean> = {};
    students.forEach(student => {
      newAttendance[student.id] = false;
    });
    setAttendance(newAttendance);
  };

  const calculateAttendancePercentage = (attended: number, total: number) => {
    return ((attended / total) * 100).toFixed(1);
  };

  const getAttendanceStatus = (percentage: number) => {
    if (percentage >= 75) return { label: 'Good', variant: 'default' as const };
    if (percentage >= 65) return { label: 'Average', variant: 'secondary' as const };
    return { label: 'Low', variant: 'destructive' as const };
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Attendance Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Select Class</label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a class" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map(cls => (
                    <SelectItem key={cls.id} value={cls.id}>
                      {cls.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Date</label>
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="flex items-end gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <QrCode className="h-4 w-4" />
                QR Code
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Upload className="h-4 w-4" />
                Bulk Upload
              </Button>
            </div>
          </div>

          {selectedClass && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Take Attendance</h3>
                  <Badge variant="outline">
                    {classes.find(c => c.id === selectedClass)?.time}
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleMarkAllPresent}
                  >
                    Mark All Present
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleMarkAllAbsent}
                  >
                    Mark All Absent
                  </Button>
                  <Button size="sm" className="gap-1">
                    <Download className="h-4 w-4" />
                    Generate Report
                  </Button>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Roll No</TableHead>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Present</TableHead>
                    <TableHead>Total Attendance</TableHead>
                    <TableHead>Percentage</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map(student => {
                    const percentage = parseFloat(calculateAttendancePercentage(student.attended, student.totalClasses));
                    const status = getAttendanceStatus(percentage);
                    
                    return (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">{student.rollNo}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>
                          <Checkbox
                            checked={attendance[student.id] || false}
                            onCheckedChange={(checked) => 
                              handleAttendanceChange(student.id, checked as boolean)
                            }
                          />
                        </TableCell>
                        <TableCell>{student.attended}/{student.totalClasses}</TableCell>
                        <TableCell>{percentage}%</TableCell>
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
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendanceManagement;
