import { Button } from "../components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-24 bg-[#1D1E20] relative overflow-hidden mx-20 rounded-[30px]">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full right-20 left-2 ">
          <img src="/image8.png" alt="" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 mt-8">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to dive in?
          </h2>
          <p className="mb-10">
            Sign up, select your desired challenge account and Get Funded
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#E4CB0A] text-lg px-8 py-4 rounded-xl"
            >
              Get Funded
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;