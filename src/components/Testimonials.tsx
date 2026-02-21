import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Mere 3 ghante roz bach gaye! Pehle register mein time lagta tha. Ab mobile pe sab kuch. Traffic light system ne life easy kar di!",
    author: "Rohit Singh",
    role: "Fit Zone Gym, Delhi",
    rating: 5,
  },
  {
    quote: "Udhaari collection 5X ho gaya! Priority alerts dekh ke pata chal jaata hai kis ko call karna urgent hai. ₹80,000 pending tha, 2 mahine mein ₹15,000 bacha!",
    author: "Priya Sharma",
    role: "Ladies Fitness, Noida",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-3">Real Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Aapke Jaise Owners Ki Zubani 🗣️</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Mera vishwas mat karo, inka suno jo already use kar rahe hain:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-lg text-slate-700 italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
