import React from 'react'

import { ShieldCheck, Sparkles, Code, Cpu } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#f08553]" />,
    title: "Security First",
    description: "CodeGuardian performs deep scans to detect vulnerabilities before they reach production.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#f08553]" />,
    title: "Intelligent Suggestions",
    description: "AI-powered code insights help you write cleaner, more efficient code instantly.",
  },
  {
    icon: <Code className="w-8 h-8 text-[#f08553]" />,
    title: "Seamless Integration",
    description: "Integrates smoothly into your CI/CD workflow, boosting delivery speed and quality.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-[#f08553]" />,
    title: "Multi-Language Support",
    description: "Supports JavaScript, Python, Java, C#, and more out of the box — no config needed.",
  },
];

const Section_3 = () => {
  return (
    <>
  <section className="bg-gradient-to-b from-[#f08553] to-[#232323] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm font-semibold text-[#232323] mb-2">FEATURES</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Developers Love CodeGuardian</h3>
        <p className="text-gray-200 mb-12 max-w-2xl mx-auto">
          From intelligent analysis to seamless automation, CodeGuardian is built to accelerate your development workflow and secure your codebase — every step of the way.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-[#232323] p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Section_3
