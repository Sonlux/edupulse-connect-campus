
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { 
  FileText, 
  Upload, 
  Download, 
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  Plus,
  Eye,
  Edit
} from 'lucide-react';

const AssignmentManagement = () => {
  const { user } = useAuth();
  const isStudent = user?.role === 'student';
  const isFaculty = user?.role === 'faculty';

  const [assignments] = useState([
    {
      id: 1,
      title: "Data Structures Implementation",
      subject: "Data Structures",
      code: "CS201",
      description: "Implement binary search tree with all basic operations",
      dueDate: "2024-01-25",
      submissionDate: isStudent ? "2024-01-23" : null,
      status: isStudent ? "submitted" : "pending",
      grade: isStudent ? 92 : null,
      maxMarks: 100,
      submissions: isFaculty ? 45 : null,
      totalStudents: isFaculty ? 50 : null,
      instructor: "Dr. Smith",
      attachments: ["assignment_guidelines.pdf", "sample_code.cpp"]
    },
    {
      id: 2,
      title: "Database Design Project", 
      subject: "Database Systems",
      code: "CS202",
      description: "Design a complete database system for a library management system",
      dueDate: "2024-01-30",
      submissionDate: null,
      status: "pending",
      grade: null,
      maxMarks: 100,
      submissions: isFaculty ? 32 : null,
      totalStudents: isFaculty ? 45 : null,
      instructor: "Prof. Johnson",
      attachments: ["project_requirements.pdf", "er_diagram_template.docx"]
    },
    {
      id: 3,
      title: "React Portfolio Website",
      subject: "Web Development", 
      code: "CS203",
      description: "Create a responsive portfolio website using React and Tailwind CSS",
      dueDate: "2024-02-05",
      submissionDate: null,
      status: "not_started",
      grade: null,
      maxMarks: 100,
      submissions: isFaculty ? 28 : null,
      totalStudents: isFaculty ? 42 : null,
      instructor: "Dr. Wilson",
      attachments: ["portfolio_guidelines.pdf", "design_mockups.zip"]
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'not_started': return 'bg-gray-100 text-gray-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'submitted': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'overdue': return <AlertTriangle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const StudentView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Assignments</h1>
          <p className="text-gray-600">Track and submit your assignments</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Assignments</p>
                <p className="text-2xl font-bold">{assignments.length}</p>
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
                <p className="text-2xl font-bold text-green-600">
                  {assignments.filter(a => a.status === 'submitted').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {assignments.filter(a => a.status === 'pending' || a.status === 'not_started').length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Grade</p>
                <p className="text-2xl font-bold text-purple-600">
                  {assignments.filter(a => a.grade).length > 0 
                    ? Math.round(assignments.filter(a => a.grade).reduce((sum, a) => sum + (a.grade || 0), 0) / assignments.filter(a => a.grade).length)
                    : '-'}
                </p>
              </div>
              <Award className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <Card key={assignment.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{assignment.title}</h3>
                    <Badge className={getStatusColor(assignment.status)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(assignment.status)}
                        {assignment.status.replace('_', ' ')}
                      </div>
                    </Badge>
                    {assignment.grade && (
                      <Badge variant="outline">
                        Grade: {assignment.grade}/{assignment.maxMarks}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="text-gray-600">
                    <p className="text-sm">{assignment.code} • {assignment.subject}</p>
                    <p className="mt-1">{assignment.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Due: {assignment.dueDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {getDaysUntilDue(assignment.dueDate)} days left
                    </div>
                    {assignment.submissionDate && (
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4" />
                        Submitted: {assignment.submissionDate}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {assignment.attachments.map((file, index) => (
                      <Button key={index} variant="outline" size="sm" className="text-xs">
                        <Download className="h-3 w-3 mr-1" />
                        {file}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 ml-4">
                  {assignment.status === 'submitted' ? (
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View Submission
                    </Button>
                  ) : (
                    <Button size="sm">
                      <Upload className="h-4 w-4 mr-1" />
                      Submit Assignment
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const FacultyView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Assignment Management</h1>
          <p className="text-gray-600">Create and manage course assignments</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create Assignment
        </Button>
      </div>

      {/* Faculty Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Assignments</p>
                <p className="text-2xl font-bold">{assignments.length}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Submissions</p>
                <p className="text-2xl font-bold text-green-600">
                  {assignments.reduce((sum, a) => sum + (a.submissions || 0), 0)}
                </p>
              </div>
              <Upload className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
                <p className="text-2xl font-bold text-yellow-600">23</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Submission Rate</p>
                <p className="text-2xl font-bold text-purple-600">78%</p>
              </div>
              <Award className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Faculty Assignments List */}
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <Card key={assignment.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{assignment.title}</h3>
                    <Badge variant="outline">{assignment.code}</Badge>
                  </div>
                  
                  <p className="text-gray-600">{assignment.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Due: {assignment.dueDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Upload className="h-4 w-4" />
                      Submissions: {assignment.submissions}/{assignment.totalStudents}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View Submissions
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {isStudent && <StudentView />}
      {isFaculty && <FacultyView />}
    </div>
  );
};

export default AssignmentManagement;
