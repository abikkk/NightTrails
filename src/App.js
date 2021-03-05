import './App.css';
import NavBar from './NavBar';
import Rooms from './Rooms';
import Bar from './Bar';
import Cafe from './Cafe';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <div id="scroll-divs" className="nav-header parallax">
      <div id="myNavBar"><NavBar /> </div>
        <header className="App-header">
          <h1>  
            Night Trails
          </h1>
        </header>
      </div>     
      
      <div id="scroll-divs" className="rooms static">
        <Rooms />
      </div>

      <div id="scroll-divs" className="bar parallax" >
          <Bar />
        </div>

      <div id="scroll-divs" className="cafe static" >
          <Cafe />
        </div>

      <div id="scroll-divs" className="gallery parallax">
          <Gallery />
        </div>
        
      <div className="Reviews" className="reviews static"> 
          Customers Review
        </div>

      <footer className="App-footer">
        Created using React.JS | Abik Vaidhya
      </footer>
    </div>
  );
}

export default App;