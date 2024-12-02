
import './App.css';
import BodyComponent from './Components/BodyComponents/BodyComponent';
import FooterComponent from './Components/FooterComponents/FooterComponent';
import HeaderComponent from './Components/HeaderComponents/HeaderComponent';
import Body from './Components/BodyComponents/Body';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <BodyComponent/>
      {/* <Body/> */}
    </div>
  );
}

export default App;
