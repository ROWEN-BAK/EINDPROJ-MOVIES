
import './App.css'
import Movie from './components/movie'

function App() {

  const movies = [
    {id: 1, title: 'Spidershit: Far from toilet', review:"6.5", genre:"Actie"},
    {id: 2, title: 'Jonkler: The Movie', review:"10", genre:"Musical"},
    {id: 3, title: 'Slow and Calm 10: Chinese driving in a controlled manner.', review:"10", genre:"educational"},
  ]


  return (
    <section>
      <h1>film</h1>
    {movies.map((movie) => (
      <Movie title={movie.title} review={movie.review} genre={movie.genre}/>
    ))}
    </section>
  )
}

export default App
