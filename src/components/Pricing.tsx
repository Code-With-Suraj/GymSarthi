import { motion } from "motion/react";
import { Check, X, Zap, Crown, Star } from "lucide-react";

const plans = [
  {
    name: "Starter Plan",
    price: "₹499",
    period: "/month",
    description: "Best for Small Gyms (20-50 Members)",
    icon: <Star className="w-6 h-6 text-slate-400" />,
    features: [
      "Traffic Light Dashboard",
      "Basic Udhaari Tracking",
      "Payment History",
      "WhatsApp Reminders",
    ],
    missing: [
      "Priority Payment Alerts",
      "Gym Store/POS System",
      "Expense Management",
      "Financial Dashboard",
    ],
    setup: "Setup: ₹999 One-time",
    buttonText: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro Plan",
    price: "₹999",
    period: "/month",
    description: "Best for Professional Gyms (50-200 Members)",
    icon: <Zap className="w-6 h-6 text-orange-500" />,
    features: [
      "Unlimited Members",
      "Priority Payment Alerts (Paisa banata hai!)",
      "Gym Store/POS System",
      "Expense Management",
      "Financial Dashboard",
      "Traffic Light Dashboard",
      "WhatsApp Reminders",
    ],
    missing: [],
    setup: "FREE Setup (Aapke ₹999 bach gaye!)",
    buttonText: "Get Pro Now",
    popular: true,
  },
  {
    name: "Upgraded Pro Plan",
    price: "₹9,999",
    period: "/year",
    description: "Big Savings for Smart Owners",
    icon: <Crown className="w-6 h-6 text-purple-500" />,
    features: [
      "All Pro Features included",
      "Save ₹1,989 (2 Months FREE!) 🎁",
      "Unlimited Members",
      "Priority Payment Alerts",
      "Gym Store/POS System",
      "Expense Management",
      "Financial Dashboard",
    ],
    missing: [],
    setup: "FREE Setup & Priority Support",
    buttonText: "Get Yearly Plan",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="pricing">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-3">Pricing Plans</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Har Jeb Ke Liye Perfect 💎</h3>
          <p className="text-lg text-slate-400 leading-relaxed">
            Humne pricing aisi rakhi hai ki ek student bhi afford kar sake.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-slate-800/50 backdrop-blur-xl border ${plan.popular ? 'border-orange-500/50 shadow-2xl shadow-orange-500/20 scale-105 z-10' : 'border-slate-700'} rounded-3xl p-8 flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <span className="bg-orange-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${plan.popular ? 'bg-orange-500/20' : 'bg-slate-700/50'}`}>
                  {plan.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold">{plan.name}</h4>
                  <p className="text-sm text-slate-400">{plan.description}</p>
                </div>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-slate-400">{plan.period}</span>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
                {plan.missing.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 opacity-50">
                    <X className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-400 text-sm leading-relaxed line-through">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-slate-700/50">
                <div className="text-center text-sm font-medium text-orange-400 mb-6">
                  {plan.setup}
                </div>
                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all ${
                    plan.popular
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
