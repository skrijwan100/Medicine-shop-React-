import './App.css';
import About from './component/About';
import Header from './component/Header';
import Navbar from './component/Navbar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Offer from './component/Offer';
import Onlinedoctor from './component/Onlinedoctor';
import Home from './component/Home';
import Cart from './component/Cart';
import Singup from './component/Singup';
import Login from './component/Login';
import Loder from './component/Loder';

function App() {
  return (
      <>
      <Router>
        <Loder/>
    <div className='headbox  d-flex justify-content-center rounded-4 border border-black border-2 '>
      <Header/>
    </div>
    <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/offer" element={<Offer/>} />
        <Route path="/onlineservice" element={<Onlinedoctor/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/singup" element={<Singup/>} />
        <Route path="/login" element={<Login/>} />

        
        </Routes>
      </Router>
      </>
  );
}

export default App;
