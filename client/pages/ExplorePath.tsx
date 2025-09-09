import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Code2, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  PlayCircle,
  BookOpen,
  Award,
  Target,
  Zap,
  ChevronRight,
  Download,
  Globe,
  Smartphone
} from "lucide-react";

export default function ExplorePath() {
  const { pathId } = useParams();
  const [selectedPath, setSelectedPath] = useState("programming");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    if (pathId) {
      setSelectedPath(pathId);
    }
  }, [pathId]);

  const learningPaths = {
    programming: {
      title: "Programming Fundamentals",
      description: "Master the core concepts of programming with hands-on practice",
      icon: Code2,
      color: "from-blue-500 to-indigo-600",
      difficulty: "Beginner to Advanced",
      duration: "12-16 weeks",
      students: "2.5k+",
      rating: 4.9,
      modules: [
        {
          title: "Introduction to Programming",
          lessons: 8,
          duration: "2 weeks",
          topics: ["Variables & Data Types", "Control Structures", "Functions", "Problem Solving"],
          completed: true
        },
        {
          title: "Data Structures",
          lessons: 12,
          duration: "3 weeks", 
          topics: ["Arrays", "Linked Lists", "Stacks & Queues", "Trees", "Hash Tables"],
          completed: false
        },
        {
          title: "Algorithms",
          lessons: 15,
          duration: "4 weeks",
          topics: ["Sorting", "Searching", "Recursion", "Dynamic Programming", "Graph Algorithms"],
          completed: false
        },
        {
          title: "Object-Oriented Programming",
          lessons: 10,
          duration: "3 weeks",
          topics: ["Classes & Objects", "Inheritance", "Polymorphism", "Encapsulation"],
          completed: false
        },
        {
          title: "Design Patterns",
          lessons: 8,
          duration: "2 weeks",
          topics: ["Creational Patterns", "Structural Patterns", "Behavioral Patterns"],
          completed: false
        },
        {
          title: "Advanced Topics",
          lessons: 12,
          duration: "3 weeks",
          topics: ["Memory Management", "Concurrency", "Testing", "Code Quality"],
          completed: false
        }
      ]
    },
    "web-dev": {
      title: "Web Development",
      description: "Build modern web applications with the latest technologies",
      icon: Globe,
      color: "from-green-500 to-emerald-600",
      difficulty: "Beginner to Expert",
      duration: "16-20 weeks",
      students: "3.2k+",
      rating: 4.8,
      modules: [
        {
          title: "HTML & CSS Fundamentals",
          lessons: 10,
          duration: "2 weeks",
          topics: ["HTML5 Semantics", "CSS3 Features", "Responsive Design", "Flexbox & Grid"],
          completed: true
        },
        {
          title: "JavaScript Essentials",
          lessons: 15,
          duration: "4 weeks",
          topics: ["ES6+ Features", "DOM Manipulation", "Async Programming", "APIs"],
          completed: false
        },
        {
          title: "Frontend Frameworks",
          lessons: 18,
          duration: "5 weeks",
          topics: ["React Fundamentals", "State Management", "Routing", "Component Libraries"],
          completed: false
        },
        {
          title: "Backend Development",
          lessons: 12,
          duration: "3 weeks",
          topics: ["Node.js", "Express.js", "Databases", "Authentication"],
          completed: false
        },
        {
          title: "Full Stack Integration",
          lessons: 8,
          duration: "2 weeks",
          topics: ["API Integration", "Deployment", "Testing", "Performance"],
          completed: false
        }
      ]
    },
    "mobile-dev": {
      title: "Mobile Development",
      description: "Create amazing mobile apps for iOS and Android platforms",
      icon: Smartphone,
      color: "from-purple-500 to-pink-600",
      difficulty: "Intermediate to Advanced",
      duration: "14-18 weeks",
      students: "1.8k+",
      rating: 4.7,
      modules: [
        {
          title: "Mobile Development Basics",
          lessons: 8,
          duration: "2 weeks",
          topics: ["Mobile UI/UX", "Platform Guidelines", "Development Environment"],
          completed: true
        },
        {
          title: "React Native Fundamentals",
          lessons: 12,
          duration: "3 weeks",
          topics: ["Components", "Navigation", "State Management", "Native Modules"],
          completed: false
        },
        {
          title: "Advanced Features",
          lessons: 10,
          duration: "3 weeks",
          topics: ["Camera & Media", "Push Notifications", "Offline Storage", "Performance"],
          completed: false
        },
        {
          title: "Platform Specific",
          lessons: 15,
          duration: "4 weeks",
          topics: ["iOS Development", "Android Development", "Platform APIs"],
          completed: false
        },
        {
          title: "Publishing & Distribution",
          lessons: 6,
          duration: "2 weeks",
          topics: ["App Store Guidelines", "Testing", "Analytics", "Updates"],
          completed: false
        }
      ]
    }
  };

  const currentPath = learningPaths[selectedPath as keyof typeof learningPaths];
  const IconComponent = currentPath.icon;

  const pathOptions = [
    { id: "programming", name: "Programming", icon: Code2 },
    { id: "web-dev", name: "Web Development", icon: Globe },
    { id: "mobile-dev", name: "Mobile Development", icon: Smartphone }
  ];

  const completedModules = currentPath.modules.filter(m => m.completed).length;
  const progressPercentage = (completedModules / currentPath.modules.length) * 100;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl floating-delayed" />
      </div>

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
              <p className="text-sm text-muted-foreground">Learning Paths</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/learning">
              <Button variant="outline" className="glass border-primary/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Learning
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-40 px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Path Selector */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {pathOptions.map((path) => (
              <button
                key={path.id}
                onClick={() => setSelectedPath(path.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
                  selectedPath === path.id
                    ? 'glass-strong border-2 border-primary/50 text-primary'
                    : 'glass border border-border/50 text-muted-foreground hover:text-foreground'
                }`}
              >
                <path.icon className="w-5 h-5" />
                <span className="font-medium">{path.name}</span>
              </button>
            ))}
          </div>

          {/* Path Overview */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-strong rounded-3xl p-8 md:p-12 mb-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentPath.color} p-5 mb-6 inline-flex items-center justify-center`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {currentPath.title}
                    </span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {currentPath.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-4 glass-subtle rounded-xl">
                      <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="font-semibold">{currentPath.duration}</div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                    </div>
                    <div className="text-center p-4 glass-subtle rounded-xl">
                      <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="font-semibold">{currentPath.students}</div>
                      <div className="text-sm text-muted-foreground">Students</div>
                    </div>
                  </div>

                  <Button size="lg" className="gradient-primary border-0 text-white px-8 mr-4">
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Start Learning
                  </Button>
                  
                  <Button variant="outline" size="lg" className="glass border-primary/20">
                    <Download className="w-5 h-5 mr-2" />
                    Download Syllabus
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="glass-subtle rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Course Progress</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Completed</span>
                      <span className="text-sm font-medium">{completedModules}/{currentPath.modules.length} modules</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 mb-4">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                      {Math.round(progressPercentage)}% Complete
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 glass-subtle rounded-xl">
                      <Target className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="font-semibold">{currentPath.difficulty}</div>
                      <div className="text-xs text-muted-foreground">Level</div>
                    </div>
                    <div className="text-center p-4 glass-subtle rounded-xl">
                      <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                      <div className="font-semibold">{currentPath.rating}</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                    <div className="text-center p-4 glass-subtle rounded-xl">
                      <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="font-semibold">Certificate</div>
                      <div className="text-xs text-muted-foreground">Included</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Modules */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">Learning Modules</h2>
            
            {currentPath.modules.map((module, index) => (
              <div 
                key={module.title}
                className={`glass-strong rounded-2xl p-6 interactive-hover transition-all duration-500 delay-${index * 100}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${module.completed ? 'bg-green-500' : 'bg-muted'} flex items-center justify-center`}>
                        {module.completed ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : (
                          <span className="text-foreground font-bold">{index + 1}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{module.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{module.lessons} lessons</span>
                          <span>•</span>
                          <span>{module.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {module.topics.map((topic) => (
                        <Badge key={topic} variant="outline" className="glass-subtle">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    {module.completed ? (
                      <Button variant="outline" className="glass">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Review
                      </Button>
                    ) : (
                      <Button className={index === 1 ? 'gradient-primary border-0 text-white' : ''} disabled={index > 1}>
                        <PlayCircle className="w-4 h-4 mr-2" />
                        {index === 1 ? 'Continue' : index === 0 ? 'Start' : 'Locked'}
                      </Button>
                    )}
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Link to="/browse-notes" className="glass-strong rounded-2xl p-6 interactive-hover text-center">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Browse Notes</h3>
              <p className="text-muted-foreground text-sm">Access comprehensive study materials</p>
            </Link>
            
            <Link to="/practice-quiz" className="glass-strong rounded-2xl p-6 interactive-hover text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Practice Quiz</h3>
              <p className="text-muted-foreground text-sm">Test your knowledge with quizzes</p>
            </Link>
            
            <Link to="/code-editor" className="glass-strong rounded-2xl p-6 interactive-hover text-center">
              <Code2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Live Code Editor</h3>
              <p className="text-muted-foreground text-sm">Practice coding in real-time</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
