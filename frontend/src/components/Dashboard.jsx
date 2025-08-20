import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  Brain, 
  MessageSquare, 
  Calculator, 
  Target, 
  Clock, 
  TrendingUp,
  Award,
  Play,
  Sparkles,
  BarChart3,
  Zap
} from 'lucide-react';
import { mockTopics, mockUserProgress } from '../data/mock';

const iconMap = {
  Brain,
  MessageSquare,
  Calculator
};

const Dashboard = ({ onSelectTopic }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with enhanced design */}
        <div className="mb-12 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-800 bg-clip-text text-transparent mb-4">
              Aptitude Mastery Hub
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Unlock your potential with AI-powered practice sessions and comprehensive explanations
            </p>
          </div>
        </div>

        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Progress</p>
                  <p className="text-3xl font-bold text-slate-800 mb-1">
                    {mockUserProgress.completedQuestions}/{mockUserProgress.totalQuestions}
                  </p>
                  <p className="text-xs text-teal-600 font-medium">Questions Completed</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Target className="h-7 w-7 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Accuracy</p>
                  <p className="text-3xl font-bold text-slate-800 mb-1">
                    {mockUserProgress.overallAccuracy}%
                  </p>
                  <p className="text-xs text-indigo-600 font-medium">Overall Score</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Study Time</p>
                  <p className="text-3xl font-bold text-slate-800 mb-1">
                    {mockUserProgress.timeSpent}
                  </p>
                  <p className="text-xs text-purple-600 font-medium">Total Investment</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Clock className="h-7 w-7 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Streak</p>
                  <p className="text-3xl font-bold text-slate-800 mb-1">
                    {mockUserProgress.streak}
                  </p>
                  <p className="text-xs text-teal-600 font-medium">Days Active</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Award className="h-7 w-7 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Topics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mockTopics.map((topic, index) => {
            const Icon = iconMap[topic.icon];
            const progressPercentage = (topic.completedQuestions / topic.totalQuestions) * 100;
            
            // Uniform blue to purple gradient colors
            const colors = [
              'from-blue-500 to-blue-600',
              'from-indigo-500 to-indigo-600', 
              'from-purple-500 to-purple-600'
            ];

            return (
              <Card 
                key={topic.id} 
                className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group overflow-hidden relative"
                onClick={() => onSelectTopic(topic.id)}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-current to-transparent rounded-full"></div>
                  <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-gradient-to-tr from-current to-transparent rounded-full"></div>
                </div>

                <CardHeader className="pb-6 relative">
                  <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${colors[index]} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                    {topic.title}
                  </CardTitle>
                  
                  <p className="text-slate-600 text-base leading-relaxed">
                    {topic.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0 relative">
                  <div className="space-y-6">
                    {/* Enhanced Progress Section */}
                    <div className="bg-slate-50 rounded-2xl p-5">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-semibold text-slate-700">Learning Progress</span>
                        <span className="text-sm text-slate-500 bg-white px-2 py-1 rounded-full">
                          {topic.completedQuestions}/{topic.totalQuestions}
                        </span>
                      </div>
                      <Progress value={progressPercentage} className="h-3 mb-2" />
                      <p className="text-xs text-slate-500">{progressPercentage.toFixed(0)}% Complete</p>
                    </div>

                    {/* Stats and Action */}
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col gap-2">
                        <Badge variant="secondary" className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 border-0 px-3 py-1">
                          <BarChart3 className="h-3 w-3 mr-1" />
                          {topic.accuracy}% Accuracy
                        </Badge>
                      </div>
                      
                      <Button 
                        className={`bg-gradient-to-r ${colors[index]} text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-6 py-3 rounded-xl font-semibold`}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Start Practice
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Recent Activity */}
        <Card className="mt-12 bg-gradient-to-r from-white/80 to-slate-50/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <Zap className="h-5 w-5 text-white" />
              </div>
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-8">
            <div className="flex items-center gap-4 p-6 bg-white/60 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-slate-800 font-semibold">Last Study Session</p>
                <p className="text-slate-600">{mockUserProgress.lastActivity}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;