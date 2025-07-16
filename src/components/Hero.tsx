import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      {/* Logo */}
      <div className="bg-[#FF4C41] py-4 flex items-center justify-center">
        <img src="logo.png" alt="Mybindle Logo" className="w-10 h-10  mr-2" />
        <h2 className="text-white text-2xl font-bold font-poppins">Mybindle</h2>
      </div>

      <section className="bg-[#FF4C41] flex items-center justify-center px-14 ">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2  items-center">
          {/* Left Side */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">
              Stay Connected<br />
              Stay Social<br />
              Stay You!
            </h1>
            <p className="text-lg leading-relaxed max-w-md">
              A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you – MyBindle is your home on the internet.
            </p>
            <button className="bg-white text-[#FF4C41] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
              Get Started
            </button>
          </div>

          {/* Right Side */}

          <div className="relative flex justify-center items-center translate-y-[100px] z-10">
            {/* Left Tag */}
            <div className="absolute left-[20px] md:left-[60px] top-16 bg-white text-gray-800 px-7 py-7 rounded-xl shadow-md flex items-center gap-2 text-sm font-medium z-20 h-[50px]">
              <span>🔥</span>
              Seamless Connections
            </div>

            {/* Right Tag */}
            <div className="absolute right-[20px] md:right-[120px] bottom-[160px] bg-white text-gray-800 px-7 py-7 rounded-xl shadow-md flex items-center gap-2 text-sm font-medium z-20 h-[50px]">
              <span>🌐</span>
              Discover & Explore
            </div>

            <img
              src="Group 1.png"
              alt="Phone UI"
              className="w-[320px] md:w-[360px] z-10"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;