
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  fullDescription: string;
  year: string;
}

const projects: Project[] = [
  {
    title: "Hospital Management System",
    description: "A comprehensive system designed to manage hospital workflows including patient data management, appointment scheduling, and billing operations.",
    fullDescription: "The Hospital Management System is designed to streamline hospital administrative processes and improve patient care coordination. This system enables efficient management of patient records, appointment scheduling, staff management, inventory tracking, billing operations, and reporting. The project was developed using Python for backend logic, MySQL for database management, and HTML/CSS for the user interface. Key features include patient registration, appointment management, electronic medical records, staff scheduling, inventory management, billing and invoicing, and comprehensive reporting dashboards. The system helps hospitals reduce administrative overhead, minimize errors, improve patient experience, and enhance overall operational efficiency.",
    technologies: ["Python", "HTML", "CSS", "MySQL"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    year: "2023"
  },
  {
    title: "Online Job Portal",
    description: "A web-based application that connects job seekers with potential employers. Features include user authentication, job listings, application tracking, and resume management.",
    fullDescription: "The Online Job Portal is a comprehensive platform designed to bridge the gap between job seekers and employers. Built using the MERN stack (MongoDB, Express, React, Node.js) with PostgreSQL for data storage, the portal offers an intuitive interface for both job seekers and recruiters. Job seekers can create profiles, upload resumes, search and filter job listings, apply to positions, and track their application status. Employers can post job openings, search for candidates, manage applications, and communicate with applicants. The system implements secure authentication, advanced search algorithms, real-time notifications, analytics dashboards, and responsive design for mobile access. This portal addresses the challenges in the recruitment process by providing a streamlined, efficient platform for connecting talent with opportunities.",
    technologies: ["MERN", "React", "PostgreSQL", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    year: "2024"
  },
  {
    title: "Indian Constitution",
    description: "A digital reference system that allows users to explore and learn about the Indian Constitution. Provides easy navigation through articles, amendments, and interpretations.",
    fullDescription: "The Indian Constitution project is an interactive digital platform designed to make constitutional knowledge accessible to everyone. Built using Java for backend processing, MongoDB for database management, and React for the frontend interface, this comprehensive reference system provides detailed information about India's constitution. Users can explore constitutional articles, amendments, landmark judgments, and legal interpretations through an intuitive interface. The platform features a powerful search functionality, comprehensive categorization of constitutional elements, visual representations of constitutional structures, interactive timelines of amendments, and educational resources. This project serves as an educational tool for students, a reference for legal professionals, and an informational resource for the general public, promoting greater constitutional literacy and awareness.",
    technologies: ["Java", "MongoDB", "React"],
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    year: "2023"
  }
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in">
            Showcasing my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.year}</p>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <div 
                        key={tech} 
                        className="px-2 py-1 bg-primary/10 dark:bg-primary/20 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </CardContent>
              
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" onClick={() => setActiveProject(project)}>
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px]">
                    <DialogHeader>
                      <DialogTitle>{activeProject?.title}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-6 py-4">
                      <div className="aspect-video overflow-hidden rounded-md">
                        <img 
                          src={activeProject?.imageUrl} 
                          alt={activeProject?.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {activeProject?.technologies.map((tech) => (
                            <div 
                              key={tech} 
                              className="px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Description</h4>
                        <p className="text-sm">{activeProject?.fullDescription}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
