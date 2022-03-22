import React from "react";
import Sidebar from "./components/sidebar/Sidebar"
import {BrowserRouter, Route, Routes}from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import { NotFound } from "./components/notFound/NotFound";


function App() {
  return (
    <BrowserRouter> 
        <Sidebar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>


</BrowserRouter>
     
  );
}

export default App;
