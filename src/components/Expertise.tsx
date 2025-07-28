import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Zap, Cog, Shield } from "lucide-react";

const Expertise = () => {
  const highlights = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Microcontroller Expert",
      description: "ARM Cortex-M, ESP32, STM32, and Arduino platforms"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Systems",
      description: "RTOS, interrupt handling, and time-critical applications"
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Hardware Integration",
      description: "PCB design, sensor fusion, and communication protocols"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Safety",
      description: "Secure boot, encryption, and safety-critical systems"
    }
  ];

  const technologies = [
    "C/C++", "Python", "Rust", "ARM Assembly", "FreeRTOS", "Zephyr OS",
    "I2C", "SPI", "UART", "CAN Bus", "Ethernet", "WiFi", "Bluetooth",
    "KiCad", "Altium Designer", "MATLAB/Simulink", "Git", "JIRA", "Docker"
  ];

  return (
    <section id="expertise" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in stagger-1">
            8+ years of experience delivering innovative embedded solutions across 
            automotive, IoT, and industrial automation sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-slide-up">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className={`bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-card hover-scale animate-scale-in stagger-${index + 1}`}
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg text-primary animate-glow-pulse">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="animate-fade-in stagger-2">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`px-4 py-2 text-sm hover:bg-secondary/80 hover:shadow-subtle transition-all duration-300 hover-scale animate-fade-in stagger-${(index % 4) + 1}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;