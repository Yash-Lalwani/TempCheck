import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({ info }) {
    const INIT_URL = "https://media.istockphoto.com/id/1444874418/photo/smoky-mountains-snow.webp?a=1&b=1&s=612x612&w=0&k=20&c=0U7bwO2_N0EWK3uXLgOv0x8-GEPTm66CCI7Z_tRkE0M=";
    
    const HOT_URL = "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";
    const COLD_URL = "https://images.unsplash.com/photo-1548320588-3f74b192889a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1164520030/photo/rain-on-umbrella-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=956PGzmeuwcAxXARRp8qp99MeVAMZIhAzi5WxGb_ki0=";
    return (
        <div className = "InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        {
                            info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
                        }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>
                            The weather can be described as <i><b>{info.weather}</b></i> and feels like {info.feelslike}&deg;C
                        </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
        
    );
}