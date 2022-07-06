import "./App.css"
import {  Routes, Route } from "react-router-dom";
import Header from "./components/header/Header"
import HomePages from "./home/HomePages";

function App() {
  return (
    <div className="App">
  
         <Header />
         <Routes>
         <Route exact path='/' element={<HomePages />} />
         </Routes>
    </div>
  );
}

export default App;
