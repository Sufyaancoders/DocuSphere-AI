import { Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';
import BorderAnimationButton from '../components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press Kit', href: '#press' },
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Community', href: '#community' },
      { name: 'Contact', href: '#contact' },
      { name: 'Status', href: '#status' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@docusphere.ai', label: 'Email' },
  ];

  return (
    <footer id="contact" className="relative mt-0.5 bg-[#18181b] border-t border-gray-700 text-gray-100">
      {/* Back to Top Button */}
      <BorderAnimationButton
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 btn-hero rounded-full w-12 h-12 p-0"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </BorderAnimationButton>

      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-xl flex items-center justify-center border-2 border-gray-700">
                <span className="text-cyan-400 font-extrabold text-xl tracking-widest select-none" style={{fontFamily: 'monospace', textShadow: '0 0 8px #06b6d4, 0 0 16px #06b6d4'}}>AI</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-tr from-blue-400 to-purple-400 bg-clip-text text-transparent">DocuSphere</span>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Empowering developers with next-generation AI tools for document analysis,
              intelligent assistance, and workflow management.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-100">contact@docusphere.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 flex items-center justify-center text-blue-400">📍</span>
                <span className="text-gray-100">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-700 border border-gray-700 hover:border-blue-400 flex items-center justify-center transition-all duration-300 group shadow"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-300 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-100">Stay Updated</h3>
            <p className="text-gray-400">
              Get the latest AI insights, feature updates, and developer resources
              delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-100 placeholder-gray-400"
              />
              <BorderAnimationButton className="btn-hero">
                Subscribe
              </BorderAnimationButton>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-gray-100 mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-100 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-100 mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-100 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 DocuSphere. All rights reserved. Built with <span className="text-red-400">❤️</span> for developers.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <span>🔒 SOC 2 Compliant</span>
              <span>🛡️ GDPR Ready</span>
              <span>⚡ 99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;