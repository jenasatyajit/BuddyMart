import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">BuddyMart</h3>
            <p className="text-white/80 mb-4">
              Your one-stop solution for local marketing needs. Connecting vendors and customers seamlessly.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-white/80 hover:text-white transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-white/80 hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-white/80 hover:text-white transition-colors"><Youtube size={24} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li><a href="tel:+919876543210" className="text-white/80 hover:text-white">+91 9876543210</a></li>
              <li><a href="mailto:info@buddymart.com" className="text-white/80 hover:text-white">info@buddymart.com</a></li>
              <li className="text-white/80">123 Main St, City, State 12345</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white">Home</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Services</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">About</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white">Grocery</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Food</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Pharmacy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Catering</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/60">&copy; 2025 BuddyMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
