import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Calculator, 
  Brain, 
  BookOpen,
  ArrowRight,
  Target,
  TrendingUp,
  Users
} from 'lucide-react';

const AptitudeLanding = ({ onNavigate, onBack }) => {
  const aptitudeTopics = [
    {
      id: 'quantitative',
      title: 'Quantitative Aptitude',
      description: 'Master numerical reasoning, mathematical concepts, and problem-solving techniques',
      icon: Calculator,
      color: 'from-blue-500 to-indigo-600',
      subtopics: ['Number Systems', 'Percentages', 'Time & Work', 'Profit & Loss', 'Ratio & Proportion'],
      questions: 250,
      difficulty: 'Easy to Hard',
      avgTime: '45 mins',
      successRate: '78%'
    },
    {
      id: 'logical',
      title: 'Logical Reasoning',
      description: 'Develop analytical thinking, pattern recognition, and logical deduction skills',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      subtopics: ['Series', 'Coding-Decoding', 'Blood Relations', 'Direction Sense', 'Puzzles'],
      questions: 200,
      difficulty: 'Medium to Hard',
      avgTime: '35 mins',
      successRate: '71%'
    },
    {
      id: 'verbal',
      title: 'Verbal Reasoning',
      description: 'Enhance language skills, comprehension, and communication abilities',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-600',
      subtopics: ['Reading Comprehension', 'Grammar', 'Vocabulary', 'Analogies', 'Sentence Correction'],
      questions: 180,
      difficulty: 'Easy to Medium',
      avgTime: '40 mins',
      successRate: '82%'
    }
  ];

  const overallStats = [
    { label: 'Total Questions', value: '630+', icon: Target },
    { label: 'Active Users', value: '15K+', icon: Users },
    { label: 'Avg Success Rate', value: '77%', icon: TrendingUp }
  ];

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
                Back to Home
              </Button>
              
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Aptitude Mastery
                </h1>
                <p className="text-slate-600">
                  Build strong foundation in quantitative, logical, and verbal reasoning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {overallStats.map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Topics */}
        <div>
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Choose Your Focus Area
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Each area contains carefully curated questions with detailed explanations
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aptitudeTopics.map((topic) => {
              const Icon = topic.icon;
              
              return (
                <Card 
                  key={topic.id}
                  className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 cursor-pointer group overflow-hidden relative"
                  onClick={() => topic.id === 'quantitative' ? onNavigate('quantitative-landing') : onNavigate('topic-questions', topic.id)}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-current to-transparent rounded-full"></div>
                    <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-gradient-to-tr from-current to-transparent rounded-full"></div>
                  </div>

                  <CardHeader className="pb-6 relative">
                    <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${topic.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                      {topic.title}
                    </CardTitle>
                    
                    <p className="text-slate-600 text-base leading-relaxed">
                      {topic.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0 relative">
                    <div className="space-y-6">
                      
                      {/* Subtopics */}
                      <div className="bg-slate-50 rounded-2xl p-5">
                        <h4 className="font-semibold text-slate-800 mb-3">Key Topics:</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {topic.subtopics.slice(0, 3).map((subtopic, index) => (
                            <Badge key={index} variant="secondary" className="bg-white text-slate-600 text-xs">
                              {subtopic}
                            </Badge>
                          ))}
                          {topic.subtopics.length > 3 && (
                            <Badge variant="secondary" className="bg-white text-slate-500 text-xs">
                              +{topic.subtopics.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-slate-800">{topic.questions}</p>
                          <p className="text-xs text-slate-600">Questions</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-slate-800">{topic.successRate}</p>
                          <p className="text-xs text-slate-600">Success Rate</p>
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button 
                        className={`w-full bg-gradient-to-r ${topic.color} text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 py-4 rounded-xl font-semibold`}
                      >
                        <span className="mr-2">Start Practice</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Track Your Progress</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get detailed analytics on your performance across all aptitude areas
            </p>
            <Button
              onClick={() => onNavigate('premium-dashboard')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300"
            >
              View Analytics Dashboard
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AptitudeLanding;