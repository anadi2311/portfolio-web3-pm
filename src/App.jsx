import Home from "./components/Home";
import  Navbar  from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects"
import Contact from "./components/Contact";
// import SkillBar from "./components/SkillBar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />  
      <SocialLinks/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}
export default App;
