import { useState } from "react";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Find Trainers", href: "#trainers" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Become a Trainer", href: "#trainer" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-20 py-4 bg-transparent">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-base sm:text-base font-bold gradient-text">
              Gymscanner
            </h1>
          </div>

          {/* Desktop Navigation */}
    
          <div className="hidden lg:flex items-center text-[12px] space-x-8 bg-transparent border-1 rounded-full px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button variant="ghost" className="text-sm">
              Log In
            </Button>
            <Button className="bg-[#E4CB0A] hover:bg-[#E4CB0A]/60  text-black text-sm rounded-full">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white hover:text-yellow-400 transition-colors duration-300 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" className="w-full">
                Log In
              </Button>
              <Button className="bg-[#E4CB0A] hover:bg-[#E4CB0A]/60 text-black rounded-full w-full">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

