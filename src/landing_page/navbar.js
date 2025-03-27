import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-around items-center p-6 mt-4 bg-white text-black h-[91px] ">
      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <img
          src="media/assests/logo.png"
          alt="logo"
          className="h-[91px] w-[80px] mb-6"
        />
      </Link>

      {/* Hamburger Menu for Mobile */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Nav Links (Hidden on small screens) */}
      <ul
        className={`absolute md:static top-[91px] left-0 w-full md:w-auto bg-white md:flex gap-[80px] text-center shadow-md md:shadow-none p-4 md:p-0 transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li className=" cursor-pointer font-semibold text-xl hover:bg-#008FAB">
        <Link  class="nav-link" to="/">
        Home
                </Link >
          
          </li>
        <li className="cursor-pointer font-semibold text-xl">
        <Link  class="nav-link" to="/catogary">
        Category
                </Link >
          
          </li>
        <li className="cursor-pointer font-semibold text-xl">
        <Link  class="nav-link" to="/collections">
        Collections
                </Link >
          
          </li>
         
        <li className="cursor-pointer font-semibold text-xl">
        <Link  class="nav-link" to="/shop">
        Shop
                </Link >
          
          </li>
         
        <li className="cursor-pointer font-semibold text-xl">
        <Link  class="nav-link" to="/offers">
        Offers
                </Link >
          </li>
        <li className="cursor-pointer font-semibold text-xl">
        <Link  class="nav-link" to="/giftstore">
        Gift store
                </Link >
          </li>
      </ul>

      {/* Icons (Hidden on mobile when menu is open) */}
      <div
        className={`flex w-[183px] h-[24px] gap-8 ${
          isOpen ? "hidden" : "flex"
        } md:flex`}
      >
        <Search size={24} /> 

        <Link  class="nav-link" to="/customer">
                <User size={24} />
        </Link >
          
        <Link  class="nav-link" to="/wishlist">
        <Heart size={24} />
                </Link >
       
                <Link  class="nav-link" to="/cartPage">
                <ShoppingBag size={24} />
                </Link >
       
      </div>
    </nav>
  );
};

export default Navbar;
