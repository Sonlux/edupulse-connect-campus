
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, Plus, Upload, Download, Calendar, Clock, CheckCircle } from 'lucide-react';

const AssignmentManagement = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState('');

  const assignments = [
    {
      id: '1',
      title: 'Database Design Project',
      subject: 'Database Systems',
      class: 'CS-B',
      dueDate: '2024-01-25T23:59:00Z',
      totalMarks: 50,
      submissions: 28,
      totalStudents: 32,
      status: 'active'
    },
    {
      id: '2',
      title: 'Data Structures Implementation',
      subject: 'Data Structures',
      class: 'CS-A',
      dueDate: '2024-01-30T23:59:00Z',
      totalMarks: 40,
      submissions: 15,
      totalStudents: 30,
      status: 'active'
    },
    {
      id: '3',
      title: 'Web Development Portfolio',
      subject: 'Web Development',
      class: 'CS-A',
      dueDate: '2024-01-20T23:59:00Z',
      totalMarks: 60,
      submissions: 30,
      totalStudents: 30,
      status: 'completed'
    }
  ];

  const submissions = [
    {
      id: '1',
      studentName: 'John Doe',
      rollNo: 'CS21B1001',
      submittedAt: '2024-01-24T18:30:00Z',
      status: 'submitted',
      marks: null,
      late: false
    },
    {
      id: '2',
      studentName: 'Jane Smith',
      rollNo: 'CS21B1002',
      submittedAt: '2024-01-25T22:15:00Z',
      status: 'graded',
      marks: 45,
      late: false
    },
    {
      id: '3',
      studentName: 'Mike Johnson',
      rollNo: 'CS21B1003',
      submittedAt: null,
      status: 'pending',
      marks: null,
      late: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'default';
      case 'completed': return 'secondary';
      case 'overdue': return 'destructive';
      default: return 'outline';
    }
  };

  const getSubmissionStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'default';
      case 'graded': return 'secondary';
      case 'pending': return 'destructive';
      default: return 'outline';
    }
  };

  const formatDueDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getDaysRemaining = (dateStr: string) => {
    const due = new Date(dateStr);
    const now = new Date();
    const diffTime = due.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Assignment Management
            </CardTitle>
            <Button 
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="gap-1"
            >
              <Plus className="h-4 w-4" />
              Create Assignment
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {showCreateForm && (
            <Card className="mb-6 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-lg">Create New Assignment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="title">Assignment Title</Label>
                    <Input id="title" placeholder="Enter assignment title" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="data-structures">Data Structures</SelectItem>
                        <SelectItem value="database">Database Systems</SelectItem>
                        <SelectItem value="web-dev">Web Development</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="class">Class/Section</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cs-a">CS-A</SelectItem>
                        <SelectItem value="cs-b">CS-B</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="marks">Total Marks</Label>
                    <Input id="marks" type="number" placeholder="Enter total marks" />
                  </div>
                  <div>
                    <Label htmlFor="due-date">Due Date</Label>
                    <input
                      type="datetime-local"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="file">Assignment File (Optional)</Label>
                    <div className="flex items-center gap-2">
                      <Input type="file" />
                      <Button variant="outline" size="sm" className="gap-1">
                        <Upload className="h-4 w-4" />
                        Upload
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <Label htmlFor="description">Description/Instructions</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Enter assignment description and instructions"
                    rows={4}
                  />
                </div>
                <div className="flex gap-2">
                  <Button>Create Assignment</Button>
                  <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="space-y-6">
            {/* Assignment List */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Active Assignments</h3>
              <div className="grid gap-4">
                {assignments.map(assignment => {
                  const daysRemaining = getDaysRemaining(assignment.dueDate);
                  const submissionRate = Math.round((assignment.submissions / assignment.totalStudents) * 100);
                  
                  return (
                    <Card 
                      key={assignment.id}
                      className={`cursor-pointer transition-colors hover:bg-gray-50 ${
                        selectedAssignment === assignment.id ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setSelectedAssignment(selectedAssignment === assignment.id ? '' : assignment.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-gray-900">{assignment.title}</h4>
                              <Badge variant={getStatusColor(assignment.status) as any}>
                                {assignment.status}
                              </Badge>
                              {daysRemaining < 0 && (
                                <Badge variant="destructive">Overdue</Badge>
                              )}
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                Due: {formatDueDate(assignment.dueDate)}
                              </div>
                              <div className="flex items-center gap-1">
                                <FileText className="h-4 w-4" />
                                {assignment.subject} • {assignment.class}
                              </div>
                              <div className="flex items-center gap-1">
                                <CheckCircle className="h-4 w-4" />
                                {assignment.submissions}/{assignment.totalStudents} submitted ({submissionRate}%)
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {daysRemaining > 0 ? `${daysRemaining} days left` : 'Overdue'}
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <Button variant="outline" size="sm" className="gap-1">
                              <Download className="h-3 w-3" />
                              Export
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Submissions View */}
            {selectedAssignment && (
              <Card>
                <CardHeader>
                  <CardTitle>
                    Submissions - {assignments.find(a => a.id === selectedAssignment)?.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Roll No</TableHead>
                        <TableHead>Student Name</TableHead>
                        <TableHead>Submission Status</TableHead>
                        <TableHead>Submitted At</TableHead>
                        <TableHead>Marks</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {submissions.map(submission => (
                        <TableRow key={submission.id}>
                          <TableCell className="font-medium">{submission.rollNo}</TableCell>
                          <TableCell>{submission.studentName}</TableCell>
                          <TableCell>
                            <Badge variant={getSubmissionStatusColor(submission.status) as any}>
                              {submission.status}
                              {submission.late && ' (Late)'}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {submission.submittedAt 
                              ? new Date(submission.submittedAt).toLocaleString()
                              : 'Not submitted'
                            }
                          </TableCell>
                          <TableCell>
                            {submission.marks !== null ? (
                              <span className="font-medium">{submission.marks}/50</span>
                            ) : (
                              <span className="text-gray-500">Not graded</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              {submission.status === 'submitted' && (
                                <Button variant="outline" size="sm">
                                  Grade
                                </Button>
                              )}
                              <Button variant="outline" size="sm" className="gap-1">
                                <Download className="h-3 w-3" />
                                View
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssignmentManagement;
