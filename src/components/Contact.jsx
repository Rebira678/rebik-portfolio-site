import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sending
        setTimeout(() => {
            setIsSent(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSent(false), 5000);
        }, 1000);
    };
    const socials = [
        { Icon: Github, link: "https://github.com/rebira678" },
        { Icon: Linkedin, link: "https://www.linkedin.com/in/rebira-adugna-6496b2373" },
        { Icon: Twitter, link: "https://twitter.com/your-handle" },
    ];

    return (
        <section id="contact" className="section-padding bg-gray-950/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Let's <span className="text-gradient">Connect</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities,
                            creative ideas, or collaborations. My inbox is always open.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 p-4 glass-card border-none hover:bg-white/5 transition-colors">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-gray-500 text-xs uppercase tracking-widest font-bold">Email</h4>
                                    <p className="text-white font-medium">rebikman9@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-4 glass-card border-none hover:bg-white/5 transition-colors">
                                <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center text-sky-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-gray-500 text-xs uppercase tracking-widest font-bold">Location</h4>
                                    <p className="text-white font-medium">Adama, Ethiopia</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-4 glass-card border-none hover:bg-white/5 transition-colors">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-gray-500 text-xs uppercase tracking-widest font-bold">Phone</h4>
                                    <p className="text-white font-medium">+251 969 180 823</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h4 className="text-white font-bold mb-6">Follow Me</h4>



                            <div className="flex gap-4">
                                {socials.map(({ Icon, link }, i) => (
                                    <a
                                        key={i}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 glass-card border-none flex items-center justify-center text-gray-400 hover:text-emerald-500 hover:bg-white/5 transition-all outline-none"
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>

                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-10"
                    >
                        <form
                            action="https://formsubmit.co/rebikman9@gmail.com"
                            method="POST"
                            className="space-y-6">

                            <input type="hidden" name="_subject" value="New message from Rebik Portfolio" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500/50 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500/50 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Message</label>
                                <textarea
                                    required
                                    rows="5"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500/50 outline-none transition-all resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSent}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${isSent
                                    ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                                    : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                                    }`}
                            >
                                {isSent ? 'Message Sent!' : 'Send Message'}
                                {!isSent && <Send size={18} />}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
