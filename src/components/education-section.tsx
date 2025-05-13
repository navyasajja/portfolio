
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface Education {
  institution: string;
  degree: string;
  years: string;
  grade: string;
  description?: string;
}

const educationData: Education[] = [
  {
    institution: "KL University",
    degree: "B.Tech in Computer Science and Engineering",
    years: "2022 - 2026",
    grade: "CGPA: 9.06",
    description: "Specialization in Data Science and Machine Learning. Active participant in technical events and hackathons."
  },
  {
    institution: "Vignana Bharathi Junior College",
    degree: "Intermediate (MPC)",
    years: "2020 - 2022",
    grade: "Percentage: 87.2%",
    description: "Focus on Mathematics, Physics, and Chemistry."
  },
  {
    institution: "Noble High School",
    degree: "SSC",
    years: "2019 - 2020",
    grade: "Percentage: 85.5%",
    description: "Strong academic performance with participation in extracurricular activities."
  }
];

export function EducationSection() {
  return (
    <section id="education" className="section-padding bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in">
            My academic journey and qualifications
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-l-primary animate-fade-in hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{item.institution}</CardTitle>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{item.years}</span>
                  </Badge>
                </div>
                <p className="font-medium text-muted-foreground">{item.degree}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-muted-foreground">{item.grade}</p>
                  {item.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
