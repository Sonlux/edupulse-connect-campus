
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageSquare, Send, Search, Plus, User, Clock } from 'lucide-react';

const MessagingSystem = () => {
  const [selectedConversation, setSelectedConversation] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [showNewConversation, setShowNewConversation] = useState(false);

  const conversations = [
    {
      id: '1',
      participant: 'Alex Johnson (CS21B1045)',
      lastMessage: 'Thank you for the clarification on the assignment.',
      timestamp: '2024-01-15T14:30:00Z',
      unread: 0,
      subject: 'Database Assignment Query'
    },
    {
      id: '2',
      participant: 'Sarah Wilson (CS21B1004)',
      lastMessage: 'Could you please explain the concept again?',
      timestamp: '2024-01-15T11:20:00Z',
      unread: 2,
      subject: 'Data Structures Help'
    },
    {
      id: '3',
      participant: 'Mike Johnson (CS21B1003)',
      lastMessage: 'I will submit the project by tomorrow.',
      timestamp: '2024-01-14T16:45:00Z',
      unread: 0,
      subject: 'Project Submission'
    }
  ];

  const messages = [
    {
      id: '1',
      senderId: 'student',
      senderName: 'Alex Johnson',
      content: 'Hello Professor, I have a question about the database assignment.',
      timestamp: '2024-01-15T13:00:00Z'
    },
    {
      id: '2',
      senderId: 'faculty',
      senderName: 'Dr. Sarah Smith',
      content: 'Hello Alex, I\'d be happy to help. What specific part are you having trouble with?',
      timestamp: '2024-01-15T13:15:00Z'
    },
    {
      id: '3',
      senderId: 'student',
      senderName: 'Alex Johnson',
      content: 'I\'m confused about the normalization process in the third normal form.',
      timestamp: '2024-01-15T13:20:00Z'
    },
    {
      id: '4',
      senderId: 'faculty',
      senderName: 'Dr. Sarah Smith',
      content: 'Third Normal Form eliminates transitive dependencies. Let me explain with an example...',
      timestamp: '2024-01-15T14:00:00Z'
    },
    {
      id: '5',
      senderId: 'student',
      senderName: 'Alex Johnson',
      content: 'Thank you for the clarification on the assignment.',
      timestamp: '2024-01-15T14:30:00Z'
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Messages & Communication
            </CardTitle>
            <Button 
              onClick={() => setShowNewConversation(!showNewConversation)}
              className="gap-1"
            >
              <Plus className="h-4 w-4" />
              New Conversation
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {showNewConversation && (
            <Card className="mb-6 border-green-200 bg-green-50">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Student</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose student" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student1">John Doe (CS21B1001)</SelectItem>
                        <SelectItem value="student2">Jane Smith (CS21B1002)</SelectItem>
                        <SelectItem value="student3">Mike Johnson (CS21B1003)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="Enter subject" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea placeholder="Type your message here..." rows={3} />
                </div>
                <div className="flex gap-2">
                  <Button className="gap-1">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowNewConversation(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Conversations List */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-4">
                  <Search className="h-4 w-4 text-gray-500" />
                  <Input placeholder="Search conversations..." className="flex-1" />
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-3">Recent Conversations</h3>
                
                {conversations.map(conversation => (
                  <Card 
                    key={conversation.id}
                    className={`cursor-pointer transition-colors hover:bg-gray-50 ${
                      selectedConversation === conversation.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-gray-400" />
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {conversation.participant.split(' (')[0]}
                            </p>
                            {conversation.unread > 0 && (
                              <Badge variant="destructive" className="text-xs">
                                {conversation.unread}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 mt-1">{conversation.subject}</p>
                          <p className="text-xs text-gray-500 mt-1 truncate">
                            {conversation.lastMessage}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="h-3 w-3" />
                          {formatTime(conversation.timestamp)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Messages Area */}
            <div className="lg:col-span-2">
              {selectedConversation ? (
                <Card className="h-[600px] flex flex-col">
                  <CardHeader className="border-b">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-gray-500" />
                      <div>
                        <h3 className="font-semibold">
                          {conversations.find(c => c.id === selectedConversation)?.participant}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {conversations.find(c => c.id === selectedConversation)?.subject}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map(message => (
                      <div 
                        key={message.id}
                        className={`flex ${message.senderId === 'faculty' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[70%] p-3 rounded-lg ${
                            message.senderId === 'faculty' 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${
                            message.senderId === 'faculty' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                  
                  <div className="border-t p-4">
                    <div className="flex gap-2">
                      <Textarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        rows={2}
                        className="flex-1"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                      />
                      <Button 
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="gap-1"
                      >
                        <Send className="h-4 w-4" />
                        Send
                      </Button>
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className="h-[600px] flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Select a conversation to start messaging</p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MessagingSystem;
