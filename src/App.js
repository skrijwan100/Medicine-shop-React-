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
import { useState } from 'react';
import Alert from './component/Alert';
import "./media.css";
import Modal from './component/Modal';
import Finddoctor from './component/Finddoctor';
import Pymentmodal from './component/Pymentmodal';

// import Paymentmodal from './component/Paymentmodal';

function App() {
    // Loader state
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const[alert,setalert]=useState(null)
    const[modal,setmodal]=useState(null)
    const[pymentmodal,setpaymentmodal]=useState(null)
  

    const showAlert=(msg,ty)=>{
      setalert({
        msg:msg,
        ty:ty
      })
    }
    const showmodal=(name,email,address,phone)=>{
      setmodal({
        name:name,
        email:email,
        address:address,
        phone:phone,
    
      })
    }
   const showpymentmodal=(title)=>{
    setpaymentmodal({
      title:title,
    })

   }
  
    // Function to start the loader
    const startLoader = () => {
      setProgress(0);
      setIsLoading(true);
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsLoading(false);
            return 100;
          }
          return prev + 10;
        });
      }, 50);
    };
  
  return (
      <>
      <Router>
        <Loder isLoading={isLoading} progress={progress}/>
        <Alert alert={alert}/>
        <Modal modal={modal}/>
        <Pymentmodal pymentmodal={pymentmodal} />

    <div className='headbox  d-flex justify-content-center rounded-4 border border-black border-2 '>
      <Header/>
    </div>
  
    <div  className='navbar'>
    <Navbar startLoader={startLoader} showAlert={showAlert} showmodal={showmodal} />
    
    </div >
       
    <div className="content">
        <Routes>
        <Route path="/" element={<Home startLoader={startLoader}  showAlert={showAlert} />} />
        <Route path="/about" element={<About startLoader={startLoader}/>} />
        <Route path="/onlineservice" element={<Onlinedoctor startLoader={startLoader} showAlert={showAlert}/>} />
        <Route path="/finddoctor" element={<Finddoctor startLoader={startLoader} showAlert={showAlert}/>} />
        <Route path="/cart" element={<Cart startLoader={startLoader} showAlert={showAlert} showpymentmodal={showpymentmodal} />} />
        <Route path="/singup" element={<Singup showAlert={showAlert} startLoader={startLoader}/>} />
        <Route path="/login" element={<Login showAlert={showAlert} startLoader={startLoader}/>} />

        
        </Routes>
    </div>
      </Router>
      </>
  );
}

export default App;
