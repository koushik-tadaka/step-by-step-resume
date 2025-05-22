
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the types for our resume data
export interface ResumeData {
  // Personal Information
  fullName: string;
  email: string;
  phone: string;
  address: string;
  photoUrl: string;
  
  // Objective / Summary
  objective: string;
  
  // Experience
  companyName: string;
  jobTitle: string;
  jobDates: string;
  jobDescription: string;
  
  // Education
  ugDegree: string;
  ugCGPA: string;
  ugYear: string;
  twelveBoard: string;
  twelvePercent: string;
  twelveYear: string;
  tenBoard: string;
  tenPercent: string;
  tenYear: string;
  
  // Skills and Interests
  skills: string;
  interest1: string;
  interest2: string;
  languages: string;
  nativeLanguage: string;
}

// Define the types for our context
interface ResumeContextProps {
  resumeData: ResumeData;
  updateResumeData: (field: keyof ResumeData, value: string) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  accentColor: string;
  setAccentColor: (color: string) => void;
  accentGradient: string;
  setAccentGradient: (gradient: string) => void;
}

// Create context with a default value
const ResumeContext = createContext<ResumeContextProps | undefined>(undefined);

// Create a provider component
interface ResumeProviderProps {
  children: ReactNode;
}

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
  // Default resume data
  const [resumeData, setResumeData] = useState<ResumeData>({
    fullName: 'Diya Agarwal',
    email: 'd.agarwal@sample.in',
    phone: '+91 11 5555 3345',
    address: 'New Delhi, India 110034',
    photoUrl: 'https://storage.googleapis.com/a1aa/image/cf7c73ad-a13f-4fb5-1d74-5758dafc7b5e.jpg',
    
    objective: 'Customer-focused Retail Sales professional with solid understanding of retail dynamics, marketing and customer service. Offering 5 years of experience providing quality product recommendations and solutions to meet customer needs and exceed expectations. Demonstrated record of exceeding revenue targets by leveraging communication skills and sales expertise.',
    
    companyName: 'ZARA',
    jobTitle: 'Retail Sales Associate',
    jobDates: 'February 2017 - Current',
    jobDescription: 'Increased monthly sales 10% by effectively upselling and cross-selling products to maximize profitability\nPrevented store losses by leveraging awareness, attention to detail, and integrity to identify and investigate concerns.\nProcessed payments and maintained accurate drawers to meet financial targets.',
    
    ugDegree: 'B.Com (Hons)',
    ugCGPA: '8.2',
    ugYear: '2023',
    twelveBoard: 'CBSE',
    twelvePercent: '91%',
    twelveYear: '2020',
    tenBoard: 'CBSE',
    tenPercent: '93%',
    tenYear: '2018',
    
    skills: 'Cash register operation\nPOS system operation\nSales expertise\nTeamwork\nInventory management\nAccurate money handling\nDocumentation and recordkeeping\nRetail merchandising expertise',
    interest1: 'Team captain\nTwo-time league champions',
    interest2: 'Taught classes in lifesaving skills including: CPR, First Aid',
    languages: 'Hindi:native\nEnglish:proficient\nBengali:intermediate',
    nativeLanguage: 'Hindi'
  });

  // Current step state (1, 2, or 3)
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  // Theme/accent color state - default is orange
  const [accentColor, setAccentColor] = useState<string>('#f26e50');
  const [accentGradient, setAccentGradient] = useState<string>('linear-gradient(90deg, #e45a33 0%, #f26e50 100%)');

  // Update resume data function
  const updateResumeData = (field: keyof ResumeData, value: string) => {
    setResumeData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Create the context value
  const contextValue: ResumeContextProps = {
    resumeData,
    updateResumeData,
    currentStep,
    setCurrentStep,
    accentColor,
    setAccentColor,
    accentGradient,
    setAccentGradient
  };

  // Provide the context to children
  return (
    <ResumeContext.Provider value={contextValue}>
      {children}
    </ResumeContext.Provider>
  );
};

// Custom hook to use the resume context
export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};
