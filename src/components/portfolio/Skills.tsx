
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Server, 
  Palette,
  Globe,
  Smartphone,
  GitBranch,
  Monitor,
  Terminal,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90, icon: Code },
        { name: "TypeScript", level: 85, icon: Code },
        { name: "Next.js", level: 80, icon: Globe },
        { name: "Tailwind CSS", level: 95, icon: Palette },
        { name: "JavaScript", level: 90, icon: Code }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Python", level: 85, icon: Terminal },
        { name: "Node.js", level: 80, icon: Server },
        { name: "Flask", level: 75, icon: Server },
        { name: "Django", level: 70, icon: Server },
        { name: "RESTful APIs", level: 85, icon: Zap }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "PostgreSQL", level: 80, icon: Database },
        { name: "MySQL", level: 75, icon: Database },
        { name: "MongoDB", level: 70, icon: Database },
        { name: "Redis", level: 65, icon: Database },
        { name: "AWS", level: 60, icon: Globe }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: GitBranch,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 90, icon: GitBranch },
        { name: "Docker", level: 70, icon: Monitor },
        { name: "VS Code", level: 95, icon: Monitor },
        { name: "Linux", level: 75, icon: Terminal },
        { name: "GitHub Actions", level: 65, icon: GitBranch }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to create exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div key={skillIndex} className="group/skill">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <SkillIcon className="w-4 h-4 text-muted-foreground group-hover/skill:text-primary transition-colors duration-200" />
                              <span className="text-sm font-medium text-foreground">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-xs text-muted-foreground font-medium">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-105`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Always learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skills };
