import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  Download, 
  BookOpen, 
  FileText, 
  Eye,
  Star,
  Clock,
  User,
  Tag,
  ChevronDown,
  SortAsc,
  Grid,
  List
} from "lucide-react";

export default function BrowseNotes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("popular");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: "all", name: "All Categories", count: 156 },
    { id: "fundamentals", name: "Programming Fundamentals", count: 45 },
    { id: "web-dev", name: "Web Development", count: 62 },
    { id: "mobile-dev", name: "Mobile Development", count: 28 },
    { id: "data-structures", name: "Data Structures", count: 21 }
  ];

  const languages = [
    { id: "all", name: "All Languages" },
    { id: "javascript", name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { id: "python", name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { id: "java", name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { id: "cpp", name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { id: "react", name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { id: "nodejs", name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" }
  ];

  const notes = [
    {
      id: 1,
      title: "JavaScript ES6+ Complete Guide",
      description: "Comprehensive guide covering all modern JavaScript features including arrow functions, async/await, destructuring, and more.",
      language: "javascript",
      category: "web-dev",
      author: "Prathamesh Giri",
      pages: 45,
      downloads: 2840,
      rating: 4.9,
      updatedAt: "2024-01-15",
      tags: ["ES6", "Modern JavaScript", "Async Programming"],
      difficulty: "Intermediate",
      size: "2.4 MB"
    },
    {
      id: 2,
      title: "Python Data Structures & Algorithms",
      description: "In-depth coverage of data structures and algorithms implementation in Python with real-world examples.",
      language: "python",
      category: "data-structures",
      author: "Prathamesh Giri",
      pages: 78,
      downloads: 1950,
      rating: 4.8,
      updatedAt: "2024-01-10",
      tags: ["Data Structures", "Algorithms", "Python"],
      difficulty: "Advanced",
      size: "3.2 MB"
    },
    {
      id: 3,
      title: "React Hooks Mastery",
      description: "Master React Hooks with practical examples and best practices for building modern React applications.",
      language: "react",
      category: "web-dev",
      author: "Prathamesh Giri",
      pages: 32,
      downloads: 3210,
      rating: 4.9,
      updatedAt: "2024-01-20",
      tags: ["React Hooks", "State Management", "Modern React"],
      difficulty: "Intermediate",
      size: "1.8 MB"
    },
    {
      id: 4,
      title: "Java OOP Fundamentals",
      description: "Object-oriented programming concepts in Java with hands-on examples and design patterns.",
      language: "java",
      category: "fundamentals",
      author: "Prathamesh Giri",
      pages: 56,
      downloads: 1680,
      rating: 4.7,
      updatedAt: "2024-01-08",
      tags: ["OOP", "Java", "Design Patterns"],
      difficulty: "Beginner",
      size: "2.9 MB"
    },
    {
      id: 5,
      title: "C++ STL Complete Reference",
      description: "Complete guide to Standard Template Library in C++ with examples and performance considerations.",
      language: "cpp",
      category: "fundamentals",
      author: "Prathamesh Giri",
      pages: 89,
      downloads: 1420,
      rating: 4.6,
      updatedAt: "2024-01-05",
      tags: ["STL", "C++", "Templates"],
      difficulty: "Advanced",
      size: "4.1 MB"
    },
    {
      id: 6,
      title: "Node.js Backend Development",
      description: "Build scalable backend applications with Node.js, Express, and modern development practices.",
      language: "nodejs",
      category: "web-dev",
      author: "Prathamesh Giri",
      pages: 67,
      downloads: 2160,
      rating: 4.8,
      updatedAt: "2024-01-12",
      tags: ["Node.js", "Express", "Backend"],
      difficulty: "Intermediate",
      size: "3.5 MB"
    }
  ];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || note.category === selectedCategory;
    const matchesLanguage = selectedLanguage === "all" || note.language === selectedLanguage;
    
    return matchesSearch && matchesCategory && matchesLanguage;
  });

  const sortedNotes = [...filteredNotes].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.downloads - a.downloads;
      case "rating":
        return b.rating - a.rating;
      case "recent":
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      case "alphabetical":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleDownload = (note: typeof notes[0]) => {
    // Simulate download
    console.log(`Downloading: ${note.title}`);
    // In a real app, this would trigger the actual download
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
      <Navigation subtitle="Browse Notes" />

      {/* Main Content */}
      <section className="relative z-40 px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              <BookOpen className="w-4 h-4 mr-2" />
              Study Materials
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Browse Programming Notes
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access comprehensive study materials, guides, and references for all programming languages
            </p>
          </div>

          {/* Filters and Search */}
          <div className="glass-strong rounded-2xl p-6 mb-8">
            <div className="grid lg:grid-cols-4 gap-4 mb-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search notes, topics, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 glass border-primary/20"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full h-10 px-3 glass border border-primary/20 rounded-md bg-background text-foreground"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Language Filter */}
              <div>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full h-10 px-3 glass border border-primary/20 rounded-md bg-background text-foreground"
                >
                  {languages.map((language) => (
                    <option key={language.id} value={language.id}>
                      {language.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <SortAsc className="w-4 h-4 text-muted-foreground" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1 glass border border-primary/20 rounded-md bg-background text-foreground text-sm"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="recent">Most Recent</option>
                    <option value="alphabetical">Alphabetical</option>
                  </select>
                </div>
                <div className="text-sm text-muted-foreground">
                  {sortedNotes.length} notes found
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-primary text-white" : "glass"}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-primary text-white" : "glass"}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Notes Grid/List */}
          <div className={viewMode === "grid" 
            ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "space-y-4"
          }>
            {sortedNotes.map((note, index) => (
              <div 
                key={note.id}
                className={`glass-strong rounded-2xl p-6 interactive-hover transition-all duration-500 delay-${index * 50} ${
                  viewMode === "list" ? "flex items-center space-x-6" : ""
                }`}
              >
                {viewMode === "grid" ? (
                  // Grid View
                  <>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {languages.find(l => l.id === note.language)?.icon && (
                          <img 
                            src={languages.find(l => l.id === note.language)?.icon} 
                            alt={note.language}
                            className="w-8 h-8"
                          />
                        )}
                        <Badge className={getDifficultyColor(note.difficulty)}>
                          {note.difficulty}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{note.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {note.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {note.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {note.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="glass-subtle text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <FileText className="w-3 h-3" />
                        <span>{note.pages} pages</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="w-3 h-3" />
                        <span>{note.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{note.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{note.size}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 gradient-primary border-0 text-white">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="glass border-primary/20"
                        onClick={() => handleDownload(note)}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </>
                ) : (
                  // List View
                  <>
                    <div className="flex items-center space-x-4">
                      {languages.find(l => l.id === note.language)?.icon && (
                        <img 
                          src={languages.find(l => l.id === note.language)?.icon} 
                          alt={note.language}
                          className="w-12 h-12"
                        />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-bold text-foreground">{note.title}</h3>
                          <Badge className={getDifficultyColor(note.difficulty)}>
                            {note.difficulty}
                          </Badge>
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>{note.rating}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{note.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{note.pages} pages</span>
                          <span>•</span>
                          <span>{note.downloads} downloads</span>
                          <span>•</span>
                          <span>{note.size}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-auto">
                      <Button size="sm" className="gradient-primary border-0 text-white">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="glass border-primary/20"
                        onClick={() => handleDownload(note)}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Load More */}
          {sortedNotes.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="glass border-primary/20">
                Load More Notes
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
