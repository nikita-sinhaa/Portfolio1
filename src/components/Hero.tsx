import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Calender } from "lucide-react";
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

        {/* Background glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Small Label */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary">
              Embedded Systems • FPGA • Real-Time Systems • Edge AI
            </span>
          </div>

          {/* Main Heading */}
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

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 animate-fade-in stagger-3">

            {/* View Projects */}
            <a href="#projects">
              <Button
                variant="glow"
                size="lg"
                className="group hover-glow w-full sm:w-auto"
              >
                <ArrowDown className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                View Projects
              </Button>
            </a>

            {/* Download Resume */}
            <a
              href="https://drive.google.com/file/d/1o9WH1-7J01Au5LTGycslHKePWMmr5FE9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="tech"
                size="lg"
                className="group hover-scale w-full sm:w-auto"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>

          </div>

          {/* Social / Contact Icons */}
          <div className="flex justify-center gap-5 pt-8 animate-fade-in stagger-4">

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
                className="h-12 w-12 hover-scale"
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
                className="h-12 w-12 hover-scale"
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
                className="h-12 w-12 hover-scale"
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
                className="h-12 w-12 hover-scale"
              >
                <Mail className="h-6 w-6" />
              </Button>
            </a>

          </div>

          {/* Availability */}
          <div className="mt-8 animate-fade-in stagger-4">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Open to Embedded, Firmware & FPGA opportunities
            </span>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </div>

    </section>
  );
};

export default Hero;
```
