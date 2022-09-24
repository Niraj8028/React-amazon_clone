
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>}  />
        <Route path="/signin" element={<div>signin</div>}  />
        <Route path="/signup" element={<div>signup</div>}  />
        <Route path="/Cart" element={<div>Cart</div>}  />
      </Routes>
      
      
    </BrowserRouter>
    
  );
}

export default App;
