import { Card, CardContent } from "@/components/ui/card";
import personalStoryImage from "@/assets/personal-story.jpg";
import futureGoalsImage from "@/assets/future-goals.jpg";
import photographyFlowers from "@/assets/photography-flowers.jpg";
import photographyTrees from "@/assets/photography-trees.jpg";
import photographyOcean from "@/assets/photography-ocean.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            BEYOND ENGINEERING WHO IS NIKITA?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in stagger-1">
            Embedded Engineer sensor enthusiast, and a proud process control fanatic. Storyteller in code and beyond. I build real time systems that think fast and run clean. Outside the lab, you’ll find me writing, exploring new places, cooking something spicy, or clicking photographs of the most random building around.  
            technology with creativity, innovation, and human connection.
          </p>
        </div>

        <div className="space-y-8 animate-slide-up">
          <Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-card animate-scale-in overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img 
                  src={personalStoryImage} 
                  alt="Nikita working on embedded systems" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20" />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">The Beginning</h3>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  From the soft hum of circuit boards to the click of relays, my childhood was a symphony of machines.
                  Surrounded by mechanical and electrical engineers, I was sketching circuits and dismantling toys long
                  before algebra made its entrance. By middle school, my path was crystal clear—I was going to be an 
                  engineer, not out of duty, but out of instinct.
                </p>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  At Manipal Institute of Technology, I found my academic home in Instrumentation & Control Engineering
                  —a discipline where mechanical intuition meets electrical finesse. It was here that I fell headfirst 
                  into the beauty of process control, PLCs, and signal processing. Not just theory, but the art of 
                  command and feedback, of stability and precision.
                </p>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  My professional chapters at Kirloskar and Kohler turned learning into doing. I wasn’t just analyzing 
                  control loops but I was shaping them. In factories buzzing with legacy systems and next-gen prototypes,
                  I discovered the unsung hero behind the scenes: firmware. That moment changed everything.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                 Today, I build real-time systems that don’t just exist—they listen, think, and respond. Whether it’s RTOS,
                  signal filtering, or DMA-driven data paths, I write firmware that talks straight to the metal—clean, efficient,
                  and purpose-built. This is more than code. This is control.
                </p>
              </CardContent>
            </div>
          </Card>

          <Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-card animate-scale-in stagger-1">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Beyond the Code</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                While firmware development is my professional forte, I believe in the power of 
                interdisciplinary thinking. I'm a storyteller who captures moments through photography, 
                finding that the patience required for the perfect shot mirrors the persistence needed 
                for debugging complex embedded systems.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Music flows through my daily routine - whether it's finding rhythm in algorithms or 
                discovering how sound processing principles apply to signal filtering in my embedded projects. 
                These seemingly different worlds often collide in the most beautiful ways.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-card animate-scale-in stagger-2 overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">When I'm Not in Firmware Mode</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                You'll find me exploring nature trails, where the complexity of ecosystems reminds me 
                of the intricate systems I design. There's something profound about debugging code under 
                the open sky or finding inspiration for efficient algorithms in the patterns of nature.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-4">
                I'm passionate about mentoring and believe in empowering the next generation of innovators. 
                Teaching others has taught me that the best solutions often come from fresh perspectives 
                and questioning established norms.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-6">
                My creative coding projects bridge the gap between art and technology - building interactive 
                installations that respond to human emotion, or contributing to open-source communities 
                that make technology more accessible to everyone.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={photographyFlowers} 
                    alt="Photography: Orange flowers" 
                    className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={photographyTrees} 
                    alt="Photography: Pine trees" 
                    className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={photographyOcean} 
                    alt="Photography: Ocean wave" 
                    className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-3">
                Capturing moments through photography and expressing emotions through poetry
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-card animate-scale-in stagger-3 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">Future Goals</h3>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  I envision a future where embedded systems seamlessly integrate with AI and quantum computing, 
                  creating intelligent devices that understand and adapt to human needs. My goal is to pioneer 
                  sustainable embedded solutions that not only perform efficiently but also contribute to a 
                  greener planet.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Beyond technical achievements, I aim to establish mentorship programs that bridge the gap 
                  between academia and industry, fostering innovation while ensuring technology serves humanity's 
                  best interests. The future is about creating technology that feels less like technology 
                  and more like magic.
                </p>
              </CardContent>
              <div className="relative h-64 md:h-auto">
                <img 
                  src={futureGoalsImage} 
                  alt="Future goals under starry night sky" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card/20" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
