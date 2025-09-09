import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  BookOpen, 
  Code2, 
  Smartphone, 
  Globe, 
  ArrowLeft, 
  Play, 
  Clock, 
  Users, 
  Star,
  CheckCircle,
  FileText,
  HelpCircle,
  Terminal,
  Zap,
  TrendingUp,
  Award,
  Target,
  Lightbulb,
  ChevronRight,
  Search,
  Filter
} from "lucide-react";

export default function Learning() {
  const [selectedCategory, setSelectedCategory] = useState("programming");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    {
      id: "programming",
      title: "Programming Fundamentals",
      description: "Master the core concepts of programming with hands-on practice",
      icon: Code2,
      color: "from-blue-500 to-indigo-600",
      count: "25 Courses",
      level: "Beginner to Advanced",
      topics: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Design Patterns"]
    },
    {
      id: "web-dev",
      title: "Web Development",
      description: "Build modern web applications with the latest technologies",
      icon: Globe,
      color: "from-green-500 to-emerald-600",
      count: "30 Courses",
      level: "Beginner to Expert",
      topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "Full Stack"]
    },
    {
      id: "mobile-dev",
      title: "Mobile Development",
      description: "Create amazing mobile apps for iOS and Android platforms",
      icon: Smartphone,
      color: "from-purple-500 to-pink-600",
      count: "20 Courses",
      level: "Intermediate to Advanced",
      topics: ["React Native", "Flutter", "iOS", "Android", "Cross-platform"]
    }
  ];

  const interactiveSections = [
    {
      title: "Interactive Notes",
      description: "Comprehensive study materials with interactive examples and code snippets",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      features: ["Live Code Examples", "Syntax Highlighting", "Bookmarks", "Search"],
      action: "Browse Notes"
    },
    {
      title: "Practice Quizzes",
      description: "Test your knowledge with challenging quizzes and instant feedback",
      icon: HelpCircle,
      color: "from-green-500 to-green-600",
      features: ["Multiple Choice", "Code Challenges", "Progress Tracking", "Explanations"],
      action: "Take Quiz"
    },
    {
      title: "Live Code Editor",
      description: "Practice coding in real-time with our interactive code playground",
      icon: Terminal,
      color: "from-purple-500 to-purple-600",
      features: ["Multi-language Support", "Real-time Preview", "Auto-complete", "Sharing"],
      action: "Start Coding"
    }
  ];

  const featuredCourses = [
    {
      title: "Complete JavaScript Mastery",
      description: "From basics to advanced concepts including ES6+, async programming, and more",
      duration: "12 hours",
      students: "2.5k",
      rating: 4.9,
      level: "Beginner",
      image: "🚀",
      progress: 0
    },
    {
      title: "React & TypeScript Bootcamp",
      description: "Build scalable applications with React and TypeScript best practices",
      duration: "18 hours",
      students: "1.8k",
      rating: 4.8,
      level: "Intermediate",
      image: "⚛️",
      progress: 65
    },
    {
      title: "Node.js Backend Development",
      description: "Create robust APIs and backend services with Node.js and Express",
      duration: "15 hours",
      students: "1.2k",
      rating: 4.9,
      level: "Intermediate",
      image: "🟢",
      progress: 30
    },
    {
      title: "Mobile App with React Native",
      description: "Build cross-platform mobile applications from scratch",
      duration: "20 hours",
      students: "900",
      rating: 4.7,
      level: "Advanced",
      image: "📱",
      progress: 0
    }
  ];

  const stats = [
    { label: "Active Learners", value: "5000+", icon: Users, color: "text-blue-500" },
    { label: "Courses Available", value: "75+", icon: BookOpen, color: "text-green-500" },
    { label: "Hours of Content", value: "500+", icon: Clock, color: "text-purple-500" },
    { label: "Success Rate", value: "94%", icon: Target, color: "text-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl floating-delayed" />
      </div>

      {/* Navigation */}
      <Navigation subtitle="Learning Platform" />

      {/* Hero Section */}
      <section className="relative z-40 px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              <Lightbulb className="w-4 h-4 mr-2" />
              Interactive Learning Platform
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Master Coding
              </span>
              <br />
              <span className="text-foreground">
                Through Practice
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Accelerate your coding journey with interactive lessons, hands-on projects, 
              and real-time feedback. Learn by doing, not just watching.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button size="lg" className="gradient-primary border-0 text-white px-8 py-6 text-lg interactive-hover">
                <Play className="w-5 h-5 mr-2" />
                Start Learning Now
              </Button>
              
              <Button variant="outline" size="lg" className="glass px-8 py-6 text-lg interactive-hover border-primary/20">
                <Search className="w-5 h-5 mr-2" />
                Browse Courses
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`glass-strong rounded-2xl p-6 interactive-hover transition-all duration-500 delay-${index * 100}`}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mb-3 mx-auto`} />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Categories */}
      <section id="categories" className="relative z-40 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              <BookOpen className="w-4 h-4 mr-2" />
              Learning Paths
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Learning Path</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Structured learning paths designed to take you from beginner to expert
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={category.id}
                className={`glass-strong rounded-3xl p-8 interactive-hover group cursor-pointer transition-all duration-500 delay-${index * 100} ${
                  selectedCategory === category.id ? 'ring-2 ring-primary/50' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} p-5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Courses:</span>
                    <span className="font-medium">{category.count}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Level:</span>
                    <span className="font-medium">{category.level}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {category.topics.map((topic) => (
                    <div key={topic} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-muted-foreground">{topic}</span>
                    </div>
                  ))}
                </div>

                <Link to={`/explore-path/${category.id}`}>
                  <Button className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                    Explore Path
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Sections */}
      <section id="practice" className="relative z-40 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              <Zap className="w-4 h-4 mr-2" />
              Interactive Learning
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Learn Through <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Interaction</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Engage with content through multiple interactive formats
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {interactiveSections.map((section, index) => (
              <div 
                key={section.title}
                className={`glass-strong rounded-3xl p-8 interactive-hover group transition-all duration-500 delay-${index * 100}`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <section.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {section.description}
                </p>

                <div className="space-y-2 mb-6">
                  {section.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to={
                  section.title === "Interactive Notes" ? "/browse-notes" :
                  section.title === "Practice Quizzes" ? "/practice-quiz" :
                  section.title === "Live Code Editor" ? "/code-editor" : "#"
                }>
                  <Button className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                    {section.action}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="relative z-40 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              <TrendingUp className="w-4 h-4 mr-2" />
              Popular Courses
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Courses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start with our most popular and highly-rated courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredCourses.map((course, index) => (
              <div 
                key={course.title}
                className={`glass-strong rounded-3xl p-8 interactive-hover group transition-all duration-500 delay-${index * 100}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {course.image}
                  </div>
                  <div className="text-right">
                    <Badge variant={course.progress > 0 ? 'default' : 'secondary'}>
                      {course.level}
                    </Badge>
                    {course.progress > 0 && (
                      <div className="text-sm text-muted-foreground mt-1">
                        {course.progress}% Complete
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {course.description}
                </p>

                {course.progress > 0 && (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <Button className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                  {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-40 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-strong rounded-3xl p-12 md:p-16 interactive-hover">
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              <Award className="w-4 h-4 mr-2" />
              Start Your Journey
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to level up
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                your coding skills?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join thousands of developers who have transformed their careers 
              through our interactive learning platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="outline" size="lg" className="glass px-8 py-6 text-lg border-primary/20">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Need Help?
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
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
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
