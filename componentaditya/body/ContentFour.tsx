import { Grid, Typography } from "@mui/material";
import React from "react";

interface arrayTypeFour {
  bodyOne: string;
  bodyTwo: string;
  bodyThree: string;
}

interface arrayFour {
  data: arrayTypeFour[];
}

export function ContentFour({ data }: arrayFour) {
  return (
    <Grid sx={{fontFamily: 'Calibri Bold',backgroundColor:'#084c79',color : 'white',textAlign : 'left',padding : '13%'}}>
      <Typography sx = {{lineHeight : 3}}>
          {data[0]?.bodyOne}
      </Typography>
      <Typography sx = {{lineHeight : 3}}>
          {data[0]?.bodyTwo}
      </Typography>
      <Typography sx = {{lineHeight : 3}}>
          {data[0]?.bodyThree}
      </Typography>
    </Grid>
  );
}
