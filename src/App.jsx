import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header color={true}></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
