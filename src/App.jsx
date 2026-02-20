import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Letter from './components/Letter';
import MiniGame from './components/MiniGame';
import FinalSurprise from './components/FinalSurprise';
import CursorEffect from './components/CursorEffect';
import Navbar from './components/Navbar';
import SpotifyPlayer from './components/SpotifyPlayer';

function App() {
  return (
    <main className="w-full min-h-screen bg-[#fce4ec] text-[#2d1b2e] font-retro selection:bg-[#fb7185] selection:text-white pt-16">
      <CursorEffect />
      <Navbar />
      <Hero />
      <Timeline />
      <Gallery />
      <Letter />
      <MiniGame />
      <FinalSurprise />
      <SpotifyPlayer />

      {/* Retro Footer */}
      <footer className="bg-[#2d1b2e] text-white text-center py-8 border-t-4 border-[#fb7185]">
        <p className="text-xs font-pixel mb-2">PRESS START TO CONTINUE</p>
        <p className="text-sm font-retro opacity-80">Made with 💖 (and pixels) for a Level 18 Player</p>
      </footer>
    </main>
  );
}

export default App;
