const About = () => {
  return (
    <section className="px-16 py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* 👈 Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <img src="about.png" alt="About" className="w-full h-auto rounded-xl" />
        </div>

        {/* 👉 Right Side - Text and Cards */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Where Every Click Sparks a Connection!
            </h1>
            <p className="text-gray-700 font-medium">
              A small act of kindness today can create a lifetime of impact for someone in need.
              Give from the heart and change a life!
            </p>
          </div>

          {/* 🔽 Cards Stack Vertically */}
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold mb-2">🎥 Short Videos & Reels</h2>
              <p className="text-gray-700 font-medium">
                Share engaging, bite-sized content that keeps everyone entertained.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold mb-2">🔔 Smart Notifications</h2>
              <p className="text-gray-700 font-medium">
                Stay updated on what matters without the noise.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold mb-2">👥 Interest-Based Communities</h2>
              <p className="text-gray-700 font-medium">
                Join groups and discussions that match your passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
