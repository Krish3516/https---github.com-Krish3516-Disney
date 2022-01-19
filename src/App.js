import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Detail from './components/Detail';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';



function App() {
  return (
    <div className="App">
      <main>
      <Header />
     </main>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
        <Route path="login" element={<Login />} />
      </Routes>
    
    </div>
  );
}

export default App;
