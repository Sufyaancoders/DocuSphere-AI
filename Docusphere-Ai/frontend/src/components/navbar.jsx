import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { SparklesText } from "../components/ui/SparklesText"
import { Menu, X } from 'lucide-react';
import BorderAnimationButton from "../components/ui/button"
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-xl flex items-center justify-center border-2 border-gray-700">
              <span className="text-cyan-400 font-extrabold text-xl tracking-widest select-none" style={{fontFamily: 'monospace', textShadow: '0 0 8px #06b6d4, 0 0 16px #06b6d4'}}>AI</span>
            </div>
            <span className="ml-1">
              <SparklesText className={isScrolled ? "text-black" : "text-white"}>DocuSphere</SparklesText>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link relative px-2 py-1 ${isScrolled ? 'text-black' : 'text-white'} text-gray-700 transition-colors duration-200 hover:text-cyan-400 focus:text-cyan-400 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full after:rounded-full`}
                style={{overflow: 'hidden'}}
              >
                {item.name}
                {/* Animated underline */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-200 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <BorderAnimationButton text="Login" onClick={handleLogin} />
            <BorderAnimationButton text="Sign Up" />
          </div>

          {/* Mobile Menu Button */}
          <BorderAnimationButton
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </BorderAnimationButton>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <BorderAnimationButton
                  text="Login"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleLogin();
                  }}
                />

                <BorderAnimationButton
                  text = "Sign Up"/>
                
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
