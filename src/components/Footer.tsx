const Footer = () => {
  return (
    <footer className="bg-[#FF5247] pt-10 rounded-t-2xl relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

        <div className="text-white font-bold text-2xl md:text-3xl leading-snug text-center md:text-left">
          <p>Join the Fun – Download</p>
          <p>MyBindle Now!</p>
        </div>

        <div className="w-60 h-28 md:w-80 md:h-36 overflow-hidden rounded-md">
          <img
            src="Group 1.png"
            alt="MyBindle App"
            className="object-cover object-top w-full h-full"
          />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
