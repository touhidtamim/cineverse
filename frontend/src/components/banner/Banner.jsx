import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative min-h-[70vh] md:h-[80vh] flex items-center justify-center bg-gray-900 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070')",
        }}
      ></div>

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-5 md:mb-6">
          YOUR NEXT MOVIE AWAITS
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-7 md:mb-8">
          Discover great movies, explore new stories, and find something worth
          watching.
        </p>

        <Link
          to="/movies"
          className="inline-block bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all shadow-lg"
        >
          Explore Movies
        </Link>
      </div>
    </div>
  );
};

export default Banner;
