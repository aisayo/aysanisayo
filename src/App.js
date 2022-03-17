import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="text-rose-900 bg-red-50 font-serif flex flex-col h-screen">
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
