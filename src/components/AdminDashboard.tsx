
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  BookOpen, 
  Calendar,
  TrendingUp,
  AlertTriangle,
  GraduationCap,
  Building2,
  UserPlus,
  Settings,
  BarChart3,
  FileText,
  School
} from 'lucide-react';

const AdminDashboard = () => {
  const [stats] = useState({
    totalStudents: 1245,
    totalFaculty: 87,
    totalCourses: 156,
    totalDepartments: 12,
    activeAssignments: 34,
    pendingApprovals: 8,
    newEnrollments: 23,
    systemAlerts: 3
  });

  const quickActions = [
    { icon: UserPlus, label: 'Add New User', color: 'bg-blue-500', path: '/admin/users/new' },
    { icon: BookOpen, label: 'Manage Courses', color: 'bg-green-500', path: '/admin/courses' },
    { icon: Building2, label: 'Departments', color: 'bg-purple-500', path: '/admin/departments' },
    { icon: Calendar, label: 'Academic Calendar', color: 'bg-orange-500', path: '/admin/calendar' },
    { icon: FileText, label: 'Generate Reports', color: 'bg-indigo-500', path: '/admin/reports' },
    { icon: Settings, label: 'System Settings', color: 'bg-pink-500', path: '/admin/settings' }
  ];

  const recentActivities = [
    { id: 1, action: 'New student enrollment', user: 'John Doe', time: '2 hours ago', type: 'enrollment' },
    { id: 2, action: 'Course updated', user: 'Dr. Smith', time: '4 hours ago', type: 'course' },
    { id: 3, action: 'Department created', user: 'Admin', time: '1 day ago', type: 'department' },
    { id: 4, action: 'Faculty member added', user: 'HR Team', time: '2 days ago', type: 'faculty' }
  ];

  const systemAlerts = [
    { id: 1, message: 'Server maintenance scheduled for tonight', severity: 'warning' },
    { id: 2, message: 'Low storage space detected', severity: 'error' },
    { id: 3, message: 'New security update available', severity: 'info' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your institution efficiently</p>
        </div>
        <Button className="flex items-center gap-2">
          <School className="h-4 w-4" />
          Institution Settings
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalStudents.toLocaleString()}</div>
            <p className="text-xs text-green-600">+{stats.newEnrollments} new this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Faculty Members</CardTitle>
            <GraduationCap className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalFaculty}</div>
            <p className="text-xs text-gray-600">Across {stats.totalDepartments} departments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCourses}</div>
            <p className="text-xs text-gray-600">{stats.activeAssignments} active assignments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Healthy</div>
            <p className="text-xs text-red-600">{stats.systemAlerts} alerts pending</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
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

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{activity.action}</p>
                        <p className="text-xs text-gray-600">by {activity.user}</p>
                      </div>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  System Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {systemAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center gap-3 p-3 border rounded-lg">
                      <Badge 
                        variant={alert.severity === 'error' ? 'destructive' : 
                               alert.severity === 'warning' ? 'default' : 'secondary'}
                      >
                        {alert.severity}
                      </Badge>
                      <p className="text-sm flex-1">{alert.message}</p>
                      <Button size="sm" variant="ghost">Resolve</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <p className="text-sm text-gray-600">Manage students, faculty, and administrative users</p>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 mb-4">User management interface will be implemented here</p>
                <Button>Go to User Management</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic">
          <Card>
            <CardHeader>
              <CardTitle>Academic Management</CardTitle>
              <p className="text-sm text-gray-600">Manage courses, departments, and academic calendar</p>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 mb-4">Academic management interface will be implemented here</p>
                <Button>Go to Academic Management</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system">
          <Card>
            <CardHeader>
              <CardTitle>System Management</CardTitle>
              <p className="text-sm text-gray-600">Configure system settings and permissions</p>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Settings className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 mb-4">System management interface will be implemented here</p>
                <Button>Go to System Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
