import { useState } from 'react';
import HeaderBar from './components/HeaderBar';
import HeroSpline from './components/HeroSpline';
import LibraryCard from './components/LibraryCard';

export default function App() {
  const [gameName, setGameName] = useState('Untitled Board Game');
  const [dewey, setDewey] = useState('794.1');

  const [theme, setTheme] = useState(50); // Abstract — DECORATED — Immersive
  const [randomness, setRandomness] = useState(50); // Luck — TACTICAL — Skill
  const [interaction, setInteraction] = useState(50); // Solitaire — INDIRECT — Constant
  const [learning, setLearning] = useState(50); // Intuitive — MODERATE — Heavy
  const [tempo, setTempo] = useState(50); // Fast — THOUGHTFUL — Brain Melting

  return (
    <div className="min-h-screen bg-orange-50 text-neutral-900">
      <HeaderBar />
      <HeroSpline />
      <main className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 -mt-24 pb-24">
        <LibraryCard
          gameName={gameName}
          setGameName={setGameName}
          dewey={dewey}
          setDewey={setDewey}
          sliders={[
            {
              id: 'theme',
              title: 'Theme',
              left: 'Abstract',
              mid: 'DECORATED',
              right: 'Immersive',
              value: theme,
              setValue: setTheme,
            },
            {
              id: 'randomness',
              title: 'Randomness',
              left: 'Luck',
              mid: 'TACTICAL',
              right: 'Skill',
              value: randomness,
              setValue: setRandomness,
            },
            {
              id: 'interaction',
              title: 'Interaction',
              left: 'Solitaire',
              mid: 'INDIRECT',
              right: 'Constant',
              value: interaction,
              setValue: setInteraction,
            },
            {
              id: 'learning',
              title: 'Learning',
              left: 'Intuitive',
              mid: 'MODERATE',
              right: 'Heavy',
              value: learning,
              setValue: setLearning,
            },
            {
              id: 'tempo',
              title: 'Tempo',
              left: 'Fast',
              mid: 'THOUGHTFUL',
              right: 'Brain Melting',
              value: tempo,
              setValue: setTempo,
            },
          ]}
        />
      </main>
    </div>
  );
}
