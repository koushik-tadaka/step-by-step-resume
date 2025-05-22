
import React from 'react';
import { useResume } from '@/contexts/ResumeContext';
import ProgressBar from './ProgressBar';
import Step1Form from './Step1Form';
import Step2Form from './Step2Form';
import Step3Form from './Step3Form';
import ResumePreview from './ResumePreview';

const ResumeBuilder: React.FC = () => {
  const { currentStep, setCurrentStep } = useResume();
  
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    // Scroll to top when changing steps
    const editorSection = document.getElementById('editor');
    if (editorSection) {
      editorSection.scrollTop = 0;
    }
  };
  
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    // Scroll to top when changing steps
    const editorSection = document.getElementById('editor');
    if (editorSection) {
      editorSection.scrollTop = 0;
    }
  };

  // Render the current step form
  const renderStepForm = () => {
    switch (currentStep) {
      case 1:
        return <Step1Form onNext={nextStep} />;
      case 2:
        return <Step2Form onNext={nextStep} onPrev={prevStep} />;
      case 3:
        return <Step3Form onPrev={prevStep} />;
      default:
        return <Step1Form onNext={nextStep} />;
    }
  };

  return (
    <main className="max-w-7xl mx-auto bg-white rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden flex-1">
      {/* Left Editing Panel */}
      <section id="editor" className="w-full md:w-1/2 p-6 overflow-y-auto max-h-screen" style={{ scrollBehavior: 'smooth' }}>
        <h2 className="text-center text-3xl font-bold text-resume-orange mb-1">RESUME BUILDER</h2>
        <p className="text-center mb-8">Fill all form fields to go to next step</p>
        
        {/* Progress Bar */}
        <ProgressBar />
        
        {/* Form Sections */}
        {renderStepForm()}
      </section>

      {/* Right Resume Preview */}
      <ResumePreview />
    </main>
  );
};

export default ResumeBuilder;
