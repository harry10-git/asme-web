import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Vission from './components/Vission';
import Do from './components/Do';
import DoCarousel from './components/DoCarousel';
import Info from './components/Info';
import Board from './components/Board';


function App() {
  return (
    <div className="App">

    <Navbar />
    <Intro/>
    <About/>
    <Vission/>
    <Do />

    <DoCarousel/>

    <Info/>
    <Board/>
    </div>
  );
}

export default App;
