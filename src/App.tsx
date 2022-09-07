import "./App.css"
import NavBar from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Slider from "./components/Slider/Slider";
import RightSide from './components/RightSide/RightSide';

const App = () => {
  return <div className="App">
    <NavBar />
    <Slider />
    <Main />
    <RightSide />
  </div>
}

export default App;
