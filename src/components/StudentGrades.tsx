
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  TrendingUp, 
  Award, 
  Target, 
  Download,
  BookOpen,
  BarChart3,
  Calendar
} from 'lucide-react';
import { GradeChart } from './GradeChart';

const StudentGrades = () => {
  const [selectedSemester, setSelectedSemester] = useState('current');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const gradeData = [
    {
      subject: 'Data Structures',
      code: 'CS201',
      credits: 4,
      assignments: [
        { name: 'Assignment 1', marks: 18, total: 20, weight: 10 },
        { name: 'Assignment 2', marks: 16, total: 20, weight: 10 },
        { name: 'Quiz 1', marks: 9, total: 10, weight: 5 },
        { name: 'Mid-term', marks: 38, total: 40, weight: 25 },
      ],
      currentGrade: 'A',
      percentage: 88.5,
      gpa: 9.0,
      status: 'excellent'
    },
    {
      subject: 'Database Systems',
      code: 'CS202',
      credits: 3,
      assignments: [
        { name: 'Assignment 1', marks: 17, total: 20, weight: 15 },
        { name: 'Lab Test 1', marks: 14, total: 15, weight: 10 },
        { name: 'Quiz 1', marks: 8, total: 10, weight: 5 },
        { name: 'Mid-term', marks: 35, total: 40, weight: 30 },
      ],
      currentGrade: 'A-',
      percentage: 85.2,
      gpa: 8.5,
      status: 'good'
    },
    {
      subject: 'Web Development',
      code: 'CS203',
      credits: 3,
      assignments: [
        { name: 'Project 1', marks: 22, total: 25, weight: 20 },
        { name: 'Assignment 1', marks: 15, total: 20, weight: 10 },
        { name: 'Quiz 1', marks: 7, total: 10, weight: 5 },
        { name: 'Mid-term', marks: 32, total: 40, weight: 25 },
      ],
      currentGrade: 'B+',
      percentage: 82.1,
      gpa: 7.5,
      status: 'good'
    },
    {
      subject: 'Machine Learning',
      code: 'CS204',
      credits: 4,
      assignments: [
        { name: 'Assignment 1', marks: 19, total: 20, weight: 15 },
        { name: 'Lab Work', marks: 28, total: 30, weight: 15 },
        { name: 'Quiz 1', marks: 9, total: 10, weight: 5 },
        { name: 'Mid-term', marks: 39, total: 40, weight: 25 },
      ],
      currentGrade: 'A+',
      percentage: 92.3,
      gpa: 9.5,
      status: 'excellent'
    }
  ];

  const overallGPA = (gradeData.reduce((acc, curr) => acc + (curr.gpa * curr.credits), 0) / 
                     gradeData.reduce((acc, curr) => acc + curr.credits, 0)).toFixed(2);

  const getGradeColor = (grade: string) => {
    if (grade.includes('A')) return 'text-green-600 bg-green-100';
    if (grade.includes('B')) return 'text-blue-600 bg-blue-100';
    if (grade.includes('C')) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const handleDownloadTranscript = () => {
    console.log('Downloading official transcript...');
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <div className="text-2xl font-bold text-yellow-600">{overallGPA}</div>
              <p className="text-sm text-gray-600">Current GPA</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <div className="text-2xl font-bold text-blue-600">{gradeData.length}</div>
              <p className="text-sm text-gray-600">Subjects</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <div className="text-2xl font-bold text-green-600">
                {gradeData.reduce((acc, curr) => acc + curr.credits, 0)}
              </div>
              <p className="text-sm text-gray-600">Credits</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Button onClick={handleDownloadTranscript} className="gap-2">
              <Download className="h-4 w-4" />
              Transcript
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <Select value={selectedSemester} onValueChange={setSelectedSemester}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select Semester" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="current">Current Semester</SelectItem>
            <SelectItem value="previous">Previous Semester</SelectItem>
            <SelectItem value="all">All Semesters</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedSubject} onValueChange={setSelectedSubject}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            {gradeData.map((subject) => (
              <SelectItem key={subject.code} value={subject.code}>
                {subject.subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="detailed">Detailed Grades</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Subject Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gradeData.map((subject, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{subject.subject}</CardTitle>
                      <p className="text-sm text-gray-600">{subject.code} • {subject.credits} Credits</p>
                    </div>
                    <Badge className={getGradeColor(subject.currentGrade)}>
                      {subject.currentGrade}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Current Progress</span>
                        <span>{subject.percentage}%</span>
                      </div>
                      <Progress value={subject.percentage} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Recent Assessments:</h4>
                      {subject.assignments.slice(-2).map((assignment, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span>{assignment.name}</span>
                          <span className="font-medium">
                            {assignment.marks}/{assignment.total}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center pt-2">
                      <span className="text-lg font-bold text-blue-600">GPA: {subject.gpa}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="detailed" className="space-y-6">
          {gradeData.map((subject, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{subject.subject} ({subject.code})</span>
                  <Badge className={getGradeColor(subject.currentGrade)}>
                    {subject.currentGrade}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Assessment</th>
                        <th className="text-center py-2">Marks</th>
                        <th className="text-center py-2">Total</th>
                        <th className="text-center py-2">Weight (%)</th>
                        <th className="text-center py-2">Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subject.assignments.map((assignment, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="py-2">{assignment.name}</td>
                          <td className="text-center py-2">{assignment.marks}</td>
                          <td className="text-center py-2">{assignment.total}</td>
                          <td className="text-center py-2">{assignment.weight}%</td>
                          <td className="text-center py-2">
                            {((assignment.marks / assignment.total) * 100).toFixed(1)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Overall Subject Performance:</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{subject.percentage}%</div>
                      <div className="text-sm text-gray-600">GPA: {subject.gpa}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <GradeChart />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Grade Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['A+', 'A', 'A-', 'B+', 'B'].map((grade) => {
                    const count = gradeData.filter(s => s.currentGrade === grade).length;
                    const percentage = (count / gradeData.length) * 100;
                    return (
                      <div key={grade} className="flex items-center justify-between">
                        <span className="font-medium">{grade}</span>
                        <div className="flex items-center gap-2 flex-1 mx-4">
                          <Progress value={percentage} className="h-2" />
                          <span className="text-sm text-gray-600 w-12">{count}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Performance Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">↑ 5.2%</div>
                    <p className="text-sm text-gray-600">Improvement from last semester</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Best Subject:</span>
                      <span className="font-medium">Machine Learning (92.3%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Target Subject:</span>
                      <span className="font-medium">Web Development (82.1%)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentGrades;
