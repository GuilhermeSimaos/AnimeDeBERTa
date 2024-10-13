import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(undefined)

  const fetchRespose = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/get_all_animes');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  //useEffect(()=>{fetchRespose()},[])

  const AnimeCard = (
    <div className='card'>
      <div className='card-title'>
        <h3>{/*titulo principal */}Anime title</h3>
        <p>{/*titulo secundario */}other name</p>
      </div>
      <div className='card-body'>
        imagem{/*imagem */}
      </div>
      <div className='card-footer'>
        <input type='button' value="Detalhes"/>
      </div>
    </div>
  )

  return (
    <body>
      <div className='logo'>
        <h2>Logo</h2>
      </div>
      <div className='site-info'>
        <p className='site-subinfo'>
          Esse site é resultado de um TCC com foco em Recuperação de Informação e Transformers
        </p>
        <p className='site-instructions'>
          Encontre o anime pelo título ou tente descrevê-lo
        </p>
      </div>
      <div className='searchBar'>
        <input type="text" className='textInput' width={100} placeholder='Pesquisar por ...'/>
        <input type="button" className='btnInput' value="Pesquisar" />
      </div>
      <div className='anime-catalog'>
        {AnimeCard}
        {AnimeCard}
        {AnimeCard}
        {AnimeCard}
        {AnimeCard}
        {AnimeCard}
        {AnimeCard}
        {AnimeCard}
        {AnimeCard}
        {AnimeCard}
        {AnimeCard}
        {AnimeCard}
        {AnimeCard}
        {AnimeCard}
      </div>
    </body>
  )
}

export default App
