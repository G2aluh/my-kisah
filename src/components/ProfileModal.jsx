import { motion, AnimatePresence } from 'framer-motion';

const ProfileModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="relative bg-white border-4 border-[#2d1b2e] p-1 shadow-[8px_8px_0_#fb7185] max-w-sm w-full"
                    >
                        {/* Header */}
                        <div className="bg-[#2d1b2e] text-white font-pixel text-center py-2 mb-1 cursor-move">
                            PLAYER PROFILE
                        </div>

                        <div className="bg-pink-50 p-6 flex flex-col items-center border-2 border-[#2d1b2e]">
                            {/* Avatar Circle */}
                            <div className="w-24 h-24 rounded-full border-4 border-[#2d1b2e] overflow-hidden mb-4 bg-white shadow-[4px_4px_0_rgba(0,0,0,0.1)] flex items-center justify-center">
                                {/* Placeholder Avatar - Pixel Face */}
                                <span className="text-5xl">👩🏻‍🎨</span>
                            </div>

                            {/* Name & Level */}
                            <h2 className="text-2xl font-pixel text-[#2d1b2e] mb-1">SHERLY</h2>
                            <div className="bg-[#fb7185] text-white px-3 py-1 font-pixel text-xs border-2 border-[#2d1b2e] mb-6">
                                LVL 18
                            </div>

                            {/* Stats Box */}
                            <div className="w-full bg-white border-2 border-[#2d1b2e] p-4 text-left font-retro text-lg space-y-2">
                                <div className="flex justify-between border-b border-dashed border-gray-400 pb-1">
                                    <span className="text-gray-500">CLASS:</span>
                                    <span className="text-[#2d1b2e]">Birthday Girl</span>
                                </div>
                                <div className="flex justify-between border-b border-dashed border-gray-400 pb-1">
                                    <span className="text-gray-500">DOB:</span>
                                    <span className="text-[#2d1b2e]">??/??/2006</span>
                                </div>
                                <div className="flex justify-between border-b border-dashed border-gray-400 pb-1">
                                    <span className="text-gray-500">HOBBY:</span>
                                    <span className="text-[#2d1b2e]">Painting?</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">MOOD:</span>
                                    <span className="text-[#2d1b2e]">Happy 100%</span>
                                </div>
                            </div>
                        </div>

                        {/* Scale/Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute -top-6 -right-6 bg-red-500 text-white w-10 h-10 border-4 border-[#2d1b2e] font-pixel flex items-center justify-center hover:scale-110 transition-transform shadow-[4px_4px_0_black]"
                        >
                            X
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProfileModal;
