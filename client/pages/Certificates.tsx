import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, CheckCircle2, ExternalLink, GraduationCap } from "lucide-react";

export default function Certificates() {
  const freeCerts = [
    { name: "freeCodeCamp Certifications", url: "https://www.freecodecamp.org/learn/", desc: "Responsive Web Design, JS Algorithms, Front End Libraries and more" },
    { name: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage", desc: "Fundamentals of Digital Marketing (free certificate)" },
    { name: "Cisco Networking Academy", url: "https://skillsforall.com/", desc: "Intro to Cybersecurity, Networking Basics (free courses + badges)" },
    { name: "HackerRank Skills", url: "https://www.hackerrank.com/skills-verification", desc: "Skills verification badges for languages and domains" },
  ];

  const paidCerts = [
    { name: "Coursera Professional Certificates", url: "https://www.coursera.org/", desc: "Google IT Support, Meta Front-End, IBM Data Science" },
    { name: "Udemy Certificates", url: "https://www.udemy.com/", desc: "Course completion certificates (paid courses)" },
    { name: "edX Verified Certificates", url: "https://www.edx.org/", desc: "University-backed verified certificates" },
    { name: "AWS Certification", url: "https://aws.amazon.com/certification/", desc: "Cloud Practitioner, Associate, Professional" },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <Navigation subtitle="Certificates" />

      <section className="relative z-40 px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
            <Award className="w-4 h-4 mr-2" />
            Certification Guide
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Certificates (Free/Paid)</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Build credibility with recognized certificates. Explore both free and paid options.
          </p>
        </div>
      </section>

      <section className="relative z-40 px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="glass-strong rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <h2 className="text-xl font-semibold">Free Certificates</h2>
            </div>
            <ul className="space-y-4">
              {freeCerts.map((c) => (
                <li key={c.url} className="glass-subtle rounded-xl p-4 flex items-center gap-4 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                      <img
                        src={"https://logo.clearbit.com/" + new URL(c.url).hostname.replace(/^www\./, "")}
                        alt={c.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div>
                      <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-base font-semibold hover:text-primary transition-colors inline-flex items-center gap-1">
                        {c.name}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <p className="text-sm text-muted-foreground">{c.desc}</p>
                    </div>
                  </div>
                  <a href={c.url} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="gradient-primary text-white">Apply</Button>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-strong rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Paid Certificates</h2>
            </div>
            <ul className="space-y-4">
              {paidCerts.map((c) => (
                <li key={c.url} className="glass-subtle rounded-xl p-4 flex items-center gap-4 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                      <img
                        src={"https://logo.clearbit.com/" + new URL(c.url).hostname.replace(/^www\./, "")}
                        alt={c.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div>
                      <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-base font-semibold hover:text-primary transition-colors inline-flex items-center gap-1">
                        {c.name}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <p className="text-sm text-muted-foreground">{c.desc}</p>
                    </div>
                  </div>
                  <a href={c.url} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="gradient-primary text-white">Apply</Button>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative z-40 px-6 pb-16">
        <div className="max-w-4xl mx-auto glass-strong rounded-3xl p-8 md:p-10 text-center">
          <p className="text-muted-foreground">
            Tip: Combine certificates with strong projects and consistent GitHub activity for maximum impact.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link to="/learning"><Button variant="outline" className="glass border-primary/20">Explore Learning</Button></Link>
            <Link to="/projects"><Button className="gradient-primary text-white">View Projects</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
