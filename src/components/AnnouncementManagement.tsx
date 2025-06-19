
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bell, Plus, Send, Edit, Trash2, Calendar } from 'lucide-react';

const AnnouncementManagement = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    content: '',
    targetAudience: '',
    priority: 'normal',
    scheduleDate: ''
  });

  const announcements = [
    {
      id: '1',
      title: 'Mid-term Exam Schedule Released',
      content: 'The mid-term examination schedule has been posted. Please check your respective class timings.',
      targetAudience: 'All Students',
      priority: 'high',
      createdAt: '2024-01-15T10:30:00Z',
      status: 'published'
    },
    {
      id: '2',
      title: 'Library Timing Changes',
      content: 'Due to maintenance work, library will be closed from 2 PM to 4 PM this Friday.',
      targetAudience: 'CS-A, CS-B',
      priority: 'normal',
      createdAt: '2024-01-14T14:20:00Z',
      status: 'published'
    },
    {
      id: '3',
      title: 'Assignment Deadline Extension',
      content: 'Database assignment deadline has been extended to next Monday.',
      targetAudience: 'CS-B',
      priority: 'normal',
      createdAt: '2024-01-13T09:15:00Z',
      status: 'scheduled'
    }
  ];

  const handleCreateAnnouncement = () => {
    console.log('Creating announcement:', newAnnouncement);
    setShowCreateForm(false);
    setNewAnnouncement({
      title: '',
      content: '',
      targetAudience: '',
      priority: 'normal',
      scheduleDate: ''
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      default: return 'outline';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'default';
      case 'scheduled': return 'secondary';
      case 'draft': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Announcement Management
            </CardTitle>
            <Button 
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="gap-1"
            >
              <Plus className="h-4 w-4" />
              Create Announcement
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {showCreateForm && (
            <Card className="mb-6 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-lg">Create New Announcement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={newAnnouncement.title}
                      onChange={(e) => setNewAnnouncement(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter announcement title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="audience">Target Audience</Label>
                    <Select 
                      value={newAnnouncement.targetAudience} 
                      onValueChange={(value) => setNewAnnouncement(prev => ({ ...prev, targetAudience: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Students</SelectItem>
                        <SelectItem value="cs-a">CS-A</SelectItem>
                        <SelectItem value="cs-b">CS-B</SelectItem>
                        <SelectItem value="specific-course">Specific Course</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="priority">Priority</Label>
                    <Select 
                      value={newAnnouncement.priority} 
                      onValueChange={(value) => setNewAnnouncement(prev => ({ ...prev, priority: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="schedule">Schedule Date (Optional)</Label>
                    <input
                      type="datetime-local"
                      value={newAnnouncement.scheduleDate}
                      onChange={(e) => setNewAnnouncement(prev => ({ ...prev, scheduleDate: e.target.value }))}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={newAnnouncement.content}
                    onChange={(e) => setNewAnnouncement(prev => ({ ...prev, content: e.target.value }))}
                    placeholder="Enter announcement content"
                    rows={4}
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleCreateAnnouncement} className="gap-1">
                    <Send className="h-4 w-4" />
                    Publish Now
                  </Button>
                  <Button variant="outline" className="gap-1">
                    <Calendar className="h-4 w-4" />
                    Schedule
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowCreateForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Recent Announcements</h3>
            {announcements.map(announcement => (
              <Card key={announcement.id} className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900">{announcement.title}</h4>
                        <Badge variant={getPriorityColor(announcement.priority) as any}>
                          {announcement.priority}
                        </Badge>
                        <Badge variant={getStatusColor(announcement.status) as any}>
                          {announcement.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{announcement.content}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>To: {announcement.targetAudience}</span>
                        <span>•</span>
                        <span>{new Date(announcement.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Edit className="h-3 w-3" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1 text-red-600 hover:text-red-700">
                        <Trash2 className="h-3 w-3" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnnouncementManagement;
