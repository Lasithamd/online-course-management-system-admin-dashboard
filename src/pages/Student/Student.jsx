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

function Student() {
    return (
        <>
            <TopHeader />
            <Container sx={{ marginTop: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}> 
                <Grid size={8}>
                        <h1>Stutent</h1>
                        <Button variant="contained">Add Student</Button>
                        </Grid>  
                        <Grid size={2}>
                        <h1><HeaderCard/></h1>
                        </Grid>  
                        
                    </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>

                        <Grid size={12}>
                            <StudentData />
                        </Grid>

                    </Grid>
                </Box>
            </Container>

            <Footer />
        </>
    )
}

export default Student; 