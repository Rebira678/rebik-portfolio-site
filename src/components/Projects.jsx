import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { projects } from "../data/projects.1";

const categories = ['All', 'Frontend', 'Fullstack', 'API'];

export default function Projects() {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="section-padding bg-gray-950/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-display font-bold mb-4"
                        >
                            Featured <span className="text-gradient">Projects</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 max-w-xl"
                        >
                            A selection of my recent work, ranging from complex enterprise dashboards to interactive 3D experiences.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="glass-card group flex flex-col overflow-hidden"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <a href={project.github} className="p-2 bg-gray-950/50 backdrop-blur-md rounded-full text-white hover:bg-emerald-500 transition-colors">
                                            <Github size={18} />
                                        </a>
                                        <a href={project.live} className="p-2 bg-gray-950/50 backdrop-blur-md rounded-full text-white hover:bg-emerald-500 transition-colors">
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex gap-2 mb-4 flex-wrap">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {project.description}
                                    </p>
                                    <button className="flex items-center gap-2 text-emerald-400 font-semibold text-sm hover:gap-3 transition-all">
                                        Learn More <Code2 size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
