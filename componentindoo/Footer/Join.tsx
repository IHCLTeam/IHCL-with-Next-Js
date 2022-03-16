import React from 'react'
import { Button, Grid, Typography } from "@mui/material";

interface typeJoin {
content : string;
btn : string;
}

interface dataTypeJoin {
    data : typeJoin[];
}

export function Join({data} : dataTypeJoin) {
  return (
    <Grid>
        <Typography sx = {{paddingBottom : '1%' , fontSize : 12}}>
            {data[0]?.content}
        </Typography>
        <Button sx = {{backgroundImage:'linear-gradient(#022842, #0c5d90)' , color : 'white',marginBottom : '1%',fontSize:10}}>
            {data[0]?.btn}
        </Button>
        <hr className='hr' />
    </Grid>
  )
}
