import React, { useState, useEffect } from 'react';
import axios from 'axios';
import rateLimit from 'axios-rate-limit';
import Navbar from './Navbar';
import { Calendar, Image, ExternalLink, Download, Info } from 'lucide-react';

const Apod = () => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const http = rateLimit(axios.create(), { maxRequests: 1, perMilliseconds: 1000 });

    useEffect(() => {
        http.get('https://api.nasa.gov/planetary/apod?api_key=C2lKjx9VbYX3UFvdg1yTpJj9z2XEhn2GU6XOtyZX')
            .then((response) => {
                console.log(response.data);
                setPost(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            })
    }, []);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
                <div className="text-center">
                    <div className="relative">
                        <div className="w-16 h-16 border-4 border-blue-400 rounded-full border-t-transparent animate-spin"></div>
                        <div className="absolute inset-0 w-16 h-16 border-4 border-purple-400 rounded-full border-b-transparent animate-spin animation-delay-150"></div>
                    </div>
                    <p className="mt-4 text-lg text-white/70">Loading cosmic wonders...</p>
                </div>
            </div>
        );
    }

    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-20 left-10 animate-pulse"></div>
                <div className="absolute w-1 h-1 bg-purple-400 rounded-full top-40 right-20 animate-pulse animation-delay-300"></div>
                <div className="absolute w-1 h-1 bg-pink-400 rounded-full bottom-20 left-20 animate-pulse animation-delay-700"></div>
                <div className="absolute w-2 h-2 bg-blue-300 rounded-full bottom-40 right-10 animate-pulse animation-delay-1000"></div>
            </div>

            <Navbar />

            <div className="relative z-10 px-4 pt-20 pb-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
                                Astronomy Picture
                            </span>
                            <br />
                            <span className="text-white">of the Day</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-gray-300">
                            Discover the cosmos through daily featured images from NASA's vast collection
                        </p>
                    </div>

                    <div className="grid items-start gap-12 lg:grid-cols-2">
                        <div className="relative group">
                            <div className="relative p-1 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                                <div className="relative overflow-hidden bg-black rounded-xl">
                                    {!imageLoaded && (
                                        <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-xl"></div>
                                    )}
                                    <img
                                        src={post.url}
                                        alt={post.title}
                                        className={`w-full h-auto rounded-xl transition-all duration-700 ${
                                            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                        } group-hover:scale-105`}
                                        onLoad={handleImageLoad}
                                    />
                                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100 rounded-xl">
                                        <div className="absolute flex items-center justify-between bottom-4 left-4 right-4">
                                            <div className="flex space-x-2">
                                                <button className="p-2 transition-colors rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30">
                                                    <Download className="w-5 h-5 text-white" />
                                                </button>
                                                <button className="p-2 transition-colors rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30">
                                                    <ExternalLink className="w-5 h-5 text-white" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl">
                                    {post.title}
                                </h2>
                                {post.copyright && (
                                    <p className="text-sm text-gray-400">
                                        © {post.copyright}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 border bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-white/10 rounded-xl">
                                    <div className="flex items-center mb-2 space-x-2">
                                        <Calendar className="w-5 h-5 text-blue-400" />
                                        <span className="text-sm text-gray-300">Date</span>
                                    </div>
                                    <p className="text-lg font-semibold text-white">{post.date}</p>
                                </div>
                                <div className="p-4 border bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-white/10 rounded-xl">
                                    <div className="flex items-center mb-2 space-x-2">
                                        <Image className="w-5 h-5 text-purple-400" />
                                        <span className="text-sm text-gray-300">Media Type</span>
                                    </div>
                                    <p className="text-lg font-semibold text-white capitalize">{post.media_type}</p>
                                </div>
                            </div>

                            <div className="p-6 border bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-white/10 rounded-xl">
                                <div className="flex items-center mb-4 space-x-2">
                                    <Info className="w-5 h-5 text-blue-400" />
                                    <h3 className="text-lg font-semibold text-white">Description</h3>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                                    {showFullDescription 
                                        ? post.explanation 
                                        : truncateText(post.explanation, 200)
                                    }
                                </p>
                                {post.explanation && post.explanation.length > 200 && (
                                    <button
                                        onClick={() => setShowFullDescription(!showFullDescription)}
                                        className="mt-4 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                                    >
                                        {showFullDescription ? 'Show Less' : 'Read More'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Apod;
