import Movie from '../components/Movie'


function Home() {

  return (
<section className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center p-6">
  <h1 className="text-4xl md:text-5xl font-bold mb-4">Welkom bij FilmGuru</h1>
  <p className="text-lg md:text-xl max-w-2xl">
    Welkom bij <span className="text-red-400 font-semibold">FilmGuru</span>, 
    de nummer 1 website voor het inzien van films.
  </p>

  <div className='moviesContainer w-full flex justify-evenly m-6 '>
  <Movie title="Spiderman" genre="actie" review="9.6" image=""/>
  <Movie title="The Hobbit" genre="fantasy" review="8.5" image=""/>
  <Movie title="The Dark Knight" genre="actie" review="9.3" image=""/>
  </div>

  <div className='CatalogRoute flex justify-center'>
  <a href="
  /catalog" class="bg-red-500 hover:bg-red-700 ... rounded m-8 p-5">Go to catalog</a>
  </div>

  {/* vul het bovenste component aan met review, image. Zorg dat het nu op het scherm komt te staan.
  nu je de data hebt, is het de bedoeling dat je de movie styled. De styling doe je in Movies.jsx */}
</section>
  )
}

export default Home
