import React from "react";

const MoviesDetails = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/50 rounded-full"
        >
          ✕
        </button>

        <img
          src={movie.image?.original || movie.image?.medium}
          alt={movie.name}
          className="w-full h-48 sm:h-64 md:h-80 object-cover"
        />

        <div className="p-4 sm:p-6">
          <h2 className="text-2xl sm:text-3xl font-bold">{movie.name}</h2>

          <div className="flex flex-wrap gap-3 text-sm text-gray-400 mt-3">
            <span>⭐ {movie.rating?.average || "N/A"}</span>
            <span>{movie.premiered || "N/A"}</span>
            <span>{movie.language || "Unknown"}</span>
          </div>

          {movie.genres?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-2 py-1 bg-zinc-800 rounded text-xs"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5">
            <h3 className="text-lg font-semibold mb-2">Overview</h3>

            <div
              className="text-sm sm:text-base text-gray-400 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: movie.summary || "No overview available.",
              }}
            />
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 rounded text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;
