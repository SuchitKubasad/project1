import React, { useState } from 'react'
import { Box, Typography, Button, Modal } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import CloseIcon from '@mui/icons-material/Close';
import css from '../Components/styles/style.module.css'
import styled from '@emotion/styled';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80vw",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const VideoComponent = () => {
  const [play, setPlay] = useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let handlePlay = () => {
    setPlay(!play)
  }
  // const BoxPlay = (styled(Box)({
  //   borderRadius: '50%',
  //   bgcolor: 'white',
  //   height: 60, width: 60,
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // }))

  return (
    <>
      <Box className={css.container} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>


        {!play && <Box sx={{
          height: 350, width: 540, backgroundColor: 'white', display: 'flex',
          flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'
        }} >
          <Typography py={2} variant="h3" className={css.vcHeading}>Get Admission Today</Typography>
          <Typography sx={{ paddingBottom: 5, paddingX: 4 }} variant="body1" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus atque, eos omnis rem perspiciatis alias?</Typography>
          <Button variant="contained" sx={{ width: '100%', borderRadius: 0, paddingY: 3, fontSize: 20, backgroundColor: 'rgb(128, 205, 54)', fontWeight: 600 }} >
            GET ADMISSION
          </Button>

        </Box>}


        {/* {play && <iframe width="70%" height="500" src="https://www.youtube.com/embed/ZCKYz6cgiRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}  */}

        {play && <>
          <Button onClick={handleOpen}><iframe style={{ height: "90vh", width: "80vw" }} src="https://www.youtube.com/embed/ZCKYz6cgiRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>

            </Box>
          </Modal>
        </>
        }

        <Box display={'flex'} sx={{ gap: 1 }}>
          <Box sx={{
            borderRadius: '50%', bgcolor: 'rgb(128, 205, 54)', height: 100, width: 100, cursor: 'pointer', display: 'flex', justifyContent: 'center', transition: '0.3s linear', alignItems: 'center', '&:hover': { backgroundColor: 'white' },
          }}>
            <Box 
            sx={{
              borderRadius: '50%',
              bgcolor: 'white',
              height: 60, width: 60,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {play ? <span onClick={handlePlay} ><CloseIcon className={css.iconBox} /></span> : <span onClick={handlePlay}><PlayArrowRoundedIcon className={css.iconBox} /></span>}

            </Box>

          </Box>
          <Box sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '200px', fontSize: '35px', textAlign: 'center' }}>{play ? 'Close The Video' : 'Watch Intro video'}</Box>

        </Box>

      </Box >

    </>
  )
}

export default VideoComponent;