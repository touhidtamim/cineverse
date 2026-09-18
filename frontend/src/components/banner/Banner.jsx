import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">DISCOVER MOVIES</h1>
        <p className="text-xl text-gray-200 mb-8">
          Explore and discover your favorite movies and TV shows from around the
          world.
        </p>
        <Link
          to="/movies"
          className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all shadow-lg"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
