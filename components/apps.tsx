import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Apps() {
  const apps = [
    {
      title: "Biztool for Small Businesses",
      description: "Generate professional quotations, manage customers, and grow your business with our comprehensive suite of tools.",
      type: "Web App",
      tech: ["Next.js", "Supabase", "AI/ML"],
      link: "https://www.harshparashar.cloud/biztool",
      github: "#",
    },
    // {
    //   title: "Architecture Planner",
    //   description: "Visual system design tool for software architects to plan and document complex systems.",
    //   type: "Desktop App",
    //   tech: ["Electron", "TypeScript", "D3.js"],
    //   link: "#",
    //   github: "#",
    // },
    // {
    //   title: "API Gateway Manager",
    //   description: "Centralized API management platform with monitoring, analytics, and security features.",
    //   type: "SaaS Platform",
    //   tech: ["Next.js", "PostgreSQL", "Docker"],
    //   link: "#",
    //   github: "#",
    // },
  ]

  return (
    <section id="apps" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-foreground mb-12">Apps & Websites</h2>

        <div className="space-y-8">
          {apps.map((app, index) => (
            <div key={index} className="border border-border rounded-lg p-6 bg-background">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">{app.title}</h3>
                  <span className="text-sm text-accent font-medium">{app.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {/* <Button variant="ghost" size="sm" className="p-2">
                    <Github className="h-4 w-4" />
                  </Button> */}
                  {/* <Button variant="ghost" size="sm" className="p-2" onClick={() => {window.open(app.link, '_blank', 'noopener,noreferrer');}}>
                    <ExternalLink className="h-4 w-4" />
                  </Button> */}
                  <a href={app.link} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{app.description}</p>

              <div className="flex flex-wrap gap-2">
                {app.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
