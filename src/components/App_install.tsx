const App_install = () => {
  const cards = [
    {
      step: "01",
      title: "Download",
      description: "Open Play Store or App Store",
    },
    {
      step: "02",
      title: "Install App",
      description: "The app will install automatically.",
    },
    {
      step: "03",
      title: "Ready to Use",
      description: "Sign up or log in to start exploring!",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-12">
      {/* Top Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">
          How to Install Our App
        </h1>
        <p className="mt-4 text-lg text-gray-700 font-medium">
          Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 border-t-2 border-separate border-gray-300 z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {cards.map((card, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className="bg-red-500 text-white font-bold text-xl w-12 h-12 flex items-center justify-center rounded-full shadow-md z-20 mb-[-20px]">
                {card.step}
              </div>

              {/* Card Box */}
              <div className="bg-gray-100 py-10 rounded-xl shadow-lg text-center w-full mt-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h2>
                <p className="text-gray-700 font-medium">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App_install;
