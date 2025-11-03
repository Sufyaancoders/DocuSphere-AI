import { Code, Terminal, Smartphone, Cloud, ArrowRight } from 'lucide-react';
import BorderAnimationButton from "../components/ui/button"
const Integration = () => {
  const integrations = [
    {
      icon: Code,
      title: "REST API",
      description: "Full-featured REST API with comprehensive documentation and SDKs for popular programming languages.",
      features: ["Complete CRUD operations", "Real-time webhooks", "Rate limiting", "API versioning"]
    },
    {
      icon: Terminal,
      title: "CLI Tools",
      description: "Command-line interface for developers who prefer terminal-based workflows and automation scripts.",
      features: ["Batch processing", "CI/CD integration", "Automated deployment", "Script automation"]
    },
    {
      icon: Smartphone,
      title: "Mobile SDKs",
      description: "Native SDKs for iOS and Android to integrate AI capabilities directly into your mobile applications.",
      features: ["React Native support", "Flutter integration", "Offline capabilities", "Push notifications"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Seamless integration with major cloud platforms and popular development tools and frameworks.",
      features: ["AWS integration", "Azure support", "Google Cloud", "Kubernetes ready"]
    }
  ];

  const codeExample = `// Initialize DocuSphere SDK
import { DocuSphere } from '@docusphere/sdk';

const client = new DocuSphere({
  apiKey: 'your-api-key',
  region: 'us-east-1'
});

// Analyze document
const result = await client.documents.analyze({
  file: 'document.pdf',
  options: {
    extractEntities: true,
    sentiment: true,
    summary: true
  }
});

console.log(result.insights);`;

  return (
    <section className="py-24 bg-black/90">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient text-blue-500 drop-shadow-lg">Developer-First Integration</span>
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto">
            Built by developers, for developers. Integrate DocuSphere into your stack 
            with our comprehensive APIs, SDKs, and tools.
          </p>
        </div>

        {/* Code Example */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-black/20 backdrop-blur-sm border border-gray-200 rounded-xl p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-white">JavaScript SDK</span>
            </div>
            <pre className="text-sm text-white/90 overflow-x-auto">
              <code>{codeExample}</code>
            </pre>
          </div>
        </div>

        {/* Integration Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 mx-6">
          {integrations.map((integration, index) => (
            <div key={index} className="card-glow group">
              <div
                className="rounded-3xl border border-black-300/40 bg-gradient-to-br from-blue-100/60 via-blue-200/40 to-white/80 shadow-lg p-4 transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:border-blue-400/60 relative overflow-hidden backdrop-blur-md"
              >
                {/* Decorative Glow Circle */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-black-500/10 rounded-full blur-2xl z-0 group-hover:bg-blue-500/20 transition-all duration-300"></div>

                {/* Icon */}
                <div
                  className="feature-icon mb-6 w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 ease-out bg-blue-200/40 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] group-hover:bg-blue-300/40 z-10 relative border border-blue-300/40"
                >
                  <integration.icon className="w-8 h-8 text-blue-700 transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-all duration-300 z-10 relative">
                  {integration.title}
                </h3>

                <p className="text-black/80 mb-6 leading-relaxed z-10 relative">
                  {integration.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 z-10 relative">
                  {integration.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                      <span className="text-black-900/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* SDKs and Libraries */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">
            Available in Your Favorite Languages
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
            {['JavaScript', 'Python', 'Go', 'Java', 'PHP', 'Ruby'].map((lang, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-white/90 border border-gray-200 hover:border-blue transition-all duration-300 group cursor-pointer"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  {lang === 'JavaScript' && '🟨'}
                  {lang === 'Python' && '🐍'}
                  {lang === 'Go' && '🐹'}
                  {lang === 'Java' && '☕'}
                  {lang === 'PHP' && '🐘'}
                  {lang === 'Ruby' && '💎'}
                </div>
                <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {lang}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BorderAnimationButton className="btn-hero group">
              View Documentation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </BorderAnimationButton>
            
            <BorderAnimationButton
              variant="outline" 
              className="bg-[hsl(220_13%_5%/0.2)] border-gray-200 hover:bg-[hsl(220_13%_5%/0.3)] backdrop-blur-sm"
            >
              Try in Playground
            </BorderAnimationButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;