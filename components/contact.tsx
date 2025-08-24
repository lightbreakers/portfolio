import { Button } from "@/components/ui/button"
export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Stay up to date</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Don't miss my next post — get it delivered straight to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-2 bg-input border border-border rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button className="rounded-l-none bg-foreground text-background hover:bg-foreground/90">Join</Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Work</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm currently available for consulting projects, technical advisory roles, and interesting full-time
                opportunities in software architecture.
              </p>
              <p>
                <a href="mailto:hello@example.com" className="text-accent hover:underline">
                  Get in touch →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
