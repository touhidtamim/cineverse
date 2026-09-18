import { useEffect, useState } from "react";
import MoviesDetails from "../../components/modal/MoviesDetails";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setMovies(data.slice(0, 60)));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchQuery.trim();

    if (!query) {
      fetch("https://api.tvmaze.com/shows")
        .then((res) => res.json())
        .then((data) => setMovies(data.slice(0, 60)));

      return;
    }

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.map((item) => item.show)));
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="mb-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">All Movies</h1>

        <p className="text-sm sm:text-base text-gray-400 mt-1">
          Explore movies and TV shows worth watching.
        </p>
      </div>

      <form onSubmit={handleSearch} className="flex max-w-2xl mx-auto mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="flex-1 min-w-0 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-l-lg focus:outline-none focus:border-red-600"
        />

        <button
          type="submit"
          className="cursor-pointer px-5 sm:px-6 py-3 bg-red-600 hover:bg-red-700 rounded-r-lg font-medium"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors"
          >
            <div className="relative">
              <img
                src={movie.image?.medium}
                alt={movie.name}
                className="w-full aspect-[2/3] object-cover"
              />

              <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded-md text-xs font-medium">
                ⭐ {movie.rating?.average || "N/A"}
              </div>
            </div>

            <div className="p-3 sm:p-4">
              <h2 className="font-semibold text-base sm:text-lg truncate">
                {movie.name}
              </h2>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mt-2">
                <span>{movie.premiered?.slice(0, 4) || "N/A"}</span>
                <span>•</span>
                <span>{movie.language || "Unknown"}</span>
              </div>

              {movie.genres?.length > 0 && (
                <p className="text-xs text-gray-500 mt-2 truncate">
                  {movie.genres.slice(0, 2).join(" • ")}
                </p>
              )}

              <button
                onClick={() => setSelectedMovie(movie)}
                className="cursor-pointer w-full mt-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <MoviesDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Movies;
