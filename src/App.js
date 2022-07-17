import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <h1>React Redux Fetch</h1>
      <Todos></Todos>
    </div>
  );
}

export default App;

//step1: install package
//step2: constant define
//step3: async action creator
//step4: reducer
//step5: create  Store
//step6: provide Store
//step7: use Store
//
