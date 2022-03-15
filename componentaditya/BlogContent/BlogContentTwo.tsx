import { Grid, Typography } from "@mui/material";
import React from "react";

interface arrayDataTypeA {
  header: string;
  cOne: string;
  cTwo: string;
  cThree: string;
  cFour: string;
  cFive: string;
  cSix: string;
  cSeven: string;
}

interface arrayDataTypeTwo {
  data: arrayDataTypeA[];
}

export default function BlogContentTwo({ data }: arrayDataTypeTwo) {
  return (
    <Grid>
      <Typography sx={{ borderBottom: 1,borderTop : 1, fontSize : '100%'}}>
        {data[0]?.header}
      </Typography>

      <Typography sx = {{fontSize : '100%',paddingBottom : '14%',paddingTop : '2%'}}>
        <li> {data[0].cOne} </li>
        <li> {data[0].cTwo} </li>
        <li> {data[0].cThree} </li>
      </Typography>

      <Typography sx={{ borderBottom: 1,borderTop : 1, fontSize : '100%'}}>
        {data[0]?.cFour}
      </Typography>

      <Typography sx = {{fontSize : '100%',paddingBottom : '12%',paddingTop : '2%'}}>
        <li> {data[0].cFive} </li>
      </Typography>

      <Typography sx={{ borderBottom: 1,borderTop : 1 , fontSize : '100%'}}>
        {data[0]?.cSix}
      </Typography>

      <Typography sx = {{fontSize : '100%',paddingTop : '4%'}}>
        <li>{data[0]?.cSeven}</li>
      </Typography>
    </Grid>
  );
}
