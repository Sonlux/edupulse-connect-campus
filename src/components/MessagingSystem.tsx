
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Send, 
  Paperclip, 
  Search, 
  Plus, 
  MoreVertical,
  Star,
  Archive,
  Trash2
} from 'lucide-react';

const MessagingSystem = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Dr. Sarah Smith',
      role: 'Professor - Data Structures',
      lastMessage: 'Assignment deadline extended to Friday',
      time: '2 hours ago',
      unread: 2,
      avatar: 'SS',
      online: true
    },
    {
      id: 2,
      name: 'Prof. John Doe',
      role: 'Professor - Database Systems',
      lastMessage: 'Great work on the project!',
      time: '1 day ago',
      unread: 0,
      avatar: 'JD',
      online: false
    },
    {
      id: 3,
      name: 'CS Study Group',
      role: 'Group Chat',
      lastMessage: 'Mike: Anyone free for study session?',
      time: '2 days ago',
      unread: 5,
      avatar: 'CS',
      online: true
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Dr. Sarah Smith',
      content: 'Hi Alex, I wanted to let you know that the assignment deadline has been extended to Friday due to the technical issues we had this week.',
      time: '2:30 PM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Thank you Dr. Smith! That gives me more time to refine my solution.',
      time: '2:32 PM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Dr. Sarah Smith',
      content: 'Perfect! If you have any questions about the algorithm implementation, feel free to ask.',
      time: '2:35 PM',
      isOwn: false
    },
    {
      id: 4,
      sender: 'You',
      content: 'Actually, I do have a question about the binary search tree traversal. Could we schedule a quick meeting?',
      time: '2:40 PM',
      isOwn: true
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-[800px] flex border rounded-lg overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/3 border-r bg-gray-50">
        <div className="p-4 border-b bg-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Messages</h2>
            <Button size="sm" className="gap-1">
              <Plus className="h-4 w-4" />
              New
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <ScrollArea className="h-full">
          <div className="space-y-1 p-2">
            {filteredConversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedChat(conv.id)}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedChat === conv.id ? 'bg-blue-100 border-blue-200' : 'hover:bg-white'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                      {conv.avatar}
                    </div>
                    {conv.online && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-sm truncate">{conv.name}</h3>
                      <span className="text-xs text-gray-500">{conv.time}</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">{conv.role}</p>
                    <p className="text-sm text-gray-700 truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && (
                    <Badge variant="destructive" className="text-xs">
                      {conv.unread}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
              SS
            </div>
            <div>
              <h3 className="font-medium">Dr. Sarah Smith</h3>
              <p className="text-sm text-gray-600">Professor - Data Structures</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <Star className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Archive className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.isOwn
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.isOwn ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t bg-white">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingSystem;
