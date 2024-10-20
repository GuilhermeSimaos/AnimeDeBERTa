import React from 'react';
import '@fontsource/inter';
import './App.css'
import axios from 'axios'
import Input from '@mui/joy/Input/Input'
import Button from '@mui/joy/Button/Button';
import { Typography } from '@mui/joy';
import { Anime } from './Anime';
import {AnimeCard} from './AnimeCard';

function App() {
  const [data, setData] = React.useState<Anime[]>(); 

  const fetchRespose = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/get_num_animes/4');
      setData(response.data);
      console.log(JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      gap:'1rem'
    }}>
      <div 
        style={{
          display:'flex',
          flexDirection:'column',
          gap:'2rem',
          alignItems:'center'
        }}
      >
        <Typography sx={{fontStyle:'italic', fontSize:'11px'}}>Esse site foi desenvolvido como um projeto de TCC para a disciplina de Sistemas de Informação abordando conhecimentos de RI e Deep Learning</Typography>
        <Typography sx={{color:'whitesmoke', fontFamily:'monospace'}}>Pesquise pelo anime ou tente descrevê-lo abaixo</Typography>
      </div>
      <div className='searchBar'>
        <Input
          color="neutral"
          placeholder="Pesquisar por ..."
          size="lg"
          variant="outlined"
          sx={{
            width:'40rem',
            backgroundColor:'transparent',
            color:'white',
            border:'1px solid #474747',
            fontFamily:'monospace',
          }}
        />
        <Button
          onClick={()=>fetchRespose()}
          size="lg"
          variant="solid"
          color='primary'
        >
          Pesquisar
        </Button>
      </div>
      <div className='anime-catalog'>
        {data?.map((animeData,index)=>{
          console.log(`${animeData.name} | ${animeData.other_name} : ${animeData.image_url}`)
          return(<AnimeCard animeInfo={animeData} key={index}/>)
        })}
      </div>
    </div>
  )
}

export default App
