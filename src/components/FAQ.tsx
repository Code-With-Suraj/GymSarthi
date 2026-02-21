import { motion } from "motion/react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Bhai, main technical banda nahi hun, kya main chala paunga?",
    answer: "Bilkul! Agar aap WhatsApp chala sakte ho, toh GymSarthi usse bhi aasaan hai. Bas photo kheencho, form bharo, kaam khatam! 📱",
  },
  {
    question: "Mera data safe rahega?",
    answer: "100% Safe! Hum Google Sheets aur Google Security use karte hain. Aapka data sirf aapka hai. Daily backup bhi milta hai Pro plan mein. ☁️",
  },
  {
    question: "Agar koi dikkat aayi toh?",
    answer: "Humara WhatsApp Support active hai! Screenshot bhejo, 2 ghante mein solution milega. Aap akele nahi ho! 🎧",
  },
  {
    question: "Mere purane members ka data kaise add hoga?",
    answer: "Tension not! Hum setup mein help karte hain. Bulk upload feature bhi hai. Aap bas list do, hum system ready karke denge. 🔄",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-3">FAQs</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Aapke Mann Ke Doubts 🤔</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Kuch sawal jo har gym owner ke dimaag mein aate hain:
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`border border-slate-200 rounded-2xl overflow-hidden transition-all ${openIndex === index ? 'bg-orange-50/50 border-orange-200 shadow-sm' : 'bg-white hover:border-slate-300'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className={`w-6 h-6 flex-shrink-0 ${openIndex === index ? 'text-orange-500' : 'text-slate-400'}`} />
                  <span className={`font-semibold text-lg ${openIndex === index ? 'text-orange-700' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-orange-500' : 'text-slate-400'}`} />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 pl-16 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
