
import './App.css';
import Banner from './components/Banner/Banner';
import Brands from './components/Brands/Brands';
import CuratedPicks from './components/CuratedPicks/CuratedPicks';
import CustomerExperience from './components/CustomerExperience/CustomerExperience';
import FeaturedProducts from './components/FeaturedProducts/Featuredproduct';

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
      <CustomerExperience/>
      <CuratedPicks/>
      <FeaturedProducts/>
      <Offer/>
      <Newsletter/>
      <Footer/>
      </div>
  );
}

export default App;
