import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home/Home';
import Services from './Components/Pages/Home/Services/Services';
import Footer from './Components/Pages/Share/Footer/Footer';
import Header from './Components/Pages/Share/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Services />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
