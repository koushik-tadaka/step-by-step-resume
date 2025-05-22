
import React from 'react';
import { useResume } from '@/contexts/ResumeContext';

const ProgressBar: React.FC = () => {
  const { currentStep, setCurrentStep, accentColor } = useResume();
  
  const indicators = [
    { step: 1, icon: 'user', label: 'Personal', position: '16.7%' },
    { step: 2, icon: 'graduation-cap', label: 'Academic', position: '50%' },
    { step: 3, icon: 'file-alt', label: 'Template', position: '83.3%' }
  ];

  return (
    <div className="progress-bar">
      {indicators.map((indicator) => (
        <div 
          key={indicator.step}
          className="progress-indicator cursor-pointer"
          style={{ 
            left: indicator.position,
          }}
          onClick={() => setCurrentStep(indicator.step)}
        >
          <div className="icon" style={{ backgroundColor: currentStep >= indicator.step ? accentColor : '#ccc' }}>
            <i className={`fas fa-${indicator.icon}`}></i>
          </div>
          <div 
            className="label"
            style={{ color: currentStep >= indicator.step ? accentColor : '#ccc' }}
          >
            {indicator.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
