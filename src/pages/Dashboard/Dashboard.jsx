import * as React from 'react';
import TopHeader from "../../components/Navbar/TopHeader";
import Container from '@mui/material/Container';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Grid';
import styled from '@mui/system/styled';
import StudentData from "../../components/Table/Student/Student";
import Footer from "../../components/Footer/Footer";



function Dashboard() {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      
      
    const Item = styled('div')(({ theme }) => ({
        backgroundColor: '#fff',
        border: '1px solid',
        borderColor: '#ced7e0',
        padding: theme.spacing(1),
        borderRadius: '4px',
        textAlign: 'center',
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
            borderColor: '#444d58',
        }),
    }));
    return (
        <>
            <TopHeader />
            <Container sx={{marginTop:3}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>   <h1>Dashboard</h1></Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={8}>
                            <Item><StudentData /></Item>
                        </Grid>
                        <Grid size={4}>
                            <Item>
                             
                            </Item>
                        </Grid>
                        <Grid size={4}>
                            <Item>size=4</Item>
                        </Grid>
                        <Grid size={8}>
                            <Item>size=8</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
         
            <Footer />
        </>


    );
}
export default Dashboard;