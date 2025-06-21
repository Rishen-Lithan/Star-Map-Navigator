import React, { useState, useEffect } from 'react';

const AstronomyLogin = () => {
  const [stars, setStars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Generate random stars on component mount
  useEffect(() => {
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 150; i++) {
        starArray.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 2,
        });
      }
      setStars(starArray);
    };
    
    generateStars();
  }, []);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      alert('🚀 Successfully connected to NASA Portal!\nWelcome to the cosmic experience!');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
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
              animationDuration: '2s',
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full bg-opacity-10 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`,
            }}
          />
        ))}
      </div>

      <div className="fixed top-0 right-0 border border-white rounded-full w-96 h-96 border-opacity-10 animate-spin" 
           style={{ animationDuration: '20s', transform: 'translate(50%, -50%)' }} />
      <div className="fixed bottom-0 left-0 border border-purple-400 rounded-full w-72 h-72 border-opacity-20 animate-spin" 
           style={{ animationDuration: '15s', animationDirection: 'reverse', transform: 'translate(-50%, 50%)' }} />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          <div className="p-8 transition-all duration-700 transform bg-white border border-white shadow-2xl bg-opacity-10 backdrop-blur-2xl border-opacity-20 rounded-3xl hover:scale-105">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-t-3xl animate-pulse" />
            
            <div className="mb-8 text-center">
              <div className="relative inline-block">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 animate-pulse">
                  <div className="text-4xl">🚀</div>
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-xl opacity-30 animate-ping" />
              </div>
              
              <h1 className="mb-2 text-4xl font-light tracking-widest text-white">
                STARMAP
              </h1>
              <h2 className="text-2xl tracking-wider text-purple-200 font-extralight">
                NAVIGATOR
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mt-4" />
            </div>

            <p className="mb-8 text-sm tracking-wide text-center text-purple-200 opacity-80">
              Explore the Universe with NASA's API
            </p>

            <div className="space-y-6">
              <button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="relative w-full p-4 overflow-hidden transition-all duration-300 transform bg-white border border-white group bg-opacity-10 hover:bg-opacity-20 border-opacity-30 hover:border-opacity-50 rounded-2xl hover:-translate-y-1 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 transform -skew-x-12 opacity-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white to-transparent group-hover:opacity-20 group-hover:animate-pulse" />
                
                <div className="relative flex items-center justify-center space-x-4">
                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white rounded-full border-t-transparent animate-spin" />
                      <span className="font-medium tracking-wide text-white">
                        Connecting to NASA...
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      </div>
                      <span className="font-medium tracking-wide text-white">
                        Continue with Google
                      </span>
                      <div className="text-white">🌟</div>
                    </>
                  )}
                </div>
              </button>

              <div className="flex items-center justify-center space-x-4 opacity-60">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-400" />
                <div className="text-xs tracking-widest text-purple-300">SECURE</div>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-purple-400" />
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs tracking-wide text-purple-300 opacity-70">
                By continuing, you agree to NASA's Terms of Service
              </p>
              <div className="flex justify-center mt-4 space-x-6">
                <a href="#" className="text-xs tracking-wide text-purple-300 transition-colors duration-300 hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs tracking-wide text-purple-300 transition-colors duration-300 hover:text-white">
                  Support
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm tracking-widest text-purple-400 opacity-60">
              ✨ DISCOVER • EXPLORE • INNOVATE ✨
            </p>
          </div>
        </div>
      </div>

      <div className="fixed w-2 h-2 bg-blue-400 rounded-full opacity-50 top-1/4 left-1/4 animate-ping" />
      <div className="fixed w-1 h-1 bg-purple-300 rounded-full top-3/4 right-1/3 animate-pulse opacity-60" />
      <div className="fixed w-3 h-3 bg-pink-400 rounded-full bottom-1/4 left-1/2 animate-bounce opacity-40" 
           style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default AstronomyLogin;