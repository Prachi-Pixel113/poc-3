import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  ArrowLeft, 
  Trophy, 
  Target,
  Clock,
  TrendingUp,
  Users,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Award,
  Star,
  Calendar,
  CheckCircle
} from 'lucide-react';

const PremiumDashboard = ({ onBack }) => {
  // Mock analytics data
  const analyticsData = {
    overallStats: {
      totalQuestions: 247,
      correctAnswers: 189,
      accuracy: 76.5,
      totalTimeSpent: '8h 45m',
      averageTimePerQuestion: '2m 7s',
      streak: 12,
      rank: 234,
      totalUsers: 15420
    },
    topicPerformance: [
      { topic: 'Percentages', accuracy: 82, timeSpent: '3h 12m', questions: 45, rank: 156 },
      { topic: 'Number Systems', accuracy: 75, timeSpent: '2h 30m', questions: 35, rank: 289 },
      { topic: 'Time & Work', accuracy: 68, timeSpent: '1h 45m', questions: 28, rank: 412 },
      { topic: 'Logical Reasoning', accuracy: 79, timeSpent: '4h 18m', questions: 52, rank: 198 },
      { topic: 'Verbal Reasoning', accuracy: 84, timeSpent: '3h 45m', questions: 48, rank: 134 }
    ],
    timeAnalytics: {
      averagesByDifficulty: {
        easy: '1m 24s',
        medium: '2m 45s', 
        hard: '4m 12s'
      },
      dailyActivity: [65, 78, 45, 89, 92, 56, 78] // Last 7 days
    },
    strengths: ['Quick calculation', 'Pattern recognition', 'Time management'],
    improvements: ['Complex word problems', 'Data interpretation', 'Speed in hard questions']
  };

  const performanceColor = (accuracy) => {
    if (accuracy >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (accuracy >= 70) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getRankSuffix = (rank) => {
    if (rank % 100 >= 11 && rank % 100 <= 13) return 'th';
    switch (rank % 10) {
      case 1: return 'st';
      case 2: return 'nd'; 
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={onBack}
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold border-2 hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Performance Analytics
                </h1>
                <p className="text-slate-600">
                  Detailed insights into your learning progress and performance
                </p>
              </div>
            </div>
            
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 text-sm font-semibold">
              <Star className="h-4 w-4 mr-1" />
              Premium Dashboard
            </Badge>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Overall Performance Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Target className="h-5 w-5 text-white" />
              </div>
              <p className="text-2xl font-bold text-slate-800">{analyticsData.overallStats.accuracy}%</p>
              <p className="text-xs text-slate-600">Overall Accuracy</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <p className="text-2xl font-bold text-slate-800">{analyticsData.overallStats.correctAnswers}</p>
              <p className="text-xs text-slate-600">Questions Solved</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <p className="text-2xl font-bold text-slate-800">{analyticsData.overallStats.totalTimeSpent}</p>
              <p className="text-xs text-slate-600">Study Time</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <p className="text-2xl font-bold text-slate-800">{analyticsData.overallStats.averageTimePerQuestion}</p>
              <p className="text-xs text-slate-600">Avg per Question</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <p className="text-2xl font-bold text-slate-800">{analyticsData.overallStats.streak}</p>
              <p className="text-xs text-slate-600">Day Streak</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <p className="text-2xl font-bold text-slate-800">#{analyticsData.overallStats.rank}</p>
              <p className="text-xs text-slate-600">Global Rank</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Topic Performance Chart */}
          <Card className="lg:col-span-2 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-teal-500" />
                Accuracy by Topic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topicPerformance.map((topic, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-slate-800">{topic.topic}</span>
                        <Badge className={`text-xs border ${performanceColor(topic.accuracy)}`}>
                          {topic.accuracy}%
                        </Badge>
                      </div>
                      <div className="text-right text-sm text-slate-500">
                        <div>#{topic.rank}{getRankSuffix(topic.rank)}</div>
                        <div>{topic.questions} questions</div>
                      </div>
                    </div>
                    <Progress value={topic.accuracy} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Time Spent Chart */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <PieChart className="h-6 w-6 text-purple-500" />
                Time Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-slate-800">{analyticsData.overallStats.totalTimeSpent}</p>
                      <p className="text-xs text-slate-600">Total Time</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {analyticsData.topicPerformance.slice(0, 3).map((topic, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="font-medium text-slate-700">{topic.topic}</span>
                      <span className="text-slate-600">{topic.timeSpent}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Strengths & Improvements */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <Award className="h-6 w-6 text-green-500" />
                Strengths & Areas to Improve
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Your Strengths
                  </h4>
                  <div className="space-y-2">
                    {analyticsData.strengths.map((strength, index) => (
                      <Badge key={index} className="bg-green-100 text-green-800 mr-2 mb-2">
                        {strength}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Focus Areas
                  </h4>
                  <div className="space-y-2">
                    {analyticsData.improvements.map((improvement, index) => (
                      <Badge key={index} className="bg-orange-100 text-orange-800 mr-2 mb-2">
                        {improvement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Time Analytics */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <Clock className="h-6 w-6 text-teal-500" />
                Time Spent per Question
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-4">Average Time by Difficulty</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="font-medium text-green-800">Easy Questions</span>
                      <span className="text-green-700 font-semibold">{analyticsData.timeAnalytics.averagesByDifficulty.easy}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="font-medium text-yellow-800">Medium Questions</span>
                      <span className="text-yellow-700 font-semibold">{analyticsData.timeAnalytics.averagesByDifficulty.medium}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                      <span className="font-medium text-red-800">Hard Questions</span>
                      <span className="text-red-700 font-semibold">{analyticsData.timeAnalytics.averagesByDifficulty.hard}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Global Ranking */}
        <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">🎉 You're in the top 15% globally!</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-3xl font-bold text-white">#{analyticsData.overallStats.rank}</p>
                <p className="text-blue-100">Your Global Rank</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{analyticsData.overallStats.totalUsers.toLocaleString()}</p>
                <p className="text-blue-100">Total Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">85%</p>
                <p className="text-blue-100">Better Than</p>
              </div>
            </div>
            <p className="text-xl text-blue-100 mb-6">
              Keep up the excellent work! You're outperforming 85% of all users on the platform.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PremiumDashboard;