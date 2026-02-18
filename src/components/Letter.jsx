import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const fullText = `Hey [Name]!

LEVEL 18 REACHED! 🌟

It's dangerous to go alone! Take this letter.

You have leveled up into an amazing person. 
Your stats are off the charts:
- Kindness: MAX
- Humor: MAX
- Cuteness: OVER 9000

Keep grinding and chasing your dreams.
Game on! 🎮

From,
[Your Name]`;

const Letter = () => {
    const [displayedText, setDisplayedText] = useState("");
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            let index = 0;
            const intervalId = setInterval(() => {
                setDisplayedText((prev) => {
                    if (index < fullText.length) {
                        index++;
                        return fullText.slice(0, index);
                    }
                    clearInterval(intervalId);
                    return prev;
                });
            }, 50); // Slower retro typing
            return () => clearInterval(intervalId);
        }
    }, [isInView]);

    return (
        <section id="letter" ref={containerRef} className="py-20 px-4 flex justify-center items-center min-h-[500px] bg-[#2d1b2e]">
            <div className="max-w-2xl w-full border-4 border-white p-1 md:p-2 bg-[#2d1b2e] shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
                <div className="bg-[#0000aa] border-2 border-white p-6 md:p-8 min-h-[300px] relative">
                    <div className="absolute top-[-16px] left-4 bg-[#2d1b2e] border-2 border-white px-4 py-1">
                        <h2 className="text-white font-pixel text-xs md:text-sm">NPC DIALOGUE</h2>
                    </div>

                    <div className="font-pixel text-white text-xs md:text-sm leading-loose whitespace-pre-wrap">
                        {displayedText}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.5 }}
                            className="inline-block w-3 h-3 bg-white ml-1 align-middle"
                        />
                    </div>

                    <div className="absolute bottom-4 right-4 animate-bounce">
                        <span className="text-white font-pixel text-xs">▼</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Letter;
