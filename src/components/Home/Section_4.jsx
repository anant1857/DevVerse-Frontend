// HowItWorksSection.jsx
import { Upload, Cog, AlertCircle, CheckSquare } from 'lucide-react';

export default function Section_4() {
  const steps = [
    {
      id: 1,
      icon: <Upload size={32} />,
      title: "Upload Your Code",
      description: "Submit your code or connect your repository for seamless integration with our platform."
    },
    {
      id: 2,
      icon: <Cog size={32} />,
      title: "Automated Analysis",
      description: "Our AI engine analyzes your code for bugs, vulnerabilities, and plagiarism in seconds."
    },
    {
      id: 3,
      icon: <AlertCircle size={32} />,
      title: "Issue Identification",
      description: "Get detailed reports on potential problems with actionable suggestions for improvement."
    },
    {
      id: 4,
      icon: <CheckSquare size={32} />,
      title: "Fix & Verify",
      description: "Implement the suggested changes and verify your code is clean, secure, and original."
    }
  ];

  return (
    <div className="bg-[#f1faee] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d3557]">How DevVerse Works</h2>
          <p className="text-lg text-[#1d3557] max-w-3xl mx-auto">
            A simple yet powerful workflow to elevate your code quality in minutes.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#232323] via-[#e63946] to-[#232323] transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="bg-[#1d3557] p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-[#a8dadc] rounded-full flex items-center justify-center mb-4 border-2 border-[#e63946]">
                  <div className="text-[#e63946]">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-[#e63946] rounded-md font-medium hover:bg-opacity-90 transition-all text-white">
            Try DevVerse Now
          </button>
        </div>
      </div>
    </div>
  );
}