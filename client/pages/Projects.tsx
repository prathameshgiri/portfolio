import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  ExternalLink, 
  Github, 
  Heart, 
  MessageCircle, 
  ShoppingCart, 
  Users, 
  Star,
  Calendar,
  Code2,
  Zap,
  Filter,
  Search,
  Play,
  Download,
  Eye,
  CheckCircle,
  DollarSign,
  Handshake,
  Briefcase,
  ArrowRight
} from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: "all", name: "All Projects", count: 12 },
    { id: "web", name: "Web Development", count: 6 },
    { id: "mobile", name: "Mobile Apps", count: 3 },
    { id: "desktop", name: "Desktop Apps", count: 2 },
    { id: "ai", name: "AI/ML Projects", count: 1 }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Pro",
      description: "Advanced e-commerce solution with React, Node.js, AI recommendations, payment integration, and admin dashboard",
      category: "web",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AI/ML"],
      status: "Live",
      price: 9500,
      collaborationType: "Open Source",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&auto=format",
      liveUrl: "https://ecommerce-pro.prathameshgiri.dev",
      githubUrl: "https://github.com/prathameshgiri/ecommerce-pro",
      features: ["User Authentication", "Payment Gateway", "Admin Panel", "AI Recommendations", "Mobile Responsive"],
      complexity: "Advanced",
      timeline: "2-3 months",
      rating: 4.9,
      downloads: 1200,
      likes: 340
    },
    {
      id: 2,
      title: "Learning Management System",
      description: "Complete LMS with course creation, video streaming, quizzes, progress tracking, and certificate generation",
      category: "web",
      tech: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "WebRTC"],
      status: "In Development",
      price: 8999,
      collaborationType: "Premium",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&auto=format",
      liveUrl: "https://lms-demo.prathameshgiri.dev",
      githubUrl: "https://github.com/prathameshgiri/lms-platform",
      features: ["Video Streaming", "Course Management", "Progress Tracking", "Certificates", "Live Classes"],
      complexity: "Expert",
      timeline: "3-4 months",
      rating: 4.8,
      downloads: 850,
      likes: 290
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "Socket.io powered chat with rooms, file sharing, voice/video calls, and end-to-end encryption",
      category: "web",
      tech: ["Socket.io", "Express", "React", "Redis", "WebRTC"],
      status: "Live",
      price: 11999,
      collaborationType: "Open Source",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop&auto=format",
      liveUrl: "https://chat-app.prathameshgiri.dev",
      githubUrl: "https://github.com/prathameshgiri/realtime-chat",
      features: ["Real-time Messaging", "File Sharing", "Video Calls", "Group Chats", "Encryption"],
      complexity: "Intermediate",
      timeline: "1-2 months",
      rating: 4.7,
      downloads: 2100,
      likes: 520
    },
    {
      id: 4,
      title: "Mobile Fitness Tracker",
      description: "React Native app with workout tracking, nutrition logging, progress analytics, and social features",
      category: "mobile",
      tech: ["React Native", "Firebase", "Redux", "Chart.js"],
      status: "Live",
      price: 4999,
      collaborationType: "Premium",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop&auto=format",
      liveUrl: "https://fitness-tracker-demo.com",
      githubUrl: "https://github.com/prathameshgiri/fitness-tracker",
      features: ["Workout Tracking", "Nutrition Logging", "Social Features", "Progress Analytics", "Offline Mode"],
      complexity: "Advanced",
      timeline: "2-3 months",
      rating: 4.6,
      downloads: 750,
      likes: 180
    },
    {
      id: 5,
      title: "AI Content Generator",
      description: "OpenAI-powered content generation tool with templates, SEO optimization, and multi-language support",
      category: "ai",
      tech: ["Python", "FastAPI", "OpenAI", "React", "PostgreSQL"],
      status: "Beta",
      price: 5499,
      collaborationType: "Exclusive",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&auto=format",
      liveUrl: "https://ai-content.prathameshgiri.dev",
      githubUrl: "https://github.com/prathameshgiri/ai-content-gen",
      features: ["AI Content Generation", "SEO Optimization", "Multi-language", "Custom Templates", "API Integration"],
      complexity: "Expert",
      timeline: "3-4 months",
      rating: 4.9,
      downloads: 450,
      likes: 210
    },
    {
      id: 6,
      title: "Desktop Task Manager",
      description: "Electron-based desktop app for project management with time tracking, team collaboration, and reporting",
      category: "desktop",
      tech: ["Electron", "React", "SQLite", "Chart.js"],
      status: "Live",
      price: 4999,
      collaborationType: "Open Source",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format",
      liveUrl: "#",
      githubUrl: "https://github.com/prathameshgiri/task-manager-desktop",
      features: ["Time Tracking", "Team Collaboration", "Project Reports", "Offline Support", "Cross-platform"],
      complexity: "Intermediate",
      timeline: "2 months",
      rating: 4.5,
      downloads: 620,
      likes: 150
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-orange-100 text-orange-800";
      case "Expert": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCollaborationColor = (type: string) => {
    switch (type) {
      case "Open Source": return "bg-green-100 text-green-800";
      case "Premium": return "bg-blue-100 text-blue-800";
      case "Exclusive": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleWhatsAppContact = (project: any, type: string) => {
    const message = encodeURIComponent(
      `Hi Prathamesh! I'm interested in ${type.toLowerCase()} for the "${project.title}" project. Can we discuss the details?`
    );
    window.open(`https://wa.me/+918010901226?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl floating-delayed" />
      </div>

      {/* Navigation */}
      <Navigation subtitle="Project Portfolio" />

      {/* Hero Section */}
      <section className="relative z-40 px-4 sm:px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              <Briefcase className="w-4 h-4 mr-2" />
              Professional Portfolio
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my collection of projects, collaborate on new ideas, or purchase ready-to-use solutions
            </p>
          </div>

          {/* Service Options */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            <div className="glass-strong rounded-2xl p-6 text-center interactive-hover">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">View Projects</h3>
              <p className="text-sm text-muted-foreground">Explore live demos and source code</p>
            </div>
            
            <div 
              className="glass-strong rounded-2xl p-6 text-center interactive-hover cursor-pointer"
              onClick={() => handleWhatsAppContact({title: "New Project"}, "Custom Development")}
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Collaborate</h3>
              <p className="text-sm text-muted-foreground">Work together on new projects</p>
            </div>
            
            <div 
              className="glass-strong rounded-2xl p-6 text-center interactive-hover cursor-pointer"
              onClick={() => handleWhatsAppContact({title: "Project Purchase"}, "Purchasing")}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Buy Projects</h3>
              <p className="text-sm text-muted-foreground">Purchase ready-to-use solutions</p>
            </div>
            
            <div 
              className="glass-strong rounded-2xl p-6 text-center interactive-hover cursor-pointer"
              onClick={() => handleWhatsAppContact({title: "General Inquiry"}, "Discussion")}
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Get Support</h3>
              <p className="text-sm text-muted-foreground">Discuss custom requirements</p>
            </div>
          </div>

          {/* Filters */}
          <div className="glass-strong rounded-2xl p-4 sm:p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white'
                        : 'glass hover:glass-strong text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                {filteredProjects.length} projects found
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`glass-strong rounded-3xl overflow-hidden interactive-hover transition-all duration-500 delay-${index * 100}`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <Badge className={getComplexityColor(project.complexity)}>
                      {project.complexity}
                    </Badge>
                    <Badge className={getCollaborationColor(project.collaborationType)}>
                      {project.collaborationType}
                    </Badge>
                  </div>

                  {/* Quick Stats */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{project.downloads}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{project.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <div className="text-lg font-bold text-primary">₹{project.price}</div>
                      <div className="text-xs text-muted-foreground">Starting at</div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="glass-subtle text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline & Status */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                    <div>
                      <span className="text-muted-foreground">Timeline:</span>
                      <div className="font-medium">{project.timeline}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Status:</span>
                      <div className={`font-medium ${project.status === 'Live' ? 'text-green-600' : 'text-blue-600'}`}>
                        {project.status}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="w-full glass border-primary/20">
                          <Play className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="w-full glass border-primary/20">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        size="sm" 
                        className="w-full gradient-primary border-0 text-white"
                        onClick={() => handleWhatsAppContact(project, "Purchasing")}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full glass border-green-500/20 text-green-600"
                        onClick={() => handleWhatsAppContact(project, "Collaboration")}
                      >
                        <Handshake className="w-4 h-4 mr-2" />
                        Collaborate
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="glass-strong rounded-3xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Have a Custom Project in Mind?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your requirements and create something amazing together. 
                I offer custom development, consultation, and long-term collaboration.
              </p>
              <Button 
                size="lg" 
                className="gradient-primary border-0 text-white px-8"
                onClick={() => handleWhatsAppContact({title: "Custom Project"}, "Custom Development")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Discuss Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
