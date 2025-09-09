import { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { posts, slugify } from "./blogData";
import { ArrowLeft, Calendar, Clock, Github, Linkedin, Mail } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = useMemo(() => posts.find((p) => slugify(p.title) === slug), [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <Navigation subtitle="Blog" />
        <section className="relative z-40 px-4 sm:px-6 pt-12 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-semibold mb-4">Article not found</h1>
            <Link to="/blog">
              <Button className="gradient-primary border-0 text-white">Go to Blog</Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <Navigation subtitle="Blog" />

      <section className="relative z-40 px-4 sm:px-6 pt-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" className="glass border-primary/20 p-2" onClick={() => navigate(-1)} aria-label="Back">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </div>

          <div className="mb-4">
            <Badge variant="secondary" className="glass-subtle border-0">{post.category}</Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-sm text-muted-foreground gap-4 mb-6">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString()}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
          </div>

          <div className="rounded-2xl overflow-hidden mb-8">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
          </div>

          <div className="prose prose-invert max-w-none">
            {post.content.map((p, i) => (
              <p key={i} className="text-muted-foreground mb-4 leading-relaxed">{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">#{t}</span>
            ))}
          </div>
        </div>
      </section>

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
