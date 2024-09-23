
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="React App" />
      <TextForm heading="Enter text to Analyze" />
    </>
  );
}

export default App;
