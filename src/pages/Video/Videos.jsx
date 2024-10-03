import * as React from 'react';
import TopHeader from "../../components/Navbar/TopHeader";
import Container from '@mui/material/Container';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Grid';
import Button from '@mui/material/Button';
import styled from '@mui/system/styled';
import HeaderCard from '../../components/Card/HeaderCard';
import StudentData from "../../components/Table/Student/Student";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from 'react-router-dom'; 
import VideoList from '../../components/Card/VideoList'
function Videos() {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleAddStudentClick = () => {
        
        navigate('/student/create'); // Navigate to the create student page
    };

    return (
        <>
            <TopHeader />
            <Container sx={{ marginTop: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}> 
                <Grid size={8}>
                        <h1>Course Video</h1>
                        <Button onClick={handleAddStudentClick} variant="contained">Add Student</Button>
                        </Grid>  
                        <Grid size={2}>
                        <h1><HeaderCard/></h1>
                        </Grid>  
                        
                    </Box>
                <Box sx={{ flexGrow: 1 }}>
                   <VideoList/>
                </Box>
            </Container>

            <Footer />
        </>
    )
}


export default Videos; 