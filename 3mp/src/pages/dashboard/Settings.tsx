import React, { useState } from 'react';
import { Instagram, Youtube, Twitter, CircleCheck as CheckCircle, Circle as XCircle, Moon, Sun, Bell, Lock, User } from 'lucide-react';
import Card from '../../components/Card';
import { useTheme } from '../../contexts/ThemeContext';
import { mockData } from '../../data/mockData';

const Settings: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    posts: true,
    engagement: true,
    trends: false,
    weekly: true,
  });

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram': return Instagram;
      case 'YouTube': return Youtube;
      case 'Twitter': return Twitter;
      default: return User;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Instagram': return 'text-pink-600';
      case 'YouTube': return 'text-red-600';
      case 'Twitter': return 'text-blue-600';
      case 'TikTok': return 'text-black dark:text-white';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>

      {/* Connected Accounts */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Connected Accounts
        </h3>
        <div className="space-y-4">
          {mockData.connectedAccounts.map((account, index) => {
            const Icon = getPlatformIcon(account.platform);
            return (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-700`}>
                    <Icon className={`w-6 h-6 ${getPlatformColor(account.platform)}`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {account.platform}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {account.connected ? account.username : 'Not connected'}
                    </p>
                    {account.connected && (
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {account.followers.toLocaleString()} followers
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  {account.connected ? (
                    <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">Connected</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 text-gray-400">
                      <XCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">Disconnected</span>
                    </div>
                  )}
                  
                  <button className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    account.connected
                      ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/30'
                      : 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/30'
                  }`}>
                    {account.connected ? 'Disconnect' : 'Connect'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Appearance Settings */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Appearance
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {isDarkMode ? (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Theme
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {isDarkMode ? 'Dark mode' : 'Light mode'}
                  </p>
                </div>
              </div>
              
              <button
                onClick={toggleTheme}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                  isDarkMode ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Notifications
          </h3>
          <div className="space-y-4">
            {[
              { key: 'posts', label: 'New post alerts', description: 'Get notified when your posts go live' },
              { key: 'engagement', label: 'Engagement updates', description: 'Notifications for likes, comments, and shares' },
              { key: 'trends', label: 'Trending alerts', description: 'Get notified about trending hashtags' },
              { key: 'weekly', label: 'Weekly reports', description: 'Receive weekly analytics summaries' },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {item.label}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                    notifications[item.key] ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      notifications[item.key] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Privacy & Security */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Privacy & Security
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex items-center space-x-3">
              <Lock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Change Password
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Update your account password
                </p>
              </div>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-150">
              Change
            </button>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Profile Visibility
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Control who can see your profile
                </p>
              </div>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-150">
              Manage
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Settings;    