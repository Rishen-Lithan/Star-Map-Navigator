import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className='container h-screen bg-black bg-center bg-cover md:min-h-screen'>
            <Navbar />
            <main className='flex flex-col items-center justify-center md:mt-8'>
                <section className='px-6 mx-auto text-center mt-28'>
                    <div className="w-full">
                        <h1 className='mx-auto mb-4 text-3xl font-bold text-white md:mt-24 lg:mt-32 md:text-4xl lg:text-5xl sm:text-center'>Welcome to StarMap Navigator !!!</h1>
                    </div>
                </section>
                <button className='px-8 py-3 mt-4 text-white transition duration-300 ease-in-out bg-orange-400 rounded-md shadow-md md:px-12 md:mt-8 hover:bg-white hover:text-orange-400'>
                    <Link to='/Apod'>
                    Explore Now
                    </Link>
                </button>
            </main>
        </div>

    );
};

export default Home;
