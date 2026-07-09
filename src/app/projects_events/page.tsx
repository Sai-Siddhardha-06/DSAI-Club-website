"use client";
import BrainBackground from "../../components/layout/BrainBg";
import { projects } from "../../data/projects";
import { events } from "../../data/events";

const statusColors: Record<string, string> = {
  Active: "bg-chart-2/20 text-chart-2",
  Completed: "bg-primary/20 text-primary",
};

const ProjectsAndEvents = () => {
  return (

   <section className="relative min-h-screen overflow-hidden pt-24 pb-16">

      <BrainBackground />

      <div className="relative z-10 px-5">
        {/* Your page content */}
      <div className="space-y-24 py-20">

        {/* 1. PROJECTS SECTION  */}
        <section>
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16 animate-slide-up">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Work</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
                Club <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Explore the innovative projects built by DSAI Club members. 
                From AI research to real-world applications.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 hover:glow-primary hover:-translate-y-2 transition-all duration-300 group flex flex-col animate-slide-up"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status] || "bg-secondary text-muted-foreground"}`}>
                      {project.status}
                    </span>
                    {project.github && (
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
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

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

                  {project.github && (
                    <button 
                      onClick={() => window.open(project.github, "_blank", "noreferrer")}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline gap-1 w-fit cursor-pointer bg-transparent border-none p-0"
                    >
                      View Details 
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. EVENTS SECTION */}
        <section>
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Header */}
            <div className="text-center mb-16 animate-slide-up">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">What's Happening</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
                Club <span className="text-gradient">Events</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Workshops, hackathons, and tech talks to level up your skills.
              </p>
            </div>

            {/* Events Stack */}
            <div className="space-y-6">
              {events.map((event, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:glow-primary hover:-translate-y-1 transition-all duration-300 animate-slide-up"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        {event.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>

                  {/* Event Metadata */}
                  <div className="text-sm border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6 text-muted-foreground min-w-[200px] space-y-1">
                    <div className="font-semibold text-foreground">{event.date}</div>
                    <div>{event.time}</div>
                    <div className="text-xs text-primary mt-1">{event.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
        </div>

    </section>
  );
};

export default ProjectsAndEvents;