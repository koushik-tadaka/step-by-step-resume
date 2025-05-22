
import React from 'react';
import { useResume } from '@/contexts/ResumeContext';
import { toast } from 'sonner';
import html2pdf from 'html2pdf.js';

interface Step3FormProps {
  onPrev: () => void;
}

const Step3Form: React.FC<Step3FormProps> = ({ onPrev }) => {
  const { resumeData, setAccentColor, setAccentGradient, accentColor } = useResume();
  const [declaration, setDeclaration] = React.useState(false);

  const templateOptions = [
    {
      name: 'Blue',
      color: '#1e40af',
      gradient: 'linear-gradient(90deg, #1e40af 0%, #60a5fa 100%)'
    },
    {
      name: 'Brown',
      color: '#a16207',
      gradient: 'linear-gradient(90deg, #a16207 0%, #fbbf24 100%)'
    },
    {
      name: 'Orange',
      color: '#e45a33',
      gradient: 'linear-gradient(90deg, #e45a33 0%, #f26e50 100%)'
    }
  ];

  const handleTemplateSelection = (color: string, gradient: string) => {
    setAccentColor(color);
    setAccentGradient(gradient);
  };

  const handleFinish = () => {
    if (!declaration) {
      toast.error('Please accept the declaration to continue');
      return;
    }

    // Generate PDF
    const element = document.getElementById('resumeContent');
    if (element) {
      const opt = {
        margin: [0, 0, 0, 0],
        filename: `resume-${resumeData.fullName.toLowerCase().replace(/\s+/g, '-')}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      toast.promise(
        async () => {
          await html2pdf().from(element).set(opt).save();
          return true;
        },
        {
          loading: 'Generating PDF...',
          success: 'Resume created successfully!',
          error: 'Failed to generate PDF'
        }
      );
    }
  };

  return (
    <div className="form-step mt-8">
      <div className="step-indicator">Step 3/3</div>
      <h3 className="section-title first-section-title">Templates:</h3>
      
      {/* Template color options */}
      <div className="flex justify-between mb-8">
        {templateOptions.map((template) => (
          <div 
            key={template.name}
            className={`template-option cursor-pointer flex flex-col items-center p-2 rounded-lg ${accentColor === template.color ? 'ring-2 ring-black' : ''}`}
            onClick={() => handleTemplateSelection(template.color, template.gradient)}
          >
            <span 
              className="w-10 h-10 rounded-full mb-2" 
              style={{ background: template.gradient }}
            />
            <span 
              className="text-sm font-semibold" 
              style={{ color: template.color }}
            >
              {template.name}
            </span>
          </div>
        ))}
      </div>
      
      <div className="form-field">
        <input 
          type="checkbox" 
          id="declaration" 
          className="mr-2"
          checked={declaration}
          onChange={(e) => setDeclaration(e.target.checked)}
        />
        <label htmlFor="declaration">
          I hereby declare that all of above information is true to my knowledge.
        </label>
      </div>
      
      <div className="nav-buttons">
        <button className="nav-button prev-button" onClick={onPrev}>
          Previous
        </button>
        <button 
          className="nav-button finish-button"
          onClick={handleFinish}
          disabled={!declaration}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default Step3Form;
