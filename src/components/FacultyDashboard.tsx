
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  TrendingUp, 
  Bell, 
  Clock,
  Award,
  AlertTriangle,
  CheckCircle,
  FileText,
  BarChart3
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FacultyDashboard = () => {
  const navigate = useNavigate();

  const facultyData = {
    name: "Dr. Sarah Wilson",
    id: "FAC001",
    department: "Computer Science",
    totalStudents: 156,
    totalClasses: 8,
    pendingGrades: 23,
    upcomingClasses: 3
  };

  const classData = [
    {
      subject: "Data Structures",
      code: "CS201",
      students: 45,
      nextClass: "Today 2:00 PM",
      attendance: 89,
      pendingAssignments: 12,
      averageGrade: 85.5
    },
    {
      subject: "Database Systems", 
      code: "CS202",
      students: 38,
      nextClass: "Tomorrow 10:00 AM",
      attendance: 92,
      pendingAssignments: 8,
      averageGrade: 88.2
    },
    {
      subject: "Web Development",
      code: "CS203", 
      students: 42,
      nextClass: "Today 4:00 PM",
      attendance: 76,
      pendingAssignments: 15,
      averageGrade: 82.1
    },
    {
      subject: "Machine Learning",
      code: "CS204",
      students: 31,
      nextClass: "Friday 9:00 AM", 
      attendance: 94,
      pendingAssignments: 5,
      averageGrade: 91.3
    }
  ];

  const recentActivity = [
    { action: "Graded assignment", subject: "Data Structures", time: "2 hours ago" },
    { action: "Posted announcement", subject: "Database Systems", time: "4 hours ago" },
    { action: "Updated attendance", subject: "Web Development", time: "1 day ago" },
    { action: "Created new assignment", subject: "Machine Learning", time: "2 days ago" }
  ];

  const pendingTasks = [
    { task: "Grade midterm exams", subject: "Data Structures", due: "Tomorrow", priority: "high" },
    { task: "Prepare lecture slides", subject: "Database Systems", due: "Today", priority: "medium" },
    { task: "Review project proposals", subject: "Web Development", due: "This week", priority: "low" },
    { task: "Update course materials", subject: "Machine Learning", due: "Next week", priority: "medium" }
  ];

  const quickActions = [
    { label: "Mark Attendance", icon: Calendar, path: "/faculty/attendance", color: "bg-blue-500" },
    { label: "Enter Grades", icon: TrendingUp, path: "/faculty/marks", color: "bg-green-500" },
    { label: "Send Announcement", icon: Bell, path: "/faculty/announcements", color: "bg-purple-500" },
    { label: "Manage Classes", icon: Users, path: "/faculty/classes", color: "bg-orange-500" },
    { label: "View Reports", icon: BarChart3, path: "/faculty/reports", color: "bg-indigo-500" },
    { label: "Upload Materials", icon: FileText, path: "/assignments", color: "bg-pink-500" }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-orange-500'; 
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const handleQuickAction = (path: string, label: string) => {
    console.log(`Navigating to ${label} at ${path}`);
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {facultyData.name}</h1>
              <p className="text-gray-600">{facultyData.id} • {facultyData.department} Department</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Bell className="h-4 w-4" />
                Tasks
                <Badge variant="destructive" className="ml-1">{pendingTasks.length}</Badge>
              </Button>
              <div className="text-right">
                <p className="text-sm text-gray-500">Active Classes</p>
                <p className="text-2xl font-bold text-blue-600">{facultyData.totalClasses}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Total Students</p>
                  <p className="text-3xl font-bold">{facultyData.totalStudents}</p>
                </div>
                <Users className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Active Classes</p>
                  <p className="text-3xl font-bold">{facultyData.totalClasses}</p>
                </div>
                <BookOpen className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Pending Grades</p>
                  <p className="text-3xl font-bold">{facultyData.pendingGrades}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Today's Classes</p>
                  <p className="text-3xl font-bold">{facultyData.upcomingClasses}</p>
                </div>
                <Clock className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-20 flex-col gap-2 hover:scale-105 transition-transform"
                  onClick={() => handleQuickAction(action.path, action.label)}
                >
                  <div className={`p-2 rounded-full ${action.color}`}>
                    <action.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xs text-center">{action.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Class Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                My Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classData.map((classItem, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium text-lg">{classItem.subject}</h3>
                        <p className="text-sm text-gray-600">{classItem.code} • {classItem.students} students</p>
                      </div>
                      <Badge variant="outline">{classItem.nextClass}</Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Attendance</p>
                        <div className="flex items-center gap-2">
                          <Progress value={classItem.attendance} className="h-1 flex-1" />
                          <span className="font-medium">{classItem.attendance}%</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-500">Avg Grade</p>
                        <p className="font-medium">{classItem.averageGrade}%</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Pending</p>
                        <p className="font-medium">{classItem.pendingAssignments} tasks</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                Pending Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{task.task}</p>
                      <p className="text-xs text-gray-600">{task.subject} • Due: {task.due}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority).replace('text-', 'bg-')}`}></div>
                      <span className={`text-xs font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-600" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-xs text-gray-600">{activity.subject}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FacultyDashboard;
