import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

export default function Skills() {
    return (
        <section id="skills" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold mb-4"
                    >
                        My <span className="text-gradient">Technical Arsenal</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        A comprehensive overview of the technologies and tools I master to build high-end digital products.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="glass-card p-8 group hover:translate-y-[-4px] transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold mb-8 text-white flex items-center gap-3">
                                <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-3 text-gray-300 group-hover:text-emerald-400 transition-colors">
                                                <skill.icon size={20} />
                                                <span className="font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-gray-500 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + (skillIndex * 0.1) }}
                                                className="h-full bg-gradient-to-r from-emerald-500 to-sky-500"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
