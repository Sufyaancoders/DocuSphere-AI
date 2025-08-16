import BorderAnimationButton from "./ui/button"
import { ArrowRight, Play } from 'lucide-react';
import DarkVeil from '../components/ui/DarkVeil';
import TextType from '../components/ui/texttype';
const HeroPlace = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
<div style={{ width: '100%', height: '700px', position: 'relative' }}>
  <DarkVeil />
</div>
      </div>

      {/* Animated Background Elements */}
      

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-10">
            <span className="text-sm font-medium text-primary">✨ Next-Gen AI Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <TextType 
  text={["Text typing effect", "for your websites", "Happy coding!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-xl text-white mb-16 max-w-3xl mx-auto leading-relaxed">
            Unleash the power of advanced AI with our comprehensive platform, featuring 
            <span className="text-primary font-semibold">Document Analysis</span>, 
            <span className="text-secondary font-semibold">Intelligent Assistants</span>, and 
            <span className="text-accent font-semibold">Management Tools</span>—all in one unified ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col my-10 sm:flex-row gap-4 justify-center items-center">
           <BorderAnimationButton >
              Try Now - Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
           </BorderAnimationButton>            
            <BorderAnimationButton 
              variant="outline" 
              
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </BorderAnimationButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-[hsl(200,100%,60%)]">10M+</div>
              <div className="text-white">Documents Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-[hsl(260,100%,65%)]">99.9%</div>
              <div className="text-white">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-[hsl(180,100%,60%)]">50K+</div>
              <div className="text-white">Active Developers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroPlace;
