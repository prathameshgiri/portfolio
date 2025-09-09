import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  Star, 
  Heart, 
  ThumbsUp, 
  MessageCircle, 
  User, 
  Calendar, 
  Quote,
  TrendingUp,
  Award,
  Target,
  Users,
  BarChart3,
  ArrowRight,
  Filter,
  Search,
  ExternalLink,
  Send,
  Lightbulb
} from "lucide-react";

export default function Feedback() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: "all", name: "All Feedback", count: 47 },
    { id: "learning", name: "Learning Platform", count: 23 },
    { id: "projects", name: "Project Work", count: 15 },
    { id: "mentoring", name: "Mentoring", count: 9 }
  ];

  const feedbacks = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frontend Developer",
      company: "TechCorp Inc.",
      category: "learning",
      rating: 5,
      date: "2024-12-15",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      feedback: "Prathamesh's learning platform is absolutely incredible! The interactive content and hands-on approach really helped me master React concepts. The code editor feature is a game-changer for practicing in real-time.",
      project: "React Fundamentals Course",
      helpful: 28,
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      category: "projects",
      rating: 5,
      date: "2024-12-10",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      feedback: "Working with Prathamesh on our e-commerce platform was an amazing experience. He delivered beyond expectations, with clean code, excellent architecture, and great communication throughout the project.",
      project: "E-Commerce Platform Development",
      helpful: 34,
      verified: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Computer Science Student",
      company: "MIT",
      category: "mentoring",
      rating: 5,
      date: "2024-12-08",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      feedback: "Prathamesh is an exceptional mentor! His guidance helped me land my first internship at Google. He's patient, knowledgeable, and really cares about his students' success.",
      project: "Career Mentoring & Interview Prep",
      helpful: 42,
      verified: true
    },
    {
      id: 4,
      name: "David Kumar",
      role: "Product Manager",
      company: "Microsoft",
      category: "projects",
      rating: 5,
      date: "2024-12-05",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      feedback: "The mobile app Prathamesh developed for us exceeded all expectations. The performance is outstanding, and the user experience is seamless. Highly recommend for any mobile development needs!",
      project: "Mobile App Development",
      helpful: 31,
      verified: true
    },
    {
      id: 5,
      name: "Jessica Taylor",
      role: "Full Stack Developer",
      company: "Netflix",
      category: "learning",
      rating: 5,
      date: "2024-12-02",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      feedback: "The JavaScript course content is top-notch! Prathamesh explains complex concepts in a very understandable way. The practical projects really solidified my understanding.",
      project: "Advanced JavaScript Course",
      helpful: 25,
      verified: true
    },
    {
      id: 6,
      name: "Alex Williams",
      role: "Tech Lead",
      company: "Amazon",
      category: "projects",
      rating: 5,
      date: "2024-11-28",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      feedback: "Excellent work on our microservices architecture! Prathamesh's expertise in Node.js and system design helped us scale our platform to handle millions of users.",
      project: "Microservices Architecture",
      helpful: 39,
      verified: true
    },
    {
      id: 7,
      name: "Maria Garcia",
      role: "UI/UX Designer",
      company: "Adobe",
      category: "learning",
      rating: 5,
      date: "2024-11-25",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      feedback: "As a designer wanting to learn frontend development, Prathamesh's courses were perfect! He bridges the gap between design and development beautifully.",
      project: "Frontend for Designers Course",
      helpful: 22,
      verified: true
    },
    {
      id: 8,
      name: "Robert Kim",
      role: "Senior Developer",
      company: "Spotify",
      category: "mentoring",
      rating: 5,
      date: "2024-11-20",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      feedback: "Prathamesh's mentoring style is exceptional. He helped me transition from backend to full-stack development smoothly. His real-world insights are invaluable.",
      project: "Full-Stack Transition Mentoring",
      helpful: 27,
      verified: true
    }
  ];

  const stats = [
    { label: "Total Reviews", value: "20+", icon: MessageCircle, color: "text-blue-500" },
    { label: "Average Rating", value: "4.9", icon: Star, color: "text-yellow-500" },
    { label: "Happy Clients", value: "50+", icon: Users, color: "text-green-500" },
    { label: "Success Rate", value: "98%", icon: Target, color: "text-purple-500" }
  ];

  const filteredFeedbacks = selectedCategory === "all" 
    ? feedbacks 
    : feedbacks.filter(feedback => feedback.category === selectedCategory);

  const handleWhatsAppFeedback = () => {
    const message = encodeURIComponent(
      "Hi Prathamesh! I'd like to share my feedback about your work/services."
    );
    window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
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
      <Navigation subtitle="Client Feedback" />

      {/* Hero Section */}
      <section className="relative z-40 px-4 sm:px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              <Heart className="w-4 h-4 mr-2" />
              Client Testimonials
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              What People Say About
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                My Work
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Real feedback from clients, students, and collaborators who have experienced my work firsthand
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`glass-strong rounded-2xl p-4 sm:p-6 text-center interactive-hover transition-all duration-500 delay-${index * 100}`}
              >
                <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="glass-strong rounded-2xl p-4 sm:p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 sm:px-4 py-2 rounded-xl text-sm font-medium transition-all ${
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
                {filteredFeedbacks.length} reviews found
              </div>
            </div>
          </div>

          {/* Feedback Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {filteredFeedbacks.map((feedback, index) => (
              <div 
                key={feedback.id}
                className={`glass-strong rounded-3xl p-6 sm:p-8 interactive-hover transition-all duration-500 delay-${index * 100}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={feedback.avatar} 
                      alt={feedback.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-foreground">{feedback.name}</h3>
                        {feedback.verified && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{feedback.role}</p>
                      <p className="text-xs text-muted-foreground">{feedback.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < feedback.rating 
                              ? 'text-yellow-500 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {new Date(feedback.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Project */}
                <div className="mb-4">
                  <Badge variant="outline" className="glass-subtle text-xs">
                    {feedback.project}
                  </Badge>
                </div>

                {/* Feedback */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/30" />
                  <p className="text-muted-foreground leading-relaxed pl-4">
                    {feedback.feedback}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{feedback.helpful} people found this helpful</span>
                  </div>
                  <Button variant="outline" size="sm" className="glass border-primary/20">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Helpful
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Your Feedback */}
          <div className="glass-strong rounded-3xl p-6 sm:p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Share Your Experience</h2>
              <p className="text-muted-foreground mb-8">
                Have you worked with me or taken my courses? I'd love to hear about your experience!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="gradient-primary border-0 text-white px-8"
                  onClick={handleWhatsAppFeedback}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Share Feedback on WhatsApp
                </Button>
                <Button variant="outline" size="lg" className="glass border-primary/20">
                  <Send className="w-5 h-5 mr-2" />
                  Write a Review
                </Button>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
                <Award className="w-4 h-4 mr-2" />
                Success Stories
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Transforming <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Careers</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-strong rounded-2xl p-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Career Growth</h3>
                <p className="text-3xl font-bold text-primary mb-2">85%</p>
                <p className="text-sm text-muted-foreground">Students got promotions after my courses</p>
              </div>
              
              <div className="glass-strong rounded-2xl p-6 text-center">
                <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Project Success</h3>
                <p className="text-3xl font-bold text-primary mb-2">98%</p>
                <p className="text-sm text-muted-foreground">Projects delivered on time and budget</p>
              </div>
              
              <div className="glass-strong rounded-2xl p-6 text-center sm:col-span-2 lg:col-span-1">
                <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Student Satisfaction</h3>
                <p className="text-3xl font-bold text-primary mb-2">4.9/5</p>
                <p className="text-sm text-muted-foreground">Average rating across all courses</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
