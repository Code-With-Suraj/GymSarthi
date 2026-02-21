import { motion } from "motion/react";
import { BookX, FileSpreadsheet, Wallet, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: <BookX className="w-8 h-8 text-red-500" />,
    title: "The 'Register' Nightmare 📒",
    description: "Subah se raat tak gym mein sirf yehi chalta hai – 'Register kahan hai?' Renewal date check karne ke liye panne palat-te raho. Is chakkar mein, member ki date nikal jaati hai aur woh free mein gym karta rehta hai.",
  },
  {
    icon: <FileSpreadsheet className="w-8 h-8 text-orange-500" />,
    title: "Excel Sheet Ka Chakravyuh 💻",
    description: "Data entry karne mein hi pura din nikal jaata hai! Laptop kholo, entry karo, save karo – gym floor pe dhyan kab doge? Aur agar file corrupt ho gayi? Toh samajho business ka data gayab!",
  },
  {
    icon: <Wallet className="w-8 h-8 text-yellow-500" />,
    title: "'Udhaari' - The Silent Killer 💸",
    description: "'Bhaiya, kal pakka de dunga payment.' Aur woh 'kal' kabhi nahi aata. Aap follow-up karna bhool jaate ho. Mahine ke end mein pata chalta hai ki ₹20,000 - ₹30,000 toh market mein hi phasa hua hai.",
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-rose-500" />,
    title: "Profit Kahan Hai? 🤷‍♂️",
    description: "Expenses ka koi track nahi, income ka koi perfect hisaab nahi. Month end pe lagta hai ki paisa kamaya, lekin haath mein cash nahi bachta. Kyunki Financial Management zero hai.",
  },
];

export default function Problems() {
  return (
    <section className="py-24 bg-slate-50" id="problems">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-3">The Real Problem</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Roz Ka Wahi Purana Struggle (Manual Chaos)</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Sach sach batana, abhi aapka daily routine kya hai? Aap ek trainer hain ya businessman? Kyunki aadha time toh aap accountant bane rehte ho!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                {problem.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{problem.title}</h4>
              <p className="text-slate-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
