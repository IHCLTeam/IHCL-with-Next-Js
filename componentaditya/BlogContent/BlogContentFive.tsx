import { Grid, Typography } from '@mui/material'
import React from 'react'

interface arrayDatatypeE {
header : string;
cOne : string;
cTwo : string;
cThree : string;
cFour : string;
cFive : string;
cSix : string;
}

interface arrayDataTypeFive {
    data : arrayDatatypeE[];
}

export default function BlogContentFive({data} : arrayDataTypeFive) {
  return (
    <Grid>
         <Typography sx={{ borderBottom: 1 ,borderTop : 1}}>
          {data[0]?.header}
        </Typography>
        
        <Typography sx = {{paddingBottom : '16%', paddingTop : '2%'}}>
        <li> {data[0].cOne} </li>
        <li> {data[0].cTwo} </li>
        <li> {data[0].cThree} </li>
        </Typography>

        <Typography sx={{ borderBottom: 1 ,borderTop : 1}}>
        {data[0].cFour} 
        </Typography>

        <Typography sx={{ borderBottom: 1 }}>
          {data[0]?.cFour}
        </Typography>

        <Typography sx={{ borderBottom: 1}}>
          {data[0]?.cFive}
        </Typography>

        <Typography sx={{ borderBottom: 1}}>
          {data[0]?.cSix}
        </Typography>

    </Grid>
  )
}
