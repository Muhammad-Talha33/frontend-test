import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import HowItWorks from "../src/components/HowItWorks";
import WhyPeopleLove from "../src/components/WhyPeopleLoveUs";
import Testimonials from "../src/components/Testimonials";
import CallToAction from "../src/components/CallToAction";
import Footer from "../src/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero/>
      <HowItWorks/>
      <WhyPeopleLove/>
      <Testimonials/>
      <CallToAction/>
      <Footer />
    </div>
  );
};

export default Index;
