import { User } from "lucide-react";
import PlaceholderPage from "./PlaceholderPage";

export default function Portfolio() {
  return (
    <PlaceholderPage
      title="About Prathamesh"
      description="Learn more about my journey as a Full Stack Developer and Tech Educator. Discover my background, skills, achievements, and the passion that drives me to create innovative solutions and teach others."
      icon={<User className="w-12 h-12 text-white" />}
    />
  );
}
