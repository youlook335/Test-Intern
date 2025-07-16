const Donate = () => {
    return (
        <>
            <div className="bg-[#ff4d4d] rounded-lg text-white flex flex-col lg:flex-row items-center justify-between px-6 py-12 md:px-12 lg:px-20 gap-12">
                {/* Left Section */}
                <div className="text-center lg:text-left max-w-xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                        Be the Reason <br /> Someone Smiles Today!
                    </h1>
                    <p className="text-white/90 text-base sm:text-lg mb-6">
                        Your generosity can change lives – every donation brings hope, support,
                        and a brighter future. Give today and make a difference!
                    </p>
                    <button className="bg-gray-100 text-[#ff4d4d] px-6 py-3 font-semibold rounded-md hover:bg-gray-100 transition">
                        Donate Now
                    </button>
                </div>

                {/* Right Images */}
                <div className="relative flex items-end gap-4 justify-center">
                    <img
                        src="Stroke Body.png"
                        alt="Payment Method"
                        className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] shadow-xl translate-y-8 sm:translate-y-10 lg:translate-y-12"
                    />
                    <img
                        src="iPhone 14 Pro.png"
                        alt="Thank You"
                        className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] shadow-xl translate-y-8 sm:translate-y-10 lg:translate-y-12"
                    />
                </div>
            </div>
        </>
    )
}

export default Donate
