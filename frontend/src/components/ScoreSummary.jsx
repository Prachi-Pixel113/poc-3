import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Trophy, 
  Target, 
  Clock,
  TrendingUp,
  ArrowRight,
  RotateCcw,
  ArrowLeft,
  CheckCircle,
  XCircle,
  Award
} from 'lucide-react';

const ScoreSummary = ({ topicId, onNavigate, onBack }) => {
  // Mock data for the summary - in real app this would come from user's session
  const mockResults = {
    totalQuestions: 10,
    correctAnswers: 7,
    accuracy: 70,
    timeSpent: '12:34',
    averageTime: '1:15',
    difficulty: {
      easy: { correct: 4, total: 4 },
      medium: { correct: 2, total: 4 }, 
      hard: { correct: 1, total: 2 }
    }
  };

  const topicNames = {
    'percentages': 'Percentages',
    'number-systems': 'Number Systems', 
    'time-work': 'Time & Work'
  };

  const getPerformanceColor = (accuracy) => {
    if (accuracy >= 80) return 'text-green-600';
    if (accuracy >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPerformanceMessage = (accuracy) => {
    if (accuracy >= 80) return 'Excellent Performance!';
    if (accuracy >= 60) return 'Good Job!';
    return 'Keep Practicing!';
  };

  const topicName = topicNames[topicId];

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
                Back to Questions
              </Button>
              
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Practice Complete!
                </h1>
                <p className="text-slate-600">
                  Your performance summary for {topicName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Main Results Card */}
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1">
            <div className="bg-white rounded-lg">
              <CardContent className="p-12 text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                    <Trophy className="h-12 w-12 text-white" />
                  </div>
                </div>
                
                <h2 className={`text-4xl font-bold mb-4 ${getPerformanceColor(mockResults.accuracy)}`}>
                  {getPerformanceMessage(mockResults.accuracy)}
                </h2>
                
                <p className="text-xl text-slate-600 mb-8">
                  You scored {mockResults.correctAnswers} out of {mockResults.totalQuestions} questions correctly
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-3xl font-bold text-slate-800">{mockResults.accuracy}%</p>
                    <p className="text-sm text-slate-600">Accuracy</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-3xl font-bold text-slate-800">{mockResults.correctAnswers}</p>
                    <p className="text-sm text-slate-600">Correct</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-3xl font-bold text-slate-800">{mockResults.timeSpent}</p>
                    <p className="text-sm text-slate-600">Total Time</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-3xl font-bold text-slate-800">{mockResults.averageTime}</p>
                    <p className="text-sm text-slate-600">Avg/Question</p>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>

        {/* Difficulty Breakdown */}
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <Award className="h-6 w-6 text-teal-500" />
              Performance by Difficulty
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-green-800 mb-2">Easy Questions</h3>
                <p className="text-2xl font-bold text-green-700">
                  {mockResults.difficulty.easy.correct}/{mockResults.difficulty.easy.total}
                </p>
                <Badge className="bg-green-100 text-green-700 mt-2">
                  {Math.round((mockResults.difficulty.easy.correct / mockResults.difficulty.easy.total) * 100)}% Accuracy
                </Badge>
              </div>

              <div className="text-center p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-yellow-800 mb-2">Medium Questions</h3>
                <p className="text-2xl font-bold text-yellow-700">
                  {mockResults.difficulty.medium.correct}/{mockResults.difficulty.medium.total}
                </p>
                <Badge className="bg-yellow-100 text-yellow-700 mt-2">
                  {Math.round((mockResults.difficulty.medium.correct / mockResults.difficulty.medium.total) * 100)}% Accuracy
                </Badge>
              </div>

              <div className="text-center p-6 bg-red-50 rounded-xl border border-red-200">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <XCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-red-800 mb-2">Hard Questions</h3>
                <p className="text-2xl font-bold text-red-700">
                  {mockResults.difficulty.hard.correct}/{mockResults.difficulty.hard.total}
                </p>
                <Badge className="bg-red-100 text-red-700 mt-2">
                  {Math.round((mockResults.difficulty.hard.correct / mockResults.difficulty.hard.total) * 100)}% Accuracy
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Button 
            onClick={() => onNavigate('questions-list', topicId)}
            className="h-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <RotateCcw className="h-5 w-5 mr-3" />
            Practice Again
          </Button>
          
          <Button 
            onClick={() => onNavigate('quantitative-landing')}
            variant="outline"
            className="h-16 border-2 font-semibold text-lg rounded-xl hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-3" />
            Try Another Topic
          </Button>
        </div>

        {/* Premium Dashboard CTA */}
        <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Unlock Your Full Performance Report</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get detailed analytics, time-based insights, comparison with other learners, and personalized recommendations to improve your performance
            </p>
            <Button
              onClick={() => onNavigate('premium-dashboard')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <ArrowRight className="h-5 w-5 mr-2" />
              View Premium Analytics
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ScoreSummary;