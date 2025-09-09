import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Play, 
  Clock, 
  Target, 
  Award, 
  CheckCircle, 
  XCircle,
  RotateCcw,
  ChevronRight,
  Trophy,
  Star,
  Zap,
  Brain,
  BarChart3
} from "lucide-react";

export default function PracticeQuiz() {
  const [selectedQuiz, setSelectedQuiz] = useState<any>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (selectedQuiz && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleQuizComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [selectedQuiz, timeLeft]);

  const quizzes = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      description: "Test your knowledge of JavaScript basics, ES6 features, and core concepts",
      language: "JavaScript",
      difficulty: "Beginner",
      questions: 15,
      timeLimit: 20, // minutes
      color: "from-yellow-500 to-orange-500",
      icon: "🟨",
      topics: ["Variables", "Functions", "Objects", "Arrays", "ES6"],
      questions_data: [
        {
          question: "What is the correct way to declare a variable in JavaScript?",
          options: ["var myVar = 5;", "variable myVar = 5;", "v myVar = 5;", "declare myVar = 5;"],
          correct: 0,
          explanation: "In JavaScript, variables are declared using 'var', 'let', or 'const' keywords."
        },
        {
          question: "Which method is used to add an element to the end of an array?",
          options: ["append()", "push()", "add()", "insert()"],
          correct: 1,
          explanation: "The push() method adds one or more elements to the end of an array."
        },
        {
          question: "What does '===' operator do in JavaScript?",
          options: ["Assignment", "Loose equality", "Strict equality", "Not equal"],
          correct: 2,
          explanation: "The '===' operator checks for strict equality, comparing both value and type."
        }
      ]
    },
    {
      id: 2,
      title: "Python Data Structures",
      description: "Master Python lists, dictionaries, sets, and tuples with practical questions",
      language: "Python",
      difficulty: "Intermediate",
      questions: 20,
      timeLimit: 25,
      color: "from-blue-500 to-green-500",
      icon: "🐍",
      topics: ["Lists", "Dictionaries", "Sets", "Tuples", "Comprehensions"],
      questions_data: [
        {
          question: "Which data structure is mutable in Python?",
          options: ["Tuple", "String", "List", "Integer"],
          correct: 2,
          explanation: "Lists are mutable in Python, meaning their contents can be changed after creation."
        },
        {
          question: "What is the output of list(range(3))?",
          options: ["[1, 2, 3]", "[0, 1, 2]", "[0, 1, 2, 3]", "[1, 2]"],
          correct: 1,
          explanation: "range(3) generates numbers from 0 to 2 (3 is excluded)."
        }
      ]
    },
    {
      id: 3,
      title: "React Components & Hooks",
      description: "Test your understanding of React components, state management, and hooks",
      language: "React",
      difficulty: "Intermediate",
      questions: 18,
      timeLimit: 30,
      color: "from-cyan-500 to-blue-500",
      icon: "⚛️",
      topics: ["Components", "Props", "State", "Hooks", "Lifecycle"],
      questions_data: [
        {
          question: "Which hook is used for side effects in React?",
          options: ["useState", "useEffect", "useContext", "useReducer"],
          correct: 1,
          explanation: "useEffect is used to perform side effects in React functional components."
        },
        {
          question: "What is JSX?",
          options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Extension", "JSON XML"],
          correct: 0,
          explanation: "JSX stands for JavaScript XML and allows writing HTML-like syntax in JavaScript."
        }
      ]
    },
    {
      id: 4,
      title: "Data Structures & Algorithms",
      description: "Challenge yourself with algorithmic thinking and data structure concepts",
      language: "General",
      difficulty: "Advanced",
      questions: 25,
      timeLimit: 45,
      color: "from-purple-500 to-pink-500",
      icon: "🧠",
      topics: ["Arrays", "Trees", "Graphs", "Sorting", "Searching"],
      questions_data: [
        {
          question: "What is the time complexity of binary search?",
          options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
          correct: 1,
          explanation: "Binary search has O(log n) time complexity as it eliminates half of the search space in each iteration."
        },
        {
          question: "Which data structure uses LIFO principle?",
          options: ["Queue", "Stack", "Array", "Tree"],
          correct: 1,
          explanation: "Stack follows Last In First Out (LIFO) principle."
        }
      ]
    }
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startQuiz = (quiz: typeof quizzes[0]) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setQuizCompleted(false);
    setShowResult(false);
    setTimeLeft(quiz.timeLimit * 60); // Convert minutes to seconds
  };

  const selectAnswer = (answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < selectedQuiz.questions_data.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleQuizComplete();
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
    setShowResult(true);
  };

  const calculateScore = () => {
    if (!selectedQuiz) return 0;
    let correct = 0;
    selectedQuiz.questions_data.forEach((question: any, index: number) => {
      if (selectedAnswers[index] === question.correct) {
        correct++;
      }
    });
    return Math.round((correct / selectedQuiz.questions_data.length) * 100);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setQuizCompleted(false);
    setShowResult(false);
    setTimeLeft(selectedQuiz.timeLimit * 60);
  };

  if (selectedQuiz && !showResult) {
    const question = selectedQuiz.questions_data[currentQuestion];
    const progress = ((currentQuestion + 1) / selectedQuiz.questions_data.length) * 100;

    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        
        {/* Navigation */}
        <nav className="relative z-50 p-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{selectedQuiz.icon}</div>
              <div>
                <h2 className="text-lg font-bold">{selectedQuiz.title}</h2>
                <p className="text-sm text-muted-foreground">Question {currentQuestion + 1} of {selectedQuiz.questions_data.length}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-4 py-2 glass rounded-xl">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setSelectedQuiz(null)}
                className="glass border-primary/20"
              >
                Exit Quiz
              </Button>
            </div>
          </div>
        </nav>

        {/* Quiz Content */}
        <div className="relative z-40 px-6 pt-6 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="glass-strong rounded-3xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-8 leading-relaxed">
                {question.question}
              </h3>

              <div className="space-y-4">
                {question.options.map((option: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => selectAnswer(index)}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border/50 hover:border-primary/50 glass'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-primary bg-primary text-white'
                          : 'border-muted-foreground'
                      }`}>
                        {selectedAnswers[currentQuestion] === index && (
                          <CheckCircle className="w-4 h-4" />
                        )}
                      </div>
                      <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={previousQuestion}
                disabled={currentQuestion === 0}
                className="glass border-primary/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  {Object.keys(selectedAnswers).length} of {selectedQuiz.questions_data.length} answered
                </p>
              </div>

              <Button
                onClick={nextQuestion}
                disabled={selectedAnswers[currentQuestion] === undefined}
                className="gradient-primary border-0 text-white"
              >
                {currentQuestion === selectedQuiz.questions_data.length - 1 ? 'Finish Quiz' : 'Next'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult && selectedQuiz) {
    const score = calculateScore();
    const correctAnswers = Object.keys(selectedAnswers).filter(key => 
      selectedAnswers[parseInt(key)] === selectedQuiz.questions_data[parseInt(key)].correct
    ).length;

    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        
        {/* Results */}
        <div className="relative z-40 px-6 pt-20 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-strong rounded-3xl p-12">
              <div className="mb-8">
                <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
                <h1 className="text-4xl font-bold mb-4">Quiz Completed!</h1>
                <p className="text-xl text-muted-foreground">
                  You scored {score}% on {selectedQuiz.title}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 glass-subtle rounded-xl">
                  <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{score}%</div>
                  <div className="text-sm text-muted-foreground">Score</div>
                </div>
                <div className="text-center p-6 glass-subtle rounded-xl">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{correctAnswers}/{selectedQuiz.questions_data.length}</div>
                  <div className="text-sm text-muted-foreground">Correct</div>
                </div>
                <div className="text-center p-6 glass-subtle rounded-xl">
                  <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{formatTime(selectedQuiz.timeLimit * 60 - timeLeft)}</div>
                  <div className="text-sm text-muted-foreground">Time Taken</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={restartQuiz}
                  className="gradient-primary border-0 text-white px-8"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake Quiz
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedQuiz(null)}
                  className="glass border-primary/20 px-8"
                >
                  Try Another Quiz
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              <p className="text-sm text-muted-foreground">Practice Quiz</p>
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

      {/* Main Content */}
      <section className="relative z-40 px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
              <Brain className="w-4 h-4 mr-2" />
              Test Your Knowledge
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Practice Quizzes
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Challenge yourself with interactive quizzes and track your progress across different programming topics
            </p>
          </div>

          {/* Quiz Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {quizzes.map((quiz, index) => (
              <div 
                key={quiz.id}
                className={`glass-strong rounded-3xl p-8 interactive-hover transition-all duration-500 delay-${index * 100}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${quiz.color} flex items-center justify-center text-2xl`}>
                    {quiz.icon}
                  </div>
                  <Badge className={
                    quiz.difficulty === "Beginner" ? "bg-green-100 text-green-800" :
                    quiz.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-800" :
                    "bg-red-100 text-red-800"
                  }>
                    {quiz.difficulty}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {quiz.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {quiz.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div className="p-3 glass-subtle rounded-xl">
                    <Target className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="font-semibold text-sm">{quiz.questions}</div>
                    <div className="text-xs text-muted-foreground">Questions</div>
                  </div>
                  <div className="p-3 glass-subtle rounded-xl">
                    <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="font-semibold text-sm">{quiz.timeLimit}m</div>
                    <div className="text-xs text-muted-foreground">Time Limit</div>
                  </div>
                  <div className="p-3 glass-subtle rounded-xl">
                    <Award className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="font-semibold text-sm">{quiz.language}</div>
                    <div className="text-xs text-muted-foreground">Language</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {quiz.topics.map((topic) => (
                    <Badge key={topic} variant="outline" className="glass-subtle text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <Button 
                  onClick={() => startQuiz(quiz)}
                  className="w-full gradient-primary border-0 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Quiz
                </Button>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
            <div className="glass-strong rounded-2xl p-6">
              <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold">78</div>
              <div className="text-sm text-muted-foreground">Quizzes Completed</div>
            </div>
            <div className="glass-strong rounded-2xl p-6">
              <BarChart3 className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <div className="text-2xl font-bold">85%</div>
              <div className="text-sm text-muted-foreground">Average Score</div>
            </div>
            <div className="glass-strong rounded-2xl p-6">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm text-muted-foreground">Certificates Earned</div>
            </div>
            <div className="glass-strong rounded-2xl p-6">
              <Star className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-muted-foreground">Current Streak</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
