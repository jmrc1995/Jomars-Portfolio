import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import appStyle from "./App.module.css";
import Section from "./components/Section/Section";
import Projects from "./components/Projects/Projects";
// import Banner from "./components/Banner/Banner";
import LandingPage from "./components/LandingPage/LandingPage";
import AudioPlayer from "./components/Audio/AudioPlayer";


const App = () => {
  return (
    <div className={appStyle.AppStyles}>
      <NavBar />
      
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/section" element={<Section title="ABOUT" />} />
        <Route path="/projects" element={<Projects title="PROJECTS" />} />
        <Route path="/audio" element={<AudioPlayer/>}/>
      </Routes>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
