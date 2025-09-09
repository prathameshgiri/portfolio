import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Github, Instagram, Linkedin, MessageCircle, ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const WHATSAPP_CHAT = "https://wa.me/+918010901226?text=Hi%20Prathamesh!%20I%20would%20like%20to%20connect%20with%20you.";
  const EMAIL = "mailto:prathameshgiri8607@gmail.com";
  const GITHUB = "https://github.com/prathameshgiri";
  const INSTAGRAM = "https://www.instagram.com/gps.in";
  const LINKEDIN = "https://www.linkedin.com/in/prathamesh-giri-io";
  
  const cards = [
    {
      title: "WhatsApp",
      desc: "Chat instantly on WhatsApp",
      href: WHATSAPP_CHAT,
      color: "bg-green-500",
      icon: <MessageCircle className="w-6 h-6" />,
      external: true,
    },
    {
      title: "Email",
      desc: "Send me an email",
      href: EMAIL,
      color: "bg-blue-500",
      icon: <Mail className="w-6 h-6" />,
      external: true,
    },
    {
      title: "GitHub",
      desc: "Explore my code & projects",
      href: GITHUB,
      color: "bg-gray-800",
      icon: <Github className="w-6 h-6" />,
      external: true,
    },
    {
      title: "Instagram",
      desc: "Follow for design & updates",
      href: INSTAGRAM,
      color: "bg-pink-500",
      icon: <Instagram className="w-6 h-6" />,
      external: true,
    },
    {
      title: "LinkedIn",
      desc: "Let’s connect professionally",
      href: LINKEDIN,
      color: "bg-sky-600",
      icon: <Linkedin className="w-6 h-6" />,
      external: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl floating-delayed" />
      </div>

      <Navigation subtitle="Contact" />

      <section className="relative z-40 px-4 sm:px-6 pt-10 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">Let's Connect</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Reach me through your favorite platform. I usually respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {cards.map((c) => (
              <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className="block w-full max-w-sm">
                <div className="glass-strong rounded-3xl p-6 interactive-hover h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${c.color} rounded-xl text-white flex items-center justify-center`}>{c.icon}</div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp Channel */}
            <div className="glass-strong rounded-3xl p-6 h-full flex flex-col w-full max-w-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl text-white flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Join WhatsApp Channel</h3>
              <p className="text-sm text-muted-foreground mb-4">Get updates, tips, and announcements.</p>
              <a href="https://www.whatsapp.com/channel/0029VaCLsqFL2AU7A2uHLY1R"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto">
                  <Button className="w-full bg-green-600 hover:bg-green-700 border-0 text-white">
                    Join Channel
                  </Button>
                </a>

            </div>
          </div>

          
            
          </div>
      </section>

      <section className="relative z-40 px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Let's Create Something
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-start justify-items-center">
            {/* Contact Info */}
            <div className="space-y-8 w-full max-w-2xl">
              <div className="glass-strong rounded-3xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground text-center">Quick Contact</h3>

          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-muted-foreground">Prefer a quick chat? Tap below to reach me instantly.</p>
            <a href={WHATSAPP_CHAT} target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto px-6 h-12 bg-green-600 hover:bg-green-700 text-white rounded-xl">
                Start WhatsApp Chat
              </Button>
            </a>
          </div>

          <div className="mt-8 p-6 glass-subtle rounded-2xl text-center">
            <h4 className="font-semibold text-foreground mb-3">Response Time</h4>
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Usually responds within 24 hours</span>
            </div>
          </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-strong rounded-3xl p-6 sm:p-8 w-full max-w-2xl">
              <form
                className="space-y-4 sm:space-y-6"
          onSubmit={async (e) => {
            e.preventDefault();

            const form = e.currentTarget;
            const formData = new FormData(form);
            const userName = formData.get("firstName");

            try {
              const response = await fetch("https://formspree.io/f/manbwqwk", {
                method: "POST",
                body: formData,
                headers: {
                  Accept: "application/json",
                },
              });

              if (response.ok) {
                form.reset();
                alert(`Thank You, ${userName}! We’ll connect with you shortly`);
              } else {
                alert("Error: Form not submitted.");
              }
            } catch (error) {
              alert("Network error. Try again.");
            }
          }}
        >
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                First Name *
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="w-full h-12 px-4 glass border border-primary/20 rounded-xl bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                placeholder="Your first name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                Last Name *
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="w-full h-12 px-4 glass border border-primary/20 rounded-xl bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                placeholder="Your last name"
              />
            </div>
          </div>

          {/* FIXED: Corrected label for phone number */}
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full h-12 px-4 glass border border-primary/20 rounded-xl bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              placeholder="Your phone number"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full h-12 px-4 glass border border-primary/20 rounded-xl bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-4 py-3 glass border border-primary/20 rounded-xl bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-y"
              placeholder="Tell me about your project or how I can help you..."
            ></textarea>
          </div>

          <div className="flex items-start justify-center gap-3 text-center">
            <input
              type="checkbox"
              id="consent"
              required
              className="mt-1 rounded border-primary/20"
            />
            <label htmlFor="consent" className="text-sm text-muted-foreground">
              I agree to the processing of my personal data for the purpose of responding to my inquiry. *
            </label>
          </div>

          <button
            type="submit"
            className="w-full h-12 gradient-primary border-0 text-white rounded-xl font-medium text-lg interactive-hover group"
          >
            <span className="flex items-center justify-center">
              Send Message
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
              </form>
            </div>
          </div>
        </div>
      </section>


      <footer className="relative z-40 px-6 py-12 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Prathamesh Giri • All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
