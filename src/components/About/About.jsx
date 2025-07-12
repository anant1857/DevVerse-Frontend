// import React from "react";
// import { ShieldCheck, Code2, FileCode2, SearchCheck, Sparkles } from "lucide-react";

// const About = () => {
//   return (
//     <div className="min-h-screen bg-[#232323] text-white px-6 md:px-20 py-12 flex flex-col gap-12">
//       <div className="text-center">
//         <h1 className="text-4xl md:text-5xl font-bold text-[#d16439] tracking-wide mb-4">
//           About <span className="text-white">DevVerse</span>
//         </h1>
//         <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
//           Your AI-powered developer companion for cleaner code, smarter validation, and unmatched peace of mind.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Code Reviewer */}
//         <div className="bg-[#2d2d2d] p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
//           <div className="flex items-center gap-4 mb-4 text-[#d16439]">
//             <Code2 className="w-8 h-8" />
//             <h2 className="text-xl font-semibold">Code Reviewer</h2>
//           </div>
//           <p className="text-gray-400">
//             Automatically analyze your code with precision. Get intelligent feedback, pinpoint flaws, and enhance your coding standards with ease.
//           </p>
//         </div>

//         {/* JSON Schema Checker */}
//         <div className="bg-[#2d2d2d] p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
//           <div className="flex items-center gap-4 mb-4 text-[#d16439]">
//             <FileCode2 className="w-8 h-8" />
//             <h2 className="text-xl font-semibold">JSON Schema Checker</h2>
//           </div>
//           <p className="text-gray-400">
//             Validate your JSON like a pro. Ensure structure, formatting, and data integrity are always on point with real-time smart validation.
//           </p>
//         </div>

//         {/* Plagiarism Checker */}
//         <div className="bg-[#2d2d2d] p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
//           <div className="flex items-center gap-4 mb-4 text-[#d16439]">
//             <SearchCheck className="w-8 h-8" />
//             <h2 className="text-xl font-semibold">Plagiarism Checker</h2>
//           </div>
//           <p className="text-gray-400">
//             Ensure your work is original. Detect similarities, avoid duplication, and maintain authenticity in your code and content.
//           </p>
//         </div>
//       </div>

//       <div className="bg-[#2d2d2d] mt-10 p-8 rounded-2xl text-center">
//         <div className="flex justify-center mb-4 text-[#d16439]">
//           <ShieldCheck className="w-10 h-10" />
//         </div>
//         <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
//           Built to Empower Developers
//         </h2>
//         <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
//           DevVerse is not just a tool—it's your coding ally. Whether you're debugging, validating, or verifying originality, we help you build with confidence. Stay sharp. Stay original. Stay guarded.
//         </p>
//       </div>

//       <div className="text-center mt-12">
//         <span className="inline-flex items-center gap-2 text-[#d16439] text-lg font-medium">
//           <Sparkles className="w-5 h-5" /> Made with passion for developers, by developers.
//         </span>
//       </div>
//     </div>
//   );
// };

// export default About;



import React from "react";
import {
  Sparkles,
  ShieldAlert,
  Code2,
  FileWarning,
  Brain,
  SearchCode,
} from "lucide-react";

const features = [
  {
    icon: <Code2 className="w-8 h-8 text-[#d16439]" />,
    title: "Smart Code Reviews",
    desc: "Catch bugs before they bite. We offer intelligent, real-time suggestions so you code faster and better.",
  },
  {
    icon: <FileWarning className="w-8 h-8 text-[#d16439]" />,
    title: "JSON Schema Validator",
    desc: "No more broken APIs. Validate and verify your data structures with clarity and ease.",
  },
  {
    icon: <SearchCode className="w-8 h-8 text-[#d16439]" />,
    title: "Plagiarism Checker",
    desc: "Protect your originality. Detect duplicates and ensure every line is uniquely yours.",
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-[#d16439]" />,
    title: "Secure & Reliable",
    desc: "Built with developer trust in mind, your code stays private, your reviews are instant.",
  },
];

const About= () => {
  return (
    <div className="bg-[#232323] text-white min-h-screen px-6 md:px-20 py-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Not just tools —
          <span className="text-[#d16439]"> superpowers for your code.</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mt-4">
          DevVerse helps you code cleaner, validate smarter, and build with peace of mind. Welcome to your AI-powered coding companion.
        </p>
      </div>

      {/* Feature Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#2b2b2b] rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.015] transition duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Mission / Story Section */}
      <div className="mt-24 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0 bg-[#d16439] text-[#232323] p-4 rounded-full">
          <Brain className="w-10 h-10" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Built by devs, for devs.
          </h2>
          <p className="text-gray-400 max-w-2xl">
            At DevVerse, we believe developers deserve better tools. Our mission is to turn every developer into a superhero by giving them intuitive, intelligent tools that improve productivity, confidence, and quality.
          </p>
        </div>
      </div>

      {/* Quote / Footer Line */}
      <div className="text-center mt-20">
        <div className="inline-flex items-center gap-2 text-[#d16439] text-lg font-medium">
          <Sparkles className="w-5 h-5" />
          Because clean code is powerful code.
        </div>
      </div>
    </div>
  );
};

export default About;
