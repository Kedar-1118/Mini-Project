import React, { useState } from 'react';
import { Heart, MessageCircle, Calendar, Hash } from 'lucide-react';
import Card from '../../components/Card';
import { mockData } from '../../data/mockData';

const Posts: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  
  const platforms = ['all', 'Instagram', 'TikTok', 'YouTube', 'Twitter'];
  
  const filteredPosts = selectedPlatform === 'all' 
    ? mockData.recentPosts 
    : mockData.recentPosts.filter(post => post.platform === selectedPlatform);

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Instagram': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'TikTok': return 'bg-gradient-to-r from-black to-gray-800';
      case 'YouTube': return 'bg-gradient-to-r from-red-500 to-red-600';
      case 'Twitter': return 'bg-gradient-to-r from-blue-400 to-blue-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">Posts</h1>
        
        {/* Platform Filter */}
        <div className="flex space-x-2">
          {platforms.map((platform) => (
            <button
              key={platform}
              onClick={() => setSelectedPlatform(platform)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                selectedPlatform === platform
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Card key={post.id} hover>
            <div className="space-y-4">
              {/* Platform Badge */}
              <div className="flex items-center justify-between">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium ${getPlatformColor(post.platform)}`}>
                  {post.platform}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-gray-900 dark:text-white font-medium mb-3">
                  {post.content}
                </p>
                
                {/* Hashtags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.hashtags.map((hashtag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium"
                    >
                      <Hash className="w-3 h-3 mr-1" />
                      {hashtag}
                    </span>
                  ))}
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Heart className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">
                        {post.likes.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">
                        {post.comments}
                      </span>
                    </div>
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Posts Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Total Posts
          </h4>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {mockData.recentPosts.length}
          </p>
        </Card>
        
        <Card>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Total Likes
          </h4>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {mockData.recentPosts.reduce((acc, post) => acc + post.likes, 0).toLocaleString()}
          </p>
        </Card>
        
        <Card>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Total Comments
          </h4>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {mockData.recentPosts.reduce((acc, post) => acc + post.comments, 0).toLocaleString()}
          </p>
        </Card>
        
        <Card>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Avg. Engagement
          </h4>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">6.8%</p>
        </Card>
      </div>
    </div>
  );
};

export default Posts;