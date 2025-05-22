
import React from 'react';
import { useResume } from '@/contexts/ResumeContext';

interface FormFieldProps {
  id: keyof ReturnType<typeof useResume>['resumeData'];
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  showTips?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({ 
  id, 
  label, 
  type = 'text', 
  placeholder = '', 
  required = false,
  rows = 1,
  showTips = false
}) => {
  const { resumeData, updateResumeData } = useResume();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateResumeData(id, e.target.value);
  };

  const showTipsHandler = () => {
    alert("Tips for filling this field:\n\n- Be concise and specific\n- Use action verbs\n- Quantify achievements when possible\n- Tailor to the job you're applying for");
  };

  return (
    <div className="form-field">
      <label htmlFor={id} className={required ? 'required' : ''}>
        {label}
      </label>
      
      {type === 'textarea' ? (
        <div>
          <textarea 
            id={id}
            rows={rows}
            placeholder={placeholder}
            value={resumeData[id]}
            onChange={handleChange}
          />
          {showTips && (
            <div className="tips-button mt-2" onClick={showTipsHandler}>
              Tips
            </div>
          )}
        </div>
      ) : (
        <input 
          type={type}
          id={id}
          placeholder={placeholder}
          value={resumeData[id]}
          onChange={handleChange}
        />
      )}
      
      {type === 'textarea' && (
        <div className="char-count">
          {resumeData[id].length} / 250
        </div>
      )}
    </div>
  );
};

export default FormField;
