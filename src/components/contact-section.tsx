import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in">
            Let's connect and discuss potential opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <Card className="p-4 flex items-start space-x-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a 
                    href="tel:+919542964690" 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    +91 95429 64690
                  </a>
                </div>
              </Card>
              
              <Card className="p-4 flex items-start space-x-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:navyasajja1234@gmail.com" 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    navyasajja1234@gmail.com
                  </a>
                </div>
              </Card>
              
              <Card className="p-4 flex items-start space-x-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Chirala, India</p>
                </div>
              </Card>
              
              <Card className="p-4 flex items-start space-x-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/navya-sajja" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    www.linkedin.com/in/navya-sajja
                  </a>
                </div>
              </Card>
              
              <Card className="p-4 flex items-start space-x-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">GitHub</h4>
                  <a 
                    href="https://github.com/2200030711" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    github.com/2200030711
                  </a>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <Input type="text" placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Input type="text" placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-[120px]" />
                </div>
                <div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
