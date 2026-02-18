import { motion } from 'framer-motion';

const memories = [
    {
        date: 'LVL 1: 08/12/23',
        title: 'THE ENCOUNTER',
        text: 'A wild Player 2 appeared! It was super effective.',
    },
    {
        date: 'LVL 2: 12/25/23',
        title: 'XMAS EVENT',
        text: 'Seasonal event completed. Legendary memories acquired.',
    },
    {
        date: 'LVL 3: 02/14/24',
        title: 'VALENTINES QUEST',
        text: 'Heart gauge maxed out. Achievement unlocked: True Love.',
    },
    {
        date: 'LVL 18: TODAY',
        title: 'LEVEL UP!',
        text: 'Stats increased! Charisma +10, Wisdom +5. Happy Birthday!',
    },
];

const Timeline = () => {
    return (
        <section id="timeline" className="py-20 px-6 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-pixel text-center text-pink-400 mb-16 pixel-text-shadow">
                QUEST LOG 📜
            </h2>

            <div className="relative border-l-4 border-[#2d1b2e] ml-4 md:ml-10 space-y-12">
                {memories.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative"
                    >
                        {/* Pixel Dot */}
                        <div className="absolute -left-[24px] md:-left-[24px] top-6 w-5 h-5 bg-[#fb7185] border-2 border-[#2d1b2e] z-10" />

                        {/* Card */}
                        <div className="ml-8 pixel-box p-4 md:p-6 hover:translate-x-2 transition-transform cursor-crosshair">
                            <span className="inline-block px-2 py-1 bg-[#2d1b2e] text-white font-pixel text-xs mb-3">
                                {item.date}
                            </span>
                            <h3 className="text-lg md:text-xl font-pixel text-[#2d1b2e] mb-2">{item.title}</h3>
                            <p className="font-retro text-xl leading-relaxed">{item.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
