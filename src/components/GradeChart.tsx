
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Award } from 'lucide-react';

const GradeChart = () => {
  const gradeData = [
    { subject: 'DS', internal: 88, external: 92 },
    { subject: 'DBMS', internal: 85, external: 88 },
    { subject: 'Web Dev', internal: 82, external: 85 },
    { subject: 'ML', internal: 94, external: 96 },
    { subject: 'SE', internal: 87, external: 89 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-green-600" />
          Grade Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={gradeData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="subject" />
              <YAxis domain={[70, 100]} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="internal" fill="#60a5fa" name="Internal" radius={[2, 2, 0, 0]} />
              <Bar dataKey="external" fill="#10b981" name="External" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export { GradeChart };
