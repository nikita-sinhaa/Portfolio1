import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    window.open("https://calendly.com/nikita-sinhaa", "_blank");
    setShowContact(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient animate-fade-in">
            Nikita Sinha
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light animate-fade-in stagger-1">
            Embedded Engineer
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in stagger-2">
            Embedded Engineer who is turning real-time challenges into real-world solutions
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in stagger-3">
            <a
              href="https://drive.google.com/file/d/12PafDLQuNIJJTCDmBNTZnlXn5xv0uXKn/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="glow" size="lg" className="group hover-glow animate-glow-pulse">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>

            <a
  href="ttps://calendly.com/nikitaa-sinhaa"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="tech" size="lg" className="hover-scale">
    <Mail className="mr-2 h-5 w-5" />
    Get In Touch
  </Button>
</a>
          </div>

          

          {/* Social Icons */}
          {/* Social Icons */}
<div className="flex justify-center gap-6 pt-8 animate-fade-in stagger-4">
  {/* GitHub */}
  <a
    href="https://github.com/nikita-sinhaa"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="ghost" size="icon" className="h-12 w-12 hover-glow animate-float">
      <Github className="h-6 w-6" />
    </Button>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/nikita-sinhaa/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="ghost" size="icon" className="h-12 w-12 hover-glow animate-float stagger-1">
      <Linkedin className="h-6 w-6" />
    </Button>
  </a>

  {/* Email */}
  <a href="mailto:nikita.sinhaa@gmail.com">
    <Button variant="ghost" size="icon" className="h-12 w-12 hover-glow animate-float stagger-2">
      <Mail className="h-6 w-6" />
    </Button>
  </a>
</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-primary rounded-full opacity-60" />
      </div>
    </section>
  );
};

export default Hero;
