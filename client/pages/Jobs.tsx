import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Briefcase, GraduationCap, Building2, Rocket, ExternalLink, Target } from "lucide-react";

export default function Jobs() {
  const jobPortals = [
    { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/", desc: "Global job network and professional connections" },
    { name: "Indeed", url: "https://www.indeed.com/", desc: "Search millions of jobs worldwide" },
    { name: "Glassdoor", url: "https://www.glassdoor.com/Job/index.htm", desc: "Jobs with company reviews and salaries" },
    { name: "Naukri (India)", url: "https://www.naukri.com/", desc: "Leading job portal in India" },
    { name: "AngelList Talent", url: "https://wellfound.com/jobs", desc: "Startup jobs across the globe" },
  ];

  const internshipSites = [
    { name: "Internshala", url: "https://internshala.com/", desc: "Internships for students and freshers" },
    { name: "LinkedIn Internships", url: "https://www.linkedin.com/jobs/internship-jobs/", desc: "Internship roles on LinkedIn" },
    { name: "Google STEP/Internships", url: "https://careers.google.com/students/", desc: "Google student programs" },
    { name: "Microsoft University", url: "https://careers.microsoft.com/students/us/en", desc: "Microsoft student opportunities" },
  ];

  const freelance = [
    { name: "Upwork", url: "https://www.upwork.com/", desc: "Freelance projects across skills" },
    { name: "Fiverr", url: "https://www.fiverr.com/", desc: "Gig-based freelance marketplace" },
    { name: "Toptal", url: "https://www.toptal.com/", desc: "Top-tier freelance network" },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <Navigation subtitle="Jobs & Internships" />

      <section className="relative z-40 px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
            <Briefcase className="w-4 h-4 mr-2" />
            Career Hub
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Jobs & Internships</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore curated resources to find jobs, internships, and freelance projects.
          </p>
        </div>
      </section>

      <section className="relative z-40 px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="glass-strong rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Job Portals</h2>
            </div>
            <ul className="space-y-4">
              {jobPortals.map((site) => (
                <li key={site.url} className="glass-subtle rounded-xl p-4 flex items-center gap-4 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                      <img
                        src={"https://logo.clearbit.com/" + new URL(site.url).hostname.replace(/^www\./, "")}
                        alt={site.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div>
                      <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-base font-semibold hover:text-primary transition-colors inline-flex items-center gap-1">
                        {site.name}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <p className="text-sm text-muted-foreground">{site.desc}</p>
                    </div>
                  </div>
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="gradient-primary text-white">Apply</Button>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-strong rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Internships</h2>
            </div>
            <ul className="space-y-4">
              {internshipSites.map((site) => (
                <li key={site.url} className="glass-subtle rounded-xl p-4 flex items-center gap-4 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                      <img
                        src={"https://logo.clearbit.com/" + new URL(site.url).hostname.replace(/^www\./, "")}
                        alt={site.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div>
                      <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-base font-semibold hover:text-primary transition-colors inline-flex items-center gap-1">
                        {site.name}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <p className="text-sm text-muted-foreground">{site.desc}</p>
                    </div>
                  </div>
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="gradient-primary text-white">Apply</Button>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-strong rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Freelance</h2>
            </div>
            <ul className="space-y-4">
              {freelance.map((site) => (
                <li key={site.url} className="glass-subtle rounded-xl p-4 flex items-center gap-4 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                      <img
                        src={"https://logo.clearbit.com/" + new URL(site.url).hostname.replace(/^www\./, "")}
                        alt={site.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div>
                      <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-base font-semibold hover:text-primary transition-colors inline-flex items-center gap-1">
                        {site.name}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <p className="text-sm text-muted-foreground">{site.desc}</p>
                    </div>
                  </div>
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="gradient-primary text-white">Apply</Button>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative z-40 px-6 pb-16">
        <div className="max-w-5xl mx-auto glass-strong rounded-3xl p-8 md:p-10 text-center">
          <Badge variant="secondary" className="mb-4 glass-subtle border-0 text-primary">
            <Target className="w-4 h-4 mr-2" />
            Tips
          </Badge>
          <p className="text-muted-foreground">
            Tailor your resume for each role, showcase projects on GitHub/Portfolio, and add a concise cover letter.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link to="/portfolio"><Button variant="outline" className="glass border-primary/20">View Portfolio</Button></Link>
            <Link to="/projects"><Button className="gradient-primary text-white">Explore Projects</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
