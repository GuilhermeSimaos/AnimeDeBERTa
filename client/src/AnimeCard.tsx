import { Card, Typography, AspectRatio, CardContent, Button } from "@mui/joy";
import { Anime } from "./Anime";

export type AnimeCardProps = {
    animeInfo: Anime;
}

const AnimeCard = (props: AnimeCardProps) => {
    return (
      <div onClick={()=>{}}>
      <Card 
        sx={{ 
          width: 320,
          backgroundColor: '#252525', 
          cursor:'pointer', 
          transition: 'background-color 0.25s ease-in-out',
          ':hover':{
            backgroundColor:'rgba(0,0,0,0.5)', 
            transition: 'background-color 0.25s ease-in-out'
          }}} 
        color='neutral'
        variant='soft'  
      >
      <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <Typography level="title-lg" sx={{color:'#c1c1c1'}}>{props.animeInfo.name}</Typography>
        <Typography level="body-sm">{props.animeInfo.other_name}</Typography>
      </div>
      <AspectRatio minHeight="335px" ratio={45/67}>
        <img
          style={{objectFit:'contain'}}
          src={props.animeInfo.image_url}
          srcSet={`${props.animeInfo.image_url} 2x`}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="View Anime Details"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Detalhes
        </Button>
      </CardContent>
    </Card>
    </div>
    )
  }

export {AnimeCard}