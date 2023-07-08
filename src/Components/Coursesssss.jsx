import React from 'react'

const Coursesssss = () => {

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
    

    
    }
    
        </Box>
        )
    }

export default Coursesssss