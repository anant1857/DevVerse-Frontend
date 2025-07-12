import React from 'react'
import {
  Code2,
  Braces,
  Coffee,
  FileCode,
  Server,
  BugPlay,
  Gem,
  Feather,
  Languages,
  Database,
  HardDrive,
  TerminalSquare,
  BookOpen,
} from "lucide-react";

const techStack = [
  { name: "JavaScript", icon: <Code2 className="text-[#f08553]" /> },
  { name: "Python", icon: <Feather className="text-[#f08553]" /> },
  { name: "Java", icon: <Coffee className="text-[#f08553]" /> },
  { name: "C#", icon: <Braces className="text-[#f08553]" /> },
  { name: "PHP", icon: <FileCode className="text-[#f08553]" /> },
  { name: "Go", icon: <Server className="text-[#f08553]" /> },
  { name: "Jest", icon: <BugPlay className="text-[#f08553]" /> },
  { name: "Ruby", icon: <Gem className="text-[#f08553]" /> },
  { name: "Swift", icon: <Feather className="text-[#f08553]" /> },
  { name: "Kotlin", icon: <Languages className="text-[#f08553]" /> },
  { name: "MySQL", icon: <Database className="text-[#f08553]" /> },
  { name: "PostgreSQL", icon: <HardDrive className="text-[#f08553]" /> },
  { name: "MongoDB", icon: <TerminalSquare className="text-[#f08553]" /> },
];

const Section_2 = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#232323] to-[#f08553] text-white px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          One Tool. All Languages. Limitless Code Reviews.
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium mb-12">
            Language & Database Support
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 bg-[#232323] px-4 py-2 rounded-lg shadow hover:scale-105 transition-transform duration-300 h-[80px] w-[200px]"
              >
                <div className="text-3xl">{tech.icon}</div>
                <span className="text-lg md:text-lg font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_2;
