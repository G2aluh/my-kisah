import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const MiniGame = () => {
    const [count, setCount] = useState(0);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const TARGET_CLICKS = 10;
    const hpWidth = (count / TARGET_CLICKS) * 100;

    const handleClick = () => {
        if (isUnlocked) return;

        const newCount = count + 1;
        setCount(newCount);

        if (newCount === TARGET_CLICKS) {
            setIsUnlocked(true);
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 },
                shapes: ['square'], // pixel confetti
                colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'],
            });
        }
    };

    return (
        <section id="minigame" className="py-20 px-6 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-pixel text-pink-400 mb-8 pixel-text-shadow">
                BOSS BATTLE 👾
            </h2>

            {/* HP Bar */}
            <div className="max-w-xs mx-auto mb-8 border-4 border-[#2d1b2e] p-1 bg-white">
                <div className="w-full h-6 bg-red-200 relative">
                    <div
                        className="h-full bg-red-500 transition-all duration-200"
                        style={{ width: `${Math.min(hpWidth, 100)}%` }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center font-pixel text-[10px] text-white">
                        HP: {count}/{TARGET_CLICKS}
                    </span>
                </div>
            </div>

            <p className="font-retro text-xl mb-12">ATTACK THE HEART TO UNLOCK!</p>

            <div className="relative inline-block">
                <motion.button
                    onClick={handleClick}
                    whileTap={{ scale: 0.9, x: [0, -5, 5, -5, 5, 0] }}
                    className={`text-8xl focus:outline-none filter drop-shadow-[4px_4px_0_#2d1b2e] ${isUnlocked ? 'grayscale opacity-50' : 'cursor-crosshair active:brightness-110'}`}
                    disabled={isUnlocked}
                >
                    ❤️
                </motion.button>
            </div>

            {isUnlocked && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-12 pixel-box p-8 max-w-lg mx-auto bg-yellow-100"
                >
                    <h3 className="text-lg font-pixel text-[#2d1b2e] mb-4">VICTORY! 🏆</h3>
                    <p className="font-retro text-xl">
                        You defeated the boss! XP +5000.<br />
                        Loot obtained: Pure Happiness.
                    </p>
                </motion.div>
            )}
        </section>
    );
};

export default MiniGame;
