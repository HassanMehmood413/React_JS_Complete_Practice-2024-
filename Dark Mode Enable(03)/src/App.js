
import './App.css';
import About from './Components/About'
import Navbar from './Components/Navbar';
function App() {
  
  return (
    <>
      <Navbar title="React JS" liText="Home" />
      <div className="container">
      <About/>
      </div>
    </>

  );
}

export default App;
