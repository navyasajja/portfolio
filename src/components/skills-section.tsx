
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { 
  Code, 
  Cpu, 
  Database, 
  Globe, 
  Languages, 
  Trophy, 
  Braces, 
  Server, 
  Palette, 
  Smartphone 
} from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("coding");
  
  const categories: SkillCategory[] = [
    {
      id: "coding",
      title: "Coding",
      icon: <Code className="w-5 h-5" />,
      color: "from-blue-400 to-purple-400",
      skills: [
        { name: "Python", icon: <Code className="w-5 h-5 text-blue-400" /> },
        { name: "Java", icon: <Code className="w-5 h-5 text-orange-400" /> },
        { name: "C", icon: <Code className="w-5 h-5 text-gray-400" /> }
      ]
    },
    {
      id: "fullstack",
      title: "Full Stack",
      icon: <Server className="w-5 h-5" />,
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "PFSD", icon: <Server className="w-5 h-5 text-blue-400" /> },
        { name: "MSWD", icon: <Server className="w-5 h-5 text-green-400" /> },
        { name: "JFSD", icon: <Server className="w-5 h-5 text-orange-400" /> }
      ]
    },
    {
      id: "frontend",
      title: "Frontend",
      icon: <Palette className="w-5 h-5" />,
      color: "from-pink-400 to-red-400",
      skills: [
        { name: "HTML", icon: <Braces className="w-5 h-5 text-orange-400" /> },
        { name: "CSS", icon: <Palette className="w-5 h-5 text-blue-400" /> },
        { name: "React", icon: <Braces className="w-5 h-5 text-orange-400" /> },
        { name: "Typescript", icon: <Braces className="w-5 h-5 text-orange-400" /> }
      ]
    },
    {
      id: "database",
      title: "Database",
      icon: <Database className="w-5 h-5" />,
      color: "from-green-400 to-teal-400",
      skills: [
        { name: "PostgreSQL", icon: <Database className="w-5 h-5 text-blue-400" /> },
        { name: "MongoDB", icon: <Database className="w-5 h-5 text-green-400" /> }
      ]
    },
    {
      id: "communication",
      title: "Communication",
      icon: <Languages className="w-5 h-5" />,
      color: "from-yellow-400 to-orange-400",
      skills: [
        { name: "English", icon: <Languages className="w-5 h-5 text-blue-400" /> },
        { name: "Telugu(Mother Tongue)", icon: <Languages className="w-5 h-5 text-orange-400" /> },
        { name: "Hindi", icon: <Languages className="w-5 h-5 text-red-400" /> }
      ]
    },
    {
      id: "external",
      title: "External Skills",
      icon: <Trophy className="w-5 h-5" />,
      color: "from-orange-400 to-red-400",
      skills: [
        { name: "Kho - Kho", icon: <Trophy className="w-5 h-5 text-yellow-400" /> }
      ]
    }
  ];
  
  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0];
  
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            My Skills
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in">
            The technologies and tools I work with
          </p>
        </div>
        
        {/* Category selector */}
        <div className="flex overflow-x-auto pb-4 gap-3 mb-12 justify-center flex-wrap animate-fade-in">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-3 rounded-full transition-all duration-300 flex items-center gap-3 whitespace-nowrap font-medium text-sm md:text-base ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-primary/20`
                  : 'bg-background/80 hover:bg-background border border-primary/10 text-foreground/80 hover:text-foreground'
              }`}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>
        
        {/* Skills display */}
        <div className="glass p-8 rounded-2xl backdrop-blur-lg bg-background/30 border border-primary/10 shadow-xl animate-fade-in">
          <div key={currentCategory.id} className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-10 text-center">
              <span className={`bg-gradient-to-r ${currentCategory.color} bg-clip-text text-transparent`}>
                {currentCategory.title} Skills
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentCategory.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-background/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill.icon}
                  <span className="text-lg font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2">4+</div>
            <p className="text-gray-600 dark:text-gray-300">Programming Languages</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2">3+</div>
            <p className="text-gray-600 dark:text-gray-300">Full Stack Frameworks</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2">2+</div>
            <p className="text-gray-600 dark:text-gray-300">Database Systems</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2">3+</div>
            <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
          </Card>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/10 to-primary/10 blur-3xl"></div>
    </section>
  );
}
