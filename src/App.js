// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
      <TextForm heading='Enter the text to analyze'/>
      </div>

    </>
  );
}

export default App;
