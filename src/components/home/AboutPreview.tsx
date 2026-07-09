import Link from "next/link";

const highlights = [
  "Hands-on workshops and bootcamps",
  "Industry expert sessions",
  "Collaborative project building",
  "Research paper discussions",
  "Hackathon participation",
  "Career guidance and mentorship",
];

const AboutPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6 animate-slide-up">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              We are The Best
              <br />
              <span className="text-gradient">DATA</span> Analysts
            </h2>
            <p className="text-muted-foreground">
              Whether you're a beginner curious about data science or an experienced 
              practitioner looking to expand your skills, DSAI Club provides the perfect 
              environment to grow. We believe in learning by doing, and our community 
              thrives on collaboration and innovation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {/* FIX 1: Inline SVG Check Circle instead of lucide-react */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* FIX 2: Styled Next.js Link directly as a primary button */}
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-semibold gradient-primary glow-primary text-primary-foreground gap-2 mt-4 hover:opacity-90 transition-all w-fit"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>

          {/* Right - Visual */}
          <div className="relative animate-slide-up">
            <div className="glass-card rounded-2xl p-8 space-y-6 hover:glow-primary hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Club Stats</span>
                <span className="text-xs text-primary">2026</span>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "50+", label: "Members" },
                  { value: "15+", label: "Projects" },
                  { value: "20+", label: "Events" },
                  { value: "5+", label: "Hackathons" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-secondary">
                    <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="h-32 rounded-xl bg-secondary/50 flex items-end p-4 gap-2">
                {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t gradient-primary"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            
            {/* Decorative */}
            <div className="absolute -z-10 top-4 -right-4 w-full h-full rounded-2xl border border-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;