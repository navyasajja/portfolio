
import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in">
            Passionate about leveraging technology to create impactful solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
            <h3 className="text-xl font-semibold mb-3">Education Background</h3>
            <p className="text-gray-600 dark:text-gray-300">
              B.Tech in Computer Science with specialization in Data Science from KL University with a strong academic record (CGPA 9.06).
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
            <h3 className="text-xl font-semibold mb-3">Technical Journey</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Skilled in multiple programming languages and full-stack development frameworks. Passionate about solving complex problems through code.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
            <h3 className="text-xl font-semibold mb-3">Career Aspirations</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Looking to contribute to innovative projects that leverage both data science and software development skills to create meaningful impact.
            </p>
          </Card>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md animate-fade-in">
          <h3 className="text-2xl font-semibold mb-4">Personal Statement</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I am a computer science graduate with a specialization in data science, passionate about leveraging technology to solve real-world problems. With a strong foundation in programming and database management, I have developed several projects that demonstrate my technical abilities and problem-solving skills.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            I am particularly interested in the intersection of data science and software development, where I can apply analytical thinking and programming expertise to extract meaningful insights from complex datasets. I enjoy participating in hackathons to challenge myself and constantly learn new technologies and methodologies.
          </p>
        </div>
      </div>
    </section>
  );
}
