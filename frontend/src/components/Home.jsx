import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowRight, 
  BookOpen, 
  Calculator, 
  Brain, 
  Users, 
  Target, 
  BarChart3,
  Sparkles,
  Bot,
  TrendingUp,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';

const Home = ({ onNavigate }) => {
  const mainCategories = [
    {
      id: 'aptitude',
      title: 'Aptitude Tests',
      description: 'Master quantitative, logical, and verbal reasoning with comprehensive practice questions',
      icon: Calculator,
      color: 'from-blue-500 to-teal-600',
      topics: 45,
      questions: 1200,
      difficulty: ['Easy', 'Medium', 'Hard']
    },
    {
      id: 'ai-interview',
      title: 'AI Mock Interviews',
      description: 'Practice with AI-powered interviews and get instant feedback on your performance',
      icon: Bot,
      color: 'from-purple-500 to-indigo-600',
      topics: 25,
      questions: 500,
      difficulty: ['Behavioral', 'Technical']
    },
    {
      id: 'skill-assessment',
      title: 'Skill Assessments',
      description: 'Evaluate your expertise across various domains with detailed analytics',
      icon: Target,
      color: 'from-orange-500 to-red-600',
      topics: 30,
      questions: 800,
      difficulty: ['Basic', 'Advanced']
    }
  ];

  const featuredStats = [
    { icon: Users, value: '50K+', label: 'Active Learners' },
    { icon: BookOpen, value: '1600+', label: 'Practice Questions' },
    { icon: TrendingUp, value: '89%', label: 'Success Rate' },
    { icon: Clock, value: '2.5h', label: 'Avg Study Time' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full mb-6">
            <Badge className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 text-sm">
              🎯 New Features Available
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-5 leading-tight">
            Master Your Career with
            <span className="block mt-2">Smart Learning</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Unlock your potential with AI-powered learning, comprehensive assessments, and personalized feedback. 
            Join thousands of successful learners on their journey to career excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={() => onNavigate('ai-interview')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg text-lg"
            >
              <Bot className="h-5 w-5 mr-3" />
              Start AI Mock Interview
            </Button>
            <Button
              onClick={() => onNavigate('aptitude-landing')}
              variant="outline"
              className="px-8 py-4 font-semibold border-2 rounded-xl hover:scale-105 transition-all duration-300 text-lg"
            >
              <BookOpen className="h-5 w-5 mr-3" />
              Browse Topics
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span>Free Practice Questions</span>
            </div>
          </div>
        </div>

        {/* Stats Section - Clean without cards */}
        <div className="mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {featuredStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</p>
                <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose EduMaster Pro - Smaller & More Structured */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-3">
              Why Choose EduMaster Pro?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The most comprehensive and intelligent learning platform designed for your career success
            </p>
          </div>
          
          {/* Features Grid - Compact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* AI-Powered Learning */}
            <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-xl p-6 border border-blue-100/50 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">AI-Powered Learning</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Get personalized recommendations and intelligent feedback systems that adapt to your learning style.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Smart Recommendations</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Adaptive Difficulty</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Analytics */}
            <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-xl p-6 border border-blue-100/50 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Detailed Analytics</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Track your progress with comprehensive performance insights and detailed progress reports.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Performance Tracking</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Progress Reports</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Explanations */}
            <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-xl p-6 border border-blue-100/50 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Expert Explanations</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Learn from detailed step-by-step solutions crafted by subject matter experts.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Step-by-step</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Expert Tips</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Driven */}
            <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-xl p-6 border border-blue-100/50 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Community Driven</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Join a vibrant community of 50K+ active learners and participate in engaging discussions.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">50K+ Users</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Peer Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Categories - Smaller */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-3">
              Choose Your Learning Path
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Dive deep into structured learning with comprehensive topic coverage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainCategories.map((category) => {
              const Icon = category.icon;
              
              return (
                <Card 
                  key={category.id}
                  className="bg-white/90 backdrop-blur-sm border-0 shadow-md transition-all duration-300 cursor-pointer group overflow-hidden relative"
                  onClick={() => category.id === 'aptitude' ? onNavigate('aptitude-landing') : null}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute -right-3 -top-3 w-12 h-12 bg-gradient-to-br from-current to-transparent rounded-full"></div>
                    <div className="absolute -left-3 -bottom-3 w-16 h-16 bg-gradient-to-tr from-current to-transparent rounded-full"></div>
                  </div>

                  <CardHeader className="pb-3 relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-md`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-slate-800 mb-3">
                      {category.title}
                    </CardTitle>
                    
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0 relative">
                    <div className="space-y-4">
                      
                      {/* Stats */}
                      <div className="bg-slate-50 rounded-lg p-4">
                        <div className="grid grid-cols-2 gap-3 mb-3">
                          <div className="text-center">
                            <p className="text-lg font-bold text-slate-800">{category.topics}</p>
                            <p className="text-xs text-slate-600">Topics</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-slate-800">{category.questions}+</p>
                            <p className="text-xs text-slate-600">Questions</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-1 justify-center">
                          {category.difficulty.map((level, index) => (
                            <Badge 
                              key={index}
                              variant="secondary" 
                              className="bg-white text-slate-600 text-xs px-2 py-1"
                            >
                              {level}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button 
                        className={`w-full bg-gradient-to-r ${category.color} text-white border-0 shadow-md transition-all duration-300 py-3 rounded-lg font-semibold text-sm`}
                      >
                        <span className="mr-2">Explore {category.title}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Premium Teaser */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-500 to-teal-600 text-white border-0 shadow-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-teal-600/50"></div>
            <CardContent className="p-8 text-center relative">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Ready for Advanced Analytics?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Unlock detailed performance insights, personalized learning paths, and advanced AI feedback to accelerate your growth
              </p>
              <Button
                onClick={() => onNavigate('premium-dashboard')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 font-semibold rounded-lg transition-all duration-300"
              >
                See Premium Features
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;