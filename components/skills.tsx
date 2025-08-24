const skillCategories = [
  {
    title: "Architecture & Design",
    skills: ["System Design", "Microservices", "Event-Driven Architecture", "Domain-Driven Design", "API Design"],
  },
  {
    title: "Technologies",
    skills: ["Node.js", "React", "TypeScript", "Go", "Python", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Monitoring", "Infrastructure as Code"],
  },
  {
    title: "Leadership",
    skills: ["Technical Leadership", "Mentoring", "Code Review", "Architecture Review", "Team Building"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center font-[family-name:var(--font-work-sans)]">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4 font-[family-name:var(--font-work-sans)]">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="text-muted-foreground text-sm font-[family-name:var(--font-open-sans)]">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
