const features = [
  {
    // Database SVG path
    iconPath: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
        <path d="M3 12A9 3 0 0 0 21 12"/>
      </svg>
    ),
    title: "Data Scraping",
    description: "Learn techniques to extract and process data from various sources efficiently.",
  },
  {
    // CPU SVG path
    iconPath: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect width="16" height="16" x="4" y="4" rx="2"/>
        <rect width="6" height="6" x="9" y="9" rx="1"/>
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/>
      </svg>
    ),
    title: "Machine Learning",
    description: "Build and deploy ML models for real-world applications and research.",
  },
  {
    // LineChart SVG path
    iconPath: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 3v18h18"/>
        <path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with statistical models.",
  },
  {
    // BrainCircuit/Network SVG path
    iconPath: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
        <path d="M12 5v14"/>
        <path d="M12 12h6"/>
        <path d="M12 12H6"/>
      </svg>
    ),
    title: "Deep Learning",
    description: "Explore neural networks, computer vision, and natural language processing.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Our Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card rounded-xl p-6 hover:glow-primary transition-all duration-300 hover:-translate-y-2"
            >
              {/* Added standard fill-none and target currentColor control to seamlessly change theme layout states */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-all duration-300">
                {feature.iconPath}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;