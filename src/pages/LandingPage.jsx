import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-5xl font-bold text-greenleaf">GreenLeaf Co.</h1>
      <p className="mt-4 text-lg max-w-xl">
        Welcome to GreenLeaf Co., your destination for premium indoor houseplants that bring life and elegance to your space.
      </p>
      <Link to="/products" className="mt-6 px-6 py-3 bg-greenleaf text-white font-semibold rounded-xl hover:bg-greenleaf-dark">
        Get Started
      </Link>
    </div>
  );
}

export default LandingPage;