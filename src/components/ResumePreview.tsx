
import React, { useMemo } from 'react';
import { useResume } from '@/contexts/ResumeContext';
import html2pdf from 'html2pdf.js';

const ResumePreview: React.FC = () => {
  const { resumeData, accentColor, accentGradient } = useResume();

  // Parse multi-line text into arrays
  const jobDescriptionArr = useMemo(() => 
    resumeData.jobDescription.split('\n').filter((s) => s.trim() !== ""), 
    [resumeData.jobDescription]
  );
  
  const skillsArr = useMemo(() => 
    resumeData.skills.split('\n').filter((s) => s.trim() !== ""), 
    [resumeData.skills]
  );
  
  const interest1Arr = useMemo(() => 
    resumeData.interest1.split('\n').filter((s) => s.trim() !== ""), 
    [resumeData.interest1]
  );
  
  const interest2Arr = useMemo(() => 
    resumeData.interest2.split('\n').filter((s) => s.trim() !== ""), 
    [resumeData.interest2]
  );
  
  const languagesArr = useMemo(() => 
    resumeData.languages.split('\n').filter((s) => s.trim() !== ""), 
    [resumeData.languages]
  );

  const handleSavePDF = () => {
    const element = document.getElementById('resumeContent');
    if (element) {
      const opt = {
        margin: [0, 0, 0, 0],
        filename: `resume-${resumeData.fullName.toLowerCase().replace(/\s+/g, '-')}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      
      html2pdf().from(element).set(opt).save();
    }
  };

  return (
    <section 
      id="preview"
      className="bg-white w-full md:w-1/2 flex-shrink-0 text-gray-800 p-6 overflow-y-auto max-h-screen relative"
      style={{ scrollBehavior: 'smooth' }}
    >
      {/* Save PDF Button */}
      <button 
        id="savePDF" 
        className="absolute top-2 right-2 text-white px-4 py-2 rounded shadow-md hover:bg-opacity-90 transition-colors duration-300 flex items-center"
        style={{ backgroundColor: accentColor }}
        onClick={handleSavePDF}
      >
        <i className="fas fa-file-download mr-2"></i> Save PDF
      </button>
      
      <div id="resumeContent" className="resume-modern p-8 shadow-lg max-w-3xl mx-auto bg-white">
        {/* Header Section */}
        <div className="resume-header mb-8">
          <div 
            className="accent-bar mb-6"
            style={{ background: accentGradient }}
          ></div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{resumeData.fullName}</h1>
              <p className="text-md text-gray-600 mt-1">Retail Sales Professional</p>
            </div>
            <div className="mt-4 md:mt-0">
              <img
                alt="Profile"
                className="w-24 h-24 object-cover rounded-full border-4 border-[#f2f2f2]"
                src={resumeData.photoUrl || "https://placehold.co/150x180/png?text=No+Image&font=Open+Sans"}
              />
            </div>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded-lg mb-8">
          <p className="flex items-center text-sm text-gray-600 mb-2 md:mb-0">
            <i className="fas fa-map-marker-alt mr-2" style={{ color: accentColor }}></i>
            <span>{resumeData.address}</span>
          </p>
          <p className="flex items-center text-sm text-gray-600 mb-2 md:mb-0">
            <i className="fas fa-phone-alt mr-2" style={{ color: accentColor }}></i>
            <span>{resumeData.phone}</span>
          </p>
          <p className="flex items-center text-sm text-gray-600">
            <i className="fas fa-envelope mr-2" style={{ color: accentColor }}></i>
            <span>{resumeData.email}</span>
          </p>
        </div>
        
        {/* Summary Section */}
        <div className="mb-8">
          <h2 
            className="text-lg font-semibold mb-3 pb-1 border-b border-gray-200"
            style={{ color: accentColor }}
          >
            SUMMARY
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">{resumeData.objective}</p>
        </div>
        
        {/* Experience Section */}
        <div className="mb-8">
          <h2 
            className="text-lg font-semibold mb-3 pb-1 border-b border-gray-200"
            style={{ color: accentColor }}
          >
            WORK EXPERIENCE
          </h2>
          
          {/* Experience 1 */}
          <div className="mb-8">
            <div className="flex justify-between">
              <h3 className="font-semibold text-gray-800 text-md">
                {resumeData.jobTitle} at {resumeData.companyName}
              </h3>
              <span className="text-sm text-gray-500">{resumeData.jobDates}</span>
            </div>
            <ul className="mt-2 space-y-1">
              {jobDescriptionArr.map((bullet, idx) => (
                <li key={idx} className="experience-item">{bullet}</li>
              ))}
            </ul>
          </div>
          
          {/* Education Block */}
          <div className="mb-8">
            <h3 
              className="font-semibold text-md mb-2"
              style={{ color: accentColor }}
            >
              EDUCATION
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">UG:</span>{' '}
                {resumeData.ugDegree},{' '}
                {resumeData.ugCGPA} CGPA,{' '}
                {resumeData.ugYear}
              </li>
              <li>
                <span className="font-semibold">12th:</span>{' '}
                {resumeData.twelveBoard},{' '}
                {resumeData.twelvePercent},{' '}
                {resumeData.twelveYear}
              </li>
              <li>
                <span className="font-semibold">10th:</span>{' '}
                {resumeData.tenBoard},{' '}
                {resumeData.tenPercent},{' '}
                {resumeData.tenYear}
              </li>
            </ul>
          </div>
        </div>
        
        {/* Two Column Layout for Skills and Education */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Skills */}
          <div className="w-full md:w-1/2">
            <h2 
              className="text-lg font-semibold mb-3 pb-1 border-b border-gray-200"
              style={{ color: accentColor }}
            >
              SKILLS
            </h2>
            <div className="flex flex-wrap">
              {skillsArr.map((skill, idx) => (
                <div key={idx} className="skill-bubble">
                  {skill}
                </div>
              ))}
            </div>
            
            <h2 
              className="text-lg font-semibold mt-6 mb-3 pb-1 border-b border-gray-200"
              style={{ color: accentColor }}
            >
              LANGUAGES
            </h2>
            <div className="text-sm">
              {languagesArr.map((lang, idx) => (
                <p key={idx} className="mb-1">
                  <span 
                    className="inline-block w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: accentColor }}
                  ></span>
                  {lang}
                </p>
              ))}
            </div>
          </div>
          
          {/* Right Column - Interests */}
          <div className="w-full md:w-1/2">
            <h2 
              className="text-lg font-semibold mt-6 md:mt-0 mb-3 pb-1 border-b border-gray-200"
              style={{ color: accentColor }}
            >
              INTERESTS & ACTIVITIES
            </h2>
            <div className="text-sm">
              <p className="font-medium text-gray-700 mb-1">Recreational Football League</p>
              <ul className="text-sm text-gray-600 list-disc pl-5 mb-3">
                {interest1Arr.map((interest, idx) => (
                  <li key={idx}>{interest}</li>
                ))}
              </ul>
              
              <p className="font-medium text-gray-700 mb-1">Red Cross Volunteer</p>
              <ul className="text-sm text-gray-600 list-disc pl-5">
                {interest2Arr.map((interest, idx) => (
                  <li key={idx}>{interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePreview;
