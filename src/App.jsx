import './App.css'
import {Routes, Route} from "react-router-dom"
import {Home,Pricing,About,Contact} from "./views"
import {Footer,Navbar} from "./components"



function App() {

  return (
    <div className="app">
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
