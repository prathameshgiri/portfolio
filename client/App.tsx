import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Learning from "./pages/Learning";
import Projects from "./pages/Projects";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import GetStarted from "./pages/GetStarted";
import ExplorePath from "./pages/ExplorePath";
import BrowseNotes from "./pages/BrowseNotes";
import PracticeQuiz from "./pages/PracticeQuiz";
import CodeEditor from "./pages/CodeEditor";
import Feedback from "./pages/Feedback";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Jobs from "./pages/Jobs";
import Certificates from "./pages/Certificates";
import VideoClasses from "./pages/VideoClasses";
import { Login, Register } from "./pages/Auth";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/jobs-internships" element={<Jobs />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/video-classes" element={<VideoClasses />} />
          <Route path="/explore-path" element={<ExplorePath />} />
          <Route path="/explore-path/:pathId" element={<ExplorePath />} />
          <Route path="/browse-notes" element={<BrowseNotes />} />
          <Route path="/practice-quiz" element={<PracticeQuiz />} />
          <Route path="/code-editor" element={<CodeEditor />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
