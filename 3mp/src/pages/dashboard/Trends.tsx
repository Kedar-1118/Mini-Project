import React from 'react';
import { TrendingUp, TrendingDown, Minus, Clock, Target, Users } from 'lucide-react';
import Card from '../../components/Card';
import { mockData } from '../../data/mockData';

const Trends: React.FC = () => {
  const { trendingHashtags, contentRecommendations } = mockData;

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />;
      default: return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getRecommendationIcon = (type: string) => {
    switch (type) {
      case 'Best Posting Time': return Clock;
      case 'Content Format': return Target;
      case 'Hashtag Strategy': return TrendingUp;
      case 'Posting Frequency': return Users;
      default: return Target;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Trends</h1>

      {/* Trending Hashtags */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Trending Hashtags
        </h3>
        <div className="space-y-4">
          {trendingHashtags.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-gray-400 dark:text-gray-500">
                  #{index + 1}
                </span>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {item.hashtag}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Relevance Score</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{item.relevanceScore}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  {getTrendIcon(item.trend)}
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
                    {item.trend}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Content Recommendations */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          AI-Powered Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contentRecommendations.map((rec, index) => {
            const Icon = getRecommendationIcon(rec.type);
            return (
              <div key={index} className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {rec.type}
                    </h4>
                    <p className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">
                      {rec.recommendation}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {rec.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Industry Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Platform Trends
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Instagram Reels</span>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-600 dark:text-green-400 font-medium">+25%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">TikTok Videos</span>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-600 dark:text-green-400 font-medium">+18%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">YouTube Shorts</span>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-600 dark:text-green-400 font-medium">+12%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Static Posts</span>
              <div className="flex items-center space-x-2">
                <TrendingDown className="w-4 h-4 text-red-500" />
                <span className="text-red-600 dark:text-red-400 font-medium">-8%</span>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Content Categories
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Lifestyle</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                Hot
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Technology</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Rising
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Health & Fitness</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium">
                Stable
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Travel</span>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                Declining
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Trends;