import React, { useState, useEffect } from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import instance from '../../service/AxiosOrder';
import './style.css';
import { useNavigate } from 'react-router-dom'; 


export default function VideoList() {
  const navigate = useNavigate();
  const path = "http://localhost:3000";
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    instance.get(`/video`)
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching video:', error);
      });
  }, []);  // Ensures it runs only once after initial mount

  function onShowVideo(id){
    navigate(`/video/${id}`);
  }
  return (
    <>
      <Box className='card-grid'>
        {videos.map((video) => (

          <Card key={video.id} sx={{ maxWidth: 345 }} onClick={()=>onShowVideo(video.id)}>  {/* Add key for unique identification */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={`http://localhost:3000${video.thumbnails_path}`}
                alt={video.name}
              />{
                console.log(path + video.thumbnails_path)
              }
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {video.name}  {/* Display dynamic video name */}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {video.description}  {/* Display dynamic video description */}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
}
