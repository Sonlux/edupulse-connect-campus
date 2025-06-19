
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Save, Lock, Edit } from 'lucide-react';

const MarkEntry = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedExam, setSelectedExam] = useState('');
  const [marks, setMarks] = useState<Record<string, string>>({});
  const [isLocked, setIsLocked] = useState(false);

  const classes = [
    { id: 'cs-a', name: 'CS-A (Data Structures)', students: 30 },
    { id: 'cs-b', name: 'CS-B (Database Systems)', students: 32 }
  ];

  const examTypes = [
    { id: 'internal1', name: 'Internal Exam 1', maxMarks: 50 },
    { id: 'internal2', name: 'Internal Exam 2', maxMarks: 50 },
    { id: 'assignment1', name: 'Assignment 1', maxMarks: 25 },
    { id: 'external', name: 'External Exam', maxMarks: 100 }
  ];

  const students = [
    { id: '1', name: 'John Doe', rollNo: 'CS21B1001' },
    { id: '2', name: 'Jane Smith', rollNo: 'CS21B1002' },
    { id: '3', name: 'Mike Johnson', rollNo: 'CS21B1003' },
    { id: '4', name: 'Sarah Wilson', rollNo: 'CS21B1004' },
    { id: '5', name: 'David Brown', rollNo: 'CS21B1005' }
  ];

  const handleMarkChange = (studentId: string, mark: string) => {
    setMarks(prev => ({ ...prev, [studentId]: mark }));
  };

  const calculateGrade = (mark: number, maxMarks: number) => {
    const percentage = (mark / maxMarks) * 100;
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C';
    return 'F';
  };

  const handleSaveMarks = () => {
    console.log('Saving marks:', marks);
    // Add save logic here
  };

  const selectedExamData = examTypes.find(exam => exam.id === selectedExam);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Edit className="h-5 w-5" />
            Mark Entry System
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <Label htmlFor="class-select">Select Class</Label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a class" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map(cls => (
                    <SelectItem key={cls.id} value={cls.id}>
                      {cls.name} ({cls.students} students)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="exam-select">Select Exam/Assessment</Label>
              <Select value={selectedExam} onValueChange={setSelectedExam}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose exam type" />
                </SelectTrigger>
                <SelectContent>
                  {examTypes.map(exam => (
                    <SelectItem key={exam.id} value={exam.id}>
                      {exam.name} (Max: {exam.maxMarks})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {selectedClass && selectedExam && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Enter Marks</h3>
                  <Badge variant={isLocked ? 'destructive' : 'default'}>
                    {isLocked ? 'Locked' : 'Editable'}
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setIsLocked(!isLocked)}
                    className="gap-1"
                  >
                    <Lock className="h-4 w-4" />
                    {isLocked ? 'Unlock' : 'Lock'} Entry
                  </Button>
                  <Button 
                    onClick={handleSaveMarks} 
                    disabled={isLocked}
                    className="gap-1"
                  >
                    <Save className="h-4 w-4" />
                    Save All Marks
                  </Button>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Roll No</TableHead>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Marks (/{selectedExamData?.maxMarks})</TableHead>
                    <TableHead>Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map(student => {
                    const mark = parseInt(marks[student.id] || '0');
                    const grade = mark > 0 ? calculateGrade(mark, selectedExamData?.maxMarks || 100) : '-';
                    
                    return (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">{student.rollNo}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            min="0"
                            max={selectedExamData?.maxMarks}
                            value={marks[student.id] || ''}
                            onChange={(e) => handleMarkChange(student.id, e.target.value)}
                            disabled={isLocked}
                            className="w-20"
                            placeholder="0"
                          />
                        </TableCell>
                        <TableCell>
                          <Badge variant={grade === 'F' ? 'destructive' : grade.includes('A') ? 'default' : 'secondary'}>
                            {grade}
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

export default MarkEntry;
