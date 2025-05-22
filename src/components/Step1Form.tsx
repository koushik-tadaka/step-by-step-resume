
import React from 'react';
import { useResume } from '@/contexts/ResumeContext';
import FormField from './FormField';

interface Step1FormProps {
  onNext: () => void;
}

const Step1Form: React.FC<Step1FormProps> = ({ onNext }) => {
  const { resumeData, updateResumeData } = useResume();

  // Handle file upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (evt.target?.result) {
          updateResumeData('photoUrl', evt.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-step mt-8">
      <div className="step-indicator">Step 1/3</div>
      <h3 className="section-title first-section-title">Personal Information:</h3>
      
      <FormField 
        id="fullName" 
        label="Full Name:" 
        placeholder="Enter your full name" 
        required 
      />
      
      <FormField 
        id="email" 
        label="Email:" 
        type="email"
        placeholder="Enter your email" 
        required 
      />
      
      <FormField 
        id="phone" 
        label="Phone Number:" 
        placeholder="Enter your phone number" 
        required 
      />
      
      <FormField 
        id="address" 
        label="Address:" 
        type="textarea"
        rows={4}
        placeholder="Enter your address" 
        required 
      />
      
      <div className="form-field">
        <label htmlFor="photoUrl">Photo:</label>
        <div className="flex items-center gap-2">
          <input 
            type="url" 
            id="photoUrl" 
            placeholder="Enter image URL" 
            value={resumeData.photoUrl}
            onChange={(e) => updateResumeData('photoUrl', e.target.value)}
            className="flex-1"
          />
          <input 
            type="file" 
            id="photoFile" 
            accept="image/*" 
            onChange={handlePhotoUpload}
            className="flex-1"
          />
        </div>
      </div>
      
      <div className="nav-buttons">
        <button className="nav-button next-button" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1Form;
