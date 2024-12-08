import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import React Router
import BodyComponent from './Components/BodyComponents/BodyComponent';
import FooterComponent from './Components/FooterComponents/FooterComponent';
import HeaderComponent from './Components/HeaderComponents/HeaderComponent';
import About from './Components/HeaderComponents/About';
import Cart from './Components/HeaderComponents/Cart';
import Contact from './Components/HeaderComponents/Contact';
import RestaurantMenu from './Components/BodyComponents/RestaurantMenu';

function App() {
  return (
    <Router> {/* Wrap your app in BrowserRouter for routing */}
      <div className="App">
        <HeaderComponent />
        <Routes> {/* Define routes for different components */}
          <Route path="/" element={<BodyComponent />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path = "/restaurant/:resID" element = {<RestaurantMenu/>}></Route>
        </Routes>
        {/* <FooterComponent /> */}
      </div>
    </Router>
  );
}

export default App;
