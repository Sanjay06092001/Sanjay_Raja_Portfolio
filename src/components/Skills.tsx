
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React.js", level: 75 },
        { name: "JavaScript", level: 70 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Responsive Design", level: 80 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Bootstrap", level: 70 },
        { name: "Material-UI", level: 70 },
        { name: "Next.js", level: 70 },
        { name: "Redux", level: 80 }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express", level: 75 },
        { name: "RESTful APIs", level: 90 },
        { name: "Next.js", level: 70 },
        { name: "API Development (REST)", level: 80 },
        { name: "Agent Development", level: 60 },
        { name: "Node file system", level: 70 },
        { name: "Authentication & Authorization", level: 90 }
      ]
    },
    {
      name: "Database",
      skills: [
        { name: "MSSQL", level: 80 },
        { name: "SQL", level: 70 },
        { name: "PostgreSQL", level: 70 },
        { name: "Database Design", level: 70 }
      ]
    },
    {
      name: "Tools & Methodologies",
      skills: [
        { name: "Git", level: 80 },
        { name: "Selenium", level: 75 },
        { name: "Jest", level: 70 },
        { name: "Agile/Scrum", level: 90 },
        { name: "CI/CD", level: 50 },
        { name: "Docker", level: 60 },
        { name: "Postman", level: 80 },
        { name: "Appium", level: 50 },
        { name: "Figma", level: 60 },
        { name: "Swagger", level: 60 },
        { name: "Appium Inspector", level: 60 },
        { name: "Insomnia", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="bg-white py-8">
      <div className="section-container py-0">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.name} className="animate-fade-in" style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold text-portfolio-blue-dark">{category.name}</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-level" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
