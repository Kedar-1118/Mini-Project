import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import Card from '../../components/Card';
import { mockData } from '../../data/mockData';

const Analytics: React.FC = () => {
  const { followersGrowth, engagementByPlatform, audienceSentiment } = mockData;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics</h1>

      {/* Followers Growth Chart */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Followers Growth
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={followersGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="month" 
                stroke="#6B7280"
                fontSize={12}
              />
              <YAxis 
                stroke="#6B7280"
                fontSize={12}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
                formatter={(value) => [`${value.toLocaleString()}`, 'Followers']}
              />
              <Line 
                type="monotone" 
                dataKey="followers" 
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Engagement by Platform */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Engagement by Platform
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={engagementByPlatform}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="platform" 
                  stroke="#6B7280"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#6B7280"
                  fontSize={12}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                  formatter={(value) => [`${value}%`, 'Engagement Rate']}
                />
                <Bar 
                  dataKey="engagement" 
                  fill="#8B5CF6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Audience Sentiment */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Audience Sentiment
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={audienceSentiment}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {audienceSentiment.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                  formatter={(value) => [`${value}%`, 'Sentiment']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Average Session Duration
          </h4>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">4m 32s</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">
            +12% from last month
          </p>
        </Card>

        <Card>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Click-through Rate
          </h4>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">3.4%</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">
            +0.8% from last month
          </p>
        </Card>

        <Card>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Conversion Rate
          </h4>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">2.1%</p>
          <p className="text-sm text-red-600 dark:text-red-400 mt-1">
            -0.3% from last month
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;