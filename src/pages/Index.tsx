
import React from 'react';
import { ResumeProvider } from '@/contexts/ResumeContext';
import ResumeBuilder from '@/components/ResumeBuilder';

const Index = () => {
  return (
    <div className="bg-gray-100 p-4 min-h-screen flex flex-col">
      <ResumeProvider>
        <ResumeBuilder />
      </ResumeProvider>
    </div>
  );
};

export default Index;
