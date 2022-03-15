import { Grid, Typography } from "@mui/material";
import React from "react";

interface arrayDataTypeC {
  header: string;
  cOne: string;
  cTwo: string;
  cThree: string;
  cFour: string;
  cFive: string;
  cSix: string;
}

interface arrayDataTypeThree {
  data: arrayDataTypeC[];
}

export default function BlogContentThree({ data }: arrayDataTypeThree) {
  return (
    <Grid>
      
      <Typography sx={{ borderBottom: 1 ,borderTop : 1, fontSize : '110%'}}>
        {data[0]?.header}
      </Typography>

      <Typography sx={{ borderBottom: 1 , fontSize : '110%'}}>
        {data[0]?.cOne}
        </Typography>

      <Typography sx={{ borderBottom: 1 ,fontSize : '110%' }}>
        {data[0]?.cTwo}
        </Typography>

      <Typography sx={{ borderBottom: 1 , fontSize : '110%'}}>
        {data[0]?.cThree}
        </Typography>

      <Typography sx={{ borderBottom: 1 , fontSize : '110%'}}>
        {data[0]?.cFour}
        </Typography>

      <Typography  sx={{ borderBottom: 1 , fontSize : '110%'}}>
        {data[0]?.cFive}
      </Typography>

      <Typography sx={{ borderBottom: 1 , fontSize : '110%'}}>
        {data[0]?.cSix}
        </Typography>
    </Grid>
  );
}
