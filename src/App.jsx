import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import MyWork from "./Components/MyWork/MyWork";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
    </div>
  );
}

export default App;
