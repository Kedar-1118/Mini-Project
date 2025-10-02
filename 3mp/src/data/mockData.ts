
export const mockData = {
  overview: {
    followers: 45320,
    engagement: 6.8,
    reach: 125000,
    growthPercentage: 12.5,
  },
  
  followersGrowth: [
    { month: 'Jan', followers: 32000 },
    { month: 'Feb', followers: 35200 },
    { month: 'Mar', followers: 38100 },
    { month: 'Apr', followers: 41500 },
    { month: 'May', followers: 43800 },
    { month: 'Jun', followers: 45320 },
  ],
  
  engagementByPlatform: [
    { platform: 'Instagram', engagement: 8.2 },
    { platform: 'TikTok', engagement: 12.5 },
    { platform: 'YouTube', engagement: 4.3 },
    { platform: 'Twitter', engagement: 3.1 },
  ],
  
  audienceSentiment: [
    { name: 'Positive', value: 68, color: '#10B981' },
    { name: 'Neutral', value: 25, color: '#6B7280' },
    { name: 'Negative', value: 7, color: '#EF4444' },
  ],
  
  recentPosts: [
    {
      id: 1,
      platform: 'Instagram',
      content: 'Summer vibes ☀️ #summer #lifestyle',
      likes: 2340,
      comments: 156,
      hashtags: ['summer', 'lifestyle', 'vibes'],
      date: '2024-01-15',
    },
    {
      id: 2,
      platform: 'TikTok',
      content: 'New workout routine! 💪',
      likes: 8920,
      comments: 423,
      hashtags: ['workout', 'fitness', 'health'],
      date: '2024-01-14',
    },
    {
      id: 3,
      platform: 'YouTube',
      content: 'My morning skincare routine',
      likes: 1250,
      comments: 89,
      hashtags: ['skincare', 'beauty', 'morning'],
      date: '2024-01-13',
    },
    {
      id: 4,
      platform: 'Twitter',
      content: 'Thoughts on the new tech trends...',
      likes: 567,
      comments: 34,
      hashtags: ['tech', 'trends', 'thoughts'],
      date: '2024-01-12',
    },
  ],
  
  trendingHashtags: [
    { hashtag: '#sustainability', relevanceScore: 95, trend: 'up' },
    { hashtag: '#mentalhealth', relevanceScore: 88, trend: 'up' },
    { hashtag: '#digitalart', relevanceScore: 82, trend: 'down' },
    { hashtag: '#productivity', relevanceScore: 79, trend: 'up' },
    { hashtag: '#minimalism', relevanceScore: 76, trend: 'stable' },
    { hashtag: '#wellness', relevanceScore: 73, trend: 'up' },
  ],
  
  contentRecommendations: [
    {
      type: 'Best Posting Time',
      recommendation: '6:00 PM - 8:00 PM',
      description: 'Based on your audience activity patterns',
    },
    {
      type: 'Content Format',
      recommendation: 'Video Content',
      description: 'Videos get 3x more engagement than static posts',
    },
    {
      type: 'Hashtag Strategy',
      recommendation: 'Use 8-12 hashtags',
      description: 'Mix of trending and niche hashtags works best',
    },
    {
      type: 'Posting Frequency',
      recommendation: '1-2 posts per day',
      description: 'Consistent posting maintains audience engagement',
    },
  ],
  
  connectedAccounts: [
    { platform: 'Instagram', username: '@johndoe', connected: true, followers: 25400 },
    { platform: 'TikTok', username: '@johndoe_official', connected: true, followers: 18200 },
    { platform: 'YouTube', username: 'John Doe Vlogs', connected: true, followers: 12800 },
    { platform: 'Twitter', username: '@john_doe', connected: false, followers: 0 },
  ],
};