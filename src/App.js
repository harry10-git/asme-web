import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Vission from './components/Vission';
import Do from './components/Do';
import DoCarousel from './components/DoCarousel';

function App() {
  return (
    <div className="App">

    <Navbar />
    <Intro/>
    <About/>
    <Vission/>
    <Do />

    <DoCarousel/>

    </div>
  );
}

export default App;
