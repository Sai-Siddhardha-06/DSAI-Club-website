const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative glass-card rounded-3xl p-8 md:p-16 overflow-hidden animate-slide-up hover:glow-primary hover:-translate-y-2 transition-all duration-300">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-chart-2/10 blur-3xl" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              {/* FIX: Inline SVG Sparkles icon instead of lucide-react */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary animate-pulse">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/>
                <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5Z"/>
                <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z"/>
              </svg>
              <a 
                href="/about"
                className="text-sm text-primary font-medium">Join the Revolution</a>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Ready to Start Your
              <br />
              <span className="text-gradient">Data Science Journey?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg">
              Join our vibrant community of learners and innovators. 
              Get access to exclusive resources, workshops, and mentorship.
            </p>
            
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">Contact us at</p>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=dsai_club@iitbhilai.ac.in&tf=cm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl font-semibold text-primary hover:text-primary/80 transition-colors break-all"
              >
                dsai_club@iitbhilai.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;