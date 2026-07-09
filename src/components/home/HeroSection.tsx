import Link from "next/link"; 
import heroBg from "../../app/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 px-6"
        style={{ backgroundImage: `url(${heroBg.src || heroBg})` }}
      />
      <div className="absolute inset-0 px-6 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      <div className="hero-grid pointer-events-none" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/50 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Data Science & AI Club</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              here <span className="text-gradient">Data Science</span>
              <br />
              converges with <span className="text-gradient">AI</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Join our community of passionate data scientists and AI enthusiasts. 
              Learn, build, and innovate together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* FIX: Styled Next.js Links directly using your design classes instead of component wrappers */}
              <Link 
                href="/projects_events" 
                className="inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-semibold gradient-primary glow-primary text-primary-foreground gap-2 hover:opacity-90 transition-all"
              >
                View our Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link 
                href="/team" 
                className="inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-medium border border-border text-foreground hover:bg-secondary transition-colors"
              >
                Meet the Team
              </Link>
            </div>

            {/* Social Links via Pure SVGs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Our Socials</span>
              <div className="flex gap-2">
                {/* GitHub */}
                <a
                  href="https://github.com/dsai-iitbhilai"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/dsai-club-iit-bhilai"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/dsai_iitbhilai"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dsai_club@iitbhilai.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl font-semibold text-primary hover:text-primary/80 transition-colors break-all"
              >
                dsai_club@iitbhilai.ac.in
              </a>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="relative">
            <div className="space-y-4">
              {/* Stats Card 1 */}
              <div className="glass-card rounded-xl p-6 max-w-sm ml-auto animate-float" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary-foreground">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">200%</p>
                    <p className="text-sm text-muted-foreground">Growth in AI Jobs</p>
                  </div>
                </div>
              </div>

              {/* Stats Card 2 */}
              <div className="glass-card rounded-xl p-6 max-w-xs animate-float" style={{ animationDelay: '1s' }}>
                <p className="text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>

              {/* Stats Card 3 */}
              <div className="glass-card rounded-xl p-6 max-w-sm ml-auto animate-float" style={{ animationDelay: '2s' }}>
                <p className="text-3xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;