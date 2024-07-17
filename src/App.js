import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Display from './components/Display';
import DrumPad from './components/DrumPad';
import sounds from './data/sounds';

function App() {
  const [display, setDisplay] = useState('');

  const playSound = useCallback((key, id) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    setDisplay(id);
  }, []);

  const handleKeyPress = useCallback((event) => {
    const sound = sounds.find(sound => sound.key === event.key.toUpperCase());
    if (sound) {
      playSound(sound.key, sound.id);
    }
  }, [playSound]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div id="drum-machine">
	<h1>DRUM MACHINE</h1>
      <Display text={display} />
      <div className="drum-pads">
        {sounds.map(sound => (
          <DrumPad key={sound.key} sound={sound} playSound={playSound} />
        ))}
      </div>
    </div>
  );
}

export default App;
