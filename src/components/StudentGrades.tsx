
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, Award, BookOpen, Target } from 'lucide-react';

const StudentGrades = () => {
  const [selectedSemester, setSelectedSemester] = useState('current');

  const gradeData = [
    { subject: 'Data Structures', internal: 85, external: 78, total: 81.5, grade: 'A', credits: 4, gpa: 8.0 },
    { subject: 'Database Systems', internal: 92, external: 85, total: 88.5, grade: 'A+', credits: 4, gpa: 9.0 },
    { subject: 'Web Development', internal: 75, external: 72, total: 73.5, grade: 'B+', credits: 3, gpa: 7.5 },
    { subject: 'Computer Networks', internal: 88, external: 82, total: 85.0, grade: 'A', credits: 4, gpa: 8.0 },
    { subject: 'Software Engineering', internal: 90, external: 87, total: 88.5, grade: 'A+', credits: 3, gpa: 9.0 }
  ];

  const semesterGPA = [
    { semester: 'Semester 1', gpa: 7.8, credits: 20 },
    { semester: 'Semester 2', gpa: 8.2, credits: 22 },
    { semester: 'Semester 3', gpa: 8.5, credits: 24 },
    { semester: 'Semester 4', gpa: 8.3, credits: 18 }
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': return 'default';
      case 'A': return 'secondary';
      case 'B+': return 'outline';
      case 'B': return 'destructive';
      default: return 'outline';
    }
  };

  const calculateSGPA = () => {
    const totalGradePoints = gradeData.reduce((sum, subject) => sum + (subject.gpa * subject.credits), 0);
    const totalCredits = gradeData.reduce((sum, subject) => sum + subject.credits, 0);
    return (totalGradePoints / totalCredits).toFixed(2);
  };

  const calculateCGPA = () => {
    const totalGradePoints = semesterGPA.reduce((sum, sem) => sum + (sem.gpa * sem.credits), 0);
    const totalCredits = semesterGPA.reduce((sum, sem) => sum + sem.credits, 0);
    return (totalGradePoints / totalCredits).toFixed(2);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Academic Performance</h1>
        <Select value={selectedSemester} onValueChange={setSelectedSemester}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select semester" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="current">Current Semester</SelectItem>
            <SelectItem value="sem4">Semester 4</SelectItem>
            <SelectItem value="sem3">Semester 3</SelectItem>
            <SelectItem value="sem2">Semester 2</SelectItem>
            <SelectItem value="sem1">Semester 1</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current SGPA</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{calculateSGPA()}</div>
            <p className="text-xs text-muted-foreground">
              Semester Grade Point Average
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cumulative CGPA</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{calculateCGPA()}</div>
            <p className="text-xs text-muted-foreground">
              Overall Grade Point Average
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credits Earned</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">84</div>
            <p className="text-xs text-muted-foreground">
              Total credits completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Class Rank</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Out of 120 students
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Semester Grades</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Internal</TableHead>
                <TableHead>External</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Credits</TableHead>
                <TableHead>Grade Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gradeData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.subject}</TableCell>
                  <TableCell>{item.internal}</TableCell>
                  <TableCell>{item.external}</TableCell>
                  <TableCell className="font-medium">{item.total}</TableCell>
                  <TableCell>
                    <Badge variant={getGradeColor(item.grade) as any}>
                      {item.grade}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.credits}</TableCell>
                  <TableCell className="font-medium">{item.gpa}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Semester-wise Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {semesterGPA.map((sem, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{sem.semester}</h3>
                  <p className="text-sm text-muted-foreground">{sem.credits} Credits</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{sem.gpa}</div>
                  <p className="text-xs text-muted-foreground">GPA</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentGrades;
