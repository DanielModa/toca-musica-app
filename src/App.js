import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Isso Não É Um Desabafo",
      artist: "Zant",
      img_src: "./images/desabafo.jpg",
      src: "./music/desabafo.mp3"
    },
    {
      title: "Needs",
      artist: "Verzache",
      img_src: "./images/needs.jpg",
      src: "./music/needs.mp3"
    },
    {
      title: "Bones",
      artist: "Imagine Dragons",
      img_src: "./images/Bones.jpg",
      src: "./music/bones.mp3"
    },
    {
      title: "Homem-Aranha - Eu Tô De Volta Ao Lar",
      artist: "NERD HITS",
      img_src: "./images/homem-aranha.jpg",
      src: "./music/homem-aranha.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
