import { Card, CardContent } from "@/components/ui/card";
import personalStoryImage from "@/assets/personal-story.jpg";
import futureGoalsImage from "@/assets/future-goals.jpg";
import photographyFlowers from "@/assets/photography-flowers.jpg";
import photographyTrees from "@/assets/photography-trees.jpg";
import photographyOcean from "@/assets/photography-ocean.jpg";
import i2 from "@/assets/2.jpg";
import i3 from "@/assets/3.jpg";
import i4 from "@/assets/4.jpg";
import i5 from "@/assets/5.jpg";
import i6 from "@/assets/6.jpg";
import i7 from "@/assets/7.jpg";
import i8 from "@/assets/8.jpg";
import i9 from "@/assets/9.jpg";
import i11 from "@/assets/11.jpg";
import i12 from "@/assets/12.jpg";
import i13 from "@/assets/13.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
         <h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text inline-block"> BEYOND ENGINEERING <span class="text-white">WHO IS NIKITA? </span> </h2>
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
                  Engineer by instinct, embedded developer by choice. 
                  I grew up around machines, sketching circuits before
                  I could spell “voltage.”
                </p>
                <p className="text-foreground/90 leading-relaxed mb-4">
                 At Manipal, I dove into Instrumentation & Control Engineering where code meets 
                control. Internships at Kirloskar and Kohler turned curiosity into craftsmanship. 
                  That’s where I discovered firmware: the language machines truly understand.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                 Now, I build real-time systems that listen, think, and act. From RTOS to low-level 
                  drivers, I write firmware with precision, not fluff.
                </p>
              </CardContent>
            </div>
          </Card>

          <Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-card animate-scale-in stagger-1">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gradient"> Beyond the Code: My Approach to Problem-Solving</h3>
              <p className="text-foreground/90 font-semibold leading-relaxed mb-4"> Diagnose Before Debugging</p>
               <p className="text-foreground/90 leading-relaxed mb-4"> I don't jump to fixes but I step back to understand root causes and system behavior.</p>  
              <p className="text-foreground/90 font-semibold leading-relaxed mb-4">Systems Thinking</p>
<p className="text-foreground/90 leading-relaxed mb-4">I break problems into signals, states, and interfaces treating hardware and software as a unified whole.</p>
<p className="text-foreground/90 font-semibold leading-relaxed mb-4">Precision + Patience</p>
<p className="text-foreground/90 leading-relaxed mb-4">Firmware demands discipline. I trace bugs down to the bit level with calm focus.</p>
<p className="text-foreground/90 font-semibold leading-relaxed mb-4">Iterative Mindset</p>
<p className="text-foreground/90 leading-relaxed mb-4">Every failure is a signal. I refine, retest, and learn with every cycle.</p>
<p className="text-foreground/90 font-semibold leading-relaxed mb-4">Tools Are My Allies</p>
<p className="text-foreground/90 leading-relaxed mb-4">Oscilloscopes, debuggers, logs. I use the right tools to make invisible problems visible.</p>
<p className="text-foreground/90 font-semibold leading-relaxed mb-4">Code as Conversation</p>
<p className="text-foreground/90 leading-relaxed mb-4">I treat embedded code as a dialogue with hardware and I listen carefully.
              </p>
            </CardContent>
          </Card>
<Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-card animate-scale-in stagger-3 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">My Goals </h3>
<ul className="text-foreground/90 leading-relaxed list-disc list-inside space-y-2">
  <li>Land my dream job where I could explore my knowledge to the fullest.</li>
  <li>Stay grounded and growing: physically stronger, mentally sharper.</li>
  <li>Build a real-time system that genuinely helps people.</li>
  <li>Be part of impactful work at the intersection of humanity and technology.</li>
  <li>Travel the world’s national parks and collect stories from every corner.</li>
  <li>Build my parents’ dream home nestled in the quiet of the hills.</li>
</ul>

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
          <Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-card animate-scale-in stagger-2 overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Thing that Attracts Me </h3>
              <h4 className="text-2xl font-italics mb-6 text-gradient italic-heading"> Stories from My Perspective</h4>
              <p className="text-foreground/90 leading-relaxed mb-4">
               Photography is how I see things just quietly, carefully, and sometimes differently. </p>
              <p className="text-foreground/90 leading-relaxed mb-4">  It’s not about taking photos. </p>
                <p className="text-foreground/90 leading-relaxed mb-4">It’s about noticing what’s worth remembering.
              </p>
              <div className="grid grid-cols-3 grid-rows-3 gap-4 mt-6">
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={photographyFlowers} 
                    alt="Photography: Orange flowers" 
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={photographyTrees} 
                    alt="Photography: Pine trees" 
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={photographyOcean} 
                    alt="Photography: Ocean wave" 
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                   <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={i2} 
                    alt="Photography: Orange flowers" 
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={i9} 
                    alt="Photography: Orange flowers" 
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={i3} 
                    alt="Photography: Orange flowers" 
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={i5} 
                    alt="Photography: Orange flowers" 
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={i7} 
                    alt="Photography: Orange flowers" 
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={i6} 
                    alt="Photography: Orange flowers" 
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </CardContent>
          </Card>

         <Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-card animate-scale-in stagger-2 overflow-hidden">
            <CardContent className="p-8">
              <h4 className="text-2xl font-italics mb-6 text-gradient italic-heading"> Stories from My Pen</h4>
              <p className="text-foreground/90 leading-relaxed mb-4">
               Words are where I go when silence feels full.  Through poetry, I write what I can’t always say.</p> <p className="text-foreground/90 leading-relaxed mb-4">It includes moments, memories, and musings that live between the lines.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={i12} 
                    alt="Photography: Orange flowers" 
                    className="w-full h-45 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={i11} 
                    alt="Photography: Pine trees" 
                    className="w-full h-45 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={i13} 
                    alt="Photography: Ocean wave" 
                    className="w-full h-45 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground text-center mt-3">
                Capturing moments through photography and expressing emotions through poetry
              </p>
        </div>
      </div>
    </section>
  );
};

export default About;
