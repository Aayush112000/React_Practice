import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.tsx';
// import TextFrom from './components/TextForm.tsx';
import About from './components/About.tsx';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="about textUtils"/>
    {/* <Navbar/> */}
    <div className="container my-3">
      {/* <TextFrom heading="Enter the text to analyze below"/> */}
      <About/>
    </div>
    </>
  );
}

export default App;
