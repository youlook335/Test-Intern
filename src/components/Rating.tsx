
type Testimonial = {
    name: string;
    country: string;
    review: string;
    image: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Emily R",
        country: "USA",
        review:
            "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        name: "Amit K",
        country: "India",
        review:
            "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        name: "Sophie M",
        country: "UK",
        review:
            "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!",
        image: "https://randomuser.me/api/portraits/women/48.jpg",
    },
    {
        name: "Javier L",
        country: "Spain",
        review:
            "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
        name: "Lucas T",
        country: "Brazil",
        review:
            "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
        image: "https://randomuser.me/api/portraits/men/58.jpg",
    },
    {
        name: "Nora S",
        country: "Canada",
        review:
            "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
];

const Rating = () => {
    return (
        <section className="py-10 px-4 md:px-20 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((user, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 shadow-md rounded-xl p-5 text-left hover:shadow-lg transition"
                    >
                        <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
                        <p className="text-gray-700 mb-4">{user.review}</p>
                        <div className="flex items-center gap-3">
                            <img
                                src={user.image}
                                alt={user.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="font-semibold">{user.name}</h4>
                                <p className="text-sm text-gray-500">{user.country}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="drop-shadow-lg mt-8 px-12 py-3 bg-gray-100  text-red-600">
                See More
            </button>
        </section>
    );
};

export default Rating;
