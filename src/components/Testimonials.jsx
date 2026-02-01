import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold mb-4"
                    >
                        Client <span className="text-gradient">Feedback</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Don't just take my word for it. Here's what my clients and colleagues have to say about our collaboration.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 group relative"
                        >
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg opacity-20 group-hover:opacity-100 transition-opacity">
                                <Quote size={20} />
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-14 h-14 rounded-full border-2 border-emerald-500/20 p-1"
                                />
                                <div>
                                    <h4 className="text-white font-bold">{item.name}</h4>
                                    <p className="text-gray-500 text-sm">{item.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-300 italic leading-relaxed">
                                "{item.text}"
                            </p>

                            <div className="mt-8 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-emerald-500 text-lg">★</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
