// src/App.tsx
import React from 'react';
import { ThemeProvider } from './components/theme-provider';
import Background from './components/ui/background';
import Index from './pages/Index';
import Analysis from './pages/Analysis';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Background withParticles={true}>
        <Router>
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </Background>
    </ThemeProvider>
  );
}

export default App;