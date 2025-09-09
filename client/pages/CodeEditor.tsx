import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  ArrowLeft, 
  Play, 
  Save, 
  Share, 
  Download, 
  RotateCcw,
  Settings,
  Maximize,
  Copy,
  CheckCircle,
  AlertCircle,
  Code2,
  Terminal,
  FileText,
  Lightbulb,
  Zap
} from "lucide-react";

export default function CodeEditor() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [fontSize, setFontSize] = useState(14);
  const [isVisible, setIsVisible] = useState(false);
  const [savedCode, setSavedCode] = useState<{[key: string]: string}>({});

  useEffect(() => {
    setIsVisible(true);
    // Load default code for the selected language
    setCode(defaultCode[selectedLanguage] || "");
  }, []);

  useEffect(() => {
    setCode(defaultCode[selectedLanguage] || "");
    setOutput("");
  }, [selectedLanguage]);

  const languages = [
    { 
      id: "javascript", 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      color: "from-yellow-400 to-yellow-600"
    },
    { 
      id: "python", 
      name: "Python", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      color: "from-blue-400 to-yellow-500"
    },
    { 
      id: "java", 
      name: "Java", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      color: "from-red-500 to-orange-600"
    },
    { 
      id: "cpp", 
      name: "C++", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      color: "from-blue-500 to-purple-600"
    },
    { 
      id: "html", 
      name: "HTML/CSS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      color: "from-orange-500 to-red-500"
    }
  ];

  const defaultCode: {[key: string]: string} = {
    javascript: `// Welcome to the JavaScript playground!
// Try running this code and see the output below

function greetUser(name) {
    return \`Hello, \${name}! Welcome to coding.\`;
}

function calculateSum(a, b) {
    return a + b;
}

// Main execution
const userName = "Developer";
const greeting = greetUser(userName);
console.log(greeting);

const sum = calculateSum(15, 25);
console.log(\`The sum of 15 and 25 is: \${sum}\`);

// Try an array operation
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubled);`,

    python: `# Welcome to the Python playground!
# Try running this code and see the output below

def greet_user(name):
    return f"Hello, {name}! Welcome to coding."

def calculate_sum(a, b):
    return a + b

# Main execution
user_name = "Developer"
greeting = greet_user(user_name)
print(greeting)

sum_result = calculate_sum(15, 25)
print(f"The sum of 15 and 25 is: {sum_result}")

# Try a list comprehension
numbers = [1, 2, 3, 4, 5]
doubled = [n * 2 for n in numbers]
print("Original:", numbers)
print("Doubled:", doubled)`,

    java: `// Welcome to the Java playground!
// Try running this code and see the output below

public class Main {
    public static void main(String[] args) {
        String userName = "Developer";
        System.out.println(greetUser(userName));
        
        int sum = calculateSum(15, 25);
        System.out.println("The sum of 15 and 25 is: " + sum);
        
        // Array example
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.print("Original: ");
        printArray(numbers);
        
        int[] doubled = doubleArray(numbers);
        System.out.print("Doubled: ");
        printArray(doubled);
    }
    
    public static String greetUser(String name) {
        return "Hello, " + name + "! Welcome to coding.";
    }
    
    public static int calculateSum(int a, int b) {
        return a + b;
    }
    
    public static int[] doubleArray(int[] arr) {
        int[] result = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            result[i] = arr[i] * 2;
        }
        return result;
    }
    
    public static void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }
}`,

    cpp: `// Welcome to the C++ playground!
// Try running this code and see the output below

#include <iostream>
#include <vector>
#include <string>

using namespace std;

string greetUser(const string& name) {
    return "Hello, " + name + "! Welcome to coding.";
}

int calculateSum(int a, int b) {
    return a + b;
}

void printVector(const vector<int>& vec, const string& label) {
    cout << label << ": [";
    for (size_t i = 0; i < vec.size(); ++i) {
        cout << vec[i];
        if (i < vec.size() - 1) cout << ", ";
    }
    cout << "]" << endl;
}

int main() {
    string userName = "Developer";
    cout << greetUser(userName) << endl;
    
    int sum = calculateSum(15, 25);
    cout << "The sum of 15 and 25 is: " << sum << endl;
    
    // Vector example
    vector<int> numbers = {1, 2, 3, 4, 5};
    vector<int> doubled;
    
    for (int n : numbers) {
        doubled.push_back(n * 2);
    }
    
    printVector(numbers, "Original");
    printVector(doubled, "Doubled");
    
    return 0;
}`,

    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to HTML/CSS Playground</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
        }
        
        h1 {
            text-align: center;
            margin-bottom: 30px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .card {
            background: rgba(255, 255, 255, 0.2);
            padding: 20px;
            margin: 20px 0;
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .button {
            background: linear-gradient(45deg, #ff6b6b, #ff8e53);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 16px;
            transition: transform 0.3s ease;
        }
        
        .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .highlight {
            background: rgba(255, 255, 0, 0.3);
            padding: 2px 8px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Welcome to HTML/CSS Playground!</h1>
        
        <div class="card">
            <h2>Modern Web Design</h2>
            <p>This playground demonstrates modern CSS features including:</p>
            <ul>
                <li><span class="highlight">Gradient backgrounds</span></li>
                <li><span class="highlight">Glassmorphism effects</span></li>
                <li><span class="highlight">CSS animations</span></li>
                <li><span class="highlight">Responsive design</span></li>
            </ul>
        </div>
        
        <div class="card">
            <h3>Interactive Elements</h3>
            <p>Try hovering over the button below:</p>
            <button class="button" onclick="showMessage()">Click Me!</button>
            <p id="message" style="margin-top: 15px; font-weight: bold;"></p>
        </div>
    </div>
    
    <script>
        function showMessage() {
            document.getElementById('message').innerHTML = 
                '🎉 Great! You successfully interacted with the page!';
        }
    </script>
</body>
</html>`
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput("Running code...");
    
    // Simulate code execution
    setTimeout(() => {
      if (selectedLanguage === "javascript") {
        try {
          // Capture console.log output
          const logs: string[] = [];
          const originalLog = console.log;
          console.log = (...args) => {
            logs.push(args.map(arg => 
              typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
            ).join(' '));
          };

          // Execute the code
          eval(code);
          
          // Restore console.log
          console.log = originalLog;
          
          setOutput(logs.join('\n') || "Code executed successfully (no output)");
        } catch (error) {
          setOutput(`Error: ${error}`);
        }
      } else if (selectedLanguage === "html") {
        setOutput("HTML code is ready to preview. Use the preview feature to see the result.");
      } else {
        // For other languages, show mock output
        setOutput(`Code executed successfully in ${languages.find(l => l.id === selectedLanguage)?.name}!
        
Output:
Hello, Developer! Welcome to coding.
The sum of 15 and 25 is: 40
Original: [1, 2, 3, 4, 5]
Doubled: [2, 4, 6, 8, 10]`);
      }
      setIsRunning(false);
    }, 1500);
  };

  const saveCode = () => {
    setSavedCode(prev => ({
      ...prev,
      [selectedLanguage]: code
    }));
    // Show success message
    setOutput(prev => `${prev}\n\n✅ Code saved successfully!`);
  };

  const resetCode = () => {
    setCode(defaultCode[selectedLanguage] || "");
    setOutput("");
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setOutput(prev => `${prev}\n\n📋 Code copied to clipboard!`);
  };

  const challenges = [
    {
      title: "FizzBuzz Challenge",
      description: "Write a program that prints numbers 1-100, but prints 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, and 'FizzBuzz' for multiples of both.",
      difficulty: "Easy"
    },
    {
      title: "Palindrome Checker",
      description: "Create a function that checks if a given string is a palindrome (reads the same forwards and backwards).",
      difficulty: "Medium"
    },
    {
      title: "Binary Search",
      description: "Implement binary search algorithm to find an element in a sorted array.",
      difficulty: "Hard"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl floating-delayed" />
      </div>

      {/* Navigation */}
      <Navigation subtitle="Live Code Editor" />

      {/* Main Content */}
      <section className="relative z-40 px-4 sm:px-6 pt-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-6 sm:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-4 glass-subtle border-0 text-primary">
              <Code2 className="w-4 h-4 mr-2" />
              Live Coding Environment
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Code Editor & Playground
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Write, run, and experiment with code in real-time
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-6">
              {/* Language Selector */}
              <div className="glass-strong rounded-2xl p-4 sm:p-6">
                <h3 className="font-semibold mb-4 flex items-center text-sm sm:text-base">
                  <Terminal className="w-4 h-4 mr-2" />
                  Languages
                </h3>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => setSelectedLanguage(lang.id)}
                      className={`w-full flex items-center space-x-3 p-2 sm:p-3 rounded-xl transition-all text-sm sm:text-base ${
                        selectedLanguage === lang.id
                          ? 'glass-strong border-2 border-primary/50 text-primary'
                          : 'glass hover:glass-strong'
                      }`}
                    >
                      <img src={lang.icon} alt={lang.name} className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="glass-strong rounded-2xl p-4 sm:p-6">
                <h3 className="font-semibold mb-4 flex items-center text-sm sm:text-base">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Coding Challenges
                </h3>
                <div className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="glass-subtle rounded-xl p-3">
                      <div className="flex items-start justify-between mb-2 gap-2">
                        <h4 className="font-medium text-xs sm:text-sm">{challenge.title}</h4>
                        <Badge className={`text-xs shrink-0 ${
                          challenge.difficulty === "Easy" ? "bg-green-100 text-green-800" :
                          challenge.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
                          "bg-red-100 text-red-800"
                        }`}>
                          {challenge.difficulty}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{challenge.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Editor Area */}
            <div className="lg:col-span-3 space-y-4 sm:space-y-6">
              {/* Toolbar */}
              <div className="glass-strong rounded-2xl p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <Button
                      onClick={runCode}
                      disabled={isRunning}
                      className="gradient-primary border-0 text-white text-sm"
                      size="sm"
                    >
                      {isRunning ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      ) : (
                        <Play className="w-4 h-4 mr-2" />
                      )}
                      {isRunning ? 'Running...' : 'Run'}
                    </Button>

                    <Button variant="outline" onClick={saveCode} className="glass border-primary/20 text-sm" size="sm">
                      <Save className="w-4 h-4 sm:mr-2" />
                      <span className="hidden sm:inline">Save</span>
                    </Button>

                    <Button variant="outline" onClick={copyCode} className="glass border-primary/20 text-sm" size="sm">
                      <Copy className="w-4 h-4 sm:mr-2" />
                      <span className="hidden sm:inline">Copy</span>
                    </Button>

                    <Button variant="outline" onClick={resetCode} className="glass border-primary/20 text-sm" size="sm">
                      <RotateCcw className="w-4 h-4 sm:mr-2" />
                      <span className="hidden sm:inline">Reset</span>
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <select
                      value={fontSize}
                      onChange={(e) => setFontSize(Number(e.target.value))}
                      className="px-2 sm:px-3 py-1 glass border border-primary/20 rounded-md bg-background text-foreground text-xs sm:text-sm"
                    >
                      <option value={12}>12px</option>
                      <option value={14}>14px</option>
                      <option value={16}>16px</option>
                      <option value={18}>18px</option>
                    </select>

                    <Button variant="outline" size="sm" className="glass border-primary/20">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Code Editor */}
              <div className="glass-strong rounded-2xl overflow-hidden">
                <div className="bg-gray-900 p-3 sm:p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-xs sm:text-sm truncate mx-2">
                    {languages.find(l => l.id === selectedLanguage)?.name}
                  </span>
                  <Button variant="outline" size="sm" className="text-gray-400 border-gray-600 hidden sm:flex">
                    <Maximize className="w-4 h-4" />
                  </Button>
                </div>

                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-64 sm:h-80 lg:h-96 p-3 sm:p-4 bg-gray-900 text-gray-100 font-mono resize-none focus:outline-none"
                  style={{ fontSize: `${fontSize}px` }}
                  placeholder="Start coding here..."
                />
              </div>

              {/* Output */}
              <div className="glass-strong rounded-2xl overflow-hidden">
                <div className="bg-gray-800 p-3 flex items-center justify-between">
                  <span className="text-gray-300 text-xs sm:text-sm font-medium flex items-center">
                    <Terminal className="w-4 h-4 mr-2" />
                    Output
                  </span>
                  {output && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setOutput("")}
                      className="text-gray-400 border-gray-600 text-xs"
                    >
                      Clear
                    </Button>
                  )}
                </div>

                <div className="bg-gray-900 p-3 sm:p-4 min-h-24 sm:min-h-32 max-h-36 sm:max-h-48 overflow-y-auto">
                  <pre className="text-gray-100 font-mono text-xs sm:text-sm whitespace-pre-wrap">
                    {output || "No output yet. Run your code to see results here."}
                  </pre>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="glass-strong rounded-xl p-3 sm:p-4 text-center">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-2" />
                  <div className="text-base sm:text-lg font-bold">42</div>
                  <div className="text-xs text-muted-foreground">Code Runs Today</div>
                </div>
                <div className="glass-strong rounded-xl p-3 sm:p-4 text-center">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mx-auto mb-2" />
                  <div className="text-base sm:text-lg font-bold">{Object.keys(savedCode).length}</div>
                  <div className="text-xs text-muted-foreground">Saved Snippets</div>
                </div>
                <div className="glass-strong rounded-xl p-3 sm:p-4 text-center">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mx-auto mb-2" />
                  <div className="text-base sm:text-lg font-bold">8</div>
                  <div className="text-xs text-muted-foreground">Challenges Solved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
