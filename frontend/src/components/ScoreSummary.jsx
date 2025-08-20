import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  ArrowLeft, 
  TrendingUp, 
  Target, 
  Clock, 
  CheckCircle,
  XCircle,
  RotateCcw,
  Share,
  Download,
  Award,
  Brain,
  BarChart3
} from 'lucide-react';

const ScoreSummary = ({ onNavigate, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('overall');

  // Mock score data
  const scoreData = {
    overall: {
      score: 78,
      totalQuestions: 25,
      correct: 19,
      incorrect: 6,
      timeSpent: '23:45',
      accuracy: 76,
      rank: 'Above Average'
    },
    categories: [
      {
        name: 'Quantitative Aptitude',
        score: 82,
        questions: 10,
        correct: 8,
        progress: 82,
        color: 'emerald'
      },
      {
        name: 'Logical Reasoning',
        score: 75,
        questions: 8,
        correct: 6,
        progress: 75,
        color: 'teal'
      },
      {
        name: 'Verbal Reasoning',
        score: 70,
        questions: 7,
        correct: 5,
        progress: 70,
        color: 'cyan'
      }
    ]
  };

  const achievements = [
    { icon: Target, label: 'High Accuracy', description: '76% correct answers' },
    { icon: Clock, label: 'Good Time Management', description: 'Completed within time limit' },
    { icon: TrendingUp, label: 'Above Average', description: 'Better than 68% of test takers' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onBack}
                className="hover:bg-emerald-100"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Practice
              </Button>
              <div className="h-6 w-px bg-slate-300"></div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Test Results
                </h1>
                <p className="text-sm text-slate-600">Quantitative Aptitude Practice Test</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Overall Score Card */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-1">
            <Card className="bg-white m-0">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-20"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-white">{scoreData.overall.score}%</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Great Job!</h2>
                <p className="text-slate-600 mb-6">You scored {scoreData.overall.score}% - {scoreData.overall.rank}</p>
                
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-emerald-600">{scoreData.overall.correct}</p>
                    <p className="text-sm text-slate-600">Correct</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <XCircle className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-red-600">{scoreData.overall.incorrect}</p>
                    <p className="text-sm text-slate-600">Incorrect</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-purple-600">{scoreData.overall.timeSpent}</p>
                    <p className="text-sm text-slate-600">Time Spent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {scoreData.categories.map((category, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-slate-800 flex items-center justify-between">
                  {category.name}
                  <Badge className={`bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 text-white`}>
                    {category.score}%
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress 
                    value={category.progress} 
                    className="h-3"
                  />
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>{category.correct}/{category.questions} correct</span>
                    <span>{category.score}% accuracy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Award className="h-6 w-6 text-emerald-600" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{achievement.label}</p>
                      <p className="text-sm text-slate-600">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => onNavigate('topic-practice')}
            className="h-16 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <RotateCcw className="h-6 w-6 mr-2" />
            Try Another Test
          </Button>
          <Button
            onClick={() => onNavigate('dashboard')}
            variant="outline"
            className="h-16 border-2 border-emerald-200 text-emerald-700 font-semibold text-lg rounded-xl hover:bg-emerald-50 transition-all duration-300"
          >
            <BarChart3 className="h-6 w-6 mr-2" />
            View Detailed Analytics
          </Button>
        </div>

        {/* Premium Upsell */}
        <Card className="mt-12 bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Want Deeper Insights?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto text-lg">
              Unlock detailed question-wise analysis, personalized improvement recommendations, 
              and advanced performance tracking with Premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('premium-dashboard')}
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-3 font-semibold rounded-lg transition-all duration-300"
              >
                <Award className="h-5 w-5 mr-2" />
                Upgrade to Premium
              </Button>
              <Button
                onClick={() => onNavigate('dashboard')}
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6 py-3 font-semibold rounded-lg transition-all duration-300"
              >
                Continue Free
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ScoreSummary;