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
import PortalDemo from './components/PortalDemo';
import UseState1 from './components/UseState1';
import UseSTateWIthPrev from './components/UseSTateWIthPrev';
import UseSTateWIthObject from './components/UseSTateWIthObject';
import UseStateWithArray from './components/UseStateWithArray';
import UseEffectFetch from './components/UseEffectFetch';


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
      {/* <MapMethod/>
      <PortalDemo/> */}
      {/* <UseState1/> */}
      {/* <UseSTateWIthPrev/> */}
      {/* <UseSTateWIthObject/> */}
      {/* <UseStateWithArray/> */}
      <UseEffectFetch/>
    </div>
  );
}

export default App;
