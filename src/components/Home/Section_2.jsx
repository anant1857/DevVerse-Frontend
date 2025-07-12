// // FeaturesSection.jsx
// import { useState } from 'react';
// import { Code, FileJson, Search, Check, ChevronRight } from 'lucide-react';
// import { Link } from 'react-router-dom'; // ✅ Import Link

// export default function Section_2() {
//   const [activeTab, setActiveTab] = useState('code');

//   const features = [
//     {
//       id: 'code',
//       title: 'Code Reviewer',
//       icon: <Code size={24} />,
//       description: 'Advanced AI-powered code analysis that identifies bugs, security vulnerabilities, and performance issues in real-time.',
//       benefits: ['Detect bugs before they reach production', 'Improve code quality with actionable suggestions', 'Learn best practices while coding'],
//       link: '/review' // ✅ Added link
//     },
//     {
//       id: 'json',
//       title: 'JSON Checker',
//       icon: <FileJson size={24} />,
//       description: 'Validate, format, and analyze your JSON data structure with precision and ease.',
//       benefits: ['Instant validation and error highlighting', 'Format messy JSON with a single click', 'Deep structure analysis for complex objects'],
//       link: '/json-checker' // ✅ Added link
//     },
//     {
//       id: 'plagiarism',
//       title: 'Plagiarism Checker',
//       icon: <Search size={24} />,
//       description: 'Ensure code originality with our powerful plagiarism detection engine that searches across millions of repositories.',
//       benefits: ['Compare against open-source codebases', 'Protect your intellectual property', 'Verify code authenticity before deployment'],
//       link: '/plagiarism-checker' // ✅ Added link
//     }
//   ];

//   return (
//     <div className="bg-[#f1faee] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       <div className="mb-12 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d3557]">Powerful Tools for Developers</h2>
//         <p className="text-lg text-[#1d3557] max-w-3xl mx-auto">
//           DevVerse provides comprehensive tools to ensure your code is clean, correct, and original.
//         </p>
//       </div>

//       {/* Feature Tabs */}
//       <div className="mb-8 flex justify-center">
//         <div className="inline-flex rounded-md shadow-sm bg-[#1d3557]">
//           {features.map((feature) => (
//             <button
//               key={feature.id}
//               className={`px-4 py-2 text-sm font-medium ${
//                 activeTab === feature.id ? 'bg-[#e63946] text-white' : 'bg-transparent text-gray-300 hover:text-white'
//               } rounded-md flex items-center transition-all`}
//               onClick={() => setActiveTab(feature.id)}
//             >
//               {feature.icon}
//               <span className="ml-2">{feature.title}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Active Feature Display */}
//       {features.map((feature) => (
//         <div
//           key={feature.id}
//           className={`${
//             activeTab === feature.id ? 'block' : 'hidden'
//           } bg-[#1d3557] rounded-xl p-6 md:p-8 shadow-lg transition-all`}
//         >
//           <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
//             <div className="w-full md:w-1/2">
//               <div className="p-4 bg-[#a8dadc] rounded-lg inline-block mb-4">
//                 <div className="text-[#e63946] p-2">{feature.icon}</div>
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
//               <p className="text-gray-300 mb-6">{feature.description}</p>
//               <ul className="space-y-2">
//                 {feature.benefits.map((benefit, index) => (
//                   <li key={index} className="flex items-start text-white">
//                     <Check size={20} className="text-[#e63946] mr-2 mt-1 flex-shrink-0" />
//                     <span>{benefit}</span>
//                   </li>
//                 ))}
//               </ul>
//               <Link to={feature.link}> {/* ✅ Added Link wrapper */}
//                 <button className="cursor-pointer mt-6 px-5 py-2 bg-[#e63946] rounded-md font-medium flex items-center hover:bg-opacity-90 transition-all text-white">
//                   Try {feature.title} <ChevronRight size={18} className="ml-1" />
//                 </button>
//               </Link>
//             </div>
//             <div className="w-full md:w-1/2 bg-[#f1faee] rounded-lg p-4 h-64 flex items-center justify-center">
//               <div className="text-center">
//                 <div className="mb-4 flex justify-center text-[#e63946]">
//                   {feature.icon}
//                 </div>
//                 <p className="text-gray-400">Interactive demo would be displayed here</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


// FeaturesSection.jsx
import { useState, useRef, useEffect } from 'react';
import { Code, FileJson, Search, Check, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Section_2() {
  const [activeTab, setActiveTab] = useState('code');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    // Reset video player when tab changes
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [activeTab]);

  const features = [
    {
      id: 'code',
      title: 'Code Reviewer',
      icon: <Code size={28} />,
      description: 'Advanced AI-powered code analysis that identifies bugs, security vulnerabilities, and performance issues in real-time.',
      benefits: ['Detect bugs before they reach production', 'Improve code quality with actionable suggestions', 'Learn best practices while coding'],
      link: '/review',
      videoSrc: "/api/placeholder/640/360" // Replace with your actual video path
    },
    {
      id: 'json',
      title: 'JSON Checker',
      icon: <FileJson size={28} />,
      description: 'Validate, format, and analyze your JSON data structure with precision and ease.',
      benefits: ['Instant validation and error highlighting', 'Format messy JSON with a single click', 'Deep structure analysis for complex objects'],
      link: '/json-checker',
      videoSrc: "/api/placeholder/640/360" // Replace with your actual video path
    },
    {
      id: 'plagiarism',
      title: 'Plagiarism Checker',
      icon: <Search size={28} />,
      description: 'Ensure code originality with our powerful plagiarism detection engine that searches across millions of repositories.',
      benefits: ['Compare against open-source codebases', 'Protect your intellectual property', 'Verify code authenticity before deployment'],
      link: '/plagiarism-checker',
      videoSrc: "/api/placeholder/640/360" // Replace with your actual video path
    }
  ];

  return (
    <div className="bg-[#f1faee] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1d3557] mb-4">Powerful Tools for Developers</h2>
          <p className="text-lg text-[#1d3557] max-w-2xl mx-auto">
            DevVerse provides comprehensive tools to ensure your code is clean, correct, and original.
          </p>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Video Background */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl bg-[#1d3557] mb-12">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <video
                ref={videoRef}
                src={features.find(f => f.id === activeTab)?.videoSrc}
                className="w-full h-full object-cover opacity-80"
                poster="/api/placeholder/1200/675"
                muted={isMuted}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1d3557] via-transparent to-[#1d3557] opacity-80"></div>
              
              {/* Video Controls */}
              <div className="absolute bottom-6 left-6 flex space-x-4">
                <button 
                  onClick={handlePlayPause}
                  className="bg-[#e63946] p-3 rounded-full hover:bg-opacity-90 transition-all"
                >
                  {isPlaying ? (
                    <Pause size={24} className="text-white" />
                  ) : (
                    <Play size={24} className="text-white" />
                  )}
                </button>
                <button 
                  onClick={handleMute}
                  className="bg-[#1d3557] p-3 rounded-full hover:bg-opacity-90 transition-all"
                >
                  {isMuted ? (
                    <VolumeX size={24} className="text-white" />
                  ) : (
                    <Volume2 size={24} className="text-white" />
                  )}
                </button>
              </div>
              
              {/* Feature Title Overlay */}
              <div className="absolute top-6 left-6">
                <h3 className="text-3xl font-bold text-white">
                  {features.find(f => f.id === activeTab)?.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Feature Navigation */}
          <div className="flex flex-wrap -mx-4 mb-12">
            {features.map((feature) => (
              <div key={feature.id} className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                <div 
                  className={`
                    h-full cursor-pointer p-6 rounded-xl transition-all duration-300 transform
                    ${activeTab === feature.id ? 'bg-[#1d3557] shadow-lg scale-105' : 'bg-[#a8dadc] hover:shadow-md'}
                  `}
                  onClick={() => setActiveTab(feature.id)}
                >
                  <div className="flex items-center mb-4">
                    <div className={`
                      p-3 rounded-full
                      ${activeTab === feature.id ? 'bg-[#e63946]' : 'bg-[#1d3557]'}
                    `}>
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className={`
                      ml-4 text-xl font-bold
                      ${activeTab === feature.id ? 'text-white' : 'text-[#1d3557]'}
                    `}>
                      {feature.title}
                    </h3>
                  </div>
                  <p className={`
                    text-sm mb-4
                    ${activeTab === feature.id ? 'text-[#a8dadc]' : 'text-[#1d3557]'}
                  `}>
                    {feature.description}
                  </p>
                  {activeTab === feature.id && (
                    <Link to={feature.link}>
                      <button className="mt-2 px-4 py-2 bg-[#e63946] text-white rounded-lg flex items-center text-sm">
                        Explore <ChevronRight size={16} className="ml-1" />
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#1d3557] mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {features.find(f => f.id === activeTab)?.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="p-1 bg-[#a8dadc] rounded-full mr-3 flex-shrink-0">
                        <Check size={16} className="text-[#1d3557]" />
                      </div>
                      <p className="text-[#1d3557]">{benefit}</p>
                    </li>
                  ))}
                </ul>
                <Link to={features.find(f => f.id === activeTab)?.link} className="inline-block mt-6">
                  <button className="px-6 py-3 bg-[#e63946] text-[#1d3557] rounded-lg flex items-center font-medium hover:bg-opacity-90 transition-all shadow-md">
                    Try {features.find(f => f.id === activeTab)?.title}
                    <ChevronRight size={20} className="ml-2" />
                  </button>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#a8dadc] rounded-full opacity-20"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#e63946] rounded-full opacity-10"></div>
                <div className="relative bg-[#1d3557] rounded-xl p-6 h-full">
                  <div className="text-white space-y-4">
                    <h4 className="text-xl font-bold">Why developers love our {features.find(f => f.id === activeTab)?.title}</h4>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-[#a8dadc] bg-opacity-10 p-4 rounded-lg">
                        <p className="text-[#1d3557] text-sm">Productivity boost</p>
                        <p className="text-[#1d3557] text-2xl font-bold">47%</p>
                      </div>
                      <div className="bg-[#a8dadc] bg-opacity-10 p-4 rounded-lg">
                        <p className="text-[#1d3557] text-sm">Issues prevented</p>
                        <p className="text-[#1d3557] text-2xl font-bold">10k+</p>
                      </div>
                      <div className="bg-[#a8dadc] bg-opacity-10 p-4 rounded-lg">
                        <p className="text-[#1d3557] text-sm">Time saved</p>
                        <p className="text-[#1d3557] text-2xl font-bold">5h/week</p>
                      </div>
                      <div className="bg-[#a8dadc] bg-opacity-10 p-4 rounded-lg">
                        <p className="text-[#1d3557] text-sm">Satisfaction</p>
                        <p className="text-[#1d3557] text-2xl font-bold">98%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-[#1d3557] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e63946] rounded-full translate-x-1/2 -translate-y-1/2 opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#a8dadc] rounded-full flex items-center justify-center">
                  <span className="text-[#1d3557] font-bold">JD</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-bold">Jane Developer</h4>
                  <p className="text-[#a8dadc] text-sm">Senior Engineer at TechCorp</p>
                </div>
              </div>
              <p className="text-white text-lg italic">
                "The {features.find(f => f.id === activeTab)?.title} has completely transformed our development workflow. 
                We've cut our QA time in half and improved our code quality significantly."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}