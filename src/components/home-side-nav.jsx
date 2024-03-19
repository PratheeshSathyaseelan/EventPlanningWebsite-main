import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link , useNavigate } from 'react-router-dom';

const generateRandomContent = (eventType) => {
  
  switch (eventType) {
    case 'Birthday Event':
      return 'Celebrate the joyous occasion of the Birthday Event with friends and family. This social gathering accommodates up to 50 participants, offering a delightful experience with cake, music, and laughter. The event charges are set at $500.';
    case 'Marriage Event':
      return 'Join us in commemorating the union of two hearts at the Marriage Event. This social gathering can host up to 100 participants, providing a blend of love, joy, and unforgettable moments. The event charges stand at $1000.';
    case 'Corporate Event':
      return 'Participate in our exclusive Corporate Event designed for professionals. With a capacity for 200 participants, the event focuses on networking, presentations, and innovation. The charges for this professional gathering are set at $1500.';
    default:
      return 'Create a custom experience for your special event with our flexible offerings. Tailor the name, type, max participants, and charges to make your event truly unique and memorable!';
  }
};

const MediaCard = ({ title, imageSrc }) => {
  const navigate = useNavigate();
  const content = generateRandomContent(title);
  const bookpage=()=>{
    navigate('/bookevents', { state: { email: "veenai@gmail.com" } });
  }
  
  return (
    <Card sx={{ height: 530,maxWidth: 475, backgroundColor: 'black', color: 'white'}}>
      <CardMedia
        sx={{ height: 300 }}
        image={imageSrc}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ color: 'purple' }} size="small" onClick={()=>bookpage()}>
          Book Event
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
