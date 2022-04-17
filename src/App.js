import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Components/Pages/Checkout/Checkout';
import Home from './Components/Pages/Home/Home/Home';
import Services from './Components/Pages/Home/Services/Services';
import LogIn from './Components/Pages/LogIn/LogIn/LogIn';
import Register from './Components/Pages/LogIn/Register/Register';
import Footer from './Components/Pages/Share/Footer/Footer';
import Header from './Components/Pages/Share/Header/Header';
import NotFound from './Components/Pages/Share/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header/>
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
