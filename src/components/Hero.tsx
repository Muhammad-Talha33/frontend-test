import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Search } from "lucide-react";
import heroImage from "../../public/image2.png";
import { Input } from "./ui/input";

const Hero = () => {
  return (
    <section className="relative px-4 sm:px-6 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 rounded-2xl lg:rounded-[40px] lg:mx-6 h-screen"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-2 sm:px-4 text-center py-16 sm:py-24">
        <p className="text-gray-300 text-sm sm:text-[14px] mt-24 mb-3 md:block hidden">
          Smart fitness starts here
        </p>

        <div className="max-w-4xl mx-auto animate-fade-in mt-20 md:mt-0">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
            Your Global Fitness Companion
          </h1>

          <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            Discover and book top gyms and certified personal trainers
            worldwide.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl sm:rounded-full p-4 sm:p-6 mb-6 sm:mb-8 animate-slide-up shadow-2xl hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Select */}
              <Select>
                <SelectTrigger className="bg-transparent border-0 text-gray-800 h-12 text-left hidden md:flex">
                  <div className="flex items-center space-x-2">
                    <SelectValue
                      placeholder="Trainers"
                      className="text-gray-800"
                    />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-black">
                  <SelectItem
                    value="personal-trainer"
                    className="hover:bg-yellow-300 hover:text-black"
                  >
                    Personal Trainer
                  </SelectItem>
                  <SelectItem
                    value="group-instructor"
                    className="hover:bg-yellow-300 hover:text-black"
                  >
                    Group Instructor
                  </SelectItem>
                  <SelectItem
                    value="yoga-instructor"
                    className="hover:bg-yellow-300 hover:text-black"
                  >
                    Yoga Instructor
                  </SelectItem>
                  <SelectItem
                    value="crossfit-coach"
                    className="hover:bg-yellow-300 hover:text-black"
                  >
                    CrossFit Coach
                  </SelectItem>
                </SelectContent>
              </Select>

              {/* Input 1*/}
              <div className="grid grid-cols-1 space-x-2">
                <h2 className="text-black text-left">Location</h2>
                <Input
                  type="text"
                  placeholder="City or address"
                  className="text-black border-none -ml-3 shadow-none"
                />
              </div>

              {/* Input 2 */}
              <div className="grid grid-cols-1 space-x-2">
                <h2 className="text-black text-left">Training Type</h2>
                <Input
                  type="text"
                  placeholder="Type (e.g. Yoga)"
                  className="text-black border-none -ml-3 shadow-none"
                />
              </div>

              {/* Input 3 */}
              <div className="grid grid-cols-1 space-x-2">
                <h2 className="text-black text-left">Date</h2>
                <Input
                  type="date"
                  placeholder="Select date"
                  className="text-black border-none -ml-3 shadow-none"
                />
              </div>

              {/* Button */}
              <Button className="bg-[#E4CB0A] hover:bg-[#E4CB0A]/60 text-black h-12 text-lg font-semibold animate-glow rounded-full w-full md:w-auto hidden md:flex">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
