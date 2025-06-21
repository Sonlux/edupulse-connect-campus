
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { BookOpen, LogIn, User, GraduationCap, Shield, Eye, EyeOff, Lock, Mail, AlertCircle, CheckCircle } from 'lucide-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [showDemo, setShowDemo] = useState(true);
  const { login, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(email, password);
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const setDemoCredentials = (role: 'student' | 'faculty' | 'admin') => {
    if (role === 'student') {
      setEmail('student@example.com');
      setPassword('password');
    } else if (role === 'faculty') {
      setEmail('faculty@example.com');
      setPassword('password');
    } else {
      setEmail('admin@example.com');
      setPassword('password');
    }
  };

  const demoAccounts = [
    { role: 'student', email: 'student@example.com', icon: User, color: 'bg-blue-500', label: 'Student Portal' },
    { role: 'faculty', email: 'faculty@example.com', icon: GraduationCap, color: 'bg-green-500', label: 'Faculty Portal' },
    { role: 'admin', email: 'admin@example.com', icon: Shield, color: 'bg-red-500', label: 'Admin Portal' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">EduPulse</h1>
          </div>
          <p className="text-gray-600">Smart CRM for Education</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600">Secure Login Portal</span>
          </div>
        </div>

        {/* Demo Credentials */}
        {showDemo && (
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm text-blue-800 flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Demo Accounts
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowDemo(false)}
                  className="h-6 w-6 p-0"
                >
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid gap-2">
                {demoAccounts.map((account) => (
                  <Button 
                    key={account.role}
                    variant="outline" 
                    size="sm" 
                    className="justify-start gap-2 h-10"
                    onClick={() => setDemoCredentials(account.role as 'student' | 'faculty' | 'admin')}
                  >
                    <div className={`p-1 rounded ${account.color}`}>
                      <account.icon className="h-3 w-3 text-white" />
                    </div>
                    <span className="flex-1 text-left">{account.label}</span>
                    <Badge variant="secondary" className="text-xs">
                      {account.email.split('@')[0]}
                    </Badge>
                  </Button>
                ))}
              </div>
              <div className="text-xs text-blue-700 bg-blue-100 p-2 rounded">
                <strong>Default Password:</strong> password
              </div>
            </CardContent>
          </Card>
        )}

        {/* Login Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LogIn className="h-5 w-5" />
              Sign In to EduPulse
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your institutional email"
                  className="pl-4"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="pl-4 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="remember" className="text-sm">Remember me</Label>
                </div>
                <Button variant="link" className="text-sm px-0">
                  Forgot password?
                </Button>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-2 rounded">
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </div>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Signing In...
                  </div>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Need Help?</span>
                </div>
              </div>
              
              <div className="mt-4 text-center space-y-2">
                <Button variant="outline" className="w-full text-sm">
                  Contact IT Support
                </Button>
                <p className="text-xs text-gray-500">
                  New to EduPulse? Contact your administrator for account setup.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500">
          <p>© 2024 EduPulse. Secure Educational Management System</p>
          <div className="flex justify-center gap-4 mt-2">
            <Button variant="link" className="text-xs px-0">Privacy Policy</Button>
            <Button variant="link" className="text-xs px-0">Terms of Service</Button>
            <Button variant="link" className="text-xs px-0">Support</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
