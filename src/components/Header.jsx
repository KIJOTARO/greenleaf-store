import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-10">
      <Link to="/" className="text-2xl font-bold text-greenleaf hover:text-greenleaf-dark transition-colors">GreenLeaf</Link>
      <nav className="flex gap-6 items-center">
        <Link to="/products" className="text-gray-700 hover:text-greenleaf-dark font-medium transition-colors">Products</Link>
        <Link to="/cart" className="relative text-gray-700 hover:text-greenleaf-dark transition-colors">
          <ShoppingCart className="inline-block w-6 h-6" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full shadow">
              {itemCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Header;