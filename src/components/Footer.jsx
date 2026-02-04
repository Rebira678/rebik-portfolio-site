import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-gray-950/80">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                >
                    <span className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center text-[10px] font-bold text-white">R</span>
                    <span className="text-xl font-display font-bold tracking-tighter">REBIK</span>
                </motion.div>

                <p className="text-gray-500 text-sm">
                    &copy; {currentYear} Rebira Adugna. Built with passion and code.
                </p>

                <div className="flex gap-8 text-sm text-gray-500 uppercase tracking-widest font-bold">
                    <a href="#home" className="hover:text-emerald-500 transition-colors">Privacy</a>
                    <a href="#home" className="hover:text-emerald-500 transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
}
