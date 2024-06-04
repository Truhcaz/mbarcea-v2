import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import RandomProjects from "./components/RandomProjects";
import { navItems } from "./components/data";
import { FloatingNav } from "./components/ui/FloatingNavbar";

function App() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Projects />
          <RandomProjects />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
