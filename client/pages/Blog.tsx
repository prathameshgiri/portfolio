import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { posts as allPosts, slugify } from "./blogData";
import type { BlogPost } from "./blogData";
import {
  Calendar,
  Clock,
  Search,
  Tag,
  ArrowRight,
  Github,
  Linkedin,
  Mail
} from "lucide-react";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Derive categories dynamically from data to avoid mismatches and duplication
  const categories = useMemo(() => {
    const uniqueCats = Array.from(new Set(allPosts.map((p) => p.category)));
    return [
      { id: "all", name: "All" },
      ...uniqueCats.map((c) => ({ id: c, name: c }))
    ];
  }, []);

  const filtered = useMemo(() => {
    let list: BlogPost[] = allPosts;
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [selectedCategory, query]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl floating-delayed" />
      </div>

      <Navigation subtitle="Blog" />

      {/* Hero */}
      <section className="relative z-40 px-4 sm:px-6 pt-12 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              Ideas, Guides & Updates
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Insights for Builders
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical articles about React, TypeScript, performance, and shipping high-quality products.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-8">
            <div className="flex-1 relative">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, topics, or tags"
                className="pl-10 h-12 glass-subtle"
              />
              <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <Button
                  key={c.id}
                  variant={selectedCategory === c.id ? "default" : "outline"}
                  className={selectedCategory === c.id ? "gradient-primary border-0 text-white" : "glass"}
                  onClick={() => setSelectedCategory(c.id)}
                >
                  <Tag className="w-4 h-4 mr-2" />
                  {c.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <article key={post.id} className="glass-strong rounded-3xl overflow-hidden interactive-hover flex flex-col">
                <div className="relative">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="glass-subtle border-0">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-muted-foreground gap-4 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString()}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">#{t}</span>
                    ))}
                  </div>
                  <Link to={`/blog/${slugify(post.title)}`} className="mt-auto">
                    <Button className="w-full gradient-primary border-0 text-white group">
                      Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="gradient-primary border-0 text-white px-6">
                Start a Project <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-40 px-6 py-16 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
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

            <div className="flex items-center space-x-6">
              <a href="https://github.com/prathameshgiri" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/prathameshgiri" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:prathameshgiri8607@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground">
            <p>&copy; 2025 Prathamesh Giri</p> <p> Innovating One Pixel at a Time 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
