const HowItWorks = () => {
  const steps = [
    {
      icon: "/image4.png",
      title: "Search Anywhere",
      description: "Enter your location, date, and training type",
    },
    {
      icon:  "/image3.png",
      title: "Compare & Choose",
      description: "View top-rated gyms and fitness trainers on our app",
    },
    {
      icon:  "/image5.png",
      title: "Book Instantly",
      description: "Reserve and pay securely - no commitment required",
    },
  ];

  return (
    <section id="how-it-works" className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-4xl font-medium text-foreground mb-4">
            How Gymscanner Works
          </h2>
          <p className="text-base text-muted-foreground">
            Find a trainer or gym in just a few clicks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="card-gym text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-[234px] h-[234px] bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <img src={step.icon} alt="" className="text-primary-foreground"/>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base ">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;