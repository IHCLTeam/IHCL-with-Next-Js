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
    <Grid sx = {{marginLeft : '16%',marginTop : '2%'}}>
        <Typography sx = {{paddingBottom : '1%' , fontSize : 15}}>
            {data[0]?.content}
        </Typography>
        <Button sx = {{backgroundColor : '#002a49' , color : 'white',marginBottom : '1%',fontSize:15}}>
            {data[0]?.btn}
        </Button>
    </Grid>
  )
}
