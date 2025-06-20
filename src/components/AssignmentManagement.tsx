
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Upload, 
  Download, 
  Calendar, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  Eye,
  Edit,
  Trash2,
  Plus
} from 'lucide-react';

const AssignmentManagement = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const assignments = {
    pending: [
      {
        id: 1,
        title: 'Binary Search Tree Implementation',
        subject: 'Data Structures',
        dueDate: '2024-01-25',
        timeRemaining: '3 days',
        description: 'Implement a complete BST with insertion, deletion, and traversal methods',
        points: 100,
        status: 'pending',
        submissions: 0,
        totalStudents: 30
      },
      {
        id: 2,
        title: 'Database Normalization Project',
        subject: 'Database Systems',
        dueDate: '2024-01-28',
        timeRemaining: '6 days',
        description: 'Design and normalize a database schema for an e-commerce platform',
        points: 150,
        status: 'pending',
        submissions: 0,
        totalStudents: 32
      }
    ],
    submitted: [
      {
        id: 3,
        title: 'React Component Development',
        subject: 'Web Development',
        submittedDate: '2024-01-18',
        grade: 'A+',
        points: 95,
        totalPoints: 100,
        feedback: 'Excellent work! Clean code and good component structure.',
        status: 'graded'
      },
      {
        id: 4,
        title: 'Network Protocol Analysis',
        subject: 'Computer Networks',
        submittedDate: '2024-01-15',
        grade: 'B+',
        points: 82,
        totalPoints: 100,
        feedback: 'Good analysis but could improve on the TCP section.',
        status: 'graded'
      }
    ],
    overdue: [
      {
        id: 5,
        title: 'Algorithm Complexity Analysis',
        subject: 'Data Structures',
        dueDate: '2024-01-10',
        daysOverdue: 12,
        points: 75,
        status: 'overdue',
        penaltyApplied: true
      }
    ]
  };

  const handleCreateAssignment = () => {
    console.log('Creating new assignment');
    setShowCreateForm(false);
  };

  const handleSubmitAssignment = (assignmentId: number) => {
    console.log('Submitting assignment:', assignmentId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'secondary';
      case 'submitted': return 'default';
      case 'graded': return 'default';
      case 'overdue': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Assignment Management</h1>
        <Button onClick={() => setShowCreateForm(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Create Assignment
        </Button>
      </div>

      {/* Create Assignment Form */}
      {showCreateForm && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle>Create New Assignment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input placeholder="Assignment Title" />
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>Select Subject</option>
                <option>Data Structures</option>
                <option>Database Systems</option>
                <option>Web Development</option>
              </select>
              <Input type="date" />
              <Input type="number" placeholder="Total Points" />
            </div>
            <Textarea placeholder="Assignment Description" className="mb-4" />
            <div className="flex gap-2">
              <Button onClick={handleCreateAssignment}>Create Assignment</Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">
            Pending ({assignments.pending.length})
          </TabsTrigger>
          <TabsTrigger value="submitted">
            Submitted ({assignments.submitted.length})
          </TabsTrigger>
          <TabsTrigger value="overdue">
            Overdue ({assignments.overdue.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {assignments.pending.map((assignment) => (
            <Card key={assignment.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{assignment.title}</h3>
                      <Badge variant="outline">{assignment.subject}</Badge>
                      <Badge variant={getStatusColor(assignment.status)}>
                        {assignment.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{assignment.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        Due: {assignment.dueDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-orange-500" />
                        {assignment.timeRemaining} left
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4 text-blue-500" />
                        {assignment.points} points
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {assignment.submissions}/{assignment.totalStudents} submitted
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Submission Progress</span>
                        <span>{Math.round((assignment.submissions / assignment.totalStudents) * 100)}%</span>
                      </div>
                      <Progress value={(assignment.submissions / assignment.totalStudents) * 100} />
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      onClick={() => handleSubmitAssignment(assignment.id)}
                      className="gap-1"
                    >
                      <Upload className="h-4 w-4" />
                      Submit
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Eye className="h-4 w-4" />
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="submitted" className="space-y-4">
          {assignments.submitted.map((assignment) => (
            <Card key={assignment.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{assignment.title}</h3>
                      <Badge variant="outline">{assignment.subject}</Badge>
                      <Badge variant={getStatusColor(assignment.status)}>
                        {assignment.status}
                      </Badge>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        {assignment.grade}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        Submitted: {assignment.submittedDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4 text-blue-500" />
                        Score: {assignment.points}/{assignment.totalPoints}
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Grade: {assignment.grade}
                      </div>
                    </div>
                    {assignment.feedback && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Instructor Feedback:</h4>
                        <p className="text-sm text-gray-700">{assignment.feedback}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Eye className="h-4 w-4" />
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="overdue" className="space-y-4">
          {assignments.overdue.map((assignment) => (
            <Card key={assignment.id} className="border-red-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{assignment.title}</h3>
                      <Badge variant="outline">{assignment.subject}</Badge>
                      <Badge variant="destructive">
                        {assignment.daysOverdue} days overdue
                      </Badge>
                      {assignment.penaltyApplied && (
                        <Badge variant="outline" className="text-red-600">
                          Penalty Applied
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                        Due Date: {assignment.dueDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4 text-blue-500" />
                        {assignment.points} points (reduced due to late submission)
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      variant="destructive"
                      onClick={() => handleSubmitAssignment(assignment.id)}
                      className="gap-1"
                    >
                      <Upload className="h-4 w-4" />
                      Submit Late
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AssignmentManagement;
