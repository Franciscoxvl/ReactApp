import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${firstWord}?size]=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setimageUrl] = useState()
  
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        
      }) 
  } , [])

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3).join(' ')
    console.log(firstWord)
    fetch(`https://cataas.com/cat/says/${firstWord}?size]=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        console.log(response.url)
        const url = response.url
        setimageUrl(url)
      }) 

  }, [fact])

  return (
    <main>
      <h1>App</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using first three words for ${fact}`} />}
    </main>
  )
}
