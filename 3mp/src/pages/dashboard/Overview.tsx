import React from 'react';
import { Users, Heart, Eye, TrendingUp, TrendingDown } from 'lucide-react';
import Card from '../../components/Card';
import { mockData } from '../../data/mockData';

const Overview: React.FC = () => {
  const { overview } = mockData;

  const stats = [
    {
      name: 'Total Followers',
      value: overview.followers.toLocaleString(),
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    },
    {
      name: 'Engagement Rate',
      value: `${overview.engagement}%`,
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100 dark:bg-pink-900/20',
    },
    {
      name: 'Total Reach',
      value: overview.reach.toLocaleString(),
      icon: Eye,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
    },
    {
      name: 'Growth',
      value: `${overview.growthPercentage}%`,
      icon: overview.growthPercentage > 0 ? TrendingUp : TrendingDown,
      color: overview.growthPercentage > 0 ? 'text-green-600' : 'text-red-600',
      bgColor: overview.growthPercentage > 0 ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Overview</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} hover>
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.name}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Stats
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Posts this month</span>
              <span className="font-semibold text-gray-900 dark:text-white">24</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Average likes per post</span>
              <span className="font-semibold text-gray-900 dark:text-white">3,264</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Response rate</span>
              <span className="font-semibold text-gray-900 dark:text-white">94%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Top performing platform</span>
              <span className="font-semibold text-gray-900 dark:text-white">TikTok</span>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Top Performing Content
          </h3>
          <div className="space-y-4">
            {mockData.recentPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {post.platform[0]}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {post.content}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {post.likes.toLocaleString()} likes • {post.comments} comments
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Overview;