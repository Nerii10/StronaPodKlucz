import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ScrollableContainer from "./components/ScrollableContainer";
import RiseText from "./components/RiseText";
import EngageBox from "./components/EngageBox";
import Service from "./components/Service";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <br></br>
        <Landing />
        <br></br>
        <br></br> <br></br>
        <br></br>
        <Service />
        <br></br> <br></br>
        <br></br> <br></br>
        <br></br> <br></br>
        <br></br>
        <br></br>
        <EngageBox />
        <br></br> <br></br>
        <br></br> <br></br>
        <br></br> <br></br>
        <br></br>
        <br></br>
        <Projects />
        <br></br>
        <br></br> <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> <br></br>
        <br></br>
        <br></br> <br></br>
        <br></br>
        <br></br>
        <RiseText>kontakt</RiseText>
        <br></br> <br></br>
        <br></br>
        <br></br>
        <Contact />
        <div style={{ height: "200px" }}></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
