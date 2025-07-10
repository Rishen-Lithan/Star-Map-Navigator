import React, { useState, useEffect } from 'react';
import { Star, Menu, X, Home, Camera, Mail, Sparkles } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/Home', icon: Home },
        { name: 'APOD', path: '/Apod', icon: Star },
        { name: 'Rover Images', path: '/Mars', icon: Camera },
        { name: 'Contact', path: '/Contact', icon: Mail },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        }`}>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <div className="relative">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600">
                                <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <div className="absolute w-3 h-3 bg-orange-400 rounded-full -top-1 -right-1 animate-pulse"></div>
                        </div>
                        <span className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                            StarMap Navigator
                        </span>
                    </div>

                    <div className="items-center hidden space-x-1 md:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
                                className="flex items-center px-4 py-2 space-x-2 text-sm font-medium text-gray-300 transition-all duration-200 rounded-lg hover:text-white hover:bg-white/10 group"
                            >
                                <item.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                                <span>{item.name}</span>
                            </a>
                        ))}
                        
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-gray-300 transition-colors rounded-lg md:hidden hover:text-white hover:bg-white/10"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            <div className={`md:hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden bg-black/90 backdrop-blur-xl border-t border-white/10`}>
                <div className="px-4 py-2 space-y-1">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.path}
                            className="flex items-center px-3 py-3 space-x-3 text-gray-300 transition-all duration-200 rounded-lg hover:text-white hover:bg-white/10"
                        >
                            <item.icon className="w-5 h-5" />
                            <span>{item.name}</span>
                        </a>
                    ))}
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar