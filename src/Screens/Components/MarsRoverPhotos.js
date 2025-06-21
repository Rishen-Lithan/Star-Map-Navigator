import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import rateLimit from 'axios-rate-limit';

const MarsRoverPhotos = () => {
    const [posts, setPosts] = useState([]);

    // Adjust rate limit to avoid hitting the API too frequently
    const http = rateLimit(axios.create(), { maxRequests: 1, perMilliseconds: 2000 }); // Allow 1 request every 2 seconds

    useEffect(() => {
        http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=NAVCAM&api_key=C2lKjx9VbYX3UFvdg1yTpJj9z2XEhn2GU6XOtyZX')
            .then((response) => {
                console.log('Response: ', response.data);
                setPosts(response.data.photos.slice(0, 3)); // Display only the first 6 images
            })
            .catch((err) => {
                console.log('Error fetching data:', err);
            });
    }, []);

    return (
        <div className='container h-screen bg-black bg-center bg-cover md:min-h-screen'>
            <Navbar />
            <div className="text-center">
                <h1 className="mt-8 mb-12 text-3xl font-bold text-gray-300 md:text-center lg:text-center sm:text-3xl">Mars Rover Photos</h1>
            </div>
            <div className='grid gap-4 ml-2 mr-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {posts && posts.map((post) => (
                    <div key={post.id} className='w-full overflow-hidden bg-gray-100 border-r-2 rounded-lg shadow-lg sm:w-1/2 md:w-full'>
                        <img
                            src={post.img_src}
                            alt={post.rover.name}
                            className='object-cover w-full h-64 p-2 transition-transform duration-300 transform cursor-pointer hover:scale-110'
                        />
                        <div className='p-4'>
                            <h2 className='mb-2 text-lg font-bold'>Image ID : {post.id}</h2>
                            <p className='text-gray-800'>Camera : {post.camera.full_name} / Earth Date : {post.earth_date} Landing Date : {post.rover.landing_date} / Launch Date : {post.rover.launch_date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MarsRoverPhotos;
