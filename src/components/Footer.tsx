const Footer = () => {
  const footerLinks = {
    "Useful Links": [
      "Terms of Use",
      "Privacy Policy", 
      "Contact",
      "About Us"
    ],
    "For Trainers": [
      "Become a Trainer",
      "Trainer Resources",
      "Success Stories",
      "Support"
    ],
    "For Gyms": [
      "Partner with Us",
      "Gym Management",
      "Analytics",
      "API Documentation"
    ]
  };

  const socialLinks = [
    { icon: "/image9.png", href: "#", label: "XSpace" },
    { icon: "/image10.png", href: "#", label: "LinkedIn" },
    { icon: "/image11.png", href: "#", label: "GitHub" },
    { icon: "/image12.png", href: "#", label: "Image" },
  ];

  return (
    <footer className="bg-[#1C1E1C] md:rounded-[40px] md:px-8 md:py-3 md:mx-10 mt-24 md:mb-">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">GymBoy</h3>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-[#FDFFF7]/80 hover:text-gray-400 font-medium transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className=" mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © Gymscanner 2025
          </p>
                <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-gray-500 hover:text-primary-foreground transition-colors duration-300 border-1 border-gray-400"
                >
                    <img src={social.icon} alt="" />
                </a>
              ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;