// WhyChooseUsSection.jsx
import { Shield, Zap, Code } from 'lucide-react';

export default function Section_3() {
  return (
    <div className="bg-[#f1faee] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d3557]">Why Choose DevVerse?</h2>
          <p className="text-lg text-[#1d3557] max-w-3xl mx-auto">
            Join thousands of developers who trust DevVerse to protect and enhance their code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1d3557] p-6 rounded-lg">
            <div className="text-[#e63946] mb-4">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Enhanced Security</h3>
            <p className="text-gray-300">
              Detect vulnerabilities before they become security breaches. Our advanced scanning ensures your code is secure from day one.
            </p>
          </div>

          <div className="bg-[#1d3557] p-6 rounded-lg">
            <div className="text-[#e63946] mb-4">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Lightning Fast</h3>
            <p className="text-gray-300">
              Get instant feedback without disrupting your workflow. DevVerse works in real-time as you code.
            </p>
          </div>

          <div className="bg-[#1d3557] p-6 rounded-lg">
            <div className="text-[#e63946] mb-4">
              <Code size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Code Excellence</h3>
            <p className="text-gray-300">
              Improve your development skills with actionable insights and learn industry best practices with every scan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}