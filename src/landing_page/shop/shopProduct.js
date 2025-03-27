import React, { useState, useEffect, useContext } from 'react';
import { FiFilter, FiX, FiHeart, FiShoppingBag } from 'react-icons/fi';
import { BsGrid, BsListUl } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WishlistCartContext } from '../wishlist/wishlistCartContext'
import { Link } from 'react-router-dom';

// Mock product data
const exampleImages = [
  'media/assests/1.png ', // Gold Ring with Diamond
  'media/assests/2.png ', // Gold Ring with Diamond
  'media/assests/3.png ', // Gold Ring with Diamond
  'media/assests/4.png ', // Gold Ring with Diamond
  'media/assests/5.png ', // Gold Ring with Diamond
  'media/assests/6.png ', // Gold Ring with Diamond
  'media/assests/7.png ', // Gold Ring with Diamond
  'media/assests/8.png ', // Gold Ring with Diamond
  'media/assests/9.png ', // Gold Ring with Diamond
  'media/assests/10.png ', // Gold Ring with Diamond
];

const initialProducts = Array.from({ length: 678 }, (_, index) => ({
  id: index + 1,
  name: index % 2 === 0 ? 'Rosy Refresh - Set of 2 Couple Wedding 24K Rose Gold Ring' : 'Arabian Style 18K Rose Gold Plated Hand Bracelet',
  image: exampleImages[index % exampleImages.length],
  price: index % 2 === 0 ? 1199 : 1249,
  originalPrice: index % 2 === 0 ? 2299 : 1999,
  discount: index % 2 === 0 ? 100 : 150,
  rating: 4.5,
  reviews: Math.floor(Math.random() * 1000) + 100,
  category: index % 2 === 0 ? 'Wedding Collection' : 'Tales of Mystique',
  availability: 'In Stock',
  productCategory: ['Anklet', 'Bangle', 'Bracelets', 'Charms', 'Cuff', 'Earrings', 'Finger Rings', 'Necklace', 'Pendants', 'Watch Jewelry'][Math.floor(Math.random() * 10)],
  metal: ['Rose Gold', 'Yellow Gold', 'White Gold', 'Platinum', 'Sterling Silver', 'Titanium'][Math.floor(Math.random() * 6)],
  stones: ['Diamond', 'Pearl', 'Ruby', 'Sapphire', 'Turquoise'][Math.floor(Math.random() * 5)],
  gender: ['Female', 'Male'][Math.floor(Math.random() * 2)],
  collection: ['African Echoes', 'Ethereal Essence', 'Glamour Journey', 'Joy of Dressing', 'Natural Elements', 'Reflection', 'Timeless Elegance', 'Vintage Vibes'][Math.floor(Math.random() * 8)],
}));

const ShopProduct = () => {
  const { cart, setCart, wishlist, setWishlist } = useContext(WishlistCartContext);
  const [view, setView] = useState('grid');
  const [sortOption, setSortOption] = useState('Trending Now');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [filters, setFilters] = useState({
    availability: [],
    category: [],
    metal: [],
    stones: [],
    gender: [],
    collections: [],
    priceRange: [0, 10000],
  });

  const filterOptions = {
    availability: ['In Stock', 'Out of Stock'],
    category: ['Anklet', 'Bangle', 'Bracelets', 'Charms', 'Cuff', 'Earrings', 'Finger Rings', 'Necklace', 'Pendants', 'Watch Jewelry'],
    metal: ['Rose Gold', 'Yellow Gold', 'White Gold', 'Platinum', 'Sterling Silver', 'Titanium'],
    stones: ['Diamond', 'Pearl', 'Ruby', 'Sapphire', 'Turquoise'],
    gender: ['Female', 'Male'],
    collections: ['African Echoes', 'Ethereal Essence', 'Glamour Journey', 'Joy of Dressing', 'Natural Elements', 'Reflection', 'Timeless Elegance', 'Vintage Vibes'],
  };

  const handleFilterChange = (category, value) => {
    setFilters((prev) => {
      const updatedCategory = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      return { ...prev, [category]: updatedCategory };
    });
  };

  const handlePriceRangeChange = (value) => {
    setFilters((prev) => ({ ...prev, priceRange: value }));
  };

  useEffect(() => {
    let filteredProducts = [...initialProducts];
    if (filters.availability.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.availability.includes(product.availability)
      );
    }
    if (filters.category.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.category.includes(product.productCategory)
      );
    }
    if (filters.metal.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.metal.includes(product.metal)
      );
    }
    if (filters.stones.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.stones.includes(product.stones)
      );
    }
    if (filters.gender.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.gender.includes(product.gender)
      );
    }
    if (filters.collections.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.collections.includes(product.collection)
      );
    }
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );
    setProducts(filteredProducts);
  }, [filters]);

  const resetFilters = () => {
    setFilters({
      availability: [],
      category: [],
      metal: [],
      stones: [],
      gender: [],
      collections: [],
      priceRange: [0, 10000],
    });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    let sortedProducts = [...products];
    if (e.target.value === 'Price: Low to High') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (e.target.value === 'Price: High to Low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (e.target.value === 'Newest') {
      // Add logic for newest
    }
    setProducts(sortedProducts);
  };

  const handleAddToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const isInWishlist = prevWishlist.some((item) => item.id === product.id);
      if (isInWishlist) {
        toast.info(`${product.name} removed from wishlist`);
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        toast.success(`${product.name} added to wishlist`);
        return [...prevWishlist, product];
      }
    });
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const isInCart = prevCart.some((item) => item.id === product.id);
      if (isInCart) {
        toast.info(`${product.name} removed from cart`);
        return prevCart.filter((item) => item.id !== product.id);
      } else {
        toast.success(`${product.name} added to cart`);
        return [...prevCart, product];
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex flex-col">
        {/* Filter Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4 h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filter Products</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-200 p-1 rounded-full"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            <div className="mb-4">
              <h3 className="font-medium">Availability</h3>
              <div className="flex flex-col gap-2">
                {filterOptions.availability.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.availability.includes(option)}
                      onChange={() => handleFilterChange('availability', option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-medium">Category</h3>
              <div className="flex flex-col gap-2">
                {filterOptions.category.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.category.includes(option)}
                      onChange={() => handleFilterChange('category', option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-medium">Metal</h3>
              <div className="flex flex-col gap-2">
                {filterOptions.metal.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.metal.includes(option)}
                      onChange={() => handleFilterChange('metal', option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-medium">Stones</h3>
              <div className="flex flex-col gap-2">
                {filterOptions.stones.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.stones.includes(option)}
                      onChange={() => handleFilterChange('stones', option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-medium">Gender</h3>
              <div className="flex flex-col gap-2">
                {filterOptions.gender.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.gender.includes(option)}
                      onChange={() => handleFilterChange('gender', option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-medium">Collections</h3>
              <div className="flex flex-col gap-2">
                {filterOptions.collections.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.collections.includes(option)}
                      onChange={() => handleFilterChange('collections', option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-medium">Price Range</h3>
              <Slider
                range
                min={0}
                max={10000}
                value={filters.priceRange}
                onChange={handlePriceRangeChange}
                className="my-2"
                trackStyle={[{ backgroundColor: '#14b8a6' }]}
                handleStyle={[{ borderColor: '#14b8a6' }, { borderColor: '#14b8a6' }]}
              />
              <div className="flex justify-between">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Product List */}
          <div
            className={`grid gap-6 ${
              view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'
            }`}
          >
            {products.map((product) => {
              const isInWishlist = wishlist.some((item) => item.id === product.id);
              const isInCart = cart.some((item) => item.id === product.id);

              return (
                <div
                  key={product.id}
                  className={`border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${
                    view === 'list' ? 'flex space-x-4' : ''
                  }`}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
                      }}
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <h3 className="text-lg font-medium text-gray-800 mt-1">{product.name}</h3>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                    </div>
                    <div className="mt-2 flex items-center space-x-2">
                      <span className="text-lg font-semibold text-gray-800">${product.price}</span>
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      <span className="text-sm text-red-500">(${product.discount} Off)</span>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <button
                        onClick={() => handleAddToWishlist(product)}
                        className={`flex items-center space-x-1 ${
                          isInWishlist ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                        }`}
                      >
                        <FiHeart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
                        <span className="text-sm">
                          {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                        </span>
                      </button>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className={`flex items-center space-x-1 ${
                          isInCart ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
                        }`}
                      >
                        <FiShoppingBag className={`w-5 h-5 ${isInCart ? 'fill-current' : ''}`} />
                        <span className="text-sm">
                          {isInCart ? 'Remove from Bag' : 'Add to Bag'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;