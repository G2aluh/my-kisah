import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    { id: 1, bg: 'bg-pink-300', emoji: '🌟', caption: 'RARE ITEM' },
    { id: 2, bg: 'bg-purple-300', emoji: '🍦', caption: 'HP RESTORE' },
    { id: 3, bg: 'bg-blue-300', emoji: '🎉', caption: 'PARTY BUFF' },
    { id: 4, bg: 'bg-green-300', emoji: '🏖️', caption: 'MAP UNLOCKED' },
    { id: 5, bg: 'bg-yellow-300', emoji: '🌿', caption: 'FOREST ZONE' },
    { id: 6, bg: 'bg-red-300', emoji: '🎂', caption: 'SPECIAL LOOT' },
];

const Gallery = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="gallery" className="py-20 px-6 max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-pixel text-center text-pink-400 mb-12 pixel-text-shadow">
                INVENTORY 🎒
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {images.map((img) => (
                    <motion.div
                        key={img.id}
                        layoutId={`card-${img.id}`}
                        onClick={() => setSelectedId(img.id)}
                        className={`pixel-box ${img.bg} aspect-square flex flex-col items-center justify-center cursor-pointer hover:bg-opacity-90 active:translate-y-1 active:shadow-none transition-all`}
                    >
                        <span className="text-6xl filter drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                            {img.emoji}
                        </span>
                        <div className="absolute bottom-2 left-2 right-2 bg-white border-2 border-[#2d1b2e] p-1 text-center font-pixel text-xs">
                            {img.caption}
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#2d1b2e]/90 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                    >
                        {images.map(img => img.id === selectedId && (
                            <motion.div
                                layoutId={`card-${img.id}`}
                                className={`w-full max-w-md aspect-square pixel-box ${img.bg} flex flex-col items-center justify-center relative`}
                                onClick={(e) => e.stopPropagation()}
                                key={img.id}
                            >
                                <div className="absolute top-0 left-0 w-full p-2 bg-[#2d1b2e] text-white font-pixel text-center text-sm">
                                    ITEM DETAILS
                                </div>

                                <span className="text-9xl filter drop-shadow-[6px_6px_0_rgba(0,0,0,0.2)] mb-8">{img.emoji}</span>

                                <div className="bg-white border-2 border-[#2d1b2e] p-4 w-3/4 text-center">
                                    <p className="font-pixel text-sm mb-2">{img.caption}</p>
                                    <p className="font-retro text-lg text-gray-600">Effects: Increases Happiness by 100%.</p>
                                </div>

                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute bottom-4 right-4 pixel-btn px-4 py-2 text-xs"
                                >
                                    CLOSE [X]
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
