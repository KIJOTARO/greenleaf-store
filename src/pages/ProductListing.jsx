import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const plants = [
  { id: 1, name: 'Snake Plant', price: 12.99, category: 'Low Light', image: '/plants/snake.jpg' },
  { id: 2, name: 'Fiddle Leaf Fig', price: 29.99, category: 'Bright Light', image: '/plants/fiddle.jpg' },
  { id: 3, name: 'Peace Lily', price: 19.99, category: 'Low Light', image: '/plants/peace.jpg' },
  { id: 4, name: 'Monstera', price: 24.99, category: 'Tropical', image: '/plants/monstera.jpg' },
  { id: 5, name: 'ZZ Plant', price: 17.99, category: 'Low Light', image: '/plants/zz.jpg' },
  { id: 6, name: 'Aloe Vera', price: 10.99, category: 'Succulent', image: '/plants/aloe.jpg' },
];

function ProductListing() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isInCart = (id) => cartItems.find(item => item.id === id);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {plants.map((plant) => (
        <div key={plant.id} className="bg-white rounded-xl shadow-md p-4 text-center">
          <img src={plant.image} alt={plant.name} className="h-40 mx-auto object-contain" />
          <h3 className="mt-4 text-xl font-semibold">{plant.name}</h3>
          <p className="text-greenleaf text-lg font-bold">${plant.price.toFixed(2)}</p>
          <button
            onClick={() => dispatch(addToCart(plant))}
            disabled={isInCart(plant.id)}
            className={`mt-4 px-4 py-2 rounded-md w-full ${isInCart(plant.id) ? 'bg-gray-400 cursor-not-allowed' : 'bg-greenleaf text-white hover:bg-greenleaf-dark'}`}
          >
            {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;