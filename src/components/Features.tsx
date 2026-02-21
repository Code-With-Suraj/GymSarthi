import { motion } from "motion/react";
import { TrafficCone, AlertCircle, Clock, TrendingUp, Store, PieChart } from "lucide-react";

const features = [
  {
    icon: <TrafficCone className="w-8 h-8 text-orange-500" />,
    title: "The Traffic Light System 🚦",
    description: "Jaise traffic lights road ko control karti hain, waise hi yeh system aapke members ko manage karta hai.",
    details: [
      { color: "text-red-500", bg: "bg-red-50", label: "RED BOX (Danger Zone)", text: "Expiring Today! Ek click karo aur seedha call ya WhatsApp." },
      { color: "text-yellow-500", bg: "bg-yellow-50", label: "YELLOW BOX (Warning)", text: "Expiring in 3 Days. Advance reminder bhejo." },
      { color: "text-emerald-500", bg: "bg-emerald-50", label: "GREEN BOX (Safe Zone)", text: "Active Members. Chill maaro! Yeh log active hain." },
    ]
  },
  {
    icon: <AlertCircle className="w-8 h-8 text-rose-500" />,
    title: "Payment Due List 💰",
    description: "Udhaari Ka The End! Priority Badge & Alerts se system automatically detect karta hai kiska balance pending hai.",
    details: [
      { color: "text-slate-700", bg: "bg-slate-100", label: "Priority Badge", text: "High balance wale members list mein sabse upar dikhenge." },
      { color: "text-slate-700", bg: "bg-slate-100", label: "Store Credit", text: "Protein bar ya energy drink udhaar pe liya? Bas add kar do." },
    ]
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-500" />,
    title: "Time is Money ⏰",
    description: "Aapke 12 Ghante Bachaye! 15 minutes per member ka kaam ab sirf 15 seconds mein.",
    details: [
      { color: "text-slate-700", bg: "bg-slate-100", label: "Old School", text: "Register mein dhundo, calculate karo, type karo = 15 Mins" },
      { color: "text-slate-700", bg: "bg-slate-100", label: "GymSarthi Way", text: "Click, View, Auto-WhatsApp = 15 Seconds!" },
    ]
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
    title: "ROI Analysis 💸",
    description: "Paisa Vasool Deal! ₹499 kharcha nahi, Investment hai. 3,106% Return on Investment.",
    details: [
      { color: "text-rose-500", bg: "bg-rose-50", label: "Without GymSarthi", text: "Loss of ₹16,000/month due to missed renewals & udhaari." },
      { color: "text-emerald-500", bg: "bg-emerald-50", label: "With GymSarthi", text: "100% Recovery & Renewals. ₹16,000 Saved!" },
    ]
  },
  {
    icon: <Store className="w-8 h-8 text-indigo-500" />,
    title: "Gym Store 🛒",
    description: "Extra Income Ka Secret! Built-in Mini POS System for supplements and accessories.",
    details: [
      { color: "text-slate-700", bg: "bg-slate-100", label: "Billing", text: "Ek click mein billing aur stock management." },
      { color: "text-slate-700", bg: "bg-slate-100", label: "Credit", text: "Member ke khate mein credit add ho jaata hai." },
    ]
  },
  {
    icon: <PieChart className="w-8 h-8 text-purple-500" />,
    title: "Financial Dashboard 📊",
    description: "CEO Wali Feeling! Mahine ke end mein confusion kyu? Ek click pe dekho apne business ki pulse.",
    details: [
      { color: "text-slate-700", bg: "bg-slate-100", label: "Revenue", text: "Track Membership & Store Sales instantly." },
      { color: "text-slate-700", bg: "bg-slate-100", label: "Profit", text: "Calculate Net Profit after all expenses." },
    ]
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-3">The Solution</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">GymSarthi: Aapka Digital Munshi</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Jo Kabhi Chutti Nahi Leta! Simple Hinglish Interface, Mobile-First Design, aur Super Fast performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all group"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className={`p-4 rounded-xl ${detail.bg} border border-black/5`}>
                      <span className={`font-semibold block mb-1 ${detail.color}`}>{detail.label}</span>
                      <span className="text-sm text-slate-700">{detail.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
