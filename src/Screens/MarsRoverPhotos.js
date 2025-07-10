import React, { useState, useEffect } from 'react';
import { Calendar, Camera, MapPin, Rocket, Telescope, Zap } from 'lucide-react';
import Navbar from './Navbar';

const PhotoCard = ({ photo, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div 
            className={`relative group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 ${
                index % 2 === 0 ? 'animate-fade-in-up' : 'animate-fade-in-down'
            }`}
            style={{ animationDelay: `${index * 200}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden">
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
                )}
                <img
                    src={photo.img_src}
                    alt={`Mars surface captured by ${photo.rover.name}`}
                    className={`w-full h-64 object-cover transition-all duration-700 ${
                        imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    } group-hover:scale-110`}
                    onLoad={handleImageLoad}
                />
                
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                    <div className="absolute flex items-center justify-between bottom-4 left-4 right-4">
                       
                        <div className="px-2 py-1 text-xs font-bold text-white bg-blue-600 rounded-lg">
                            SOL {photo.sol}
                        </div>
                    </div>
                </div>

                <div className="absolute top-4 right-4">
                    <div className="flex items-center px-2 py-1 space-x-1 text-xs font-semibold text-white bg-green-500 rounded-full">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span>{photo.rover.status}</span>
                    </div>
                </div>
            </div>

            <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
                            <Camera className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Image #{photo.id}</h3>
                            <p className="text-sm text-gray-400">{photo.rover.name} Rover</p>
                        </div>
                    </div>
                </div>

                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10">
                    <div className="flex items-center mb-2 space-x-2">
                        <Telescope className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-semibold text-blue-400">Camera</span>
                    </div>
                    <p className="font-medium text-white">{photo.camera.full_name}</p>
                    <p className="text-sm text-gray-400">{photo.camera.name}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                        <div className="flex items-center mb-1 space-x-1">
                            <Calendar className="w-3 h-3 text-blue-400" />
                            <span className="text-xs font-medium text-blue-400">Earth Date</span>
                        </div>
                        <p className="text-sm font-semibold text-white">{photo.earth_date}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-indigo-500/10">
                        <div className="flex items-center mb-1 space-x-1">
                            <MapPin className="w-3 h-3 text-purple-400" />
                            <span className="text-xs font-medium text-purple-400">Sol Day</span>
                        </div>
                        <p className="text-sm font-semibold text-white">{photo.sol}</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-1">
                            <Rocket className="w-3 h-3 text-purple-400" />
                            <span className="text-purple-400">Launch</span>
                        </div>
                        <span className="text-gray-300">{photo.rover.launch_date}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-1">
                            <Zap className="w-3 h-3 text-blue-400" />
                            <span className="text-blue-400">Landing</span>
                        </div>
                        <span className="text-gray-300">{photo.rover.landing_date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


const MarsRoverPhotos = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=NAVCAM&api_key=C2lKjx9VbYX3UFvdg1yTpJj9z2XEhn2GU6XOtyZX')
            .then(response => response.json())
            .then((data) => {
                console.log('Response: ', data);
                setPosts(data.photos.slice(0, 3));
                setLoading(false);
            })
            .catch((err) => {
                console.log('Error fetching data:', err);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-indigo-900">
                <div className="text-center">
                    <div className="relative">
                        <div className="w-16 h-16 border-4 border-blue-400 rounded-full border-t-transparent animate-spin"></div>
                        <div className="absolute inset-0 w-16 h-16 border-4 border-purple-400 rounded-full border-b-transparent animate-spin animation-delay-150"></div>
                    </div>
                    <p className="mt-4 text-lg text-white/70">Exploring Mars surface...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-indigo-900">
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
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <div className="flex items-center justify-center mb-6">
                            <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
                                <Camera className="w-6 h-6 text-white" />
                            </div>
                            <h1 className="text-4xl font-bold md:text-6xl">
                                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text">
                                    Mars Rover
                                </span>
                                <br />
                                <span className="text-white">Photo Gallery</span>
                            </h1>
                        </div>
                        <p className="max-w-2xl mx-auto text-lg text-gray-300">
                            Explore the Red Planet through the lens of NASA's Curiosity rover, capturing the Martian landscape in stunning detail
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
                        <div className="p-6 text-center border bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm border-white/10 rounded-xl">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
                                <Rocket className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-white">Mission Duration</h3>
                            <p className="text-gray-300">Active since 2012</p>
                        </div>
                        <div className="p-6 text-center border bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-white/10 rounded-xl">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-white">Location</h3>
                            <p className="text-gray-300">Gale Crater, Mars</p>
                        </div>
                        <div className="p-6 text-center border bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border-white/10 rounded-xl">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500">
                                <Telescope className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-white">Camera Type</h3>
                            <p className="text-gray-300">Navigation Camera</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((photo, index) => (
                            <PhotoCard key={photo.id} photo={photo} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fade-in-down {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out forwards;
                    opacity: 0;
                }
                
                .animate-fade-in-down {
                    animation: fade-in-down 0.6s ease-out forwards;
                    opacity: 0;
                }
                
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
}

export default MarsRoverPhotos;