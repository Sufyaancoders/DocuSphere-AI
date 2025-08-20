import { FileSearch, Bot, Settings } from 'lucide-react';
import AIBackground from './AIBackground';

const Features = () => {
  const features = [
    {
      icon: FileSearch,
      title: "AI Document Analyzing",
      description: "Advanced document processing with natural language understanding, automatic categorization, and intelligent extraction of key insights from any file type.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Bot,
      title: "AI Assistants",
      description: "Intelligent virtual assistants powered by cutting-edge language models, capable of complex reasoning, creative tasks, and seamless workflow integration.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "AI Management Tools",
      description: "Comprehensive suite of tools for monitoring, optimizing, and scaling your AI implementations with real-time analytics and performance insights.",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-black/20 relative overflow-hidden">
      <AIBackground className="opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Powerful AI Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered tools designed to revolutionize 
            your development workflow and boost productivity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={"card-glow group cursor-pointer fade-in-up border p-5 border-black/30 rounded-xl"}
              style={{
                animationDelay: `${index * 200}ms`,
                background: `linear-gradient(to right, ${feature.gradient})`
              }}
            >
              {/* Icon */}
              <div className="feature-icon mb-6 group-hover:scale-110">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div className="mt-6 h-1 w-0 bg-gradient-primary group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-800/10 border border-primary/20">
            <span className="text-sm text-primary font-medium">
              🚀 Ready to experience the future of AI? Start your journey today
            </span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Features;
