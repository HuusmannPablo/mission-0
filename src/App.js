import Navbar from './components/Navbar'
import Searchbox from './components/Searchbox'
import Body from './components/Body'
import SocialbarTitle from './components/SocialbarTitle'
import Socialbar from './components/Socialbar'
import Footer from './components/Footer'
import './App.css';


function App() {
  return (
    <div className="home-app">
      <Navbar />
      <Searchbox />
      <Body />
      <SocialbarTitle />
      <Socialbar />
      <Footer />
    </div>
  );
}

export default App;
