import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown, Calender } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";


const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Small Label */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary">
              Embedded Systems • FPGA • Real-Time Systems • Edge AI
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in stagger-1">
            <span className="block">
              Embedded
            </span>

            <span className="block text-primary">
              & FPGA Engineer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-xl sm:text-2xl text-muted-foreground animate-fade-in stagger-2">
            Firmware • FPGA • Real-Time Computing • Computer Vision
          </p>

          {/* Description */}
          <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-in stagger-2">
            I design and develop real-time embedded systems across firmware,
            FPGA acceleration, digital signal processing, and edge AI —
            working across the hardware and software boundary to build
            efficient and reliable systems.
          </p>

     ```tsx
{/* Buttons */}
<div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in stagger-3">

  {/* View Projects */}
  <a
    href="#projects"
    className="inline-block"
  >
    <Button
      variant="glow"
      size="lg"
      className="hover-glow"
    >
      View Projects
    </Button>
  </a>

  {/* Download Resume */}
  <a
    href="https://drive.google.com/file/d/1o9WH1-7J01Au5LTGycslHKePWMmr5FE9/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <Button
      variant="tech"
      size="lg"
      className="group hover-scale"
    >
      <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
      Download Resume
    </Button>
  </a>

</div>
```


          {/* Social Icons */}
          <div className="flex justify-center gap-6 pt-8">

            {/* GitHub */}
            <a
              href="https://github.com/nikita-sinhaa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12"
              >
                <Github className="h-6 w-6" />
              </Button>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nikita-sinhaa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>

            {/* Calendly */}
            <a
              href="https://calendly.com/nikitaa-sinhaa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule a meeting"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12"
              >
                <Calendar className="h-6 w-6" />
              </Button>
            </a>

            {/* Email */}
            <a
              href="mailto:nikitaa.sinhaa@gmail.com"
              aria-label="Send Email"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12"
              >
                <Mail className="h-6 w-6" />
              </Button>
            </a>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
