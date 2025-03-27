import Movie from '../components/Movie'

function Home() {

  return (
<section className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center p-6">
  <h1 className="text-4xl md:text-5xl font-bold mb-4">Welkom bij FilmGuru</h1>
  <p className="text-lg md:text-xl max-w-2xl">
    Welkom bij <span className="text-red-400 font-semibold">FilmGuru</span>, 
    de nummer 1 website voor het inzien van films.
  </p>
</section>
  )
}

export default Home
