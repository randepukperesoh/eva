import Header from "./components/Header/Header";
import Eva from "./components/Eva/Eva";
import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import './App.css'
import Modal from './components/Modal/Modal'
import { useState } from "react";
function App() {
  const [modal, setModal] = useState(false)
  
  if (modal) {
    document.body.style.overflow='hidden'
  } else {
    document.body.style.overflow='scroll'
  }
    
  
  
  return (
    <div className="App">
      <Header/>
      {modal ? <Modal setModal={setModal}/> : null}
      <Eva setModal={setModal}/>
      <About/>
      <Reviews/>
      <Footer/>
    </div>
    
  );
}

export default App;
