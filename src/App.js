import logo from './logo.svg';
import './App.css';
import FunctionComp from './components/FunctionComp';
import ClassComp from './components/ClassComp';
import Jsx from './components/Jsx';
import Props from './components/Props';
import ClassCounter from './components/ClassCounter';
import EventBinding from './components/EventBinding';
import CondtionalRendering from './components/CondtionalRendering';
import MapMethod from './components/MapMethod';


function App() {
  return (
    <div className="App">
      {/* <FunctionComp/>
      <ClassComp/>
      <Jsx/>
      <Props name={"Prop"}><h2>I am Props.children</h2></Props>
      <ClassCounter/>
      <EventBinding/> */}
      {/* <CondtionalRendering/> */}
      <MapMethod/>
    </div>
  );
}

export default App;
