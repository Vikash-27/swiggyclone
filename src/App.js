
import './App.css';
import BodyComponent from './Components/BodyComponents/BodyComponent';
import FooterComponent from './Components/FooterComponents/FooterComponent';
import HeaderComponent from './Components/HeaderComponents/HeaderComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <BodyComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
