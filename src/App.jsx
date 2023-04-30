import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Carousel/Carousel";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Outlet></Outlet>
      <Carousel></Carousel>
    </div>
  );
}

export default App;
