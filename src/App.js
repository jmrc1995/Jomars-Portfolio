import NavBar from "./components/NavBar/NavBar";
import './App.css';
import Section from './components/Section/Section';
import Projects from './components/Projects/Projects'

import ReactTypingEffectDemo   from './components/ReactTypingEffect'
import Footer from "./components/Footer/Footer";
import Avatar from "./components/Avatar/Avatar";

function App(){

   

    return (
       
                <div className="App">
                    
                    <NavBar />
                    <div className = 'typing-effect-container'>
                    
                    < ReactTypingEffectDemo />

                    </div>

                    <Avatar/>

                    <Section />

   

                    <div className ='app-project-container'>                        

                        <Projects />  
              
                    </div>

                    <Footer />
                    
                </div>
                
    );
}

export default App;