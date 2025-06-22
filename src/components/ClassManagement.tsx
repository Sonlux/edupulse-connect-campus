
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  BookOpen, 
  Calendar,
  Clock,
  Plus,
  Edit,
  Eye,
  Download,
  Upload,
  FileText,
  MessageSquare
} from 'lucide-react';

const ClassManagement = () => {
  const [selectedClass, setSelectedClass] = useState('CS201');

  const classes = [
    {
      code: 'CS201',
      name: 'Data Structures',
      semester: '4th Semester',
      credits: 4,
      students: 50,
      enrolledStudents: 48,
      schedule: [
        { day: 'Monday', time: '9:00 AM - 10:30 AM', room: 'Lab 101', type: 'Lecture' },
        { day: 'Wednesday', time: '9:00 AM - 10:30 AM', room: 'Lab 101', type: 'Lecture' },
        { day: 'Friday', time: '2:00 PM - 3:30 PM', room: 'Lab 102', type: 'Practical' }
      ],
      syllabus: [
        'Arrays and Linked Lists',
        'Stacks and Queues', 
        'Trees and Binary Search Trees',
        'Graphs and Graph Algorithms',
        'Sorting and Searching Algorithms'
      ],
      assignments: 5,
      completedAssignments: 3,
      averageAttendance: 92,
      averageGrade: 85.5
    },
    {
      code: 'CS202', 
      name: 'Database Systems',
      semester: '4th Semester',
      credits: 3,
      students: 45,
      enrolledStudents: 43,
      schedule: [
        { day: 'Tuesday', time: '11:00 AM - 12:30 PM', room: 'Room 205', type: 'Lecture' },
        { day: 'Thursday', time: '11:00 AM - 12:30 PM', room: 'Lab 103', type: 'Practical' }
      ],
      syllabus: [
        'Database Design and ER Models',
        'SQL and Query Optimization',
        'Normalization and ACID Properties',
        'Transactions and Concurrency',
        'NoSQL Databases'
      ],
      assignments: 4,
      completedAssignments: 2,
      averageAttendance: 88,
      averageGrade: 82.3
    },
    {
      code: 'CS203',
      name: 'Web Development',
      semester: '5th Semester', 
      credits: 3,
      students: 42,
      enrolledStudents: 40,
      schedule: [
        { day: 'Monday', time: '2:00 PM - 3:30 PM', room: 'Lab 102', type: 'Practical' },
        { day: 'Wednesday', time: '2:00 PM - 3:30 PM', room: 'Room 205', type: 'Lecture' }
      ],
      syllabus: [
        'HTML, CSS, and JavaScript Fundamentals',
        'React and Component Architecture',
        'Backend Development with Node.js',
        'Database Integration',
        'Deployment and DevOps'
      ],
      assignments: 6,
      completedAssignments: 4,
      averageAttendance: 76,
      averageGrade: 79.8
    }
  ];

  const getSelectedClassData = () => classes.find(c => c.code === selectedClass) || classes[0];

  const students = [
    { id: 'CS21B1001', name: 'Alice Johnson', attendance: 95, grade: 92, assignments: 5 },
    { id: 'CS21B1002', name: 'Bob Smith', attendance: 88, grade: 85, assignments: 4 },
    { id: 'CS21B1003', name: 'Charlie Brown', attendance: 82, grade: 78, assignments: 4 },
    { id: 'CS21B1004', name: 'Diana Wilson', attendance: 97, grade: 94, assignments: 5 },
    { id: 'CS21B1005', name: 'Eric Davis', attendance: 75, grade: 72, assignments: 3 }
  ];

  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 bg-green-100';
    if (percentage >= 80) return 'text-blue-600 bg-blue-100';
    if (percentage >= 75) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return 'text-green-600 bg-green-100';
    if (grade >= 80) return 'text-blue-600 bg-blue-100';
    if (grade >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const classData = getSelectedClassData();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Class Management</h1>
          <p className="text-gray-600">Manage your classes and students</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Student
        </Button>
      </div>

      {/* Class Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Class</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {classes.map((cls) => (
              <button
                key={cls.code}
                onClick={() => setSelectedClass(cls.code)}
                className={`p-4 text-left border rounded-lg transition-colors ${
                  selectedClass === cls.code 
                    ? 'bg-blue-50 border-blue-300' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">{cls.code}</h3>
                    <Badge variant="outline">{cls.credits} Credits</Badge>
                  </div>
                  <p className="text-sm text-gray-600">{cls.name}</p>
                  <p className="text-sm text-gray-500">{cls.semester}</p>
                  <div className="flex justify-between text-sm">
                    <span>Students: {cls.enrolledStudents}/{cls.students}</span>
                    <span>Avg: {cls.averageGrade}%</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Class Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Enrolled Students</p>
                <p className="text-2xl font-bold">{classData.enrolledStudents}/{classData.students}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Attendance</p>
                <p className="text-2xl font-bold text-green-600">{classData.averageAttendance}%</p>
              </div>
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Grade</p>
                <p className="text-2xl font-bold text-purple-600">{classData.averageGrade}%</p>
              </div>
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Assignments</p>
                <p className="text-2xl font-bold text-orange-600">{classData.completedAssignments}/{classData.assignments}</p>
              </div>
              <FileText className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Class Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Course Code</label>
                  <p className="font-medium">{classData.code}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Course Name</label>
                  <p className="font-medium">{classData.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Semester</label>
                  <p className="font-medium">{classData.semester}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Credits</label>
                  <p className="font-medium">{classData.credits}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Mark Attendance
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Enter Grades
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Announcement
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Materials
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="students">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Student List</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Import
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Student ID</th>
                      <th className="text-left p-2">Name</th>
                      <th className="text-center p-2">Attendance</th>
                      <th className="text-center p-2">Current Grade</th>
                      <th className="text-center p-2">Assignments</th>
                      <th className="text-center p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{student.id}</td>
                        <td className="p-2">{student.name}</td>
                        <td className="p-2 text-center">
                          <Badge className={getAttendanceColor(student.attendance)}>
                            {student.attendance}%
                          </Badge>
                        </td>
                        <td className="p-2 text-center">
                          <Badge className={getGradeColor(student.grade)}>
                            {student.grade}%
                          </Badge>
                        </td>
                        <td className="p-2 text-center">{student.assignments}/5</td>
                        <td className="p-2 text-center">
                          <div className="flex justify-center gap-1">
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Class Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classData.schedule.map((session, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{session.day}</h3>
                      <p className="text-sm text-gray-600">{session.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{session.room}</p>
                      <Badge variant="outline">{session.type}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="syllabus">
          <Card>
            <CardHeader>
              <CardTitle>Course Syllabus</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {classData.syllabus.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="font-medium">{topic}</span>
                    </div>
                    <Badge variant="outline">Week {index + 1}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="materials">
          <Card>
            <CardHeader>
              <CardTitle>Course Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">Course materials and resources will be displayed here</p>
                <Button className="mt-4">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Material
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClassManagement;
