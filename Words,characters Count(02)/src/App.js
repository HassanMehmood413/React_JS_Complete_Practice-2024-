
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
    <>
      <Navbar title="React JS" liText="Home" />
      <div className="container">
        <TextForm heading="Enter Text Below"/>
      </div>
    </>
    // <Navbar/>

  );
}

export default App;
