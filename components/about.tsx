export function About() {
  return (
    <section id="about" className="py-15 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">About</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I’m a technologist with <b>10+ years of experience</b> designing scalable tech ecosystems and leading engineering teams that ship world-class software.

                I believe in <b>clean architecture</b>, thoughtful design patterns, and enabling teams to deliver robust applications that stand the test of time.

                Over the years, I’ve worked with global organisations and startups to solve tough technical challenges — from microservices and AI integration to real-time systems.

              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Work</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-medium text-foreground">Senior Architect</h3>
                  <p className="text-sm text-muted-foreground">Persistent Systems</p>
                  <p className="text-sm text-muted-foreground">2024 — Present</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-muted rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-medium text-foreground">Architect</h3>
                  <p className="text-sm text-muted-foreground">Siemens</p>
                  <p className="text-sm text-muted-foreground">2022 — 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
