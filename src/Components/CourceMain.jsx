import React, { useRef } from 'react'
import { Box, Container, Grid, ThemeProvider, Typography, createTheme } from '@mui/material'
import Cource from './Cource'
import AppSlider from './AppSlider'
import { settings } from './carousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import data from './courceData'
import data from './courceData'
import styled from '@emotion/styled'
const theme = createTheme()
const MainContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        marginLeft:0,
        width: "100%"
    },
    [theme.breakpoints.down('sm')]: {
        marginLeft:0,
        width: "100%"
    },


}))

const CourceMain = () => {

    let sliderRef = useRef(null)
    let handlePrevious = () => {
        sliderRef.current.slickPrev();
    }
    let handleNext = () => {
        sliderRef.current.slickNext();

    }
    return (

        <>
            <ThemeProvider theme={theme}>
                <MainContainer >
                    <Typography sx={{ display: "flex", justifyContent: "flex-start" }} mt={5} ml={3} variant="h4" color="initial">OUR {" "} <span style={{ color: 'rgb(128, 205, 54)', marginLeft: "25px" }}>COURSE</span> </Typography>

                    <Box mt={5}  sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Box component='div' onClick={handlePrevious} sx={{ border: "1px solid black", display: "flex", alignItems: "center", cursor: "pointer" }}> <NavigateBeforeIcon /></Box>
                        <Box component='div' onClick={handleNext} ml={2} mr={2} sx={{ border: "1px solid black", display: "flex", alignItems: "center", cursor: "pointer" }}>  <NavigateNextIcon /></Box>
                    </Box>

                    <AppSlider ref={sliderRef} {...settings}>
                        {data.map((d, i) =>
                            // <Cource key={i} photo={d.photo} department={d.department} name={d.name} />
                            <Cource key={i} courceData={d} />
                        )}
                    </AppSlider>

                </MainContainer>
            </ThemeProvider>


        </>
    )
}

export default CourceMain