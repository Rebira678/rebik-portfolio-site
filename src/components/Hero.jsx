import { motion } from 'framer-motion';
import { MousePointer2, Rocket, Download, ArrowRight } from 'lucide-react';
import HeroBackground from '../three/HeroBackground';

const stats = [
    { label: 'Projects Completed', value: '6+' },
    { label: 'Client Satisfaction', value: '100%' },
    { label: 'Delivery Speed', value: 'Fast' },
];

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <HeroBackground />

            <div className="max-w-7xl mx-auto px-6 pt-20 flex flex-col items-center text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6 inline-block">
                        Available for New Projects
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1.1]">
                        Hi, I'm <span className="text-gradient">Rebira Adugna</span> <br />
                        Full Stack Web Developer
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        I build high-performance, pixel-perfect web applications using the MERN stack.
                        Turning complex ideas into elegant digital solutions with a focus on speed and scalability.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 items-center"
                >
                    <a href="#contact" className="btn-primary flex items-center gap-2 group">
                        Hire Me <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#projects" className="btn-secondary flex items-center gap-2 group">
                        View Projects <Rocket className="group-hover:-translate-y-1 transition-transform" />
                    </a>
                    <a href="https://drive.google.com/file/d/17qBuh5frGIN81fi4XkLRQ2hzagUtRM7_/view?usp=drivesdk" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-2 px-4">
                        <Download size={18} /> Download CV
                    </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 mt-20 border-t border-white/5 pt-10"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</span>
                            <span className="text-gray-500 text-sm uppercase tracking-widest">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hidden md:block"
                >
                    <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
