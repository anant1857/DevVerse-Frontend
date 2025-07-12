// HeroSection.jsx
import { ChevronRight, Eye } from 'lucide-react';

export default function Section_1() {
  return (
    <div className="relative overflow-hidden bg-[#f1faee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-[#e63946]">
            <span className="text-[#1d3557]">Dev</span>Guardian
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-[#1d3557] font-semibold">
            Your ultimate code defense system - Analyze, Validate, and Protect your development workflow
          </p>
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            <button className="cursor-pointer px-6 py-3 bg-[#e63946] rounded-md font-medium flex items-center hover:bg-opacity-90 transition-all text-white">
              Get Started <ChevronRight size={20} className="ml-2" />
            </button>
            <button className="cursor-pointer px-6 py-3 border border-[#e63946] rounded-md font-medium flex items-center hover:bg-[#e63946] hover:bg-opacity-10 transition-all text-[#1d3557]">
              View Demo <Eye size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Animated background dots (decorative) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute inset-0 opacity-20">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-[#1d3557]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 30 + 5}px`,
                height: `${Math.random() * 30 + 5}px`,
                opacity: Math.random() * 0.5 + 0.1
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}