
import './App.css'
import Movie from './components/Movie'

function App() {

  const movies = [
    {id: 1, title: "Spiderman" , review: "6.5", genre:"actie"},
    {id: 2, title: "Batman" , review: "9.5", genre:"actie"},
    {id: 3, title: "Sneeuwitje" , review: "6.5", genre:"fantasy"}
  ]

  return (
    <section className='container'>
      <h1>Filmguru</h1>
     {movies.map((movie) => (
      <Movie title={movie.title} review={movie.review} genre={movie.genre}/>
     ))}
    </section>



  )
}

export default App
