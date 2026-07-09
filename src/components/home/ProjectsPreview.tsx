import Link from "next/link";
import { projects } from "../../data/projects";

const statusColors: Record<string, string> = {
  Active: "bg-chart-2/20 text-chart-2",
  Completed: "bg-primary/20 text-primary",
};

const ProjectsPreview = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 animate-slide-up">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              We always strive towards the benefit
              <br className="hidden md:block" />
              of society with our projects.
            </h2>
          </div>
          
          {/* FIX 1: Styled Next.js Link directly as an outline button */}
          <Link 
            href="/projects_events" 
            className="inline-flex items-center justify-center h-10 px-4 rounded-md text-sm font-medium border border-border text-foreground hover:bg-secondary gap-2 transition-colors"
          >
            View all Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className="group glass-card rounded-xl p-6 hover:glow-primary hover:-translate-y-2 transition-all duration-300 animate-slide-up flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status] || "bg-secondary text-muted-foreground"}`}>
                  {project.status}
                </span>
                
                {/* FIX 2: Inline SVG GitHub icon replacement */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
              </div>

              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* FIX 3: Rewrote link to an inline link element avoiding the UI component error completely */}
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center text-sm font-medium text-primary hover:underline gap-1 w-fit mt-auto"
              >
                View Details 
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;