import React from 'react'
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'


const Form = () => {
  return (
    <div>

        <Grid container spacing={2}>
            <Grid item>
                <Grid container spacing={1}>
                    <Grid item>
                    <input type="text" placeholder='Name *' />
                    </Grid>
                    <Grid item>
                    <input type="text" placeholder='Email *' />
                    </Grid>
                    <Grid item>
                    <input type="text" placeholder='Subject *' />
                    </Grid>
                    <Grid item>
                    <input type="number" placeholder='Phone *' />
                    </Grid>
                    <Grid item>
                        <input type="text" placeholder='Message *'/>
                    </Grid>
                    <Button>Send Message</Button>
                </Grid>

            </Grid>
            <Grid item>

            </Grid>
          
        </Grid>
        
    </div>
  )
}

export default Form