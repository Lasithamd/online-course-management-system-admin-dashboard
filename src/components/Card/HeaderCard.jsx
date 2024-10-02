import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        No of Student
      </Typography>
      <Typography variant="h5" component="div">
      122
      </Typography>
    
    </CardContent>
    <CardActions>
    </CardActions>
  </React.Fragment>
);

export default function HeaderCard() {
  return (
    <Box sx={{ minWidth: 100 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
