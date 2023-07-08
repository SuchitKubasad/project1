import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import css from '../course/Course.module.css';
import { Box, Container, Paper } from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AppSlider } from './AppSlider';
import Slider from 'react-slick';
import TelegramIcon from '@mui/icons-material/Telegram';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import css from './styles/style.module.css'

const cards = [
    {
      id:'1',
      image: 'images/course1.png',
      price: '$199',
      category: 'Research & Development',
      logo: 'images/logo.png',
      instructor: 'Michel John',
      courseTime: '5 Weeks',
      maximumStudents: '50',
      enrolled: '30',
      comments: 0,
      likes: 100,
    },
    {
        id:'2',
        image: 'images/course1.png',
        price: '$199',
        category: 'Research & Development',
        logo: 'images/logo.png',
        instructor: 'Michel John',
        courseTime: '5 Weeks',
        maximumStudents: '50',
        enrolled: '30',
        comments: 0,
        likes: 100,
    },
    {
        id:'3',
        image: 'images/course1.png',
        price: '$199',
        category: 'Research & Development',
        logo: 'images/logo.png',
        instructor: 'Michel John',
        courseTime: '5 Weeks',
        maximumStudents: '50',
        enrolled: '30',
        comments: 0,
        likes: 100,
    },
    {
      id:'4',
      image: 'images/course1.png',
      price: '$199',
      category: 'Research & Development',
      logo: 'images/logo.png',
      instructor: 'Michel John',
      courseTime: '5 Weeks',
      maximumStudents: '50',
      enrolled: '30',
      comments: 0,
      likes: 100,
  },
  {
      id:'5',
      image: 'images/course1.png',
      price: '$199',
      category: 'Research & Development',
      logo: 'images/logo.png',
      instructor: 'Michel John',
      courseTime: '5 Weeks',
      maximumStudents: '50',
      enrolled: '30',
      comments: 0,
      likes: 100,
  },
    
  ];


export const CardComponent = ({ card }) => {
  return (
    
    <Box component="div" m={2} className={css.mainBox} sx={{  position: "relative"}} >
        <img className={css.mainImage} src={photo} style={{ height: "35vh", width: "100%" }} alt="" />

        <Box component="div" className={css.imageLogo} sx={{
            position: "absolute",
            display: "none",
            left: "30%",
            bottom: "70%",
            //  justifyContent: "space-evenly",
            // width: "100px"
        }}>
            <TelegramIcon sx={{ color: "white", fontSize: "50px","&:hover":{color:"rgb(128, 205, 54)",cursor:"pointer"} }} />
            <FavoriteBorderIcon sx={{ color: "white", fontSize: "50px", marginLeft: "25px","&:hover":{color:"rgb(128, 205, 54)",cursor:"pointer"} }} />
        </Box>


        <Box component="div" className={css.price}> <Typography variant="h6" >PRICE:$199</Typography> </Box>

        <Box>
            <Typography variant="body1" pl={3} py={1} sx={{ fontWeight: 600 }} >{department}</Typography>


            <Box py={1} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "20px" }} >
                <Box className={css.circleImage} sx={{ display: "flex", border: "2px solid transparent", borderRadius: "50%" }}> <img className='' style={{ height: "50px", width: "50px", borderRadius: "50%" }} src={photo} alt="" /> </Box>
                <Typography className={css.circleName} variant="button" >{name}</Typography>
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
  );
};

  const Course1 = () => {
    const [cardIndex, setCardIndex] = useState();
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      beforeChange: (current, next) => setCardIndex(next),
    };
  
    const handlePrevClick = () => {
      sliderRef.slickPrev();

    };
  
    const handleNextClick = () => {
      sliderRef.slickNext();
    };
    let sliderRef;

    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '15px', marginTop: '5%' }}>
          <ChevronLeftIcon onClick={handlePrevClick} style={{ border: '1px solid black', marginRight: '15px' }} />
          <ChevronRightIcon onClick={handleNextClick} style={{ border: '1px solid black' }} />
        </div>
        <div style={{ marginTop: '5%' }}></div>
        <Container sx={{paddingBottom:'0px'}}>
            <Slider {...settings} ref={(c) => (sliderRef = c)} sx={{justifyContent:'space-between'}}>
            {cards.map((card, index) => (
              <CardComponent key={index} card={card} />
              ))}
          </Slider>
        </Container>
      </>
    );

  };
  export default Course1