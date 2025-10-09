import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Page404 from "./pages/404";
import Contacts from "./pages/Contacts";
import Price from "./pages/price";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts/>}/>
         <Route path="/price" element={<Price/>}/>
        
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </div>
  );
}

export default App;
