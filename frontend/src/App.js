import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import TopicPractice from './components/TopicPractice';
import { Toaster } from './components/ui/toaster';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSelectTopic = (topicId) => {
    setSelectedTopic(topicId);
    setCurrentView('practice');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedTopic(null);
  };

  return (
    <div className="App">
      {currentView === 'dashboard' && (
        <Dashboard onSelectTopic={handleSelectTopic} />
      )}
      
      {currentView === 'practice' && selectedTopic && (
        <TopicPractice 
          topicId={selectedTopic} 
          onBack={handleBackToDashboard} 
        />
      )}
      
      <Toaster />
    </div>
  );
}

export default App;