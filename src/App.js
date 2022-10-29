import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
import Profile from "./component/Profile";
import MYorder from "./component/MYorder";
import Blog from "./component/Blog";
import Privated from "./ProtectedRout/Privated";

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route  index path="/" element={<Home/>}/>
       
        <Route path="/Blogs" element={<Blog/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route  element={<Privated/>}>

        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/MYOrders" element={<MYorder/>}/>
        <Route path="/Profile" element={<Profile/>}/>
       
        </Route>
      </Routes>
    </BrowserRouter>
 
    </>
  );
}

export default App;
