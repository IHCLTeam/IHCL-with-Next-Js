import Grid from "@mui/material/Grid";
import React from 'react'
import { Typography } from "@mui/material";

interface blogDataTypeOne {
header : string;
cOne : string;
cTwo : string;
cThree : string;
cFour : string;
cFive : string;
cSix : string;
cSeven : string;
}

interface blogArrayOne {
  data : blogDataTypeOne[];
}

export default function BlogContentOne({data} : blogArrayOne) {
  return (
    <Grid>
       <Typography sx = {{borderTop :1 , borderBottom : 1 , fontSize : '100%'}}>
       {data[0]?.header}
      </Typography>
      <Typography sx = {{fontSize : '100%',paddingTop : '2%'}}>
        <li> {data[0].cOne} </li>
        <li> {data[0].cTwo} </li>
        <li> {data[0].cThree} </li>
        <li> {data[0].cFour} </li>
        <li> {data[0].cFive} </li>
        <li> {data[0].cSix} </li>
        <li> {data[0].cSeven} </li>
      </Typography>
    </Grid>
  )
}
