import React from 'react';
import Navbar from './Navbar';

const ContactUs = () => {
  return (
    <div className='container h-screen bg-black bg-center bg-cover md:min-h-screen'>
        <Navbar />
        <div className="flex items-center justify-center mt-20 sm:mt-20">
            <div className="w-full max-w-lg p-8 rounded-lg shadow-lg bg-cyan-900">
                <h2 className="mb-4 text-2xl font-semibold text-center text-white">Contact Us</h2>
                <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1 font-medium text-gray-200">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-medium text-gray-200">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-1 font-medium text-gray-200">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Your Message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"></textarea>
                </div>
                <button type="submit" className="w-full px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-white hover:text-orange-400 focus:outline-none focus:bg-blue-600">Send</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default ContactUs;
