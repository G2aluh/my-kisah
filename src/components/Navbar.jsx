import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
    { id: 'hero', label: 'START' },
    { id: 'timeline', label: 'QUESTS' },
    { id: 'gallery', label: 'ITEMS' },
    { id: 'letter', label: 'MAIL' },
    { id: 'minigame', label: 'BOSS' },
    { id: 'finalsurprise', label: 'END' },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // Offset

            navItems.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(item.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#2d1b2e] border-b-4 border-[#fb7185] px-4 py-3 shadow-[0_4px_0_rgba(0,0,0,0.5)]">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Brand */}
                <div className="font-pixel text-white text-xs md:text-sm animate-pulse cursor-pointer" onClick={() => scrollToSection('hero')}>
                    ♥ LVL 18 ♥
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`font-pixel text-xs transition-all duration-200 border-2 px-2 py-1 ${activeSection === item.id
                                        ? 'bg-[#fb7185] text-white border-white shadow-[2px_2px_0_white] translate-x-[-2px] translate-y-[-2px]'
                                        : 'bg-transparent text-[#fb7185] border-transparent hover:border-[#fb7185]'
                                    }`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Burger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white font-pixel border-2 border-white px-2 py-1 bg-[#fb7185] shadow-[2px_2px_0_black] active:shadow-none active:translate-y-1"
                    >
                        {isMenuOpen ? 'X' : 'MENU'}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-[#2d1b2e] border-b-4 border-[#fb7185] shadow-lg"
                >
                    <ul className="flex flex-col p-4 space-y-4">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`w-full text-left font-pixel text-xs py-2 px-4 border-2 ${activeSection === item.id
                                            ? 'bg-[#fb7185] text-white border-white'
                                            : 'text-[#fb7185] border-transparent hover:bg-white/10'
                                        }`}
                                >
                                    ▶ {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
