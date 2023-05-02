import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Items from './Components/Projects/Items';

function App() {
  return (
    <div className="App">
    

     
        <Navbar/>
        <Home/>
       <About/>
     <Items/>
      
      

    </div>
  );
}

export default App;
