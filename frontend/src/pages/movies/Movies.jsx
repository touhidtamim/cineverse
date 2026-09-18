import { useEffect, useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setMovies(data.slice(0, 80)));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-zinc-900 rounded-lg overflow-hidden"
          >
            <img
              src={movie.image?.medium}
              alt={movie.name}
              className="w-full aspect-[2/3] object-cover"
            />

            <div className="p-3">
              <h2 className="font-semibold truncate">{movie.name}</h2>

              <p className="text-sm text-gray-400 mt-1">
                {movie.premiered?.slice(0, 4) || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
