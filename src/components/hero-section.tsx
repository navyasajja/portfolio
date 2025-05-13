import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FC } from "react";

export const HeroSection: FC = () => {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 dark:from-primary/10 dark:to-blue-500/10" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Hello, I'm <span className="text-gradient">Navya Sajja</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 text-gray-600 dark:text-gray-300">
              B.Tech in Computer Science with Data Science Specialization
            </h2>
            <p className="text-lg mb-8 max-w-2xl text-gray-600 dark:text-gray-300">
              A passionate computer science graduate with expertise in data science 
              and full-stack development, ready to solve complex problems with innovative solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="secondary" asChild className="flex items-center gap-2">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText size={18} />
                  View Resume
                </a>
              </Button>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="https://github.com/2200030711" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/navya-sajja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:navyasajja1234@gmail.com" 
                className="hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="tel:+919542964690" 
                className="hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-full blur opacity-75"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-full overflow-hidden border-2 border-gray-100 dark:border-gray-800">
                <div className="aspect-square flex items-center justify-center">
                  <img 
                    src="/profile.jpg" 
                    alt="Navya Sajja Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};