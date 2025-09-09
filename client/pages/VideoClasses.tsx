import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle, ExternalLink, Youtube, ListVideo } from "lucide-react";

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be" && u.pathname.length > 1) return u.pathname.slice(1);
    const v = u.searchParams.get("v");
    if (v) return v;
    const match = url.match(/\/embed\/([\w-]+)/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

function getImage(url: string, fallbackDomain?: string): string {
  const id = getYouTubeId(url);
  if (id) return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  if (fallbackDomain) return `https://logo.clearbit.com/${fallbackDomain}`;
  return "https://i.ytimg.com/img/no_thumbnail.jpg";
}

export default function VideoClasses() {
  const videos = [
    { title: "JavaScript Full Course (2024)", channel: "freeCodeCamp", url: "https://www.youtube.com/watch?v=PkZNo7MFNFg", desc: "Learn JavaScript from scratch with projects and exercises." },
    { title: "HTML & CSS Crash Course", channel: "freeCodeCamp", url: "https://www.youtube.com/watch?v=mU6anWqZJcc", desc: "Master the basics of HTML5 and modern CSS." },
    { title: "React JS Crash Course", channel: "Traversy Media", url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8", desc: "A practical React introduction building a real app." },
    { title: "TypeScript in 100 Minutes", channel: "Fireship", url: "https://www.youtube.com/watch?v=zQnBQ4tB3ZA", desc: "Fast-paced TypeScript fundamentals for JS devs." },
    { title: "Modern JavaScript (ES6+)", channel: "Web Dev Simplified", url: "https://www.youtube.com/watch?v=NCwa_xi0Uuc", desc: "ES6+ features and best practices for modern JS." },
    { title: "Node.js & Express Crash Course", channel: "Traversy Media", url: "https://www.youtube.com/watch?v=f2EqECiTBL8", desc: "Build REST APIs with Node.js and Express." },
    { title: "Tailwind CSS Full Course", channel: "Net Ninja", url: "https://www.youtube.com/watch?v=ft30zcMlFao&list=PL4cUxeGkcC9haLqE976cES2ajO5TCOG42", desc: "Utility-first styling with Tailwind CSS from basics." },
    { title: "Git & GitHub for Beginners", channel: "freeCodeCamp", url: "https://www.youtube.com/watch?v=RGOj5yH7evk", desc: "Version control, branching, and GitHub workflows." },
    { title: "DSA in JavaScript (Playlist)", channel: "Codevolution", url: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwiCJD3WrAFUrIMkGVDE0uqW", desc: "Data structures and algorithms using JavaScript.", domain: "codevolution.dev" },
    { title: "CS50: Intro to Computer Science", channel: "Harvard", url: "https://www.youtube.com/watch?v=8mAITcNt710&list=PLhQjrBD2T3817j24-GogXmWqO5Q5vYy0V", desc: "Harvard's legendary computer science course." },
    { title: "Java + DSA (Hindi)", channel: "Apna College", url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvWPWcx1w_5b8_Q3W", desc: "Complete Java and DSA roadmap in Hindi.", domain: "apnacollege.in" },
    { title: "C++ DSA (Hindi)", channel: "CodeWithHarry", url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME", desc: "C++ with data structures and algorithms in Hindi.", domain: "codewithharry.com" },
  ] as Array<{ title: string; channel: string; url: string; desc: string; domain?: string }>;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <Navigation subtitle="Programming Video Classes" />

      <section className="relative z-40 px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
            <Youtube className="w-4 h-4 mr-2" />
            YouTube Playlists & Courses
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Programming Video Classes</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn by watching high-quality courses and playlists from trusted channels.
          </p>
        </div>
      </section>

      <section className="relative z-40 px-6 pb-24">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div key={v.url} className="glass-strong rounded-2xl p-4 hover:border-primary/40 transition-colors group flex flex-col">
              <div className="w-full h-44 md:h-56 rounded-xl overflow-hidden mb-4 bg-muted">
                <img src={getImage(v.url, v.domain)} alt={v.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary">{v.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{v.channel}</p>
              <p className="text-sm text-muted-foreground flex-1">{v.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <PlayCircle className="w-4 h-4" /> Video Class
                </div>
                <a href={v.url} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="gradient-primary text-white inline-flex items-center gap-2">
                    View
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-40 px-6 pb-16">
        <div className="max-w-5xl mx-auto glass-strong rounded-3xl p-8 md:p-10 text-center">
          <Badge variant="secondary" className="mb-3 glass-subtle border-0 text-primary">
            <ListVideo className="w-4 h-4 mr-2" />
            Tip
          </Badge>
          <p className="text-muted-foreground">
            Practice alongside videos. Recreate projects, pause often, and write notes/code to retain concepts.
          </p>
        </div>
      </section>
    </div>
  );
}
