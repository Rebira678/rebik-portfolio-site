import { motion } from 'framer-motion';
import { User, Code2, Briefcase, Award } from 'lucide-react';

const achievements = [
    { icon: Code2, title: 'Clean Code', desc: 'Maintainable, scalable, and optimized codebases.' },
    { icon: Briefcase, title: 'Experience', desc: 'Over 6+ successful projects delivered.' },
    { icon: Award, title: 'Quality', desc: 'Pixel-perfect UI and high-performance UX.' },
];

export default function About() {
    return (
        <section id="about" className="section-padding bg-gray-950/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                            Crafting <span className="text-gradient">Digital Experiences</span> <br />
                            with Purpose
                        </h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                As a Full Stack Developer, I specialize in building robust and scalable web applications.
                                My approach combines technical excellence with a deep understanding of user needs to deliver
                                products that not only look great but also perform exceptionally.
                            </p>
                            <p>
                                I thrive in the intersection of design and development, ensuring every pixel serves a purpose
                                and every line of code contributes to a seamless user journey. Whether it's a startup landing page
                                or a complex enterprise dashboard, I bring commitment and precision to every project.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                            {achievements.map((item, index) => (
                                <div key={index} className="glass-card p-6 border border-white/5 hover:border-emerald-500/30 transition-colors">
                                    <item.icon className="text-emerald-500 mb-4" size={32} />
                                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden relative z-10 group">
                            <img
                                src="src\assets\me.jpg"
                                alt="Rebira Adugna"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay"></div>
                        </div>
                        {/* Decors */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
