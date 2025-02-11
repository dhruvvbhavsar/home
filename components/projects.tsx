import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type Project = {
  name: string;
  profile?: string;
  link: string;
  headline: string;
  tag: string;
};

const projects: Project[] = [
  {
    name: "scout",
    headline: "movie ticket booking app inside an llm",
    link: "https://dub.sh/movie-scout",
    tag: "Web",
  },
  {
    name: "chroma ai",
    headline: "generate images at the speed of thought",
    link: "https://chroma-neon.vercel.app",
    tag: "Web",
  },
  {
    name: "moviebooking",
    headline: "a movie ticket booking app",
    link: "https://github.com/dhruvvbhavsar/MovieBooking",
    tag: "Android",
  },
  {
    name: "ye machine",
    headline: "random kanye west quotes",
    link: "https://dhruvvbhavsar.github.io/kanye.html",
    tag: "Web",
  },
  {
    name: "mavoncare",
    headline: "my attempt at making beautiful landing pages",
    link: "https://skincare-landing.vercel.app",
    tag: "Web",
  },
];

export default function Projects() {
  return (
    <div className="mt-4">
      <h2 className="font-medium mb-2">projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank">
            <div className="flex items-center hover:bg-blue-400/20 py-4 px-1 rounded-lg">
              <Avatar className="mr-4">
                <AvatarImage
                  src={project.profile}
                  alt={`${project.name} icon`}
                />
                <AvatarFallback className="text-xs">
                  {project.name
                    .split(" ")
                    .map((x) => x[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-grow">
                <h3 className="font-semibold text-sm md:text-base">
                  {project.name}
                </h3>
                <p className="text-xs text-blue-800/70">{project.headline}</p>
              </div>
              <Badge
                className="font-mono font-thin text-xs md:text-sm text-blue-800"
                variant="secondary"
              >
                {project.tag}
              </Badge>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
