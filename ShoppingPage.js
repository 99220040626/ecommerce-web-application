import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, Search, Menu, X } from 'lucide-react';

export default function ShoppingPage() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 234
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      rating: 4.9,
      reviews: 189
    },
    {
      id: 3,
      name: "Designer Sunglasses",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Leather Backpack",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      rating: 4.6,
      reviews: 203
    },
    {
      id: 5,
      name: "Minimalist Sneakers",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 312
    },
    {
      id: 6,
      name: "Portable Speaker",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
      rating: 4.5,
      reviews: 178
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                LUXE SHOP
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-purple-600 transition">New</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 transition">Men</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 transition">Women</a>
                <a href="#" className="text-gray-700 hover:text-purple-600 transition">Sale</a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search className="w-4 h-4 text-gray-500 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="bg-transparent outline-none text-sm w-48"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
                <Heart className="w-6 h-6 text-gray-700" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </button>
              
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
              
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="px-4 py-4 space-y-2">
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600">New</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600">Men</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600">Women</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600">Sale</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-90"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              Summer Collection 2026
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Discover the latest trends with up to 50% off
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition duration-300 shadow-lg">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold text-gray-900">Featured Products</h3>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Top Rated</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition"
                >
                  <Heart 
                    className={`w-5 h-5 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                  />
                </button>
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h4>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Join Our Newsletter</h3>
          <p className="text-white/90 mb-8">Get exclusive offers and updates delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-3 rounded-full outline-none"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">LUXE SHOP</h4>
              <p className="text-gray-400">Your premium destination for luxury products</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Shop</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition">Sale</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 LUXE SHOP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}