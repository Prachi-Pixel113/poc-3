import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  Search, 
  Brain, 
  Code, 
  Users, 
  BookOpen,
  Calculator,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Bot,
  TrendingUp,
  Target,
  Clock,
  BarChart3
} from 'lucide-react';

const Home = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const mainCategories = [
    {
      id: 'aptitude',
      title: 'Aptitude',
      description: 'Master quantitative reasoning, logical thinking, and verbal skills',
      icon: Brain,
      color: 'from-teal-500 to-cyan-600',
      topics: 15,
      questions: 500,
      difficulty: ['Easy', 'Medium', 'Hard']
    },
    {
      id: 'technical',
      title: 'Technical',
      description: 'Programming languages, algorithms, and system design concepts',
      icon: Code,
      color: 'from-cyan-500 to-teal-600',
      topics: 20,
      questions: 800,
      difficulty: ['Beginner', 'Intermediate', 'Advanced']
    },
    {
      id: 'interview-prep',
      title: 'Interview Prep',
      description: 'Behavioral questions, HR rounds, and communication skills',
      icon: Users,
      color: 'from-teal-500 to-emerald-600',
      topics: 12,
      questions: 300,
      difficulty: ['Basic', 'Professional', 'Leadership']
    }
  ];

  const featuredStats = [
    { label: 'Active Learners', value: '50K+', icon: Target },
    { label: 'Questions Available', value: '1600+', icon: BookOpen },
    { label: 'Success Rate', value: '89%', icon: TrendingUp },
    { label: 'Avg. Study Time', value: '2.5h', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
      
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  EduMaster Pro
                </h1>
                <p className="text-xs text-slate-500">Learn. Practice. Excel.</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search topics, questions, or concepts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigate('aptitude-landing')}
                className="text-slate-600 hover:text-teal-600"
              >
                Aptitude
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-600 hover:text-cyan-600"
              >
                Technical
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-600 hover:text-teal-600"
              >
                Interview Prep
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-800 via-cyan-700 to-teal-800 bg-clip-text text-transparent mb-6">
                Master Your Skills
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Comprehensive practice platform for aptitude tests, technical interviews, and career preparation. 
                Learn from curated questions with detailed explanations and AI-powered insights.
              </p>
              
              {/* AI Mock Interview CTA */}
              <div className="flex justify-center gap-6 mb-8">
                <Button
                  onClick={() => onNavigate('ai-interview')}
                  className="px-8 py-4 font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg text-lg"
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
            </div>
          </div>
        </div>

        {/* Stats Section - Clean without cards */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {featuredStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</p>
                <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose EduMaster Pro - Restructured */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Why Choose EduMaster Pro?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The most comprehensive and intelligent learning platform designed for your career success. 
              Experience the difference with our advanced features and proven results.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* AI-Powered Learning */}
            <div className="bg-gradient-to-br from-white to-teal-50/30 rounded-2xl p-8 border border-teal-100/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">AI-Powered Learning</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Get personalized recommendations and intelligent feedback systems that adapt to your learning style and pace.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      Smart question recommendations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      Adaptive difficulty levels
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      Real-time feedback
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Analytics */}
            <div className="bg-gradient-to-br from-white to-cyan-50/30 rounded-2xl p-8 border border-cyan-100/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Detailed Analytics</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Track your progress with comprehensive performance insights and detailed progress reports.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      Performance tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      Weakness identification
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      Progress visualization
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Expert Explanations */}
            <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-8 border border-emerald-100/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Expert Explanations</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Learn from detailed step-by-step solutions crafted by subject matter experts for every question.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      Step-by-step solutions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      Multiple approaches
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      Expert tips & tricks
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Community Driven */}
            <div className="bg-gradient-to-br from-white to-teal-50/30 rounded-2xl p-8 border border-teal-100/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Community Driven</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Join a vibrant community of 50K+ active learners and participate in engaging discussion forums.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      Active discussion forums
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      Peer learning support
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      Expert mentorship
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Dive deep into structured learning with comprehensive topic coverage designed for your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainCategories.map((category) => {
              const Icon = category.icon;
              
              return (
                <Card 
                  key={category.id}
                  className="bg-white/90 backdrop-blur-sm border-0 shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden relative"
                  onClick={() => category.id === 'aptitude' ? onNavigate('aptitude-landing') : null}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-current to-transparent rounded-full"></div>
                    <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-gradient-to-tr from-current to-transparent rounded-full"></div>
                  </div>

                  <CardHeader className="pb-4 relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-slate-800 mb-4">
                      {category.title}
                    </CardTitle>
                    
                    <p className="text-slate-600 leading-relaxed">
                      {category.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-0 relative">
                    <div className="space-y-6">
                      
                      {/* Stats */}
                      <div className="bg-slate-50 rounded-lg p-6">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-slate-800">{category.topics}</p>
                            <p className="text-sm text-slate-600">Topics</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-slate-800">{category.questions}+</p>
                            <p className="text-sm text-slate-600">Questions</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 justify-center">
                          {category.difficulty.map((level, index) => (
                            <Badge 
                              key={index}
                              variant="secondary" 
                              className="bg-white text-slate-600 text-xs px-3 py-1"
                            >
                              {level}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button 
                        className={`w-full bg-gradient-to-r ${category.color} text-white border-0 shadow-md transition-all duration-300 py-4 rounded-lg font-semibold`}
                      >
                        <span className="mr-2">Explore {category.title}</span>
                        <ArrowRight className="h-5 w-5" />
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
          <Card className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white border-0 shadow-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/50 to-cyan-600/50"></div>
            <CardContent className="p-8 text-center relative">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Ready for Advanced Analytics?</h3>
              <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
                Unlock detailed performance insights, personalized learning paths, and advanced AI feedback to accelerate your growth
              </p>
              <Button
                onClick={() => onNavigate('premium-dashboard')}
                className="bg-white text-teal-600 hover:bg-teal-50 px-6 py-3 font-semibold rounded-lg transition-all duration-300"
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