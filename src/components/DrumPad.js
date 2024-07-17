import React from 'react';

function DrumPad({ sound, playSound }) {
  return (
    <div
      className="drum-pad"
      id={sound.id}
      onClick={() => playSound(sound.key, sound.id)}
    >
      {sound.key}
      <audio className="clip" id={sound.key} src={sound.url}></audio>
    </div>
  );
}

export default DrumPad;
