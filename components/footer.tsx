export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </a>
            <a href="#apps" className="text-sm text-muted-foreground hover:text-foreground">
              Apps
            </a>
            <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground">
              Posts
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
