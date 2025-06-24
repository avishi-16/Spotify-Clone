import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Player from "./Components/Player";
import Home from "./Components/Home";
import Album from "./Components/Album";
import { Routes, Route } from 'react-router-dom';
import { useContext } from "react";
import { PlayerContext } from "./Context/PlayerContext";

function App() {

  const {audioRef,track} = useContext(PlayerContext)

  return (
    <div className="h-screen bg-black select-none flex flex-col">
      <div className="flex flex-1 px-5 pt-5 gap-5">
        <div className="bg-[#121212] h-full rounded w-110">
          <Sidebar />
        </div>
        <div className="flex flex-col h-full rounded bg-[#121212] flex-1 overflow-hidden">
          <Header />
          <div className="flex-1 overflow-y-auto">
             <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/album/:id" element={<Album />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full z-10">
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </div>
  );
}

export default App;


