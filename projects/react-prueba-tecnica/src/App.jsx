import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

//const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${firstWord}?size]=50&color=red&json=true`

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact() 
  }

  return (
    <main>
      <h1>App</h1>
      <button onClick={ handleClick }>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using first three words for ${fact}`} />}
    </main>
  )
}
