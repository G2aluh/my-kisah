import { useState } from 'react';
import { motion } from 'framer-motion';

const SpotifyPlayer = () => {
    const [isMinimized, setIsMinimized] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 right-6 z-50"
        >
            {/* Minimize FAB - Floating above the card */}
            <motion.button
                onClick={() => setIsMinimized(!isMinimized)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-12 -right-1 w-10 h-10 flex items-center justify-center bg-[#fb7185] hover:bg-[#f43f5e] rounded-full shadow-lg border-2 border-white text-white font-bold text-2xl leading-none z-50 transition-colors"
            >
                {isMinimized ? '+' : '-'}
            </motion.button>

            {/* Card with Embed Player */}
            {!isMinimized && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[4px_4px_0_#fb7185] border-2 border-[#fb7185]"
                >
                    <iframe
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/track/2x3vwXWuecPrRqgEUuSUJA?utm_source=generator"
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </motion.div>
            )}
        </motion.div>
    );
};

export default SpotifyPlayer;
