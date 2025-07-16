import './App.css'
import withResults from './mocks/with-results.json'
import withoutResults from './mocks/no-result.json'

function App () {
  const results = withResults.Search
  const hasMovies = results?.length > 0
  return (
    <div>
      <header>
        <h1 style={{ textAlign: 'center' }}>Buscador de peliculas</h1>
        <form className='form' action="">
          <input placeholder='Avengers, StarWars, Titanic .....' type="text" />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main style={{ padding: '1rem', textAlign: 'center' }}>
        {
          hasMovies ? (
            <ul>
              {
                results.map(movie => (
                  <li key={movie.imdbID} style={{ display: 'inline-block', margin: '1rem' }}>
                    <h3>{movie.Title}</h3>
                    <h3>{movie.Year}</h3>
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                )
                )
              }
            </ul>            
          ) 
            : (
              <p>No se encontraron resultados</p>
            )
        } 
      </main>
    </div>
  )
}

export default App
