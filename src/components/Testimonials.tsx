import { useState } from "react";
import { Button } from "../components/ui/button";
import { Star } from "lucide-react";
import { ArrowRight,  ArrowLeft} from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Samantha K.",
      rating: 5,
      text: "Found a gym near my Airbnb in Rome within minutes. Loved the flexibility!",
      image: "/image7.png"
    },
    {
      name: "Marcus R.",
      rating: 5,
      text: "Booked a yoga session while in Lisbon - great selection of studios around the world.",
      image: "/image7.png"
    },
    {
      name: "Elena S.",
      rating: 5,
      text: "Perfect for digital nomads like me. Great selection of gyms around the world.",
      image: "/image7.png"
    },
    {
      name: "David L.",
      rating: 5,
      text: "The trainer verification process gives me confidence. All sessions have been excellent.",
      image: "/image7.png"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl text-left font-bold mb-4">
            Real Experiences from Real People
          </h2>
          <p className="text-lg text-muted-foreground text-left">
            Hear from travelers and fitness lovers using Gymscanner around the world
          </p>
                      {/* Navigation Arrows */}
            <div className="flex justify-end items-center space-x-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full bg-card border-1 border-gray-400 hover:bg-[#1C1E1C]"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full bg-card border-1 border-gray-400 hover:bg-[#1C1E1C]"
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
        </div>

        <div className="max-w-8xl mx-auto">
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.slice(currentTestimonial, currentTestimonial + 4).map((testimonial, index) => (
                <div 
                  key={`${currentTestimonial}-${index}`}
                  className="bg-[#1C1E1C] px-6 py-3 rounded-3xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl mr-4">
                    <img src={testimonial.image} alt="" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    </div>
                  </div>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#E4CB0A] border-none" />
                        ))}
                        <span className="ml-2">4.9</span>
                      </div>
                  <p className="text-muted-foreground">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-yellow-300' : 'bg-[#1C1E1C]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;