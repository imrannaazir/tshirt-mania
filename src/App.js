import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import Footer from './components/Footer/Footer';
import Grandpa from './/components/Grandpa/Grandpa'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/order' element={<OrderReview />}></Route>
        <Route path='/grandpa' element={<Grandpa />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
