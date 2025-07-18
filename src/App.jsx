import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductListing from './pages/ProductListing';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  const base = import.meta.env.DEV ? '/' : '/greenleaf-store';

  return (
    <Router basename={base}>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 text-gray-800">
        <Header />
        <main className="p-4 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;