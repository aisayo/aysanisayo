import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="text-rose-900 bg-red-50 font-serif flex flex-col h-screen">
      <Router>
          <NavBar />
          <Routes>
            <Route path='/' exact element={<About/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/skills' element={<Skills/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
      </Router>
    </main>
  );
}

export default App;


