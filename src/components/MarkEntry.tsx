
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Save, 
  Upload, 
  Download, 
  Search,
  Filter,
  CheckCircle,
  AlertTriangle,
  FileText
} from 'lucide-react';

const MarkEntry = () => {
  const [selectedClass, setSelectedClass] = useState('CS201');
  const [selectedAssignment, setSelectedAssignment] = useState('assignment1');

  const classes = [
    { code: 'CS201', name: 'Data Structures', students: 50 },
    { code: 'CS202', name: 'Database Systems', students: 45 },
    { code: 'CS203', name: 'Web Development', students: 42 }
  ];

  const assignments = [
    { id: 'assignment1', name: 'Assignment 1', maxMarks: 100, type: 'assignment' },
    { id: 'quiz1', name: 'Quiz 1', maxMarks: 50, type: 'quiz' },
    { id: 'midterm', name: 'Mid Term Exam', maxMarks: 100, type: 'exam' },
    { id: 'project', name: 'Final Project', maxMarks: 150, type: 'project' }
  ];

  const [students, setStudents] = useState([
    {
      id: 'CS21B1001',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      marks: { assignment1: 85, quiz1: 45, midterm: 78, project: null },
      submitted: { assignment1: true, quiz1: true, midterm: true, project: false }
    },
    {
      id: 'CS21B1002', 
      name: 'Bob Smith',
      email: 'bob@example.com',
      marks: { assignment1: 92, quiz1: 48, midterm: 89, project: null },
      submitted: { assignment1: true, quiz1: true, midterm: true, project: false }
    },
    {
      id: 'CS21B1003',
      name: 'Charlie Brown',
      email: 'charlie@example.com', 
      marks: { assignment1: 78, quiz1: 42, midterm: 85, project: null },
      submitted: { assignment1: true, quiz1: true, midterm: true, project: false }
    },
    {
      id: 'CS21B1004',
      name: 'Diana Wilson',
      email: 'diana@example.com',
      marks: { assignment1: null, quiz1: 47, midterm: 92, project: null },
      submitted: { assignment1: false, quiz1: true, midterm: true, project: false }
    },
    {
      id: 'CS21B1005',
      name: 'Eric Davis',
      email: 'eric@example.com',
      marks: { assignment1: 88, quiz1: null, midterm: 76, project: null },
      submitted: { assignment1: true, quiz1: false, midterm: true, project: false }
    }
  ]);

  const handleMarkChange = (studentId: string, value: string) => {
    const numValue = value === '' ? null : parseFloat(value);
    const maxMarks = assignments.find(a => a.id === selectedAssignment)?.maxMarks || 100;
    
    if (numValue !== null && (numValue < 0 || numValue > maxMarks)) {
      return; // Don't allow invalid marks
    }

    setStudents(prev => prev.map(student => 
      student.id === studentId 
        ? { 
            ...student, 
            marks: { ...student.marks, [selectedAssignment]: numValue }
          }
        : student
    ));
  };

  const handleSaveMarks = () => {
    console.log('Saving marks for:', selectedClass, selectedAssignment);
    console.log('Student marks:', students.map(s => ({ id: s.id, mark: s.marks[selectedAssignment as keyof typeof s.marks] })));
  };

  const handleBulkImport = () => {
    console.log('Opening bulk import dialog');
  };

  const handleExportMarks = () => {
    console.log('Exporting marks for:', selectedClass, selectedAssignment);
  };

  const getSelectedAssignment = () => assignments.find(a => a.id === selectedAssignment);
  const submittedCount = students.filter(s => s.submitted[selectedAssignment as keyof typeof s.submitted]).length;
  const gradedCount = students.filter(s => s.marks[selectedAssignment as keyof typeof s.marks] !== null).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Mark Entry</h1>
          <p className="text-gray-600">Enter and manage student grades</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleBulkImport}>
            <Upload className="h-4 w-4 mr-2" />
            Bulk Import
          </Button>
          <Button variant="outline" onClick={handleExportMarks}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Class and Assignment Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Select Class</CardTitle>
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
                  <div className="text-sm text-gray-500">{cls.students} students</div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Select Assignment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {assignments.map((assignment) => (
                <button
                  key={assignment.id}
                  onClick={() => setSelectedAssignment(assignment.id)}
                  className={`w-full p-3 text-left border rounded-lg transition-colors ${
                    selectedAssignment === assignment.id 
                      ? 'bg-green-50 border-green-300' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{assignment.name}</div>
                      <div className="text-sm text-gray-500">Max: {assignment.maxMarks} marks</div>
                    </div>
                    <Badge variant="outline">{assignment.type}</Badge>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-bold">{students.length}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Submitted</p>
                <p className="text-2xl font-bold text-green-600">{submittedCount}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Graded</p>
                <p className="text-2xl font-bold text-purple-600">{gradedCount}</p>
              </div>
              <Save className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-orange-600">{students.length - gradedCount}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mark Entry Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>
              Mark Entry - {getSelectedAssignment()?.name} (Max: {getSelectedAssignment()?.maxMarks})
            </CardTitle>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                <Input placeholder="Search students..." className="pl-9 w-64" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Student ID</th>
                    <th className="text-left p-2">Name</th>
                    <th className="text-center p-2">Submitted</th>
                    <th className="text-center p-2">Marks</th>
                    <th className="text-center p-2">Percentage</th>
                    <th className="text-center p-2">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => {
                    const currentMark = student.marks[selectedAssignment as keyof typeof student.marks];
                    const maxMarks = getSelectedAssignment()?.maxMarks || 100;
                    const percentage = currentMark ? Math.round((currentMark / maxMarks) * 100) : null;
                    const isSubmitted = student.submitted[selectedAssignment as keyof typeof student.submitted];
                    
                    return (
                      <tr key={student.id} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{student.id}</td>
                        <td className="p-2">{student.name}</td>
                        <td className="p-2 text-center">
                          {isSubmitted ? (
                            <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <AlertTriangle className="h-5 w-5 text-orange-600 mx-auto" />
                          )}
                        </td>
                        <td className="p-2 text-center">
                          <Input
                            type="number"
                            min="0"
                            max={maxMarks}
                            value={currentMark || ''}
                            onChange={(e) => handleMarkChange(student.id, e.target.value)}
                            className="w-20 text-center mx-auto"
                            placeholder="--"
                            disabled={!isSubmitted}
                          />
                        </td>
                        <td className="p-2 text-center">
                          {percentage ? `${percentage}%` : '--'}
                        </td>
                        <td className="p-2 text-center">
                          {percentage ? (
                            <Badge variant={
                              percentage >= 90 ? 'default' :
                              percentage >= 80 ? 'secondary' :
                              percentage >= 70 ? 'outline' : 'destructive'
                            }>
                              {percentage >= 90 ? 'A+' :
                               percentage >= 80 ? 'A' :
                               percentage >= 70 ? 'B+' :
                               percentage >= 60 ? 'B' : 'F'}
                            </Badge>
                          ) : '--'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center pt-4">
              <div className="text-sm text-gray-600">
                {gradedCount} of {students.length} students graded
              </div>
              <Button onClick={handleSaveMarks} className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                Save All Marks
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarkEntry;
