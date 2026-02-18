import { motion } from 'framer-motion';

const Hero = () => {
    const scrollToNext = () => {
        const nextSection = document.getElementById('timeline');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-pink-100 p-6">
            {/* Pixel Hearts Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#fb7185 2px, transparent 2px)', backgroundSize: '32px 32px' }}>
            </div>

            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 120 }}
                className="z-10 max-w-4xl"
            >
                <div className="mb-8 inline-block pixel-box p-4 md:p-8 transform rotate-[-2deg]">
                    <h1 className="text-3xl md:text-5xl font-pixel text-pink-400 leading-snug pixel-text-shadow">
                        HAPPY 18TH<br />BIRTHDAY
                    </h1>
                </div>

                <p className="text-lg md:text-2xl font-retro text-[#2d1b2e] mb-12 bg-white inline-block px-4 py-2 border-2 border-[#2d1b2e] shadow-[4px_4px_0px_#2d1b2e]">
                    PLAYER 1 HAS JOINED THE GAME! 🎮
                </p>

                <div className="mt-8">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToNext}
                        className="pixel-btn px-6 py-4 text-sm md:text-lg"
                    >
                        START GAME ▶
                    </motion.button>
                </div>
            </motion.div>

            <motion.div
                className="absolute bottom-10 z-10 text-[#2d1b2e] font-pixel text-xs animate-bounce"
            >
                SCROLL TO PLAY
            </motion.div>
        </section>
    );
};

export default Hero;
