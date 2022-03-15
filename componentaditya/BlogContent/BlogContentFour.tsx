import React from 'react'
import { Grid, Typography } from '@mui/material'

interface arrayDataTypeD {
header : string;
cOne : string;
cTwo : string;
cThree : string;
cFour : string;
cFive : string;
cSix : string;
}

interface arrayDataTypeFour {
    data : arrayDataTypeD[];
}

export default function BlogContentFour({data} : arrayDataTypeFour) {
  return (
    <Grid>
         <Typography sx = {{borderTop : 1,borderBottom : 1,fontSize : '100%',lineHeight : 2}}>
          {data[0]?.header}
        </Typography>
        <Typography sx = {{fontSize : '100%',paddingTop : '2%'}}>
        <li> {data[0].cOne} </li>
        <li> {data[0].cTwo} </li>
        <li> {data[0].cThree} </li>
        <li> {data[0].cFour} </li>
        <li> {data[0].cFive} </li>
        <li> {data[0].cSix} </li>
      </Typography>
    </Grid>
  )
}
