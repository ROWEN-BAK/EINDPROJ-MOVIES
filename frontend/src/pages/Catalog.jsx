import { useState } from "react";

const Catalog = () => {
    return (  
<section className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center p-6">
  <h1 className="text-4xl md:text-5xl font-bold mb-4">Onze Catalogus</h1>
  <p className="text-lg md:text-xl max-w-2xl">
   Op deze pagina kunt uw onze prachtige en <span className="text-red-400 font-semibold">sappige </span>
    catalogus van films inzien.
  </p>
</section>
    );
}
 
  const [selectedGenre, setSelectedGenre] = useState("All");

  // Placeholders totdat mongoDB is verwerkt
  const genres = ["Alle", "Genre1", "Genre2", "Genre3", "Genre4", "Dit zijn placeholders"];


  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    console.log(`Selected Genre: ${genre}`);
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Onze Catalogus</h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        Op deze pagina kunt u onze prachtige en
        <span className="text-yellow-400 font-semibold"> sappige </span>
        catalogus van films inzien.
      </p>

      {/* Genre Filter */}
      <div className="mb-6">
        <span className="text-lg font-semibold">Filter by Genre: </span>
        <div className="inline-flex gap-4">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => handleGenreChange(genre)}
              className={`px-4 py-2 rounded-md text-white ${selectedGenre === genre ? 'bg-yellow-400' : 'bg-gray-700'} hover:bg-gray-600 transition`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Movie Placeholder */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 transition transform duration-200 cursor-pointer"
          >
            <div className="bg-gray-700 h-48 rounded-md mb-4 hover:opacity-80"></div>
            <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-600 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
