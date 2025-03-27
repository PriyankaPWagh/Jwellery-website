import React from 'react';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-[50px] font-bold text-[#008FAB] mb-2 text-center">Customer Login</h1>
          <p className="text-gray-600 mb-8 text-center">Sign in to your Lillian account</p>
          
          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Enter your password..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <a href="#" className="text-teal-600 text-sm mt-2 inline-block hover:underline text-right">
                Forgot your password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#008FAB] text-white p-3 rounded-lg hover:bg-teal-700 transition duration-300"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-gray-600 mt-6 text-center">
            Don't have an account?{' '}
            <a href="#" className="text-teal-600 hover:underline">

               <Link   to="/signup">
                     Signup
                              </Link >
                        
                        
            </a>
          </p>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 hidden md:block">
        <img
          src="/media/assests/LoginImg.png" 
          alt="Login Img"
          className=" h-75vh object-cover m-24"
        />
      </div>
    </div>
  );
}

export default Login;