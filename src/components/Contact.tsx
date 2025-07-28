import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Calendar } from "lucide-react";

const Contact = () => {
  const handleSendEmail = () => {
    window.location.href = "mailto:nikitaa.sinhaa@gmail.com?subject=Let's Work Together&body=Hi Nikita, I'd love to discuss a potential collaboration...";
  };

  const handleScheduleCall = () => {
    // Replace with your actual scheduling link (Calendly, Cal.com, etc.)
    window.open("https://calendly.com/nikitaa-sinhaa/30min", "_blank","noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in stagger-1">
            Ready to bring your embedded systems project to life? Let's discuss how we can 
            create innovative solutions together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto animate-slide-up">
          <Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-card hover-scale animate-scale-in">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/20 rounded-lg text-primary animate-glow-pulse">
                  <Mail className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Send Email</h3>
              
              <Button   className="h-12 w-12 hover-glow animate-float stagger-2"
                variant="glow" 
                size="lg" 
                onClick={handleSendEmail}
               
              >
                <Mail className="h-6 w-6" />
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-card hover-scale animate-scale-in stagger-1">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/20 rounded-lg text-primary animate-glow-pulse">
                  <Calendar className="mr-2 h-5 w-5" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Schedule Call</h3>
              
              <Button 
                variant="tech" 
                size="lg" 
                onClick={handleScheduleCall}
                className="w-full hover-scale"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Call
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 animate-fade-in stagger-2">
          <p className="text-sm text-muted-foreground">
             Available for remote, hybrid and on-site role.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
