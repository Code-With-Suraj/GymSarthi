import { motion } from "motion/react";
import { Dumbbell, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                <Dumbbell className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">GymSarthi</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              The Ultimate Gym Management Software jo India ke gym owners ki needs ko dhyan mein rakh kar banaya gaya hai.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors border border-slate-800">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors border border-slate-800">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors border border-slate-800">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="hover:text-orange-400 transition-colors">Features</a></li>
              <li><a href="#problems" className="hover:text-orange-400 transition-colors">Why GymSarthi?</a></li>
              <li><a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing Plans</a></li>
              <li><a href="#testimonials" className="hover:text-orange-400 transition-colors">Success Stories</a></li>
              <li><a href="#faq" className="hover:text-orange-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>+91-88516-66208</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>suraj.gasdeveloper@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} GymSarthi. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> for Indian Gym Owners
          </p>
        </div>
      </div>
    </footer>
  );
}
