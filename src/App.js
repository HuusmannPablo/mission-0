import Navbar from './components/Navbar'
import Searchbox from './components/Searchbox'
import Body from './components/Body'
import './App.css';

function App() {
  return (
    <div className="home-app">
      <Navbar />
      <Searchbox />
      <Body />
    </div>
  );
}

export default App;
