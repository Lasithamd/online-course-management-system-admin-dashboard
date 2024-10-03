import React, { useEffect, useRef,useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import instance from '../../service/AxiosOrder';
import TopHeader from '../../components/Navbar/TopHeader';
import Footer from '../../components/Footer/Footer';

const SingleVideos = () => {
    const path = "http://localhost:3000";
    const [video, setVideo] = React.useState(null);
    const [videoPath, setVideoPath] =useState('');
    const videoRef = useRef(null);
    const { id } = useParams();

    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    useEffect(() => {
        // Fetch video details
        instance.get(`/video/detail/${id}`)
            .then(response => {
                // Assuming the response has video_path
                
                setVideoPath(response.data)
               
                
            })
            .catch(error => {
                console.error("Error fetching Course data:", error);
            });
    }, [id]);

    return (
        <>
               <TopHeader />
     
        <Box sx={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
            <Typography variant="h5" component="h2" gutterBottom>
                Video Player
            </Typography>
            {videoPath ? (
                <video
                    ref={videoRef}
                    width="100%"
                    controls
                    style={{ border: '1px solid #ccc' }}
                >
                    <source src={`${path}${videoPath[0].video_path}`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <Typography variant="body1">Loading video...</Typography>
            )}
            <Box mt={2}>
                <Button variant="contained" onClick={handlePlayPause}>
                    {videoRef.current?.paused ? 'Play' : 'Pause'}
                </Button>
            </Box>
        </Box>
        <Footer />
        </>
    );
};

export default SingleVideos;
