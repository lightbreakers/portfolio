export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">About</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 10 years of experience in building solutions, I specialize in designing and building
                scalable systems that power modern applications.
              </p>
              <p>
                I believe in the power of clean architecture, thoughtful design patterns, and continuous learning. When
                I'm not architecting systems, you'll find me contributing to open source projects.
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
