import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';
import { 
  Eye, 
  EyeOff, 
  BookOpen, 
  CheckCircle, 
  User, 
  Mail, 
  Lock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Signup = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      onNavigate('dashboard');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    'Access to 1600+ practice questions',
    'AI-powered mock interviews',
    'Detailed performance analytics',
    'Expert explanations for all solutions',
    'Progress tracking and insights'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Side - Branding */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-cyan-800 bg-clip-text text-transparent mb-2">
                EduMaster Pro
              </h1>
              <p className="text-slate-600 text-lg">Your AI-Powered Learning Companion</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">
              Join 50,000+ Learners Worldwide
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Transform your career with our comprehensive learning platform. Get access to expert-curated content, 
              AI-powered feedback, and detailed analytics to track your progress.
            </p>
            
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white w-fit mx-auto mb-4">
                <Sparkles className="h-4 w-4 mr-2" />
                Get Started Free
              </Badge>
              <CardTitle className="text-2xl font-bold text-slate-800">
                Create Your Account
              </CardTitle>
              <p className="text-slate-600 mt-2">
                Start your learning journey today
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10 h-12 bg-white border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 h-12 bg-white border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 pr-10 h-12 bg-white border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="pl-10 pr-10 h-12 bg-white border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Error Alert */}
                {error && (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertDescription className="text-red-700">
                      {error}
                    </AlertDescription>
                  </Alert>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </>
                  )}
                </Button>

                {/* Login Link */}
                <div className="text-center pt-4">
                  <span className="text-slate-600">Already have an account? </span>
                  <button
                    type="button"
                    onClick={() => onNavigate('login')}
                    className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent hover:underline"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Terms Notice */}
      <div className="fixed bottom-4 left-4 right-4">
        <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
          <p className="text-center text-sm text-slate-600">
            By creating an account, you agree to our{' '}
            <a href="#" className="text-emerald-600 hover:underline font-medium">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-emerald-600 hover:underline font-medium">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;