import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import {
  Code2,
  BookOpen,
  User,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Star,
  Calendar,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  Coffee,
  Heart,
  MessageCircle,
  Lightbulb,
  WhatsApp,
  Instagram,
  Handshake
} from "lucide-react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured projects
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const techCategories = [
    {
      title: "🌐 Frontend Development",
      technologies: [
        {
          name: "HTML5",
          description: "Semantic and accessible web structure",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
          color: "from-orange-400 to-red-300"
        },
        {
          name: "CSS3",
          description: "Responsive styling with Flexbox & Grid",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
          color: "from-blue-300 to-blue-500"
        },
        {
          name: "JavaScript",
          description: "Dynamic and interactive user interfaces",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          color: "from-yellow-500 to-yellow-700"
        },
        {
          name: "React.js",
          description: "Component-based UI development",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          color: "from-cyan-700 to-blue-600"
        },
        {
          name: "Angular",
          description: "Scalable enterprise frontend solutions",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
          color: "from-blue-700 to-red-900"
        },
        {
          name: "Vue.js",
          description: "Progressive frontend framework",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
          color: "from-green-500 to-green-900"
        },
        {
          name: "TypeScript",
          description: "Strongly-typed JavaScript for scalable apps",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          color: "from-blue-500 to-blue-700"
        },
        {
          name: "Bootstrap",
          description: "Responsive CSS framework",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
          color: "from-purple-800 to-indigo-600"
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first modern styling",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          color: "from-teal-900 to-cyan-900"
        },
        {
          name: "Sass/SCSS",
          description: "CSS preprocessor with superpowers",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
          color: "from-pink-900 to-rose-900"
        },
        {
          name: "jQuery",
          description: "Fast, small, feature-rich JavaScript library",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
          color: "from-blue-900 to-indigo-900"
        }
      ]
    },
    {
      title: "⚙️ Backend Development",
      technologies: [
        {
          name: "Node.js",
          description: "Event-driven, non-blocking server-side runtime",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
          color: "from-green-900 to-green-700"
        },
        {
          name: "Express.js",
          description: "Fast and minimal backend framework",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
          color: "from-gray-100 to-gray-400"
        },
        {
          name: "PHP",
          description: "Backend scripting for dynamic websites",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
          color: "from-purple-900 to-indigo-600"
        },
        {
          name: "Python",
          description: "Backend and API development (Flask, Django)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          color: "from-blue-400 to-yellow-500"
        },
        {
          name: "Java Spring",
          description: "Enterprise-level backend solutions",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
          color: "from-green-900 to-green-700"
        }
      ]
    },
    {
      title: "🗄️ Databases & Cloud",
      technologies: [
        {
          name: "MySQL",
          description: "Relational database management",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
          color: "from-blue-500 to-orange-500"
        },
        {
          name: "PostgreSQL",
          description: "Advanced relational database",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
          color: "from-blue-600 to-indigo-600"
        },
        {
          name: "MongoDB",
          description: "NoSQL database for scalability",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
          color: "from-green-900 to-green-800"
        },
        {
          name: "Firebase",
          description: "Realtime database + authentication + hosting",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
          color: "from-yellow-900 to-orange-900"
        }
      ]
    },
    {
      title: "💻 Programming Languages",
      technologies: [
        {
          name: "C",
          description: "Structured programming & system-level knowledge",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
          color: "from-blue-600 to-blue-800"
        },
        {
          name: "C++",
          description: "Object-oriented programming, STL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
          color: "from-blue-500 to-purple-600"
        },
        {
          name: "C#",
          description: ".NET development and Windows applications",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
          color: "from-purple-600 to-blue-700"
        },
        {
          name: "Java",
          description: "Object-oriented and enterprise applications",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
          color: "from-red-200 to-orange-300"
        },
        {
          name: "Python",
          description: "Scripting, automation, backend APIs",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          color: "from-yellow-400 to-blue-500"
        },
        {
          name: "Kotlin",
          description: "Android app development",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
          color: "from-purple-900 to-orange-900"
        }
      ]
    },
    {
      title: "🎨 Other Skills",
      technologies: [
        {
          name: "Figma",
          description: "UI/UX Design and prototyping",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
          color: "from-purple-900 to-pink-500"
        },
        {
          name: "Git",
          description: "Version control and collaboration",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
          color: "from-orange-900 to-red-800"
        },
        {
          name: "GitHub",
          description: "Code hosting and project management",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
          color: "from-gray-200 to-gray-300"
        },
        {
          name: "Docker",
          description: "Containerization and deployment",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
          color: "from-blue-900 to-blue-900"
        },
        {
          name: "Postman",
          description: "API testing and development",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
          color: "from-orange-900 to-red-500"
        },
        {
          name: "Vite",
          description: "Next generation frontend tooling",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
          color: "from-purple-400 to-blue-500"
        },
        {
          name: "VS Code",
          description: "Powerful code editor and IDE",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
          color: "from-blue-900 to-cyan-900"
        }
      ]
    }
  ];

  const projects = [
    {
      title: "Qr Code Generater",
      description: "Generate custom QR codes instantly for links, text, or contact info.",
      tech: ["HTML5", "CSS", "JavaScript"],
      status: "Live",
      link: "https://prathameshgiri.github.io/qr-code-generator/",
      sourceCode: "https://github.com/prathameshgiri/qr-code-generator",
      image: "https://prathameshgiri.github.io/pro-img/qr-generator.PNG",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Text to Speech",
      description: "Convert written text into natural-sounding speech instantly.",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Live",
      link: "https://prathameshgiri.github.io/text-speech/",
      sourceCode: "https://github.com/prathameshgiri/text-speech",
      image: "https://prathameshgiri.github.io/pro-img/text-to-speech.PNG",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "E-Commerce Dashboard",
      description: "Convert written text into natural-sounding speech instantly.",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Live",
      link: "https://prathameshgiri.github.io/Dashboard/",
      sourceCode: "https://github.com/prathameshgiri/Dashboard",
      image: "https://prathameshgiri.github.io/pro-img/dashboard.png",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "HealthMate",
      description: "Book and manage doctor appointments easily with HealthMate.",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "In Development",
      link: "https://prathameshgiri.github.io/HealthMate/",
      sourceCode: "https://github.com/prathameshgiri/HealthMate",
      image: "https://prathameshgiri.github.io/pro-img/healthmate.png",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Fashion Collection",
      description: "Convert written text into natural-sounding speech instantly.",
      tech: ["React.js", "TypeScript"],
      status: "Live",
      link: "https://luxe-prathameshgiri.netlify.app/",
      sourceCode: "#",
      image: "https://prathameshgiri.github.io/pro-img/luxe.png",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Dress shop",
      description: "Convert written text into natural-sounding speech instantly.",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Live",
      link: "https://prathameshgiri.github.io/dress-shop/",
      sourceCode: "https://github.com/prathameshgiri/dress-shop",
      image: "https://prathameshgiri.github.io/pro-img/dressshop.png",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered tool for generating content using OpenAI API",
      tech: ["Python", "FastAPI", "OpenAI", "React"],
      status: "Beta",
      link: "https://ai-content.prathameshgiri.dev",
      sourceCode: "https://github.com/prathameshgiri/ai-content-generator",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&auto=format",
      color: "from-orange-500 to-red-600"
    }
  ];

  const achievements = [
    { icon: "🏆", label: "50+ Projects", value: "Completed" },
    { icon: "⭐", label: "4.9/5", value: "Client Rating" },
    { icon: "🎓", label: "10+", value: "Certifications" },
    { icon: "👥", label: "200+", value: "Collab Projects" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl floating-slow" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 glass-subtle rounded-full floating opacity-30" />
      <div className="absolute top-60 right-20 w-24 h-24 glass-subtle rounded-full floating-delayed opacity-20" />
      <div className="absolute bottom-40 left-1/4 w-40 h-40 glass-subtle rounded-full floating-slow opacity-25" />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="about" className="relative z-40 px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Content */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
                <Sparkles className="w-4 h-4 mr-2" />
                Welcome to my digital space
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Prathamesh
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
                Full Stack Developer
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                I craft digital experiences through code, teach aspiring developers, 
                and build innovative solutions that make a difference. Welcome to my 
                portfolio and learning platform.
              </p>

              <div className="flex items-center space-x-4 mb-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="w-4 h-4" />
                  <span>Available for projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>Loves to code</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/*  
                <Link to="/learning">
                  <Button size="lg" className="gradient-primary border-0 text-white px-8 py-6 text-lg interactive-hover">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Explore Learning
                  </Button>
                </Link> */}
                

                <a href="https://prathameshgiri.github.io/CV/Resume-PrathameshGiri.pdf" download>
                  <Button
                    variant="outline"
                    size="lg"
                    className="gradient-primary border-0 text-white px-8 py-6 text-lg interactive-hover">
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button> </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a href="https://github.com/prathameshgiri" className="w-12 h-12 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-colors interactive-hover">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://in.linkedin.com/in/prathamesh-giri-io" className="w-12 h-12 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-colors interactive-hover">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:prathameshgiri8607@gmail.com" className="w-12 h-12 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-colors interactive-hover">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://prathameshgiri.github.io/" className="w-12 h-12 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-colors interactive-hover">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Profile Image & Stats */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Profile Card */}
                <div className="glass-strong rounded-3xl p-8 interactive-hover">
                  <div className="text-center mb-8">
                    <div className="">
                      <img src="https://prathameshgiri.github.io/images/gpsnew.jpeg" alt="" className="w-32 h-32 mx-auto mb-6 gradient-primary rounded-3xl flex items-center justify-center text-6xl animate-pulse-glow" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Prathamesh Giri</h3>
                    <p className="text-muted-foreground mb-4">Building the future, one line at a time</p>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-600">Available for work</span>
                    </div>
                  </div>

                  {/* Achievements Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div key={achievement.label} className="text-center p-4 glass-subtle rounded-2xl">
                        <div className="text-2xl mb-2">{achievement.icon}</div>
                        <div className="font-bold text-lg">{achievement.value}</div>
                        <div className="text-sm text-muted-foreground">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 glass px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white floating">
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  2+ Years
                </div>
                <div className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white floating-delayed">
                  <Award className="w-4 h-4 inline mr-2" />
                  Top Rated
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="relative z-40 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              <Code2 className="w-4 h-4 mr-2" />
              Technical Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tools & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skills across the full development spectrum
            </p>
          </div>

          <div className="space-y-16">
            {techCategories.map((category, categoryIndex) => (
              <div key={category.title} className="space-y-8">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-foreground px-4">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                  {category.technologies.map((tech, index) => (
                    <div
                      key={tech.name}
                      className={`glass-strong rounded-2xl md:rounded-3xl p-4 md:p-6 text-center interactive-hover group transition-all duration-500 delay-${index * 50} min-h-[160px] md:min-h-[200px] flex flex-col justify-between`}
                    >
                      <div className="flex-1 flex flex-col items-center justify-start">
                        <div className="relative mb-3 md:mb-4">
                          <div className={`w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 mx-auto rounded-xl md:rounded-2xl bg-gradient-to-br ${tech.color} p-2 md:p-3 lg:p-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-lg`}>
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-full h-full object-contain drop-shadow-sm"
                              style={{
                                filter: 'none'
                              }}
                              onError={(e) => {
                                // Fallback to a generic icon if image fails to load
                                const target = e.currentTarget as HTMLImageElement;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) {
                                  fallback.style.display = 'flex';
                                }
                              }}
                            />
                            <div className="hidden w-full h-full items-center justify-center text-white text-lg md:text-xl lg:text-2xl font-bold">
                              {tech.name.charAt(0)}
                            </div>
                          </div>
                        </div>

                        <h4 className="text-sm md:text-base lg:text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors text-center">
                          {tech.name}
                        </h4>
                      </div>

                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-center mt-auto">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="relative z-40 px-4 sm:px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              <Briefcase className="w-4 h-4 mr-2" />
              Professional Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Education 
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey, educational background, and continuous learning path
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Experience */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-primary" />
                Professional Experience 
              </h3>

              <div className="space-y-6">
                {/* Current Role */}
                <div className="glass-strong rounded-2xl p-6 interactive-hover">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Full-Stack Developer & Tech Educator</h4>
                      <p className="text-primary font-medium">Freelance</p>
                      <p className="text-sm text-muted-foreground">Remote</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Current</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Developing custom web and mobile applications for clients worldwide. Creating educational content and mentoring aspiring developers through interactive courses and personalized guidance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="glass-subtle text-xs">React</Badge>
                    <Badge variant="outline" className="glass-subtle text-xs">Node.js</Badge>
                    <Badge variant="outline" className="glass-subtle text-xs">React Native</Badge>
                    <Badge variant="outline" className="glass-subtle text-xs">MongoDB</Badge>
                    <Badge variant="outline" className="glass-subtle text-xs">Teaching</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mt-4">2022 - Present</div>
                </div>

                {/* Previous Experience */}
                {/* Internship */}

                {/* Certifications */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Professional Certifications</h4>

                  <div className="glass-strong rounded-xl p-4 interactive-hover">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-foreground">AWS Certified Solutions Architect</h5>
                      <Badge variant="outline" className="text-xs">2023</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                  </div>

                  <div className="glass-strong rounded-xl p-4 interactive-hover">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-foreground">Meta Frontend Developer Professional</h5>
                      <Badge variant="outline" className="text-xs">2023</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Meta (Facebook)</p>
                  </div>

                  <div className="glass-strong rounded-xl p-4 interactive-hover">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-foreground">Google Cloud Platform Developer</h5>
                      <Badge variant="outline" className="text-xs">2022</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Google Cloud</p>
                  </div>

                  <div className="glass-strong rounded-xl p-4 interactive-hover">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-foreground">MongoDB Certified Developer</h5>
                      <Badge variant="outline" className="text-xs">2022</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">MongoDB University</p>
                  </div>
                </div>
               
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-primary" />
                Education 
              </h3>

              <div className="space-y-6">
                {/* Degree */}
                <div className="glass-strong rounded-2xl p-6 interactive-hover">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Bachelor of Vocation in Computer Technology</h4>
                      <p className="text-primary font-medium">Rajashri Shahu Mahavidyalaya, Latur (Autonomous)</p>
                      <p className="text-sm text-muted-foreground">Latur, India</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Graduated</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Specialized in Software Engineering and Web Technologies with a focus on modern programming languages, application development, and software architecture.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="glass-subtle text-xs">Web Development</Badge>
                    <Badge variant="outline" className="glass-subtle text-xs">Application Development</Badge>
                    <Badge variant="outline" className="glass-subtle text-xs">Networking</Badge>
                    <Badge variant="outline" className="glass-subtle text-xs">Database Management</Badge>
                    <Badge variant="outline" className="glass-subtle text-xs">Programming Languages</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">2022 - 2025 • 7.10 CGPA</div>
                </div>


                

                {/* Continuous Learning */}
                <div className="glass-strong rounded-2xl p-6 interactive-hover">
                  <h4 className="text-lg font-bold mb-4 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-primary" />
                    Continuous Learning
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Staying updated with the latest technologies and trends through online courses, tech conferences, and open-source contributions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-xs text-muted-foreground">Online Programs</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">10+</div>
                      <div className="text-xs text-muted-foreground">Certifications</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Projects Section */}
      <section id="projects" className="relative z-40 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              <Star className="w-4 h-4 mr-2" />
              Featured Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recent <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest work and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`glass-strong rounded-3xl overflow-hidden interactive-hover group transition-all duration-500 delay-${index * 100} ${
                  index === activeProject ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge
                    variant={project.status === 'Live' ? 'default' : 'secondary'}
                    className={`absolute top-4 right-4 ${project.status === 'Live' ? 'bg-green-500' : ''}`}
                  >
                    {project.status}
                  </Badge>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="glass-subtle border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full glass border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full gradient-primary border-0 text-white">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg" className="gradient-primary border-0 text-white px-8">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="relative z-40 px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 relative z-40 px-0 py-12 sm:py-20" >
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Create Something
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Want to collaborate? Or just want to say hi?
              I'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-start justify-items-left">
            {/* Contact Info */}
            <div className="space-y-8 w-full max-w-2xl">
              <div className="glass-strong rounded-3xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground text-center">Contact Information</h3>

                <div className="space-y-4">
                  <a
                    href="mailto:prathameshgiri8607@gmail.com"
                    className="flex items-center justify-start gap-4 p-4 glass-subtle rounded-xl interactive-hover text-left"
                  >
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-xs text-muted-foreground">prathameshgiri8607@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/gps.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-start gap-4 p-4 glass-subtle rounded-xl interactive-hover text-left"
                  >
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">Instagram</h4>
                      <p className="text-muted-foreground">gps.in</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/prathameshgiri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-start gap-4 p-4 glass-subtle rounded-xl interactive-hover text-left"
                  >
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">GitHub</h4>
                      <p className="text-muted-foreground">prathameshgiri</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/prathamesh-giri-io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-start gap-4 p-4 glass-subtle rounded-xl interactive-hover text-left"
                  >
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">LinkedIn</h4>
                      <p className="text-muted-foreground">prathamesh-giri-io</p>
                    </div>
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

      {/* Feedback Section */}
      <section className="relative z-20 px-2 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              <Heart className="w-4 h-4 mr-2" />
              Your Feedback Matters
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Help Me{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Improve
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your feedback helps me create better content and improve the learning
              experience for everyone
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT SIDE → Quick Feedback */}
            <div className="glass-strong rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Quick Feedback
                </h3>

                <div className="space-y-4 mb-8">
                  {/* Rate */}
                  <div className="flex items-center space-x-4 p-4 glass-subtle rounded-xl interactive-hover cursor-pointer">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Rate the Platform</h4>
                      <p className="text-sm text-muted-foreground">Share your overall experience</p>
                    </div>
                  </div>

                  {/* Suggest Features */}
                  <div className="flex items-center space-x-4 p-4 glass-subtle rounded-xl interactive-hover cursor-pointer">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Suggest Features</h4>
                      <p className="text-sm text-muted-foreground">What would you like to see next?</p>
                    </div>
                  </div>

                  {/* Report Issues */}
                  <div className="flex items-center space-x-4 p-4 glass-subtle rounded-xl interactive-hover cursor-pointer">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Report Issues</h4>
                      <p className="text-sm text-muted-foreground">Found a bug or problem?</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/+918010901226?text=Hi%20Prathamesh!%20I%20would%20like%20to%20give%20feedback%20about%20your%20Portfolio%20Website."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button size="lg" className="w-full gradient-primary border-0 text-white mb-6">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Feedback on WhatsApp
                </Button>
              </a>
              
              {/* Community Stats */}
              <div className="glass-strong rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Community Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4.9</div>
                    <div className="text-sm text-muted-foreground">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">20+</div>
                    <div className="text-sm text-muted-foreground">Reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Happy Customer</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE → Community Stats + Recent Feedback */}
            <div className="space-y-6">
              
              

              {/* Recent Feedback */}
              <div className="glass-strong rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Feedback</h3>
                <div className="space-y-4">
                  <div className="glass-subtle rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Excellent learning platform! The interactive content really helps."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">- Alok Birge.</p>
                  </div>

                  <div className="glass-subtle rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Prathamesh delivers high-quality projects with clean code. Truly impressive work!"
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">- Pihu Reddy.</p>
                  </div>

                  <div className="glass-subtle rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Amazing developer! His projects are innovative, well-structured, and easy to learn from."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">- Rahul Dadge.</p>
                  </div>

                  <div className="glass-subtle rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Prathamesh’s work is always professional and reliable."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">- Sushant Biradar.</p>
                  </div>
                </div>
                {/* 
                <Link to="/feedback" className="block mt-6">
                  <button className="w-full h-12 gradient-primary border-0 text-white rounded-xl font-medium text-lg interactive-hover group">
                    <span className="flex items-center justify-center">
                      Read More Reviews
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* WhatsApp Quick Contact Section */}
      <section className="relative z-40 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 glass-subtle border-0 text-primary">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Quick Connect
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Let's Chat on
                  <br />
                  <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                    WhatsApp
                  </span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Have a quick question or want to discuss a project? Reach out to me directly on WhatsApp for instant communication.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/+918010901226?text=Hi%20Prathamesh!%20I'm%20interested%20in%20discussing%20a%20project%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 border-0 text-white px-6 py-3">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/+918010901226?text=Hello%20Prathamesh!%20I%20would%20like%20to%20collaborate%20on%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg" className="w-full sm:w-auto glass border-green-500/20 text-green-600 hover:bg-green-600">
                      <Handshake className="w-5 h-5 mr-2" />
                      Discuss Collaboration
                    </Button>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block p-8 glass-subtle rounded-3xl">
                  <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Fast Response</h3>
                  <p className="text-sm text-muted-foreground mb-4">Usually responds within 30 minutes</p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Online Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="relative z-40 px-4 sm:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-strong rounded-3xl p-8 sm:p-12 md:p-16 interactive-hover">
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              <User className="w-4 h-4 mr-2" />
              Let's Connect
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to build something
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                amazing together?
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Whether you need a developer, mentor, or collaborator,
              I'm here to help bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact">
                <Button
                  size="lg"
                  className="gradient-primary border-0 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
                  onClick={() => window.location.href = "mailto:prathameshgiri8607@gmail.com"}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>

              </a>
              <Link to="/learning">
                <Button variant="outline" size="lg" className="glass px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border-primary/20">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Start Learning
                </Button>
              </Link>
            </div>
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
