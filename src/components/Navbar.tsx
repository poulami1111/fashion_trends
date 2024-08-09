import React from 'react';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
              <Image
                width={80}
                height={50}
                src={'next.svg'}
                alt="LOGO"
                className="border border-black"
              />
            </a>
          </div>
          <div className="ml-8 flex-1">
            <div className="relative max-w-lg mx-auto">
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all duration-300 hover:placeholder-yellow-400 hover:border-yellow-400"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 hover:text-yellow-400 transition-colors duration-300" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-800 hover:text-gray-600 transition-colors duration-300">
              Home
            </a>
            <div className="relative group">
              <a href="/collections/best-offers" className="text-gray-800 hover:text-gray-600 flex items-center transition-colors duration-300">
                Festive Offers
                <svg
                  className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-1 transition-all duration-300 transform group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                <a href="/collections/best-offers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-300">
                  Up to 70% Off
                </a>
                <a href="/collections/saree-combo" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-300">
                  Combo Set
                </a>
              </div>
            </div>
            <div className="relative group">
              <a href="" className="text-gray-800 hover:text-gray-600 flex items-center transition-colors duration-300">
                Saree
                <svg
                  className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-1 transition-all duration-300 transform group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                <a href="/collections/embroidery-1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-300">
                  Embroidery Saree
                </a>
                <a href="/collections/printed-saree" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-300">
                  Printed Saree
                </a>
              </div>
            </div>
            <div className="relative group">
              <a href="/collections/salwar-suit" className="text-gray-800 hover:text-gray-600 flex items-center transition-colors duration-300">
                Salwar Suit
                <svg
                  className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-1 transition-all duration-300 transform group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                <a href="/collections/printed-salwar-suit" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-300">
                  Printed Salwar Suit
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-800 hover:text-gray-600 focus:outline-none transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M4 5h16M4 12h16m-7 7h7"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
