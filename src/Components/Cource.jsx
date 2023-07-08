import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import css from './styles/style.module.css'
// import img from '../../assets/images/imgCource1.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

const Cource = ({ courceData }) => {



    const [showHeart, setShowHeart] = useState(false)
    const [count, setCount] = useState(100)

    let handleClick = () => {
        setShowHeart(true)
        // if(count===100){
        setCount(count + 1)
        // }
        // else{
        // setCount(count-1)    
        // }
    }
    return (
        <Box component="div" m={2} className={css.mainBox} sx={{ position: "relative" }} >



            <img className={css.mainImage} src={courceData.photo} style={{ height: "35vh", width: "100%" }} alt="" />

            <Box component="div" className={css.imageLogo} sx={{
                position: "absolute",
                display: "none",
                left: "30%",
                bottom: "70%",
                //  justifyContent: "space-evenly",
                // width: "100px"
            }}>
                <TelegramIcon sx={{ color: "white", fontSize: "50px", "&:hover": { color: "rgb(128, 205, 54)", cursor: "pointer" } }} />
                <FavoriteBorderIcon sx={{ color: "white", fontSize: "50px", marginLeft: "25px", "&:hover": { color: "rgb(128, 205, 54)", cursor: "pointer" } }} />
            </Box>


            <Box component="div" className={css.price}> <Typography variant="h6" >PRICE:$199</Typography> </Box>

            <Box>
                <Typography variant="body1" pl={3} py={1} sx={{ fontWeight: 600 }} >{courceData.department}</Typography>


                <Box py={1} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "20px" }} >
                    <Box className={css.circleImage} sx={{ display: "flex", border: "2px solid transparent", borderRadius: "50%" }}> <img className='' style={{ height: "50px", width: "50px", borderRadius: "50%" }} src={courceData.photo} alt="" /> </Box>
                    <Typography className={css.circleName} variant="button" >{courceData.name}</Typography>
                </Box>

                <Box py={1} sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box >
                        <Box> <Typography variant="subtitle2" >Course Time</Typography> </Box>
                        <Box> <Typography variant="subtitle2" >5 week</Typography> </Box>
                    </Box>
                    {/* <Divider orientation='vertical' sx={{ borderBottomColor: 'black', }} /> */}
                    <Box>
                        <Box> <Typography variant="subtitle2" >Max Students</Typography> </Box>
                        <Box> <Typography variant="subtitle2" >5 week</Typography> </Box>
                    </Box>

                    <Box>
                        <Box> <Typography variant="subtitle2" >Course Time</Typography> </Box>
                        <Box> <Typography variant="subtitle2" >5 week</Typography> </Box>
                    </Box>
                </Box>
                <Divider sx={{ paddingTop: "10px" }} />

                <Button className={css.button} sx={{ display: "none", width: "100%", height: "55px", position: "absolute", color: "white", "&:hover": { backgroundColor: "rgb(128, 205, 54)" }, backgroundColor: "rgb(128, 205, 54)" }}>View Details</Button>

                <Box sx={{ display: "flex", justifyContent: "space-between" }} mt={2}>
                    <Box p={1} sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                        <FaComment size={22} />
                        <Typography variant="subtitle2" >0</Typography>
                    </Box>
                    <Box p={1} sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                        <AiOutlineHeart size={22} />
                        <Typography variant="body1" >0</Typography>
                    </Box>
                </Box>


            </Box>

            {/* <FavoriteBorderIcon sx={{fontSize:'50px'}}/>
    <FavoriteIcon sx={{fontSize:'50px'}}/> */}
            {/* <h1>{count}</h1>
    {showHeart ?
    <AiFillHeart onClick={handleClick} size={40} color='red' />
    :
    <AiOutlineHeart onClick={handleClick} size={40} color='red' />
}

*/}

        </Box>
    )
}

export default Cource