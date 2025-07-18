import { useDispatch, useSelector } from 'react-redux';
import { incrementItem, decrementItem, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function ShoppingCart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-xl shadow">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="h-20 w-20 object-cover rounded-md" />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => dispatch(decrementItem(item.id))} className="px-2 py-1 bg-gray-300 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(incrementItem(item.id))} className="px-2 py-1 bg-gray-300 rounded">+</button>
                <button onClick={() => dispatch(removeItem(item.id))} className="ml-4 text-red-500">Delete</button>
              </div>
            </div>
          ))}
          <div className="mt-6 text-right">
            <p className="font-semibold">Total Items: {totalItems}</p>
            <p className="font-bold text-lg">Total: ${totalPrice.toFixed(2)}</p>
            <div className="mt-4 flex gap-4 justify-end">
              <Link to="/products" className="px-4 py-2 bg-gray-300 rounded">Continue Shopping</Link>
              <button className="px-4 py-2 bg-greenleaf text-white rounded">Checkout (Coming Soon)</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
