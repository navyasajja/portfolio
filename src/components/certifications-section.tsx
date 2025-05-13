import { Badge } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Certification {
  title: string;
  issuer: string;
  description: string;
  pdfUrl: string;
}

export function CertificationsSection() {
  const certifications: Certification[] = [
    {
      title: "Salesforce AI Associate",
      issuer: "Salesforce",
      description: "Certified in implementing and managing Salesforce AI solutions, demonstrating proficiency in Einstein Analytics and AI capabilities.",
      pdfUrl: "salesforce-ai.pdf"
    },
    {
      title: "RedHat Certification",
      issuer: "RedHat",
      description: "Certified in Red Hat Enterprise Linux system administration, showcasing skills in managing and troubleshooting Linux environments.",
      pdfUrl: "redhat.pdf"
    },
    {
      title: "Automation Anywhere RPA",
      issuer: "Automation Anywhere",
      description: "Certified in Robotic Process Automation (RPA) using Automation Anywhere platform, demonstrating expertise in building and deploying automated workflows.",
      pdfUrl: "automation-anywhere.pdf"
    },
    {
      title: "Oracle Certification",
      issuer: "Oracle",
      description: "Certified in Oracle Database administration and development, showcasing proficiency in SQL, PL/SQL, and database management.",
      pdfUrl: "oracle.pdf"
    }
  ];
  
  const [openDialogs, setOpenDialogs] = useState<{[key: string]: boolean}>({});
  
  const toggleDialog = (certTitle: string) => {
    setOpenDialogs(prev => ({
      ...prev,
      [certTitle]: !prev[certTitle]
    }));
  };

  return (
    <section id="certifications" className="section-padding bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in">
            Industry-recognized credentials validating my expertise and knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={cert.title} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader className="bg-primary/5 dark:bg-primary/10">
                <div className="flex items-center mb-2">
                  <Badge size={20} className="text-primary mr-3" />
                  <CardTitle>{cert.title}</CardTitle>
                </div>
                <div className="text-sm text-muted-foreground">
                  {cert.issuer}
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <p className="text-gray-600 dark:text-gray-300">
                  {cert.description}
                </p>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" onClick={() => toggleDialog(cert.title)}>
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>{cert.title}</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                      <div className="mb-4">
                        <h4 className="font-medium text-sm text-muted-foreground">Issuer</h4>
                        <p>{cert.issuer}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground">Description</h4>
                        <p className="mt-1">{cert.description}</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button asChild>
                        <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer">
                          View Certificate
                        </a>
                      </Button>
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