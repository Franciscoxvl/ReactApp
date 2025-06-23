import { useState, useEffect } from 'react'

export function useCatImage ({ fact }){
  const [imageUrl, setimageUrl] = useState()

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

  return { imageUrl }
}
