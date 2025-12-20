import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "ArchFlow",
    description:
      "A visual system design tool that helps architects create, validate, and optimize distributed system architectures.",
    image: "/portfolio/system-architecture-diagram-tool-interface.png",
    tags: ["React", "Node.js", "D3.js", "PostgreSQL"],
    github: "#",
    demo: "#",
    status: "In Development",
  },
  {
    title: "MicroService Orchestrator",
    description:
      "A lightweight orchestration platform for managing microservice deployments and inter-service communication.",
    image: "/portfolio/microservices-dashboard-with-containers.png",
    tags: ["Go", "Docker", "Kubernetes", "gRPC"],
    github: "#",
    demo: "#",
    status: "Live",
  },
  {
    title: "DevOps Pipeline Builder",
    description: "Visual CI/CD pipeline builder that generates infrastructure as code for multiple cloud providers.",
    image: "/portfolio/devops-pipeline-visualization-tool.png",
    tags: ["TypeScript", "AWS CDK", "Terraform", "GitHub Actions"],
    github: "#",
    demo: "#",
    status: "Beta",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center font-[family-name:var(--font-work-sans)]">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="font-[family-name:var(--font-work-sans)]">{project.title}</CardTitle>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      project.status === "Live"
                        ? "bg-green-100 text-green-800"
                        : project.status === "Beta"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <CardDescription className="mb-4 font-[family-name:var(--font-open-sans)]">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github}>
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demo}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
