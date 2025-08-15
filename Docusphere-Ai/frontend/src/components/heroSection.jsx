import BorderAnimationButton from "./ui/button"
import { ArrowRight, Play } from 'lucide-react';
import heroBackground from '../../assets/hero-background.jpg';
import DarkVeil from '../components/ui/DarkVeil';
const HeroPlace = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <DarkVeil />
</div>
      </div>

      {/* Animated Background Elements */}
      

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-8">
            <span className="text-sm font-medium text-primary">✨ Next-Gen AI Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">DocuSphere</span>
            <br />
            <span className="text-foreground">AI-Powered</span>
            <br />
            <span className="text-glow">Innovation Hub</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Unleash the power of advanced AI with our comprehensive platform featuring 
            <span className="text-primary font-semibold"> Document Analysis</span>, 
            <span className="text-secondary font-semibold"> Intelligent Assistants</span>, and 
            <span className="text-accent font-semibold"> Management Tools</span> - all in one unified ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <BorderAnimationButton className="btn-hero group text-lg px-8 py-4">
              Try Now - Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
           </BorderAnimationButton>            
            <BorderAnimationButton 
              variant="outline" 
              className="bg-background/20 border-border hover:bg-background/30 text-lg px-8 py-4 backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </BorderAnimationButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">10M+</div>
              <div className="text-muted-foreground">Documents Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">99.9%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">50K+</div>
              <div className="text-muted-foreground">Active Developers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroPlace;
