import NavBar from "./components/NavBar/NavBar";
import appStyle from "./App.module.css";
import Section from "./components/Section/Section";
import Projects from "./components/Projects/Projects";
import Banner from "./components/Banner/Banner";
import Avatar from "./components/Avatar/Avatar";





const App = () => {
  return (
    <div className={appStyle.AppStyles}>
      <NavBar />

      <main>
        <div>
          <Banner />
          

          <Avatar />
        </div>
      </main>

      <Section title="ABOUT" />

   

  
      <Projects title="PROJECTS" />

      {/* <Footer /> */}
    </div>
  );
};

export default App;
