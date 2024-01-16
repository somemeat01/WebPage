import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
import Home from "./pages/Home";
import Menü from "./pages/Menü";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Menü" element={<Menü/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
     </Routes>
     <Footer/>
     </Router>
     </div>
  );
}

export default App;
