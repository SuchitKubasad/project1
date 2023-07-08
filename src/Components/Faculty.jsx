import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import pic from '../assets/img01.jpg'
import css from '../Components/styles/style.module.css'


const Faculty = () => {
  return (
    <Box component="div" className={css.main} sx={{ height: "70vh",padding:"20px" }} >

      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "40px",width:"100%" }}>
        <Stack direction="row" >
          <Box sx={{ padding: "10px", height: "5rem", width: 90 }}> <Avatar sx={{ height: "4rem", width: "4rem" }} src={pic} /> </Box>
          <Box sx={{ padding: "10px", height: 90, width: 90 }}> <Avatar sx={{ height: 70, width: 70 }} alt="no image found" src={pic} />  </Box>
          <Box sx={{ padding: "10px", height: 90, width: 90 }}> <Avatar sx={{ height: 70, width: 70 }} alt="Cindy Baker" src={pic} />  </Box>
          <Box> <Avatar sx={{ height: 90, width: 90 }} alt="Cindy Baker" src={pic} />  </Box>
          <Box sx={{ padding: "10px", height: 90, width: 90 }}> <Avatar sx={{ height: 70, width: 70 }} alt="Semy Sharp" src={pic} />  </Box>
          <Box sx={{ padding: "10px", height: 90, width: 90 }}> <Avatar sx={{ height: 70, width: 70 }} alt="Travis Howard" src={pic} />  </Box>
          <Box sx={{ padding: "10px", height: 90, width: 90 }}> <Avatar sx={{ height: 70, width: 70 }} alt="Cindy Baker" src={pic} />  </Box>
        </Stack>

        {/* <Avatar src='/img01' /> */}

      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
        <Typography variant="subtitle2" sx={{ width: "50%", color: "White",overflow:"hidden" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur rem illo odio error omnis adipisci officiis porro architecto similique. Eum, distinctio. Veniam voluptatum tempore recusandae, nobis delectus non excepturi labore eligendi! Repellat molestias delectus nesciunt quibusdam voluptas dolorum
        </Typography>


      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center"}} mt={8}>
        <Typography variant="h6" sx={{ color: "rgb(128, 205, 54)" }}>OSCAR CHARLS</Typography>
        <Typography variant="body2" sx={{ color: "white" }}>Martin, Parent</Typography>
      </Box>


    </Box>
  )
}

export default Faculty