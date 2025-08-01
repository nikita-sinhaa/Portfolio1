import { Github, Linkedin, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-6">
            <a
              href="https://drive.google.com/file/d/12PafDLQuNIJJTCDmBNTZnlXn5xv0uXKn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <FileText size={20} />
              <span>Resume</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nikita-sinhaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/nikita-sinhaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
          <p className="text-center text-muted-foreground text-sm">
            By Nikita Sinha: the sensor enthusiast turned embedded engineer @2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
