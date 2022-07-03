import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import HeroBannerImage from "../assets/images/banner .jpeg";



const HeroBanner = () => (
    <Box sx={{mt: {lg: '212px', xs: '70px',}, ml: {sm: '50px'} }} position="relative" p="20px" object="cover">
        <Typography color ="#e9ecef" fontWeight="600" fontSize="26px" > Fitness Club</Typography>
        <Typography fontWeight={700} color ="#e9ecef" sx={{fontSize: {lg: '44px', xs: '40px'} }} mb="23px" mt="30px" >
            Sweat, Smile <br />
            And Repeat 
        </Typography>
        <Typography   lineHight="35px" color="#e9ecef" style={{fontStyle: '250px'}}> 
            Check out the most effective exercises personalized to you 
        </Typography>
        <Stack>
            <a href="#exercises" style={{marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FBD364', padding: '14px', fontsize: '80px', textTransform: 'none', color: '#252422', borderRadius: '4px', fontWeight: '600'}} > Explore Exercises</a> 
        </Stack>
        <Typography fontWeight={600} color="#e9ecef" sx={{ opacity: '0.1', display: {lg: 'block', xs: 'none' }, fontSize: '200px'}} >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" style={{ marginRight:'200px',borderBottomLeftRadius: '40px',height:'900px', width:'630px'}} position="absolute"/> 
    </Box>
);

export default HeroBanner;