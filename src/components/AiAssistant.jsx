import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../services/aiService';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function AiAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'ai', content: "Hi! I'm Rebira's Digital Assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setIsLoading(true);

        try {
            const response = await getGeminiResponse(userMsg);
            setMessages(prev => [...prev, { role: 'ai', content: response }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'ai', content: "Something went wrong. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="absolute bottom-20 right-0 w-[90vw] sm:w-[400px] h-[500px] max-h-[70vh] glass-card flex flex-col overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-500/10"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-emerald-500/10">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                                    <Bot size={18} className="text-emerald-500" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">Rebira's Assistant</h3>
                                    <span className="text-[10px] text-emerald-500 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                                        Online
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                            {messages.map((msg, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={i}
                                    className={cn(
                                        "flex items-start gap-2",
                                        msg.role === 'user' ? "flex-row-reverse" : "flex-row"
                                    )}
                                >
                                    <div className={cn(
                                        "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border",
                                        msg.role === 'user' ? "bg-sky-500/20 border-sky-500/30" : "bg-emerald-500/20 border-emerald-500/30"
                                    )}>
                                        {msg.role === 'user' ? <User size={14} className="text-sky-400" /> : <Bot size={14} className="text-emerald-400" />}
                                    </div>
                                    <div className={cn(
                                        "p-3 rounded-2xl max-w-[80%] text-sm leading-relaxed",
                                        msg.role === 'user'
                                            ? "bg-sky-500/10 text-sky-100 rounded-tr-none border border-sky-500/10"
                                            : "bg-emerald-500/10 text-emerald-100 rounded-tl-none border border-emerald-500/10"
                                    )}>
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                                        <Bot size={14} className="text-emerald-400" />
                                    </div>
                                    <div className="bg-emerald-500/10 p-3 rounded-2xl rounded-tl-none border border-emerald-500/10">
                                        <Loader2 size={16} className="animate-spin text-emerald-500" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/40">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 pr-12 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-gray-600"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-emerald-500 hover:text-emerald-400 bg-emerald-500/10 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Float Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border",
                    isOpen
                        ? "bg-red-500/20 border-red-500/30 text-red-500"
                        : "bg-emerald-500 border-emerald-400 text-white"
                )}
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}

                {/* Pulse Decor */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping -z-10 opacity-20"></span>
                )}
            </motion.button>
        </div>
    );
}
