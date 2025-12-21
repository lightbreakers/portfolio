import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-15 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-2 border-border">
            <img src="/sa-headshot.jpeg" alt="Profile photo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-6">Builder and Architect.</h1>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              Hi, I’m <b>Harsh Parashar</b> — a <b>Software Architect & Founder</b> building AI-powered systems and tools that help modern businesses scale with confidence.
              I help engineering teams build <b>scalable, high-performance platforms</b> and create software products that solve real-world problems.
            </p>
            <p>
              I'm building{" "}
              <a href="/biztool" className="text-bold hover:underline">
                Biztools
              </a>{" "}
              —  a tool that helps streamline small busniess.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="p-2 text-muted-foreground hover:text-foreground">
             <a href="https://github.com/lightbreakers" target="_blank" rel="noreferrer"><Github className="w-4 h-4" /></a>
          </Button>
          <Button variant="ghost" size="sm" className="p-2 text-muted-foreground hover:text-foreground">
            <a href="https://www.linkedin.com/in/harshparashar/" target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4" /></a>
          </Button>
          <Button variant="ghost" size="sm" className="p-2 text-muted-foreground hover:text-foreground">
            <a href="mailto:harsh071023@gmail.com" target="_blank" rel="noreferrer"><Mail className="w-4 h-4" /></a>
          </Button>
        </div>
      </div>
    </section>
  )
}
