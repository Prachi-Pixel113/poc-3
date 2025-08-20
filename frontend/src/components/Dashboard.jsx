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
  Play
} from 'lucide-react';
import { mockTopics, mockUserProgress } from '../data/mock';

const iconMap = {
  Brain,
  MessageSquare,
  Calculator
};

const Dashboard = ({ onSelectTopic }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Aptitude Training Dashboard
          </h1>
          <p className="text-slate-600 text-lg">
            Master your skills with focused practice and detailed explanations
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-medium">Total Questions</p>
                  <p className="text-2xl font-bold text-slate-800">
                    {mockUserProgress.completedQuestions}/{mockUserProgress.totalQuestions}
                  </p>
                </div>
                <Target className="h-8 w-8 text-emerald-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-medium">Accuracy</p>
                  <p className="text-2xl font-bold text-slate-800">
                    {mockUserProgress.overallAccuracy}%
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-medium">Time Spent</p>
                  <p className="text-2xl font-bold text-slate-800">
                    {mockUserProgress.timeSpent}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-medium">Current Streak</p>
                  <p className="text-2xl font-bold text-slate-800">
                    {mockUserProgress.streak} days
                  </p>
                </div>
                <Award className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockTopics.map((topic) => {
            const Icon = iconMap[topic.icon];
            const progressPercentage = (topic.completedQuestions / topic.totalQuestions) * 100;

            return (
              <Card 
                key={topic.id} 
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                onClick={() => onSelectTopic(topic.id)}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${topic.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-800">
                    {topic.title}
                  </CardTitle>
                  <p className="text-slate-600 text-sm">
                    {topic.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-700">Progress</span>
                        <span className="text-sm text-slate-500">
                          {topic.completedQuestions}/{topic.totalQuestions}
                        </span>
                      </div>
                      <Progress value={progressPercentage} className="h-2" />
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                        {topic.accuracy}% Accuracy
                      </Badge>
                      <Button 
                        size="sm" 
                        className={`bg-gradient-to-r ${topic.color} text-white hover:opacity-90`}
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Practice
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity */}
        <Card className="mt-8 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-800">
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              Last active: {mockUserProgress.lastActivity}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;