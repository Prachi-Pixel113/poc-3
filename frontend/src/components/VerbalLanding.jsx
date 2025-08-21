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

  // Organized verbal reasoning subtopics by categories for better structure
  const verbalCategories = [
    {
      id: 'language-skills',
      title: 'Language Skills',
      description: 'Grammar, vocabulary, and fundamental language concepts',
      color: 'from-orange-500 to-red-500',
      icon: PenTool,
      topics: [
        {
          id: 'grammar',
          title: 'Grammar',
          description: 'English grammar rules, tenses, parts of speech, and sentence structure',
          subtopics: ['Tenses', 'Parts of Speech', 'Subject-Verb Agreement', 'Articles', 'Prepositions'],
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
          subtopics: ['Synonyms', 'Antonyms', 'Word Meanings', 'Contextual Usage', 'Idioms & Phrases'],
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
          subtopics: ['Error Detection', 'Sentence Improvement', 'Para Jumbles', 'Fill in Blanks', 'Phrase Replacement'],
          questions: 55,
          difficulty: 'Medium',
          avgTime: '35 mins',
          successRate: '76%',
          premium: false
        }
      ]
    },
    {
      id: 'reading-comprehension',
      title: 'Reading & Comprehension',
      description: 'Text analysis, understanding, and inference skills',
      color: 'from-blue-500 to-indigo-500',
      icon: BookOpen,
      topics: [
        {
          id: 'reading-comprehension',
          title: 'Reading Comprehension',
          description: 'Understand passages and answer based on content, tone, and inference',
          subtopics: ['Factual Questions', 'Inferential Questions', 'Vocabulary in Context', 'Main Ideas', 'Author\'s Tone'],
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
          subtopics: ['Assumptions', 'Strengthen/Weaken', 'Inference', 'Paradox', 'Evaluate Arguments'],
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
          subtopics: ['Sentence Completion', 'Para Summary', 'Missing Sentence', 'Logical Flow', 'Context Clues'],
          questions: 35,
          difficulty: 'Medium',
          avgTime: '28 mins',
          successRate: '78%',
          premium: false
        }
      ]
    },
    {
      id: 'verbal-reasoning',
      title: 'Verbal Reasoning',
      description: 'Logical relationships and verbal problem solving',
      color: 'from-green-500 to-teal-500',
      icon: MessageCircle,
      topics: [
        {
          id: 'analogies',
          title: 'Verbal Analogies',
          description: 'Word relationships and logical connections between terms',
          subtopics: ['Word Relations', 'Cause & Effect', 'Part & Whole', 'Function Relations', 'Degree Relations'],
          questions: 45,
          difficulty: 'Easy to Medium',
          avgTime: '22 mins',
          successRate: '85%',
          premium: false
        },
        {
          id: 'classification',
          title: 'Verbal Classification',
          description: 'Group words based on common properties or meanings',
          subtopics: ['Odd One Out', 'Category Based', 'Property Based', 'Function Based', 'Abstract Relations'],
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
          subtopics: ['Statement & Conclusion', 'Cause & Effect', 'Logical Sequence', 'Argument Analysis', 'Premise & Conclusion'],
          questions: 40,
          difficulty: 'Medium to Hard',
          avgTime: '32 mins',
          successRate: '70%',
          premium: true
        }
      ]
    },
    {
      id: 'communication-skills',
      title: 'Communication Skills',
      description: 'Effective communication and language usage',
      color: 'from-purple-500 to-pink-500',
      icon: Mic,
      topics: [
        {
          id: 'letter-writing',
          title: 'Letter Writing',
          description: 'Formal and informal letter writing techniques',
          subtopics: ['Business Letters', 'Personal Letters', 'Complaint Letters', 'Application Letters', 'Email Etiquette'],
          questions: 25,
          difficulty: 'Easy to Medium',
          avgTime: '30 mins',
          successRate: '82%',
          premium: false
        },
        {
          id: 'essay-writing',
          title: 'Essay Writing',
          description: 'Structured essay composition and argumentative writing',
          subtopics: ['Descriptive Essays', 'Argumentative Essays', 'Narrative Essays', 'Expository Essays', 'Creative Writing'],
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
          subtopics: ['Summary Writing', 'Precis Writing', 'Note Making', 'Report Writing', 'Abstract Writing'],
          questions: 30,
          difficulty: 'Medium',
          avgTime: '35 mins',
          successRate: '77%',
          premium: true
        }
      ]
    },
    {
      id: 'advanced-verbal',
      title: 'Advanced Verbal Skills',
      description: 'Complex language patterns and advanced reasoning',
      color: 'from-teal-500 to-cyan-500',
      icon: Search,
      topics: [
        {
          id: 'word-formation',
          title: 'Word Formation',
          description: 'Prefixes, suffixes, root words, and word building',
          subtopics: ['Prefixes', 'Suffixes', 'Root Words', 'Compound Words', 'Word Derivatives'],
          questions: 30,
          difficulty: 'Medium',
          avgTime: '25 mins',
          successRate: '81%',
          premium: false
        },
        {
          id: 'figures-of-speech',
          title: 'Figures of Speech',
          description: 'Literary devices and rhetorical expressions',
          subtopics: ['Metaphor', 'Simile', 'Personification', 'Hyperbole', 'Alliteration'],
          questions: 25,
          difficulty: 'Medium to Hard',
          avgTime: '28 mins',
          successRate: '73%',
          premium: true
        },
        {
          id: 'verbal-reasoning-advanced',
          title: 'Advanced Verbal Logic',
          description: 'Complex verbal reasoning and abstract thinking',
          subtopics: ['Double Meaning', 'Verbal Puzzles', 'Word Games', 'Language Patterns', 'Abstract Reasoning'],
          questions: 35,
          difficulty: 'Hard',
          avgTime: '38 mins',
          successRate: '65%',
          premium: true
        }
      ]
    }
  ];

  // Calculate total stats from all categories
  const totalQuestions = verbalCategories.reduce((total, category) => 
    total + category.topics.reduce((catTotal, topic) => catTotal + topic.questions, 0), 0);
  
  const totalTopics = verbalCategories.reduce((total, category) => 
    total + category.topics.length, 0);

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

        {/* Categorized Topics Sections */}
        <div className="space-y-12 mb-16">
          {verbalCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={category.id} className="space-y-6">
                {/* Category Header */}
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${category.color} mb-4 mx-auto shadow-lg`}>
                    <CategoryIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                    {category.title}
                  </h3>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Topics Grid for this category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.topics.map((topic) => (
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
                        <div className={`absolute -right-3 -top-3 w-12 h-12 bg-gradient-to-br ${category.color} to-transparent rounded-full`}></div>
                        <div className={`absolute -left-3 -bottom-3 w-16 h-16 bg-gradient-to-tr ${category.color} to-transparent rounded-full`}></div>
                      </div>

                      <CardHeader className="pb-3 relative">
                        <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-3 shadow-md`}>
                          <CategoryIcon className="h-5 w-5 text-white" />
                        </div>
                        
                        <CardTitle className="text-lg font-bold text-slate-800 mb-2">
                          {topic.title}
                        </CardTitle>
                        
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {topic.description}
                        </p>
                      </CardHeader>

                      <CardContent className="pt-0 relative space-y-3">
                        {/* Subtopics */}
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-slate-700">Key Areas:</p>
                          <div className="flex flex-wrap gap-1">
                            {topic.subtopics.slice(0, 3).map((subtopic, index) => (
                              <Badge 
                                key={index}
                                variant="secondary" 
                                className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5"
                              >
                                {subtopic}
                              </Badge>
                            ))}
                            {topic.subtopics.length > 3 && (
                              <Badge 
                                variant="secondary" 
                                className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5"
                              >
                                +{topic.subtopics.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>

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
                          className={`w-full bg-gradient-to-r ${category.color} hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-md transition-all duration-300 py-2 rounded-lg font-semibold text-sm`}
                          disabled={topic.premium}
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

                {/* Category Divider (except for last category) */}
                {categoryIndex < verbalCategories.length - 1 && (
                  <div className="flex justify-center py-6">
                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
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