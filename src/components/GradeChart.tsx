
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Award } from 'lucide-react';

export const GradeChart = () => {
  const gradeData = [
    { subject: 'Data Structures', grade: 85 },
    { subject: 'Database', grade: 92 },
    { subject: 'Web Dev', grade: 78 },
    { subject: 'Networks', grade: 88 },
    { subject: 'Software Eng', grade: 90 }
  ];

  const gradeDistribution = [
    { name: 'A+', value: 30, color: '#10b981' },
    { name: 'A', value: 40, color: '#3b82f6' },
    { name: 'B+', value: 20, color: '#f59e0b' },
    { name: 'B', value: 10, color: '#ef4444' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-green-600" />
          Grade Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={gradeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" angle={-45} textAnchor="end" height={60} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="grade" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={gradeDistribution}
                cx="50%"
                cy="50%"
                outerRadius={60}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {gradeDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
