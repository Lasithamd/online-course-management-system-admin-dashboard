// src/pages/Student/CreateStudent.js
import React from 'react';
import UploadVideo from '../../components/Form/Course/UploadVideo'
import VideoCard from '../../components/Card/VideoCard';  // Import the VideoCard component
import TopHeader from '../../components/Navbar/TopHeader';
import Footer from '../../components/Footer/Footer';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom'; 

const CreateVideo = () => {
    const { id } = useParams();
    return (
        <>
            <TopHeader />
            <div style={{ padding: '20px' }}>
              
                <UploadVideo id={id} onClose={() => window.history.back()} /> {/* Optional: Pass a close function */}
            </div>
            <Container>
           
            </Container>
            <Footer />
        </>
    );
};

export default CreateVideo;
