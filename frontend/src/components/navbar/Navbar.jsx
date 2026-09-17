import movieLogo from "../../assets/logo/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/*Logo and Title*/}
        <div className="flex items-center gap-1">
          <div className="w-9 h-9 rounded-lg overflow-hidden">
            <img
              src={movieLogo}
              alt="CineVerse logo"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-2xl font-bold text-white">
            Cine<span className="text-red-500">Verse</span>
          </h1>
        </div>

        {/*Navigation*/}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-white hover:text-red-500 transition">
            Home
          </a>
          <a
            href="/movies"
            className="text-zinc-400 hover:text-white transition"
          >
            Movies
          </a>
          <a
            href="/genres"
            className="text-zinc-400 hover:text-white transition"
          >
            Genres
          </a>
          <a
            href="/trending"
            className="text-zinc-400 hover:text-white transition"
          >
            Trending
          </a>
        </div>

        {/*CTA */}
        <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium transition">
          Explore Movies
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
