import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Product", href: "/product/govern" },
    { name: "Solutions", href: "/solutions" },
    { name: "Enterprise", href: "/enterprise" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/10 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img 
                src="/nexus_logo_monogram_transparent.png" 
                alt="Nexus Logo" 
                className="h-8 w-8 object-contain" 
              />
              <span className="font-mono text-xl font-bold tracking-tight">NEXUS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-sm font-medium">
              Log in
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l border-border/10">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 mt-4">
                  <Button variant="outline" className="w-full justify-center">
                    Log in
                  </Button>
                  <Button className="w-full justify-center bg-primary text-primary-foreground hover:bg-primary/90">
                    Book a Demo
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/10 bg-card py-12 md:py-20">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/nexus_logo_monogram_transparent.png" 
                alt="Nexus Logo" 
                className="h-6 w-6 object-contain" 
              />
              <span className="font-mono text-lg font-bold">NEXUS</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Bridge the GenAI Divide. Scale AI initiatives from pilots to production with measurable ROI. Govern, guide, validate, and measure every interaction.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/product/govern" className="hover:text-primary transition-colors">Govern</Link></li>
              <li><Link href="/product/guide" className="hover:text-primary transition-colors">Guide</Link></li>
              <li><Link href="/product/validate" className="hover:text-primary transition-colors">Validate</Link></li>
              <li><Link href="/product/measure" className="hover:text-primary transition-colors">Measure</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/company/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/company/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/company/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/company/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/legal/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-primary transition-colors">Terms</Link></li>
              <li><Link href="/legal/security" className="hover:text-primary transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-border/10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nexus AI Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
