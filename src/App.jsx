import Header from "../components/Header"
import MainBoard from "../components/MainBoard"
import { Route, Routes } from "react-router-dom"
import Horoscopo from "../pages/Horoscopo"



function App() {

  return (
    <Routes>
      <Header/>
      <Route path="/ " element={MainBoard} />
      <Route path="/Horoscopo" element={Horoscopo} />
    </Routes>

  )
}

export default App
