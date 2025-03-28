import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';  
import ProductListing from './components/ProductListing';  
import ShoppingCart from './components/ShoppingCart'; 
import Header from './components/Header';  

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
