
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Checkout from './Components/Checkout';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>
          <Header />
          <Home />
          </div>} />
        <Route path="/signin" element={<div>signin</div>} />
        <Route path="/signup" element={<div>signup</div>} />
        <Route path="/Cart" element={<Checkout />} />
      </Routes>


    </BrowserRouter>

  );
}

export default App;
