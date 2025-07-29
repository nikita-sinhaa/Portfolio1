import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import projectIot from "@/assets/project-iot.jpg";
import projectAutomation from "@/assets/project-automation.jpg";
import projectWearable from "@/assets/project-wearable.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Object Detection Acceleration Using Transfer Learning and FPGA",
      description: "This project showcases a hybrid AI + FPGA system that accelerates object detection post-processing in real-time",
      image: projectIot,
      technologies: ["Python", "C++", "VHDL", "FPGA", "AI", "Signal Processing"],
      github: "https://github.com/nikita-sinhaa/Real-Time-Object-Detection-Acceleration-Using-Transfer-Learning",
     
      highlights: [
        "⚡ YOLOv5s model in Python (PyTorch) for lightweight object detection",
        "⚡ Bounding box filtering and Non-Maximum Suppression (NMS) simulated in VHDL hardware",
        "🚀 Achieves ~30 FPS inference with simulated FPGA co-processing"
      ]
    },
    {
      title: " Smart Market AI",
      description: "SmartMarketAI is a complete machine learning pipeline and interactive dashboard that simulates a marketing platform's core decision-making intelligence.",
      image: projectAutomation,
      technologies: ["Python", "ML", "PyTorch"],
      github: "https://github.com/nikita-sinhaa/Smart-Market-AI",
      
      highlights: [
       "🎯 Conversion Prediction using Gradient Boosting",
        "💸 Dynamic Bid Price Optimization via Regression",
"🕵️‍♀️ Fraud Detection via both Isolation Forest and GNN (Graph Neural Network)",
"📊 Streamlit-based UI for campaign simulation and experimentation"
      ]
    },
    {
      title: "Speech-Enhancement-for-Far-field-Voice-Assistants",
      description: "Design a speech enhancement pipeline using beamforming and noise reduction to improve far-field audio captured by virtual microphones.",
      image: projectWearable,
      technologies: ["C", "Real time", "BLE", "Signal Processing", "Voice control"],
      github: "https://github.com/nikita-sinhaa/Speech-Enhancement-for-Far-field-Voice-Assistants",
      
      highlights: [
        "🎙️ Beamforming for Directional Audio Focus",
"🧠 Real-Time Noise Suppression using Spectral Subtraction",
"🔊 Voice Activity Detection (VAD) for Accurate Speech Boundaries",
"🛠️ Modular DSP Pipeline Architecture for Scalability"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in stagger-1">
            A showcase of embedded systems projects demonstrating expertise in firmware development, 
            hardware integration, and system optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group bg-card/80 border-border hover:shadow-card transition-all duration-500 hover-scale overflow-hidden animate-scale-in stagger-${index + 1}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors story-link">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground animate-fade-in stagger-1">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-foreground/80">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 animate-fade-in stagger-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs hover-scale">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
               <div className="flex gap-3 pt-4 animate-slide-up stagger-3">
  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
    <Button variant="tech" size="sm" className="w-full hover-glow">
      <Github className="mr-2 h-4 w-4" />
      Code
    </Button>
  </a>
</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center animate-fade-in stagger-4">
  <a
    href="https://github.com/nikita-sinhaa"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="glow" size="lg" className="hover-scale hover-glow">
      <ExternalLink className="mr-2 h-5 w-5" />
      Explore More Projects on GitHub
    </Button>
  </a>
</div>
      </div>
    </section>
  );
};

export default Projects;
