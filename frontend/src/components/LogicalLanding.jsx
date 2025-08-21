import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Brain, 
  Puzzle, 
  Network,
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Clock,
  Award,
  CheckCircle,
  Lightbulb,
  Eye,
  TreePine
} from 'lucide-react';

const LogicalLanding = ({ onNavigate, onBack }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Simplified logical reasoning topics structure without categorized subtopics
  const logicalTopics = [
    {
      id: 'number-series',
      title: 'Number Series',
      description: 'Complete numerical sequences using arithmetic, geometric, and special patterns',
      questions: 45,
      difficulty: 'Easy to Medium',
      avgTime: '25 mins',
      successRate: '82%',
      premium: false
    },
    {
      id: 'letter-series',
      title: 'Letter Series',
      description: 'Alphabetical patterns and letter sequence completions',
      questions: 35,
      difficulty: 'Easy to Medium',
      avgTime: '20 mins',
      successRate: '85%',
      premium: false
    },
    {
      id: 'figure-series',
      title: 'Figure Series',
      description: 'Visual pattern recognition and shape sequences',
      questions: 30,
      difficulty: 'Medium',
      avgTime: '30 mins',
      successRate: '75%',
      premium: true
    },
    {
      id: 'letter-coding',
      title: 'Letter Coding',
      description: 'Alphabetical substitution and letter-based coding systems',
      questions: 40,
      difficulty: 'Easy to Hard',
      avgTime: '28 mins',
      successRate: '78%',
      premium: false
    },
    {
      id: 'number-coding',
      title: 'Number Coding',
      description: 'Numerical codes and mathematical encoding patterns',
      questions: 35,
      difficulty: 'Medium',
      avgTime: '25 mins',
      successRate: '80%',
      premium: false
    },
    {
      id: 'symbol-coding',
      title: 'Symbol Coding',
      description: 'Symbol substitution and pictorial coding systems',
      questions: 25,
      difficulty: 'Medium to Hard',
      avgTime: '32 mins',
      successRate: '70%',
      premium: true
    },
    {
      id: 'blood-relations',
      title: 'Blood Relations',
      description: 'Family relationships and genealogical reasoning',
      questions: 50,
      difficulty: 'Easy to Hard',
      avgTime: '35 mins',
      successRate: '72%',
      premium: false
    },
    {
      id: 'analogies',
      title: 'Analogies',
      description: 'Word relationships and logical comparisons',
      questions: 40,
      difficulty: 'Medium',
      avgTime: '22 mins',
      successRate: '83%',
      premium: false
    },
    {
      id: 'classification',
      title: 'Classification',
      description: 'Grouping items based on common properties',
      questions: 35,
      difficulty: 'Easy to Medium',
      avgTime: '20 mins',
      successRate: '87%',
      premium: false
    },
    {
      id: 'direction-sense',
      title: 'Direction Sense',
      description: 'Navigation, compass directions, and spatial orientation',
      questions: 30,
      difficulty: 'Easy to Medium',
      avgTime: '25 mins',
      successRate: '79%',
      premium: false
    },
    {
      id: 'seating-arrangement',
      title: 'Seating Arrangement',
      description: 'Linear and circular seating problems with constraints',
      questions: 40,
      difficulty: 'Medium to Hard',
      avgTime: '40 mins',
      successRate: '68%',
      premium: true
    },
    {
      id: 'mirror-water-images',
      title: 'Mirror & Water Images',
      description: 'Reflection patterns and image transformations',
      questions: 25,
      difficulty: 'Medium',
      avgTime: '28 mins',
      successRate: '73%',
      premium: true
    },
    {
      id: 'syllogism',
      title: 'Syllogism',
      description: 'Logical statements and conclusion validation',
      questions: 45,
      difficulty: 'Medium to Hard',
      avgTime: '35 mins',
      successRate: '65%',
      premium: true
    },
    {
      id: 'logical-games',
      title: 'Logical Games',
      description: 'Strategy games and rule-based problem solving',
      questions: 30,
      difficulty: 'Hard',
      avgTime: '45 mins',
      successRate: '60%',
      premium: true
    },
    {
      id: 'input-output',
      title: 'Input-Output',
      description: 'Machine input-output and step-by-step operations',
      questions: 35,
      difficulty: 'Medium to Hard',
      avgTime: '38 mins',
      successRate: '67%',
      premium: true
    }
  ];

  // Calculate total stats from all topics
  const totalQuestions = logicalTopics.reduce((total, topic) => total + topic.questions, 0);
  const totalTopics = logicalTopics.length;

  const featuredStats = [
    { icon: Brain, value: `${totalQuestions}+`, label: 'Practice Questions' },
    { icon: Users, value: '18K+', label: 'Students Enrolled' },
    { icon: Target, value: `${totalTopics}`, label: 'Topics Covered' },
    { icon: TrendingUp, value: '89%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onBack}
                className="hover:bg-purple-100"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Aptitude
              </Button>
              <div className="h-6 w-px bg-slate-300"></div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Logical Reasoning
                </h1>
                <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1">
                  Analytical Thinking
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Develop Logical Thinking
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Enhance your analytical and logical reasoning abilities with comprehensive practice in pattern recognition, 
            coding-decoding, relationships, and complex problem-solving techniques.
          </p>
        </div>

        {/* Simple Topics Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logicalTopics.map((topic) => (
              <Card 
                key={topic.id}
                className="bg-white/90 backdrop-blur-sm border-0 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden relative"
                onClick={() => setSelectedTopic(topic)}
              >
                {/* Premium Badge */}
                {topic.premium && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs">
                      Premium
                    </Badge>
                  </div>
                )}

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute -right-3 -top-3 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 to-transparent rounded-full"></div>
                  <div className="absolute -left-3 -bottom-3 w-16 h-16 bg-gradient-to-tr from-purple-500 to-indigo-500 to-transparent rounded-full"></div>
                </div>

                <CardHeader className="pb-3 relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-3 shadow-md">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  
                  <CardTitle className="text-lg font-bold text-slate-800 mb-2">
                    {topic.title}
                  </CardTitle>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0 relative space-y-3">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-purple-50 rounded-lg p-2">
                      <p className="text-sm font-bold text-purple-600">{topic.questions}</p>
                      <p className="text-xs text-slate-600">Questions</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-2">
                      <p className="text-sm font-bold text-indigo-600">{topic.successRate}</p>
                      <p className="text-xs text-slate-600">Success Rate</p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="flex justify-between text-xs text-slate-600 bg-slate-50 rounded-lg p-2">
                    <span><Clock className="h-3 w-3 inline mr-1" />{topic.avgTime}</span>
                    <span><Target className="h-3 w-3 inline mr-1" />{topic.difficulty}</span>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white border-0 shadow-md transition-all duration-300 py-2 rounded-lg font-semibold text-sm"
                    disabled={topic.premium}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!topic.premium) {
                        // Navigate to logical-reasoning questions for all logical topics
                        onNavigate('practice', 'logical-reasoning');
                      }
                    }}
                  >
                    {topic.premium ? (
                      <>
                        <Award className="h-3 w-3 mr-2" />
                        Upgrade to Access
                      </>
                    ) : (
                      <>
                        <span className="mr-2">Start Practice</span>
                        <ArrowRight className="h-3 w-3" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Ready to Master Logical Reasoning?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto text-lg">
              Challenge yourself with complex logical puzzles, pattern recognition, and analytical reasoning. 
              Develop critical thinking skills essential for competitive exams and problem-solving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('topic-practice')}
                className="bg-white text-purple-600 hover:bg-purple-50 px-6 py-3 font-semibold rounded-lg transition-all duration-300"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Start Free Practice
              </Button>
              <Button
                onClick={() => onNavigate('premium-dashboard')}
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6 py-3 font-semibold rounded-lg transition-all duration-300"
              >
                <Award className="h-5 w-5 mr-2" />
                Unlock Premium Topics
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LogicalLanding;