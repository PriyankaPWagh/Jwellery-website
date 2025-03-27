import React, { useState, useEffect } from 'react';
import { FiFilter, FiX, FiHeart, FiShoppingBag } from 'react-icons/fi'; // Icons for filter, close, wishlist, and cart
import { BsGrid, BsListUl } from 'react-icons/bs'; // Grid and list icons
import { FaStar } from 'react-icons/fa'; // Star icon for ratings
import Slider from 'rc-slider'; // Import rc-slider
import 'rc-slider/assets/index.css'; // Import rc-slider styles
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify styles

// Mock product data (678 products initially) with example image URLs and additional fields
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
  image: exampleImages[index % exampleImages.length], // Cycle through the example images
  price: index % 2 === 0 ? 1199 : 1249, // Price after discount
  originalPrice: index % 2 === 0 ? 2299 : 1999, // Original price
  discount: index % 2 === 0 ? 100 : 150, // Discount amount
  rating: 4.5, // Example rating
  reviews: Math.floor(Math.random() * 1000) + 100, // Random number of reviews (100-1100)
  category: index % 2 === 0 ? 'Wedding Collection' : 'Tales of Mystique',
  availability: 'In Stock',
  productCategory: ['Anklet', 'Bangle', 'Bracelets', 'Charms', 'Cuff', 'Earrings', 'Finger Rings', 'Necklace', 'Pendants', 'Watch Jewelry'][Math.floor(Math.random() * 10)],
  metal: ['Rose Gold', 'Yellow Gold', 'White Gold', 'Platinum', 'Sterling Silver', 'Titanium'][Math.floor(Math.random() * 6)],
  stones: ['Diamond', 'Pearl', 'Ruby', 'Sapphire', 'Turquoise'][Math.floor(Math.random() * 5)],
  gender: ['Female', 'Male'][Math.floor(Math.random() * 2)],
  collection: ['African Echoes', 'Ethereal Essence', 'Glamour Journey', 'Joy of Dressing', 'Natural Elements', 'Reflection', 'Timeless Elegance', 'Vintage Vibes'][Math.floor(Math.random() * 8)],
}));

const ProductHeader = () => {
  const [view, setView] = useState('grid'); // Toggle between grid and list view
  const [sortOption, setSortOption] = useState('Trending Now'); // Sorting option
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Filter sidebar state
  const [products, setProducts] = useState(initialProducts); // Product list state

  // Initialize cart and wishlist from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [filters, setFilters] = useState({
    availability: [],
    category: [],
    metal: [],
    stones: [],
    gender: [],
    collections: [],
    priceRange: [0, 10000], // [min, max]
  });

  // Save cart and wishlist to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Filter options based on the image
  const filterOptions = {
    availability: ['In Stock', 'Out of Stock'],
    category: ['Anklet', 'Bangle', 'Bracelets', 'Charms', 'Cuff', 'Earrings', 'Finger Rings', 'Necklace', 'Pendants', 'Watch Jewelry'],
    metal: ['Rose Gold', 'Yellow Gold', 'White Gold', 'Platinum', 'Sterling Silver', 'Titanium'],
    stones: ['Diamond', 'Pearl', 'Ruby', 'Sapphire', 'Turquoise'],
    gender: ['Female', 'Male'],
    collections: ['African Echoes', 'Ethereal Essence', 'Glamour Journey', 'Joy of Dressing', 'Natural Elements', 'Reflection', 'Timeless Elegance', 'Vintage Vibes'],
  };

  // Handle filter changes
  const handleFilterChange = (category, value) => {
    setFilters((prev) => {
      const updatedCategory = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      return { ...prev, [category]: updatedCategory };
    });
  };

  // Handle price range change
  const handlePriceRangeChange = (value) => {
    setFilters((prev) => ({ ...prev, priceRange: value }));
  };

  // Apply filters to products (runs whenever filters change)
  useEffect(() => {
    let filteredProducts = [...initialProducts];

    // Filter by availability
    if (filters.availability.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.availability.includes(product.availability)
      );
    }

    // Filter by category
    if (filters.category.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.category.includes(product.productCategory)
      );
    }

    // Filter by metal
    if (filters.metal.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.metal.includes(product.metal)
      );
    }

    // Filter by stones
    if (filters.stones.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.stones.includes(product.stones)
      );
    }

    // Filter by gender
    if (filters.gender.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.gender.includes(product.gender)
      );
    }

    // Filter by collections
    if (filters.collections.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.collections.includes(product.collection)
      );
    }

    // Filter by price range
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    setProducts(filteredProducts);
  }, [filters]); // Re-run whenever filters change

  // Reset filters
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

  // Handle sort change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    let sortedProducts = [...products];
    if (e.target.value === 'Price: Low to High') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (e.target.value === 'Price: High to Low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (e.target.value === 'Newest') {
      // Add logic for newest (e.g., based on a date field)
    }
    setProducts(sortedProducts);
  };

  // Handle Add to Wishlist
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

  // Handle Add to Cart
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
      <div className="flex">
        {/* Filter Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4 h-full overflow-y-auto">
            {/* Header with Close Button */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filter Products</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-200 p-1 rounded-full"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Availability Filter */}
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

            {/* Category Filter */}
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

            {/* Metal Filter */}
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

            {/* Stones Filter */}
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

            {/* Gender Filter */}
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

            {/* Collections Filter */}
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

            {/* Price Range Filter with Slider */}
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

            {/* Reset Button */}
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
        <div className="flex-1">
          {/* Header Section */}
          <div className="flex items-center justify-between border-b border-gray-200 py-4 px-6">
            {/* Left Section: Filter and View Toggle */}
            <div className="flex items-center space-x-4">
              {/* Filter Button */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-1 text-2xl hover:text-blue-500 ml-12"
              >
                
                Filter
              </button>
              <img src= '/media/assests/Group 82.png' className='m-4'/>
              <img src= '/media/assests/Line 93.png' className='m-4'/>

              {/* View Toggle Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={() => setView('grid')}
                  className={`p-2 rounded ${
                    view === 'grid'
                      ? 'bg-blue-100 text-blue-500'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <img src= '/media/assests/Group 75.png' className='m-4'/>
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`p-2 rounded ${
                    view === 'list'
                      ? 'bg-blue-100 text-blue-500'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                    <img src= '/media/assests/Group 76.png' className='m-4'/>
                </button>
              </div>
            </div>

            {/* Right Section: Product Count, Cart, Wishlist, and Sort */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">{products.length} products</span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-gray-600">
                  <FiHeart className="w-5 h-5" />
                  <span>Wishlist: {wishlist.length}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <FiShoppingBag className="w-5 h-5" />
                  <span>Cart: {cart.length}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <label htmlFor="sort" className="text-gray-600">
                    Sort By:
                  </label>
                  <select
                    id="sort"
                    value={sortOption}
                    onChange={handleSortChange}
                    className="border-none bg-transparent text-blue-500 focus:outline-none"
                  >
                    <option value="Trending Now">Trending Now</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                    <option value="Newest">Newest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Product List */}
          <div className="p-6">
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
                    {/* Product Image */}
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

                    {/* Product Details */}
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
    </div>
  );
};

export default ProductHeader;