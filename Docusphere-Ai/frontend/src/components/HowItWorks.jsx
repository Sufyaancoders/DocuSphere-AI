import { ArrowRight, ArrowDown, Upload, Cpu, Download, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload & Connect",
      description: "Simply upload your documents or connect your data sources. Our platform supports over 50+ file formats and integrates with popular cloud services.",
      step: "01"
    },
    {
      icon: Cpu,
      title: "AI Processing",
      description: "Our advanced AI models analyze, extract, and understand your content using cutting-edge natural language processing and machine learning algorithms.",
      step: "02"
    },
    {
      icon: Zap,
      title: "Intelligent Insights",
      description: "Get actionable insights, automated responses, and intelligent recommendations delivered through our intuitive dashboard or API endpoints.",
      step: "03"
    },
    {
      icon: Download,
      title: "Export & Integrate",
      description: "Export results in multiple formats or seamlessly integrate with your existing workflows using our comprehensive REST API and SDKs.",
      step: "04"
    }
  ];

  return (
  <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-10">
            <span className="text-blue-500">How It Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started with DocuSphere in minutes. Our streamlined process makes 
            AI integration effortless for developers of all skill levels.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {steps.map((step, index) => (
            <>
              <div key={index} className="flex flex-col items-center w-full lg:w-72 max-w-xs">
                <div className="relative group w-full">
                  {/* Step Card */}
                  <div className="text-center bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 w-full">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/30 border border-blue-500/40 mb-4">
                      <span className="text-xs font-bold text-blue-500">{step.step}</span>
                    </div>

                    {/* Icon */}
                    <div className="feature-icon mx-auto mb-6 group-hover:scale-110">
                      <step.icon className="w-8 h-8 text-blue-500" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-all duration-300">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <span className="my-4 lg:my-0 lg:mx-4 flex items-center justify-center">
                  {/* Down arrow for mobile, right arrow for desktop */}
                  <span className="block lg:hidden">
                    <ArrowDown className="w-6 h-6 text-blue-500" />
                  </span>
                  <span className="hidden lg:block">
                    <ArrowRight className="w-6 h-6 text-blue-500" />
                  </span>
                </span>
              )}
            </>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-gray-800 border border-blue-500/30 group cursor-pointer hover:bg-blue-500/30 transition-all duration-300">
            <span className="text-sm text-blue-500 font-medium mr-2">
              Ready to get started?
            </span>
            <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;