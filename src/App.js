
import './App.css';
import { Route, Routes } from 'react-router-dom'
import TannerGoods from './pages/TannerGoods';
import MazmaWares from './pages/MazmaWares';
import Bags from './pages/Bags';
import Wallets from "./pages/Wallets"
import FinalSale from './pages/FinalSale';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Navbar from "./components/Navbar"
import Advertise from './components/Advertise';
import Aboutus from "./pages/Aboutus"
import Faq from "./pages/Faq"
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Advertise></Advertise>
      <Routes>
        <Route path="" element={<TannerGoods></TannerGoods>}/>
        <Route path="/mazmawares" element={<MazmaWares></MazmaWares>}></Route>
        <Route path='/bags' element={<Bags></Bags>}></Route>
        <Route path='/Wallets' element={<Wallets></Wallets>}></Route>
        <Route path='/finalsale' element={<FinalSale></FinalSale>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path='/about' element={<Aboutus></Aboutus>}></Route>
        <Route path='/faq' element={<Faq></Faq>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
