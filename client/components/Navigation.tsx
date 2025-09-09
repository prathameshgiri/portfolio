import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavigationProps {
  title?: string;
  subtitle?: string;
}

export default function Navigation({ title = "Full-Stack Developer | Web • Mobile • Design", subtitle }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/#about", label: "About", isExternal: false },
    { href: "/#projects", label: "Projects", isExternal: false },
    { href: "/#skills", label: "Skills", isExternal: false },
    { href: "/blog", label: "Blog", isExternal: true },
    { href: "/contact", label: "Contact", isExternal: true },
  ];

  const exploreItems = [
    { href: "/learning", label: "Learning" },
    { href: "/jobs-internships", label: "Jobs & Internships" },
    { href: "/certificates", label: "Certificates (Free/Paid)" },
    { href: "/video-classes", label: "Programming Video Classes" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    if (!href.startsWith("/#")) return;

    if (location.pathname !== "/") {
      // Navigate to home with hash; ScrollToTop will handle scrolling
      window.location.href = href;
      return;
    }

    const elementId = href.substring(2);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="relative z-50 p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 z-10">
          <div className="w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src="https://prathameshgiri.github.io/images/gpsnew.jpeg"
              alt="Prathamesh Giri"
            />
          </div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Prathamesh Giri
            </span>
            <p className="text-sm text-muted-foreground">{subtitle || "Full-Stack Developer"}</p>
          </div>
        </Link>

        {/* Desktop Navigation - centered */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            item.isExternal ? (
              <Link
                key={item.href}
                to={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              location.pathname === "/" ? (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )
            )
          ))}

          {/* Explore dropdown placed after Blog */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                Explore <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {exploreItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link to={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-10">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="glass border-primary/20"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-6">
          <div className="glass-strong rounded-2xl p-6 border border-primary/20">
            <div className="space-y-4">
              {navItems.map((item) => (
                item.isExternal ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  location.pathname === "/" ? (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  )
                )
              ))}

              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground/70 mb-1">Explore</div>
                <div className="pl-2 space-y-2">
                  {exploreItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-muted-foreground hover:text-primary transition-colors py-1.5"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
