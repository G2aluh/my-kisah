import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const FinalSurprise = () => {
    const [isRevealed, setIsRevealed] = useState(false);

    const handleReveal = () => {
        setIsRevealed(true);
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(() => {
            const particleCount = 50;
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, shapes: ['square'] });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, shapes: ['square'] });
        }, 250);

        setTimeout(() => clearInterval(interval), 3000);
    };

    return (
        <section id="finalsurprise" className="relative py-32 px-6 text-center bg-[#2d1b2e] text-white overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-pixel mb-12 text-yellow-400 drop-shadow-[4px_4px_0_#000]">
                    FINAL STAGE 🚩
                </h2>

                {!isRevealed ? (
                    <motion.button
                        onClick={handleReveal}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="pixel-btn px-8 py-6 text-sm md:text-lg bg-pink-500 border-white text-white"
                    >
                        OPEN CHEST 🎁
                    </motion.button>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="border-4 border-white bg-black p-8 md:p-12 max-w-3xl mx-auto shadow-[10px_10px_0_#fff]"
                    >
                        <p className="text-xl md:text-3xl font-pixel text-white leading-relaxed mb-6">
                            "GAME OVER?<br />NO, THE GAME OF LIFE HAS JUST BEGUN."
                        </p>
                        <p className="font-retro text-2xl text-pink-400">
                            Happy 18th Birthday! You are my favorite player. 💖
                        </p>
                        <div className="mt-8 animate-pulse text-yellow-400 font-pixel text-xs">
                            PRESS ANY KEY TO CONTINUE LOVING YOU
                        </div>
                    </motion.div>
                )}
            </div>

            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>
        </section>
    );
};

export default FinalSurprise;
