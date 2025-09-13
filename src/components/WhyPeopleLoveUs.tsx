
const WhyPeopleLove = () => {
  const features = [
    {
      icon: "/image13.png",
      title: "Worldwide Access",
      description: "Find gyms and trainers in 100+ cities",
    },
    {
      icon: "/image14.png",
      title: "No Membership Required",
      description: "Pay-per-session. No contracts. Ever.",
    },
    {
      icon: "/image15.png",
      title: "Verified Trainers & Gyms",
      description: "Curated professionals, rated by real users",
    },
    {
      icon: "/image16.png",
      title: "Instant Booking",
      description: "Book in minutes, with real-time availability",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          {/* Left side - Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 flex items-center justify-center">
              <div className="text-8xl md:text-9xl">
                <img src="/image6.png" alt="" className="absolute inset-0"/>
                <img src="/image1.png" alt="" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-20 animate-glow"></div>
          </div>

          {/* Right side - Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground md:text-left text-center mb-6">
              Why People Love 
              <span className="gradient-text block">Gymscanner</span>
            </h2>
            <p className="text-xl text-muted-foreground text-center md:text-left mb-12">
              A smarter way to stay fit anywhere in the world
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-[#141514] rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src={feature.icon} className="h-6 w-6 text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPeopleLove;