import Header from "../components/Header"
import MainBoard from "../components/MainBoard"
import { Route, Routes } from "react-router-dom"
import Horoscopo from "../pages/Horoscopo"



function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainBoard/>} />
        <Route path="/horoscopo" element={<Horoscopo/>} />
      </Routes>
    </div>
  )
}

export default App
