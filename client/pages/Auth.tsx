import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Lock, User, Github, Chrome, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <Navigation subtitle="Sign In" />

      <section className="relative z-40 px-4 sm:px-6 pt-12 pb-20">
        <div className="max-w-xl mx-auto">
          <div className="glass-strong rounded-3xl p-8 md:p-10">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4 glass-subtle border-0 text-primary">Welcome back</Badge>
              <h1 className="text-3xl font-bold mb-2">Sign in to your account</h1>
              <p className="text-muted-foreground">Access your dashboard and continue learning</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="you@example.com" className="pl-10 h-12 glass border-primary/20" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input id="password" type="password" placeholder="Your password" className="pl-10 h-12 glass border-primary/20" required />
                </div>
              </div>
              <Button className="w-full gradient-primary border-0 text-white h-12 text-lg">
                Sign In <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border/50" /></div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="glass border-primary/20 h-11">
                <Chrome className="w-5 h-5 mr-2" /> Google
              </Button>
              <Button variant="outline" className="glass border-primary/20 h-11">
                <Github className="w-5 h-5 mr-2" /> GitHub
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              New here? <Link to="/auth/register" className="text-primary hover:underline font-medium">Create an account</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Register() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <Navigation subtitle="Create Account" />

      <section className="relative z-40 px-4 sm:px-6 pt-12 pb-20">
        <div className="max-w-xl mx-auto">
          <div className="glass-strong rounded-3xl p-8 md:p-10">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4 glass-subtle border-0 text-primary">Join the community</Badge>
              <h1 className="text-3xl font-bold mb-2">Create your account</h1>
              <p className="text-muted-foreground">Start building projects and track your progress</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" type="text" placeholder="First name" className="h-12 glass border-primary/20" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" type="text" placeholder="Last name" className="h-12 glass border-primary/20" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="regEmail">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input id="regEmail" type="email" placeholder="you@example.com" className="pl-10 h-12 glass border-primary/20" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="regPassword">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input id="regPassword" type="password" placeholder="Create a strong password" className="pl-10 h-12 glass border-primary/20" required />
                </div>
              </div>
              <Button className="w-full gradient-primary border-0 text-white h-12 text-lg">
                Create Account <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border/50" /></div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or sign up with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="glass border-primary/20 h-11">
                <Chrome className="w-5 h-5 mr-2" /> Google
              </Button>
              <Button variant="outline" className="glass border-primary/20 h-11">
                <Github className="w-5 h-5 mr-2" /> GitHub
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account? <Link to="/auth/login" className="text-primary hover:underline font-medium">Sign in</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
