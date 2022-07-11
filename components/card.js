import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../public/mouse.jpg';

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="mouse.jpg"
                alt="mouse redDragon"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Mouse Gamer Red Dragon
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Adaptado a tus movimientos
                    El mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Compartir</Button>
                <Button size="small">Leer más</Button>
            </CardActions>
        </Card>
    );
}