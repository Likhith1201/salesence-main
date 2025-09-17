// src/components/ui/background.tsx
import React, { useEffect, useState } from 'react';
import './Background.css'; // Create this file with the CSS above

interface BackgroundProps {
  children: React.ReactNode;
  withParticles?: boolean;
}

const Background: React.FC<BackgroundProps> = ({ children, withParticles = true }) => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (withParticles) {
      const particlesArray = [];
      for (let i = 0; i < 30; i++) {
        particlesArray.push(
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 15}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        );
      }
      setParticles(particlesArray);
    }
  }, [withParticles]);

  return (
    <div className="dark-gradient-bg">
      {withParticles && <div className="bg-particles">{particles}</div>}
      {children}
    </div>
  );
};

export default Background;