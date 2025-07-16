
const Footer = () => {
  return (
    <>
    <footer className="bg-[#FF5247] py-10 rounded-t-2xl relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white font-bold text-2xl md:text-3xl leading-snug mb-6 md:mb-0">
          <p>Join the Fun – Download</p>
          <p>MyBindle Now!</p>
        </div>
        <div className="relative w-40 h-80 md:w-60 md:h-96">
          <img
            src="Group 1.png"
            alt="MyBindle App"
            className="rounded-md"
          />
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
