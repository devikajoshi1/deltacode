import React from 'react'
import './InfoBox.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
const InfoBox = ( {info} ) => {
    const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    
    const HOT_URL = "https://images.unsplash.com/photo-1652442808708-6511a4e51e8e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"; 

    const RAIN_URL = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"; 

    return (
        <div className='infoBox '>
            
             <div className='cardContainer'>
            <Card sx={{ maxWidth: 345  }}>
               
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_URL :  info.temp > 15 ?HOT_URL :COLD_URL }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{info.humidity > 80 ?<ThunderstormIcon/>  :  info.temp > 15 ?<SunnyIcon/>  :<AcUnitIcon/> }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {info.temp}&deg;C </p>
                        <p>humidity = {info.humidity}</p>
                        <p>Min Temperature  = {info.tempMin}&deg;C</p>
                        <p>Max Temperature  = {info.tempMax}&deg;C</p>
                        <p>Feels Like =  {info.feelsLike}&deg;C</p>
                        
                    </Typography>
                </CardContent>
                
            </Card>
            </div>
        </div>
    )
}

export default InfoBox
