import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, User, AtSign, FileText, Rocket, Satellite, Globe } from 'lucide-react';
import Navbar from './Navbar';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-indigo-900'>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-20 left-10 animate-pulse"></div>
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full top-40 right-20 animate-pulse animation-delay-300"></div>
        <div className="absolute w-1 h-1 bg-indigo-400 rounded-full bottom-20 left-20 animate-pulse animation-delay-700"></div>
        <div className="absolute w-2 h-2 bg-blue-300 rounded-full bottom-40 right-10 animate-pulse animation-delay-1000"></div>
        <div className="absolute w-1 h-1 bg-purple-300 rounded-full top-1/2 left-1/4 animate-pulse animation-delay-500"></div>
        <div className="absolute w-1 h-1 bg-indigo-500 rounded-full top-1/3 right-1/3 animate-pulse animation-delay-800"></div>
      </div>

      <Navbar />

      <div className="relative z-10 px-4 pt-20 pb-12 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold md:text-6xl">
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text">
                  Get In Touch
                </span>
              </h1>
            </div>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Ready to explore the cosmos together? Reach out and let's discuss your next astronomical adventure
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="relative p-8 transition-all duration-500 border group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-white/10 rounded-3xl hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 opacity-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-3xl group-hover:opacity-100"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6 space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Send Message</h2>
                </div>

                <div className="space-y-6">
                  <div className="relative">
                    <label htmlFor="name" className="flex items-center mb-2 space-x-2 text-sm font-medium text-gray-300">
                      <User className="w-4 h-4 text-blue-400" />
                      <span>Full Name</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name" 
                      className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 border bg-gray-800/50 border-gray-600/50 rounded-xl focus:outline-none focus:border-blue-400 focus:bg-gray-700/50"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="flex items-center mb-2 space-x-2 text-sm font-medium text-gray-300">
                      <AtSign className="w-4 h-4 text-purple-400" />
                      <span>Email Address</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address" 
                      className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 border bg-gray-800/50 border-gray-600/50 rounded-xl focus:outline-none focus:border-purple-400 focus:bg-gray-700/50"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="flex items-center mb-2 space-x-2 text-sm font-medium text-gray-300">
                      <FileText className="w-4 h-4 text-indigo-400" />
                      <span>Message</span>
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your astronomical interests..." 
                      className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 border resize-none bg-gray-800/50 border-gray-600/50 rounded-xl focus:outline-none focus:border-indigo-400 focus:bg-gray-700/50"
                      required
                    />
                  </div>

                  <button 
                    type="button" 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Rocket className="w-5 h-5" />
                        <span>Launch Message</span>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative p-8 transition-all duration-500 border group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-white/10 rounded-3xl hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 opacity-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5 rounded-3xl group-hover:opacity-100"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6 space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600">
                      <Satellite className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start p-4 space-x-4 rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Email</h4>
                        <p className="text-gray-300">contact@cosmicexplorer.com</p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 space-x-4 rounded-xl bg-gradient-to-r from-purple-600/10 to-indigo-600/10">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Phone</h4>
                        <p className="text-gray-300">+1 (555) 123-SPACE</p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 space-x-4 rounded-xl bg-gradient-to-r from-indigo-600/10 to-blue-600/10">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Location</h4>
                        <p className="text-gray-300">Observatory District, Star City</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative p-8 transition-all duration-500 border group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-white/10 rounded-3xl hover:shadow-2xl hover:shadow-indigo-500/20">
                <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 opacity-0 bg-gradient-to-br from-indigo-600/5 to-blue-600/5 rounded-3xl group-hover:opacity-100"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4 space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Our Mission</h3>
                  </div>
                  <p className="leading-relaxed text-gray-300">
                    We're passionate about making space exploration accessible to everyone. Whether you're a seasoned astronomer or just starting your cosmic journey, we're here to guide you through the wonders of the universe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        
        .animation-delay-800 {
          animation-delay: 800ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;