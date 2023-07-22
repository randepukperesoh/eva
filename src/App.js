import Header from "./components/Header/Header";
import Eva from "./components/Eva/Eva";
import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Eva/>
      <About/>
      <Reviews/>
      <Footer/>
    </div>
    
  );
}

export default App;
