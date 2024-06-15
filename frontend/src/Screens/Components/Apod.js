import React, { useState, useEffect } from 'react';
import axios from 'axios';
import rateLimit from 'axios-rate-limit';
import Navbar from './Navbar';
import APOD_URL from '../../Config/API';

const Apod = () => {
    const [post, setPost] = useState({});

    // Creating an axios instance with rate limiting
    const http = rateLimit(axios.create(), { maxRequests: 1, perMilliseconds: 1000 });

    useEffect(() => {
        // Using the rate-limited axios instance
        http.get('https://api.nasa.gov/planetary/apod?api_key=C2lKjx9VbYX3UFvdg1yTpJj9z2XEhn2GU6XOtyZX')
            .then((response) => {
                console.log(response.data);
                setPost(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
      <div className='container min-h-screen bg-black bg-center bg-cover md:min-h-screen'>
        <Navbar className="relative z-20" />
        <div className='relative z-10 px-2 pt-5 text-center md:container md:text-left'>
          <div className='relative items-center pt-6 md:flex md:justify-between'>
            <div className='mx-auto md:w-[40%] w-[70%] md:px-2 z-10'>
              <img src={post.url} alt="Astronomy Picture of the Day" className='w-full transition-transform duration-300 transform rounded-md cursor-pointer h-96 hover:scale-110' />
            </div>
            <div className='mt-8 md:w-1/2'>
              <h1 className='w-full pb-2 text-3xl text-white'>{post.title}</h1>
              <p className='text-[#d2d8f9] font-light text-sm md:w-2/3 md:pl-1 pb-10 leading-6 tracking-wide border-b-[0.5px] border-[#ffffff66]'>{post.explanation}</p>
              <div className='flex justify-around w-auto pt-10 md:justify-between lg:w-1/2'>
                <div>
                  <span className='text-sm text-white'>Date</span>
                    <h1 className='text-xl text-white'>{post.date}</h1>
                </div>
                <div className='mb-4'>
                  <span className='text-sm text-white'>Media Type</span>
                      <h1 className='text-xl text-white capitalize'>{post.media_type}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Apod;
