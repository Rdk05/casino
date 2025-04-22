'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#121217] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Column 1: About */}
        <div>
        <div className="flex-shrink-0">
        <img src="/logo.jpg" alt="Logo" className="h-14 w-auto" />
      </div>
          <h2 className="text-xl font-semibold mb-4 mt-3">About Us</h2>
          <p className="text-sm text-gray-300">
            We offer the most thrilling online Rummy experience with real rewards and non-stop action. Play safe, play smart, and win big!
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="/about" className="hover:text-orange-400">How to Play</a></li>
            <li><a href="/privacy" className="hover:text-orange-400">Privacy Policy</a></li>
            <li><a href="/T&C" className="hover:text-orange-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: support@rummyzone.com</li>
            <li>Phone: +91-0123456789</li>
            <li>Support: 24x7 Live Chat</li>
          </ul>
        </div>

        {/* Column 4: Follow Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-400">Facebook</a>
            <a href="#" className="hover:text-orange-400">Twitter</a>
            <a href="#" className="hover:text-orange-400">Instagram</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} RummyZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
