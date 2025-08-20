import React from 'react';
import { Button } from './ui/button';
import { 
  Home, 
  User, 
  LogOut, 
  Sparkles,
  BookOpen
} from 'lucide-react';

const Navbar = ({ currentUser, onLogout, onNavigate, currentView }) => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Side - Logo and Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Aptitude Hub
                </h1>
                <p className="text-xs text-slate-500">Master Your Skills</p>
              </div>
            </div>

            {/* Navigation Links */}
            {currentUser && (
              <div className="hidden md:flex items-center gap-2">
                <Button
                  variant={currentView === 'dashboard' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => onNavigate('dashboard')}
                  className={`flex items-center gap-2 ${
                    currentView === 'dashboard' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  <Home className="h-4 w-4" />
                  Dashboard
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-800"
                >
                  <BookOpen className="h-4 w-4" />
                  Practice
                </Button>
              </div>
            )}
          </div>

          {/* Right Side - User Actions */}
          <div className="flex items-center gap-4">
            {currentUser ? (
              <>
                {/* User Info */}
                <div className="hidden sm:flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-800">
                      Welcome, {currentUser.name}
                    </p>
                    <p className="text-xs text-slate-500">{currentUser.email}</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Logout Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onLogout}
                  className="flex items-center gap-2 border-2 hover:scale-105 transition-all duration-300"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Logout</span>
                </Button>
              </>
            ) : (
              <>
                {/* Login/Signup Buttons */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate('login')}
                  className="text-slate-600 hover:text-slate-800"
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  onClick={() => onNavigate('signup')}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition-all duration-300"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;