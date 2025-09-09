import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  Sparkles,
  Shield,
  Zap,
  CheckCircle,
  Github,
  Chrome,
  Smartphone,
  Key,
  ArrowRight,
  RefreshCw
} from "lucide-react";

export default function GetStarted() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [otpStep, setOtpStep] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setOtpStep(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (!isFlipped) {
        // Login flow - show OTP step
        setOtpStep(true);
      } else {
        // Register flow - could redirect or show success
        console.log('Registration submitted');
      }
    }, 2000);
  };

  const features = [
    { icon: Shield, text: "Secure Authentication" },
    { icon: Zap, text: "Instant Access" },
    { icon: CheckCircle, text: "Progress Tracking" },
    { icon: Sparkles, text: "Personalized Learning" }
  ];

  const socialOptions = [
    { name: "Google", icon: Chrome, color: "from-red-500 to-orange-500" },
    { name: "GitHub", icon: Github, color: "from-gray-700 to-gray-900" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl floating-slow" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 glass-subtle rounded-2xl floating opacity-40 transform rotate-45" />
      <div className="absolute top-60 right-20 w-16 h-16 glass-subtle rounded-full floating-delayed opacity-30" />
      <div className="absolute bottom-40 left-1/4 w-24 h-24 glass-subtle rounded-xl floating-slow opacity-35 transform rotate-12" />
      <div className="absolute bottom-20 right-1/3 w-18 h-18 glass-subtle rounded-2xl floating opacity-25 transform -rotate-12" />

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
              <p className="text-sm text-muted-foreground">Get Started</p>
            </div>
          </Link>
          
          <Link to="/">
            <Button variant="outline" className="glass border-primary/20 p-2" aria-label="Back">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <section className="relative z-40 px-6 pt-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Info */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Badge variant="secondary" className="mb-6 glass-subtle border-0 text-primary">
                <Sparkles className="w-4 h-4 mr-2" />
                Join the Community
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Start Your
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Learning Journey
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join thousands of developers who are advancing their careers through 
                interactive learning, hands-on projects, and expert mentorship.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={feature.text}
                    className={`flex items-center space-x-3 p-4 glass-subtle rounded-xl transition-all duration-500 delay-${index * 100}`}
                  >
                    <feature.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>5000+ Active Learners</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>94% Success Rate</span>
                </div>
              </div>
            </div>

            {/* Right Side - 3D Flip Card */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="perspective-1000">
                <div 
                  className={`relative w-full h-auto preserve-3d transition-transform duration-700 ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Login Card (Front) */}
                  <div 
                    className={`glass-strong rounded-3xl p-8 md:p-10 backface-hidden ${
                      isFlipped ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                      <p className="text-muted-foreground">Sign in to continue your learning journey</p>
                    </div>

                    {!otpStep ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="login-email" className="text-sm font-medium">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input 
                              id="login-email"
                              type="email" 
                              placeholder="Enter your email"
                              className="pl-10 glass border-primary/20 h-12"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="login-password" className="text-sm font-medium">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input 
                              id="login-password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              className="pl-10 pr-10 glass border-primary/20 h-12"
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-primary/20" />
                            <span className="text-muted-foreground">Remember me</span>
                          </label>
                          <a href="#" className="text-primary hover:underline">Forgot password?</a>
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full gradient-primary border-0 text-white h-12 text-lg font-medium"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                              Signing In...
                            </>
                          ) : (
                            <>
                              Sign In
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </Button>
                      </form>
                    ) : (
                      // OTP Verification Step
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Smartphone className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">Verify Your Identity</h3>
                          <p className="text-muted-foreground text-sm">
                            We've sent a 6-digit code to your email
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="otp" className="text-sm font-medium">Enter OTP</Label>
                          <div className="relative">
                            <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input 
                              id="otp"
                              type="text" 
                              placeholder="123456"
                              className="pl-10 glass border-primary/20 h-12 text-center text-lg tracking-widest"
                              maxLength={6}
                              required
                            />
                          </div>
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full gradient-primary border-0 text-white h-12 text-lg font-medium"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                              Verifying...
                            </>
                          ) : (
                            <>
                              Verify & Continue
                              <CheckCircle className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </Button>

                        <Button 
                          type="button"
                          variant="outline"
                          onClick={() => setOtpStep(false)}
                          className="w-full glass border-primary/20"
                        >
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Back to Login
                        </Button>
                      </form>
                    )}

                    {!otpStep && (
                      <>
                        <div className="relative my-6">
                          <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border/50" />
                          </div>
                          <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {socialOptions.map((option) => (
                            <Button
                              key={option.name}
                              variant="outline"
                              className="glass border-primary/20 h-12"
                            >
                              <option.icon className="w-5 h-5 mr-2" />
                              {option.name}
                            </Button>
                          ))}
                        </div>

                        <p className="text-center text-sm text-muted-foreground">
                          Don't have an account?{" "}
                          <button 
                            onClick={handleFlip}
                            className="text-primary hover:underline font-medium"
                          >
                            Create one now
                          </button>
                        </p>
                      </>
                    )}
                  </div>

                  {/* Register Card (Back) */}
                  <div 
                    className={`absolute inset-0 glass-strong rounded-3xl p-8 md:p-10 backface-hidden rotate-y-180 ${
                      isFlipped ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold mb-2">Create Account</h2>
                      <p className="text-muted-foreground">Join our community of learners</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name" className="text-sm font-medium">First Name</Label>
                          <Input 
                            id="first-name"
                            type="text" 
                            placeholder="Enter your first name"
                            className="glass border-primary/20 h-12"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name" className="text-sm font-medium">Last Name</Label>
                          <Input 
                            id="last-name"
                            type="text" 
                            placeholder="Enter your last name"
                            className="glass border-primary/20 h-12"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-email" className="text-sm font-medium">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input 
                            id="register-email"
                            type="email" 
                            placeholder="Enter your Email Address"
                            className="pl-10 glass border-primary/20 h-12"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-password" className="text-sm font-medium">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input 
                            id="register-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            className="pl-10 pr-10 glass border-primary/20 h-12"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirm-password" className="text-sm font-medium">Confirm Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input 
                            id="confirm-password"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            className="pl-10 pr-10 glass border-primary/20 h-12"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <input type="checkbox" className="rounded border-primary/20 mt-1" required />
                        <span className="text-sm text-muted-foreground">
                          I agree to the{" "}
                          <a href="#" className="text-primary hover:underline">Terms of Service</a>
                          {" "}and{" "}
                          <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                        </span>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full gradient-primary border-0 text-white h-12 text-lg font-medium"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                            Creating Account...
                          </>
                        ) : (
                          <>
                            Create Account
                            <Sparkles className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>

                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border/50" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">Or sign up with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {socialOptions.map((option) => (
                        <Button
                          key={option.name}
                          variant="outline"
                          className="glass border-primary/20 h-12"
                        >
                          <option.icon className="w-5 h-5 mr-2" />
                          {option.name}
                        </Button>
                      ))}
                    </div>

                    <p className="text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <button 
                        onClick={handleFlip}
                        className="text-primary hover:underline font-medium"
                      >
                        Sign in here
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
