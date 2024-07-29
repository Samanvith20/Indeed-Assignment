
import './App.css';
import Banner from './components/Banner/Banner';
import Brands from './components/Brands/Brands';
import CuratedPicks from './components/CuratedPicks/CuratedPicks';
import FeaturedProducts from './components/FeaturedProducts/Featuredproduct';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Newsletter from './components/Newsletter/Newsletter';
import Offer from './components/Offer/Offer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Brands/>
      <Features/>
      <CuratedPicks/>
      <FeaturedProducts/>
      <Offer/>
      <Newsletter/>
      <Footer/>
      </div>
  );
}

export default App;
