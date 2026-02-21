import { motion } from "motion/react";
import { Phone, MessageCircle, Mail, ArrowRight, ShieldCheck, Gift } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-orange-500 relative overflow-hidden" id="cta">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-600/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-12 bg-slate-900 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-medium text-xs mb-6 border border-orange-500/30 uppercase tracking-wider">
                <Gift className="w-4 h-4" /> Limited Time Offer
              </div>
              
              <h3 className="text-3xl font-bold mb-4 leading-tight">Abhi Nahi Toh Kabhi Nahi! 🎁</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Agar aap AAJ action lete hain, toh aapke liye ek special deal hai. Warning: Yeh offer sirf agle 15 Din ke liye valid hai!
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-slate-200">First Month 50% OFF! (Starter: ₹250 | Pro: ₹500)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-slate-200">FREE Setup Worth ₹999 (Pro Plan walon ke liye)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-slate-200">FREE 30-min Training Call (Main personally sikhaunga)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-slate-200">Priority Onboarding (48 hours mein gym digital!)</span>
                </li>
              </ul>
              
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">30-Day Money-Back Guarantee</h4>
                  <p className="text-sm text-slate-400">Risk Free! Full Refund le lo. No Questions Asked. 🤝</p>
                </div>
              </div>
            </div>
            
            <div className="p-10 md:p-12 flex flex-col justify-center bg-white">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to Transform Your Gym?</h3>
              <p className="text-slate-600 mb-8">Action Lo Abhi! 3 Simple Steps to make your gym profitable today.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">1</div>
                  <p className="text-slate-700 font-medium">Message karo ya call karo</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">2</div>
                  <p className="text-slate-700 font-medium">Apna plan choose karo (Pro Plan suggested)</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">3</div>
                  <p className="text-slate-700 font-medium">Sit back aur relax karo, hum setup karenge!</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <a href="https://wa.me/918851666208" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25">
                  <MessageCircle className="w-5 h-5" /> Direct WhatsApp
                </a>
                <a href="tel:+918851666208" className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> +91-88516-66208
                </a>
                <a href="mailto:suraj.gasdeveloper@gmail.com" className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
