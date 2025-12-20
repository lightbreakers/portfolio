import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-border">
            <img src="/portfolio/software-architect-headshot.png" alt="Profile photo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-6">Builder and architect.</h1>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              I'm Harsh Parashar a software architect and entrepreneur based in India. I lead engineering teams and build
              New age solutoion AI-powered solutions for modern applications.
            </p>
            <p>
              I'm building{" "}
              <a href="/apps/biztool-app" className="text-bold hover:underline">
                Biztools
              </a>{" "}
              — a tool that helps streamline small busniess.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="p-2 text-muted-foreground hover:text-foreground">
            <Github className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2 text-muted-foreground hover:text-foreground">
            <Linkedin className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2 text-muted-foreground hover:text-foreground">
            <Mail className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
