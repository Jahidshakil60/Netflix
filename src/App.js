import "./App.css"
import {  Routes, Route } from "react-router-dom";
import Header from "./components/header/Header"
import HomePages from "./home/HomePages";
import Footer from "./components/footer/Footer";
import SinglePage from "./components/watch/SinglePage";

function App() {
  return (
    <div className="App">
  
         <Header />
         <Routes>
         <Route exact path='/' element={<HomePages />} />
         <Route path='/singlepage/:id' component={<SinglePage />} exact />
         </Routes>
         <Footer />
    </div>
  );
}

export default App;
