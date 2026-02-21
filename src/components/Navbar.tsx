import { useState, useEffect } from "react";
import { Dumbbell, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">GymSarthi</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#problems" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">The Problem</a>
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Stories</a>
            <a
              href="#cta"
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-all shadow-lg shadow-orange-500/25"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 shadow-xl py-4 px-4 flex flex-col gap-4">
          <a href="#problems" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium py-2">The Problem</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium py-2">Features</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium py-2">Pricing</a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium py-2">Stories</a>
          <a
            href="#cta"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-5 py-3 bg-orange-500 text-white rounded-lg font-semibold text-center mt-2"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
