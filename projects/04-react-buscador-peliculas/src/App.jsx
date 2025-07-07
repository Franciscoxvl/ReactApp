import './App.css'

function App () {

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
        Aqui iran los resultados de la busqueda
      </main>
    </div>
  )
}

export default App
