
import React from 'react';
import { useResume } from '@/contexts/ResumeContext';
import FormField from './FormField';

interface Step2FormProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step2Form: React.FC<Step2FormProps> = ({ onNext, onPrev }) => {
  return (
    <div className="form-step mt-8">
      <div className="step-indicator">Step 2/3</div>
      <h3 className="section-title first-section-title">Objective/Key Competencies:</h3>
      
      <FormField 
        id="objective" 
        label="Objective:" 
        type="textarea"
        rows={5}
        placeholder="Enter your career objective" 
        required
        showTips 
      />
      
      <h3 className="section-title">Experience:</h3>
      
      <FormField 
        id="companyName" 
        label="Company/Organisation Name:" 
        placeholder="Enter company name" 
        required 
      />
      
      <FormField 
        id="jobTitle" 
        label="Position/Job Profile:" 
        placeholder="Enter job title" 
        required 
      />

      <FormField 
        id="jobDates" 
        label="Duration:" 
        placeholder="Enter employment dates" 
      />

      <FormField 
        id="jobDescription" 
        label="Job Description:" 
        type="textarea"
        rows={5}
        placeholder="Enter job responsibilities" 
      />

      <h3 className="section-title">Education Qualification:</h3>

      {/* UG */}
      <FormField 
        id="ugDegree" 
        label="UG Degree:" 
        placeholder="Enter UG degree" 
        required 
      />
      
      <FormField 
        id="ugCGPA" 
        label="UG CGPA:" 
        placeholder="Enter CGPA" 
        required 
      />
      
      <FormField 
        id="ugYear" 
        label="UG Year:" 
        placeholder="Enter year of passing" 
        required 
      />

      {/* 12th */}
      <FormField 
        id="twelveBoard" 
        label="12th Board:" 
        placeholder="Enter 12th board" 
        required 
      />
      
      <FormField 
        id="twelvePercent" 
        label="12th Percentage:" 
        placeholder="Enter percentage" 
        required 
      />
      
      <FormField 
        id="twelveYear" 
        label="12th Year:" 
        placeholder="Enter year of passing" 
        required 
      />

      {/* 10th */}
      <FormField 
        id="tenBoard" 
        label="10th Board:" 
        placeholder="Enter 10th board" 
        required 
      />
      
      <FormField 
        id="tenPercent" 
        label="10th Percentage:" 
        placeholder="Enter percentage" 
        required 
      />
      
      <FormField 
        id="tenYear" 
        label="10th Year:" 
        placeholder="Enter year of passing" 
        required 
      />
      
      {/* Skills */}
      <h3 className="section-title">Skills:</h3>
      <FormField 
        id="skills" 
        label="Skills (one per line):" 
        type="textarea"
        rows={4}
        placeholder="Enter your skills, one per line" 
        required 
      />

      {/* Interests */}
      <h3 className="section-title">Interests & Activities:</h3>
      <FormField 
        id="interest1" 
        label="Interest/Activity 1 (one per line):" 
        type="textarea"
        rows={2}
        placeholder="Enter interest or activity" 
        required 
      />
      
      <FormField 
        id="interest2" 
        label="Interest/Activity 2 (one per line):" 
        type="textarea"
        rows={2}
        placeholder="Enter interest or activity" 
        required 
      />

      {/* Languages */}
      <h3 className="section-title">Languages:</h3>
      <FormField 
        id="languages" 
        label="Languages (one per line, e.g. Hindi:native, English:proficient):" 
        type="textarea"
        rows={3}
        placeholder="e.g. Hindi:native, English:proficient" 
        required 
      />
      
      <FormField 
        id="nativeLanguage" 
        label="Native Language:" 
        placeholder="Enter your native language" 
        required 
      />
      
      <div className="nav-buttons">
        <button className="nav-button prev-button" onClick={onPrev}>
          Previous
        </button>
        <button className="nav-button next-button" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2Form;
