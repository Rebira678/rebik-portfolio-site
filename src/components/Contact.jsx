import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSent, setIsSent] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus(null);

        try {
            const formData = new URLSearchParams();
            formData.append('name', formState.name);
            formData.append('email', formState.email);
            formData.append('message', formState.message);
            formData.append('access_key', 'f8483346-848e-4f26-87b1-0b6dc49abf1a');
            formData.append('_subject', 'Portfolio Contact');
            formData.append('_captcha', 'false');

            const response = await fetch("https://formsubmit.co/ajax/rebikman9@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "application/json"
                },
                body: formData
            });

            if (response.ok) {
                setIsSent(true);
                setFormState({ name: '', email: '', message: '' });
                setTimeout(() => setIsSent(false), 8000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        } finally {
            setIsSending(false);
        }
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
                                    <a href="mailto:rebikman9@gmail.com" className="text-white font-medium hover:text-emerald-500 transition-colors">
                                        rebikman9@gmail.com
                                    </a>
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
                            onSubmit={handleSubmit}
                            className="space-y-6">

                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value="New message from Portfolio" />


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
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
                                        name="email"
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
                                    name="message"
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
                                disabled={isSending || isSent}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${isSent
                                    ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                                    : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                                    }`}
                            >
                                {isSent ? 'Message Sent!' : isSending ? 'Sending...' : 'Send Message'}
                                {!isSending && !isSent && <Send size={18} />}
                            </button>

                            {isSent && (
                                <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                                    <p className="text-emerald-500 font-bold mb-1">Message Sent Successfully!</p>
                                    <p className="text-emerald-400 text-sm">Thank you for reaching out. I will get back to you as soon as possible.</p>
                                </div>
                            )}

                            {status === 'error' && (
                                <p className="text-red-500 text-center text-sm mt-4">
                                    Something went wrong. Please try clicking the email above to send directly.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
