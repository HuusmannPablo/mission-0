import Navbar from './components/Navbar'
import Searchbox from './components/Searchbox'
import Body from './components/Body'
import Footer from './components/Footer'
import './App.css';


function App() {
  return (
    <div className="home-app">
      <Navbar />
      <Searchbox />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
