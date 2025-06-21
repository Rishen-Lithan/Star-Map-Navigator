import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Home = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    // Generate random stars on component mount
    useEffect(() => {
        const generateStars = () => {
            const starArray = [];
            for (let i = 0; i < 200; i++) {
                starArray.push({
                    id: i,
                    left: Math.random() * 100,
                    top: Math.random() * 100,
                    size: Math.random() * 3 + 1,
                    delay: Math.random() * 3,
                    duration: Math.random() * 2 + 2,
                });
            }
            setStars(starArray);
        };

        const generateMeteors = () => {
            const meteorArray = [];
            for (let i = 0; i < 8; i++) {
                meteorArray.push({
                    id: i,
                    delay: Math.random() * 10,
                    duration: Math.random() * 3 + 2,
                });
            }
            setMeteors(meteorArray);
        };
        
        generateStars();
        generateMeteors();
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 via-blue-900 to-black">
            <div className="fixed inset-0 z-0">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="absolute bg-white rounded-full animate-pulse"
                        style={{
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDelay: `${star.delay}s`,
                            animationDuration: `${star.duration}s`,
                            opacity: Math.random() * 0.8 + 0.2,
                        }}
                    />
                ))}
            </div>

            <div className="fixed inset-0 z-0">
                {meteors.map((meteor) => (
                    <div
                        key={meteor.id}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-0"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 50}%`,
                            animation: `meteor ${meteor.duration}s linear infinite`,
                            animationDelay: `${meteor.delay}s`,
                        }}
                    />
                ))}
            </div>

            <div className="fixed inset-0 z-0">
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 animate-bounce"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 8 + 3}px`,
                            height: `${Math.random() * 8 + 3}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 4 + 3}s`,
                        }}
                    />
                ))}
            </div>

            <div className="fixed top-0 right-0 border border-purple-400 rounded-full w-96 h-96 border-opacity-20 animate-spin opacity-30" 
                 style={{ animationDuration: '30s', transform: 'translate(25%, -25%)' }} />
            <div className="fixed bottom-0 left-0 border border-blue-400 rounded-full w-80 h-80 border-opacity-20 animate-spin opacity-20" 
                 style={{ animationDuration: '25s', animationDirection: 'reverse', transform: 'translate(-25%, 25%)' }} />
            <div className="fixed w-64 h-64 border border-pink-400 rounded-full top-1/2 left-1/2 border-opacity-10 animate-pulse"
                 style={{ transform: 'translate(-50%, -50%)' }} />

            <div className="fixed top-0 left-0 w-full h-full opacity-30">
                <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 blur-3xl opacity-20 animate-pulse" />
                <div className="absolute rounded-full bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600 to-teal-600 blur-3xl opacity-20 animate-pulse" 
                     style={{ animationDelay: '2s' }} />
                <div className="absolute rounded-full top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-indigo-600 to-purple-600 blur-3xl opacity-15 animate-pulse"
                     style={{ animationDelay: '4s' }} />
            </div>

            <div className="relative z-10">
                <nav className="p-4">
                    <div className="text-center text-white opacity-60">
                        <Navbar />
                    </div>
                </nav>
                
                <main className="flex flex-col items-center justify-center min-h-screen px-6">
                    <section className="max-w-6xl mx-auto text-center">
                        <div className="mb-8">
                            <div className="inline-block mb-6">
                                <div className="relative">
                                    <h1 className="mb-4 text-5xl tracking-wider text-transparent md:text-7xl lg:text-8xl font-extralight bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
                                        STARMAP
                                    </h1>
                                    <h2 className="text-3xl font-light tracking-widest text-white md:text-5xl lg:text-6xl opacity-90">
                                        NAVIGATOR
                                    </h2>
                                    <div className="absolute inset-0 text-5xl text-purple-400 md:text-7xl lg:text-8xl font-extralight blur-xl opacity-20 animate-pulse">
                                        STARMAP
                                    </div>
                                </div>
                            </div>
                            
                            <div className="relative">
                                <p className="mb-2 text-lg tracking-wide text-purple-200 md:text-xl lg:text-2xl opacity-80">
                                    Explore the Infinite Universe
                                </p>
                                <p className="text-sm tracking-widest text-purple-300 md:text-base opacity-60">
                                    Powered by NASA's Astronomical Data
                                </p>
                                
                                <div className="flex items-center justify-center mt-6 mb-8">
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                                    <div className="mx-4 text-purple-400">✨</div>
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                                </div>
                            </div>
                        </div>

                        <div className="grid max-w-4xl gap-6 mx-auto mb-12 md:grid-cols-3">
                            <div className="p-6 transition-all duration-500 transform bg-white border border-white bg-opacity-10 backdrop-blur-xl border-opacity-20 rounded-2xl hover:bg-opacity-15 hover:-translate-y-2 hover:scale-105">
                                <div className="mb-4 text-4xl">🌟</div>
                                <h3 className="mb-2 font-semibold text-white">Daily Discoveries</h3>
                                <p className="text-sm text-purple-200 opacity-80">Astronomy Picture of the Day</p>
                            </div>
                            <div className="p-6 transition-all duration-500 transform bg-white border border-white bg-opacity-10 backdrop-blur-xl border-opacity-20 rounded-2xl hover:bg-opacity-15 hover:-translate-y-2 hover:scale-105"
                                 style={{ animationDelay: '0.2s' }}>
                                <div className="mb-4 text-4xl">🚀</div>
                                <h3 className="mb-2 font-semibold text-white">Mars Exploration</h3>
                                <p className="text-sm text-purple-200 opacity-80">Latest Rover Images & Data</p>
                            </div>
                            <div className="p-6 transition-all duration-500 transform bg-white border border-white bg-opacity-10 backdrop-blur-xl border-opacity-20 rounded-2xl hover:bg-opacity-15 hover:-translate-y-2 hover:scale-105"
                                 style={{ animationDelay: '0.4s' }}>
                                <div className="mb-4 text-4xl">🪐</div>
                                <h3 className="mb-2 font-semibold text-white">Deep Space</h3>
                                <p className="text-sm text-purple-200 opacity-80">Near Earth Objects & Beyond</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <button 
                                onClick={() => {
                                    alert('Navigate to APOD page - Replace with your router navigation');
                                }}
                                className="relative px-12 py-4 overflow-hidden font-semibold text-white transition-all duration-500 transform cursor-pointer group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-2xl hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
                            >
                                    <div className="absolute inset-0 transition-all duration-700 transform -skew-x-12 opacity-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white to-transparent group-hover:opacity-30" />
                                    
                                    <span className="relative flex items-center space-x-3">
                                        <span className="tracking-wide">EXPLORE NOW</span>
                                        <span className="text-xl">🚀</span>
                                    </span>
                                </button>
                            
                            <button className="px-8 py-4 font-medium text-white transition-all duration-300 transform bg-white border border-white group bg-opacity-10 hover:bg-opacity-20 border-opacity-30 hover:border-opacity-50 rounded-2xl hover:-translate-y-1">
                                <span className="flex items-center space-x-2">
                                    <span>Learn More</span>
                                    <span className="transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                                </span>
                            </button>
                        </div>

                        <div className="flex items-center justify-center mt-16 mb-10 space-x-8 opacity-60">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">10M+</div>
                                <div className="text-sm text-purple-300">Images Explored</div>
                            </div>
                            <div className="w-px h-12 bg-purple-400 opacity-30" />
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">500K+</div>
                                <div className="text-sm text-purple-300">Daily Users</div>
                            </div>
                            <div className="w-px h-12 bg-purple-400 opacity-30" />
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">NASA</div>
                                <div className="text-sm text-purple-300">Powered</div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <style jsx>{`
                @keyframes meteor {
                    0% {
                        opacity: 0;
                        transform: translateX(-300px) translateY(-300px) scale(0);
                    }
                    10% {
                        opacity: 1;
                        transform: translateX(-200px) translateY(-200px) scale(1);
                    }
                    90% {
                        opacity: 1;
                        transform: translateX(200px) translateY(200px) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translateX(300px) translateY(300px) scale(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default Home;