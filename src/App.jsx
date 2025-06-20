import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Player from "./Components/Player";
import Home from "./Components/Home";

function App() {
  return (
    <div className="h-screen bg-black select-none flex flex-col">
      <div className="flex flex-1 px-5 pt-5 gap-5">
        <div className="bg-[#121212] h-full rounded w-110">
          <Sidebar />
        </div>
        <div className="flex flex-col h-full rounded bg-[#121212] flex-1 overflow-hidden">
          <Header />
          <div className="flex-1 overflow-y-auto">
            <Home />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full z-10">
        <Player />
      </div>
    </div>
  );
}

export default App;


