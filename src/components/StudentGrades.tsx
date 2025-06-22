
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  Award, 
  BarChart3, 
  FileText,
  Calendar,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const StudentGrades = () => {
  const [grades] = useState([
    {
      subject: "Data Structures",
      code: "CS201",
      semester: "Current",
      assignments: [
        { name: "Assignment 1", marks: 94, total: 100, weight: 20 },
        { name: "Quiz 1", marks: 88, total: 100, weight: 10 },
        { name: "Mid Term", marks: 92, total: 100, weight: 30 }
      ],
      finalGrade: "A+",
      gpa: 9.5,
      credits: 4
    },
    {
      subject: "Database Systems",
      code: "CS202", 
      semester: "Current",
      assignments: [
        { name: "Assignment 1", marks: 85, total: 100, weight: 25 },
        { name: "Project", marks: 90, total: 100, weight: 40 },
        { name: "Quiz 1", marks: 82, total: 100, weight: 15 }
      ],
      finalGrade: "A",
      gpa: 8.5,
      credits: 3
    },
    {
      subject: "Web Development",
      code: "CS203",
      semester: "Current", 
      assignments: [
        { name: "Portfolio", marks: 88, total: 100, weight: 50 },
        { name: "Quiz 1", marks: 78, total: 100, weight: 20 }
      ],
      finalGrade: "B+",
      gpa: 7.5,
      credits: 3
    }
  ]);

  const currentSemesterGPA = 8.5;
  const overallCGPA = 8.7;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Grades</h1>
          <p className="text-gray-600">Track your academic performance</p>
        </div>
        <Button className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download Transcript
        </Button>
      </div>

      {/* GPA Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Current Semester GPA</p>
                <p className="text-3xl font-bold text-blue-600">{currentSemesterGPA}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overall CGPA</p>
                <p className="text-3xl font-bold text-green-600">{overallCGPA}</p>
              </div>
              <Award className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Credits</p>
                <p className="text-3xl font-bold text-purple-600">10</p>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grades by Subject */}
      <Tabs defaultValue="current" className="space-y-4">
        <TabsList>
          <TabsTrigger value="current">Current Semester</TabsTrigger>
          <TabsTrigger value="previous">Previous Semesters</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          {grades.map((subject, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{subject.subject}</CardTitle>
                    <p className="text-sm text-gray-600">{subject.code} • {subject.credits} Credits</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={subject.finalGrade.includes('A') ? 'default' : 'secondary'} className="mb-2">
                      {subject.finalGrade}
                    </Badge>
                    <p className="text-sm text-gray-600">GPA: {subject.gpa}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {subject.assignments.map((assignment, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{assignment.name}</p>
                        <p className="text-sm text-gray-600">Weight: {assignment.weight}%</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{assignment.marks}/{assignment.total}</p>
                        <p className="text-sm text-gray-600">{((assignment.marks/assignment.total)*100).toFixed(1)}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="previous">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">Previous semester grades will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">Grade analytics and trends will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentGrades;
