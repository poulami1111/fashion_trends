'use client';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="bg-gray-900 py-10 px-4 text-white">
            <div className="flex flex-wrap justify-between max-w-screen-lg mx-auto">
                <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                    <h6 className="text-2xl font-bold mb-4 text-cyan-400 neon-text">Fashion Trends</h6>
                    <p>About Us</p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                    <h6 className="text-2xl font-bold mb-4 text-cyan-400 neon-text">Company</h6>
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Careers</p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                    <h6 className="text-2xl font-bold mb-4 text-cyan-400 neon-text">For Customers</h6>
                    <p>Reviews</p>
                    <p>Categories</p>
                    <p>Blog</p>
                    <p>Connect with us</p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                    <h6 className="text-2xl font-bold mb-4 text-cyan-400 neon-text">Get in touch</h6>
                    <p>Number</p>
                    <p>Email</p>
                    <p>Address</p>
                </div>
            </div>
            <div className="border-t border-white pt-4 text-center text-gray-400">
                <p>&copy; 2024 Fashion Trends. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;



