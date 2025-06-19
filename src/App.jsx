import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"

function App() {
  return (
    <>
    <div className="h-screen bg-black select-none">
    <div className="h-[90%] flex">
      <Sidebar />
      <Header />
    </div>
    </div>
    </>
  )
}

export default App
