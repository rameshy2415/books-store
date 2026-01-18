import React, { useState } from 'react';
import { Search, Menu, X, BookOpen, ShoppingCart, User } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  return (
    <header className="bg-linear-to-r from-amber-100 to-orange-100 shadow-md fixed top-0 left-0 right-0 z-50 mb-5">
      {/* Top bar */}
      <div className="bg-amber-900 text-amber-50 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <p className="flex items-center gap-2">
            <BookOpen size={16} />
            <span>Free shipping on orders over $50</span>
          </p>
          <div className="hidden md:flex gap-4">
            <a href="#" className="hover:text-amber-200 transition-colors">About</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Contact</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Blog</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-amber-900 p-2 rounded-lg">
              <BookOpen className="text-amber-50" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-amber-900">PageTurner</h1>
              <p className="text-xs text-amber-700">Your Literary Haven</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for books, authors, genres..."
                className="w-full px-4 py-2.5 pl-12 rounded-full border-2 border-amber-200 focus:border-amber-500 focus:outline-none bg-white shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600" size={20} />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 text-amber-900 hover:text-amber-700 transition-colors">
              <User size={20} />
              <span className="text-sm font-medium">Account</span>
            </button>
            
            <button className="relative p-2 hover:bg-amber-100 rounded-full transition-colors">
              <ShoppingCart className="text-amber-900" size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-amber-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="text-amber-900" size={24} /> : <Menu className="text-amber-900" size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
              className="w-full px-4 py-2.5 pl-12 rounded-full border-2 border-amber-200 focus:border-amber-500 focus:outline-none bg-white shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600" size={20} />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block mt-4">
          <ul className="flex gap-6 justify-center">
            {['Bestsellers', 'New Arrivals', 'Fiction', 'Non-Fiction', 'Children', 'Special Offers'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-amber-900 hover:text-amber-600 font-medium text-sm transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-amber-200 pt-4">
            <ul className="space-y-3">
              {['Bestsellers', 'New Arrivals', 'Fiction', 'Non-Fiction', 'Children', 'Special Offers'].map((item) => (
                <li key={item}>
                  <a href="#" className="block text-amber-900 hover:text-amber-600 font-medium py-2">
                    {item}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-amber-200">
                <a href="#" className="block text-amber-900 hover:text-amber-600 font-medium py-2">
                  My Account
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}