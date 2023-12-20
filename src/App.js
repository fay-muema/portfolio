import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Items from './Components/Projects/Items';
import Nifty from './Components/UseCases/Nifty';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home id="home"/>
       <About id="about"/>
     <Items id="item"/>
     
    </div>
  );
}

export default App;
