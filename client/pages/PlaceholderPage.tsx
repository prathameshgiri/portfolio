import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Construction, Lightbulb } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  comingSoon?: boolean;
}

export default function PlaceholderPage({ 
  title, 
  description, 
  icon, 
  comingSoon = true 
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 glass-subtle rounded-full floating opacity-20" />
      <div className="absolute bottom-40 right-20 w-24 h-24 glass-subtle rounded-full floating-delayed opacity-15" />

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="">
              <img
                src="https://prathameshgiri.github.io/images/gpsnew.jpeg"
                alt="Prathamesh Giri"
                className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center text-2xl"
              />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Prathamesh Giri
              </span>
              <p className="text-sm text-muted-foreground">Full Stack Developer</p>
            </div>
          </Link>
          
          <Link to="/">
            <Button variant="outline" className="glass border-primary/20 p-2" aria-label="Back">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <section className="relative z-40 px-6 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-strong rounded-3xl p-12 md:p-16">
            {comingSoon && (
              <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
                <Construction className="w-4 h-4 mr-2" />
                Coming Soon
              </Badge>
            )}
            
            <div className="w-24 h-24 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
              {icon}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/">
                <Button size="lg" className="gradient-primary border-0 text-white px-8 py-6 text-lg" aria-label="Back">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button variant="outline" size="lg" className="glass px-8 py-6 text-lg border-primary/20">
                  Request This Feature
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-40 px-6 py-16 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src="https://prathameshgiri.github.io/images/gpsnew.jpeg"
                alt="Prathamesh Giri"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Prathamesh Giri
              </span>
              <p className="text-sm text-muted-foreground">Full-Stack Developer | Web • Mobile • Design</p>
            </div>
          </div>
          <p className="text-muted-foreground">
            &copy; 2025 Prathamesh Giri — Innovating One Pixel at a Time 🚀
          </p>
        </div>
      </footer>
    </div>
  );
}
