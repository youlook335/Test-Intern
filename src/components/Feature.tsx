const Feature = () => {
    const features = [
        {
            icon: "🔥 ",
            title: "Seamless Connections",
            description: "Stay in touch with friends, family, and like-minded people with just a tap.",
        },
        {
            icon: "📸 ",
            title: "Share Your Story",
            description: "Upload photos, videos, and updates to let the world know what’s happening in your life.",
        },
        {
            icon: "💬 ",
            title: "Real-Time Chat",
            description: "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.",
        },
        {
            icon: "🛡️ ",
            title: "Privacy First",
            description: "Your data, your control. We prioritize your privacy with world-class security.",
        },
        {
            icon: "🌐 ",
            title: "Discover & Explore",
            description: "Find trending content, join communities, and follow pages that match your interests.",
        },
        {
            icon: "💼 ",
            title: "Grow Your Business",
            description: "Use our platform to market your brand, connect with customers, and build meaningful relationships.",
        },
    ];

    return (
        <>
            <div className="bg-gray-100 py-14 flex flex-col items-center text-center">
                <h1 className="pt-16 text-4xl font-bold">Features That Keep You Hooked!</h1>
                <p className="text-xl font-semibold mt-2">Meet, Chat, Share – Anytime, Anywhere!</p>
            </div>

            <div className=" bg-gray-100 py-16 pt-0 px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 text-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-xl p-6 transition hover:scale-105"
                    >
                        <h3 className="text-xl text-center font-bold mb-2 gap-2">
                            <span>{feature.icon}</span>
                            {feature.title}
                        </h3>
                        <p className=" text-center text-gray-700 font-semibold">{feature.description}</p>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Feature;