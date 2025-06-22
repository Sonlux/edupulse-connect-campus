
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Send, 
  Search, 
  Plus, 
  MessageSquare,
  User,
  Clock,
  Paperclip,
  Phone,
  Video
} from 'lucide-react';

const MessagingSystem = () => {
  const [selectedConversation, setSelectedConversation] = useState(0);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: "Dr. Smith",
      role: "Faculty",
      subject: "Data Structures",
      lastMessage: "Your assignment submission looks good. Just a few minor corrections needed.",
      time: "2 hours ago",
      unread: 2,
      avatar: "DS",
      online: true
    },
    {
      id: 2,
      name: "Prof. Johnson", 
      role: "Faculty",
      subject: "Database Systems",
      lastMessage: "The project deadline has been extended to next Friday.",
      time: "1 day ago",
      unread: 0,
      avatar: "PJ",
      online: false
    },
    {
      id: 3,
      name: "Study Group - CS201",
      role: "Group",
      subject: "Study Group",
      lastMessage: "Alex: Anyone available for study session tomorrow?",
      time: "3 hours ago",
      unread: 5,
      avatar: "SG",
      online: true
    },
    {
      id: 4,
      name: "Academic Office",
      role: "Administration",
      subject: "Registration",
      lastMessage: "Your course registration for next semester has been approved.",
      time: "2 days ago",
      unread: 1,
      avatar: "AO",
      online: false
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Dr. Smith",
      message: "Hi! I've reviewed your Data Structures assignment. Overall, it's well done, but there are a few areas that need improvement.",
      time: "10:30 AM",
      isOwn: false
    },
    {
      id: 2,
      sender: "You",
      message: "Thank you for the feedback, Dr. Smith. Could you please point out the specific areas that need work?",
      time: "10:45 AM",
      isOwn: true
    },
    {
      id: 3,
      sender: "Dr. Smith",
      message: "Sure! The main issues are: 1) Time complexity analysis for the search function, 2) Memory optimization in the tree traversal, and 3) Edge case handling for empty inputs.",
      time: "11:00 AM",
      isOwn: false
    },
    {
      id: 4,
      sender: "You",
      message: "Got it! I'll work on these points and resubmit by tomorrow. Should I email the updated version or upload it to the portal?",
      time: "11:15 AM",
      isOwn: true
    },
    {
      id: 5,
      sender: "Dr. Smith",
      message: "Please upload it to the portal. Also, feel free to schedule office hours if you need any clarification on the concepts.",
      time: "2 hours ago",
      isOwn: false
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const announcements = [
    {
      title: "Semester End Exam Schedule Released",
      sender: "Academic Office",
      time: "Today, 9:00 AM",
      priority: "high"
    },
    {
      title: "Library Hours Extended During Exam Week",
      sender: "Library Administration", 
      time: "Yesterday, 3:00 PM",
      priority: "medium"
    },
    {
      title: "Guest Lecture: AI in Healthcare",
      sender: "CS Department",
      time: "2 days ago",
      priority: "low"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600">Communicate with faculty and classmates</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          New Message
        </Button>
      </div>

      <Tabs defaultValue="messages" className="space-y-4">
        <TabsList>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="groups">Study Groups</TabsTrigger>
        </TabsList>

        <TabsContent value="messages">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
            {/* Conversations List */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Conversations</CardTitle>
                  <Button size="sm" variant="outline">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <Input placeholder="Search conversations..." className="mt-2" />
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[480px]">
                  {conversations.map((conversation, index) => (
                    <div
                      key={conversation.id}
                      onClick={() => setSelectedConversation(index)}
                      className={`p-4 cursor-pointer border-b hover:bg-gray-50 ${
                        selectedConversation === index ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                            {conversation.avatar}
                          </div>
                          {conversation.online && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium truncate">{conversation.name}</h3>
                            {conversation.unread > 0 && (
                              <Badge variant="destructive" className="text-xs">
                                {conversation.unread}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-500">{conversation.role} • {conversation.subject}</p>
                          <p className="text-sm text-gray-600 truncate mt-1">{conversation.lastMessage}</p>
                          <p className="text-xs text-gray-400 mt-1">{conversation.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Chat Area */}
            <Card className="lg:col-span-2">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      {conversations[selectedConversation]?.avatar}
                    </div>
                    <div>
                      <h3 className="font-medium">{conversations[selectedConversation]?.name}</h3>
                      <p className="text-sm text-gray-500">{conversations[selectedConversation]?.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Video className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[400px] p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[70%] ${message.isOwn ? 'order-2' : 'order-1'}`}>
                          <div
                            className={`p-3 rounded-lg ${
                              message.isOwn
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            <p>{message.message}</p>
                          </div>
                          <div className={`flex items-center gap-1 mt-1 text-xs text-gray-500 ${
                            message.isOwn ? 'justify-end' : 'justify-start'
                          }`}>
                            <Clock className="h-3 w-3" />
                            {message.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                
                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="announcements">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Latest Announcements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{announcement.title}</h3>
                        <p className="text-sm text-gray-600">From: {announcement.sender}</p>
                        <p className="text-xs text-gray-500 mt-1">{announcement.time}</p>
                      </div>
                      <Badge variant={
                        announcement.priority === 'high' ? 'destructive' :
                        announcement.priority === 'medium' ? 'default' : 'secondary'
                      }>
                        {announcement.priority}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="groups">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">Study groups feature will be implemented here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MessagingSystem;
