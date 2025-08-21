import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  BookOpen, 
  MessageCircle, 
  FileText,
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Clock,
  Award,
  CheckCircle,
  PenTool,
  Search,
  Mic
} from 'lucide-react';

const VerbalLanding = ({ onNavigate, onBack }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Simplified verbal reasoning topics structure without categorized subtopics
  const verbalTopics = [
    {
      id: 'grammar',
      title: 'Grammar',
      description: 'English grammar rules, tenses, parts of speech, and sentence structure',
      questions: 65,
      difficulty: 'Easy to Medium',
      avgTime: '30 mins',
      successRate: '84%',
      premium: false
    },
    {
      id: 'vocabulary',
      title: 'Vocabulary',
      description: 'Word meanings, synonyms, antonyms, and word usage',
      questions: 80,
      difficulty: 'Easy to Hard',
      avgTime: '25 mins',
      successRate: '88%',
      premium: false
    },
    {
      id: 'sentence-correction',
      title: 'Sentence Correction',
      description: 'Identify and correct grammatical errors in sentences',
      questions: 55,
      difficulty: 'Medium',
      avgTime: '35 mins',
      successRate: '76%',
      premium: false
    },
    {
      id: 'reading-comprehension',
      title: 'Reading Comprehension',
      description: 'Understand passages and answer based on content, tone, and inference',
      questions: 70,
      difficulty: 'Medium to Hard',
      avgTime: '45 mins',
      successRate: '72%',
      premium: false
    },
    {
      id: 'critical-reasoning',
      title: 'Critical Reasoning',
      description: 'Analyze arguments, assumptions, and logical conclusions',
      questions: 40,
      difficulty: 'Hard',
      avgTime: '40 mins',
      successRate: '68%',
      premium: true
    },
    {
      id: 'para-completion',
      title: 'Para Completion',
      description: 'Complete paragraphs with appropriate sentences or phrases',
      questions: 35,
      difficulty: 'Medium',
      avgTime: '28 mins',
      successRate: '78%',
      premium: false
    },
    {
      id: 'verbal-analogies',
      title: 'Verbal Analogies',
      description: 'Word relationships and logical connections between terms',
      questions: 45,
      difficulty: 'Easy to Medium',
      avgTime: '22 mins',
      successRate: '85%',
      premium: false
    },
    {
      id: 'verbal-classification',
      title: 'Verbal Classification',
      description: 'Group words based on common properties or meanings',
      questions: 35,
      difficulty: 'Easy to Medium',
      avgTime: '20 mins',
      successRate: '87%',
      premium: false
    },
    {
      id: 'logical-deduction',
      title: 'Logical Deduction',
      description: 'Draw conclusions from given statements and premises',
      questions: 40,
      difficulty: 'Medium to Hard',
      avgTime: '32 mins',
      successRate: '70%',
      premium: true
    },
    {
      id: 'letter-writing',
      title: 'Letter Writing',
      description: 'Formal and informal letter writing techniques',
      questions: 25,
      difficulty: 'Easy to Medium',
      avgTime: '30 mins',
      successRate: '82%',
      premium: true
    },
    {
      id: 'essay-writing',
      title: 'Essay Writing',
      description: 'Structured essay composition and argumentative writing',
      questions: 20,
      difficulty: 'Medium',
      avgTime: '45 mins',
      successRate: '75%',
      premium: true
    },
    {
      id: 'precise-writing',
      title: 'Precise Writing',
      description: 'Summarization and concise expression of ideas',
      questions: 30,
      difficulty: 'Medium',
      avgTime: '35 mins',
      successRate: '77%',
      premium: true
    },
    {
      id: 'word-formation',
      title: 'Word Formation',
      description: 'Prefixes, suffixes, root words, and word building',
      questions: 30,
      difficulty: 'Medium',
      avgTime: '25 mins',
      successRate: '81%',
      premium: true
    },
    {
      id: 'figures-of-speech',
      title: 'Figures of Speech',
      description: 'Literary devices and rhetorical expressions',
      questions: 25,
      difficulty: 'Medium to Hard',
      avgTime: '28 mins',
      successRate: '73%',
      premium: true
    },
    {
      id: 'advanced-verbal-logic',
      title: 'Advanced Verbal Logic',
      description: 'Complex verbal reasoning and abstract thinking',
      questions: 35,
      difficulty: 'Hard',
      avgTime: '38 mins',
      successRate: '65%',
      premium: true
    }
  ];

  // Calculate total stats from all topics
  const totalQuestions = verbalTopics.reduce((total, topic) => total + topic.questions, 0);
  const totalTopics = verbalTopics.length;

  const featuredStats = [
    { icon: FileText, value: `${totalQuestions}+`, label: 'Practice Questions' },
    { icon: Users, value: '22K+', label: 'Students Enrolled' },
    { icon: Target, value: `${totalTopics}`, label: 'Topics Covered' },
    { icon: TrendingUp, value: '91%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onBack}
                className="hover:bg-orange-100"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Aptitude
              </Button>
              <div className="h-6 w-px bg-slate-300"></div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Verbal Reasoning
                </h1>
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1">
                  Language Mastery
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
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
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
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Master Verbal Communication
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Develop exceptional language skills with comprehensive training in grammar, vocabulary, reading comprehension, 
            and advanced communication techniques for academic and professional excellence.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {verbalTopics.map((topic) => (
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
                <div className="absolute -right-3 -top-3 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 to-transparent rounded-full"></div>
                <div className="absolute -left-3 -bottom-3 w-16 h-16 bg-gradient-to-tr from-orange-500 to-red-500 to-transparent rounded-full"></div>
              </div>

              <CardHeader className="pb-3 relative">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-3 shadow-md">
                  <BookOpen className="h-5 w-5 text-white" />
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
                  <div className="bg-orange-50 rounded-lg p-2">
                    <p className="text-sm font-bold text-orange-600">{topic.questions}</p>
                    <p className="text-xs text-slate-600">Questions</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-2">
                    <p className="text-sm font-bold text-red-600">{topic.successRate}</p>
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
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-md transition-all duration-300 py-2 rounded-lg font-semibold text-sm"
                  disabled={topic.premium}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!topic.premium) {
                      // Navigate to verbal-reasoning questions for all verbal topics
                      onNavigate('practice', 'verbal-reasoning');
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

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Ready to Excel in Verbal Skills?</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto text-lg">
              Build superior language proficiency with comprehensive practice in grammar, vocabulary, reading comprehension, 
              and communication skills. Perfect for competitive exams and professional growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('topic-practice')}
                className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 font-semibold rounded-lg transition-all duration-300"
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

export default VerbalLanding;