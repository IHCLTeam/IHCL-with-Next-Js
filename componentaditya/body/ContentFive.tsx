import { Grid, Typography } from "@mui/material";
import React from "react";

interface arrayFiveType {
  headOne: string;
  headTwo: string;
  bodyOneA: string;
  bodyOneB: string;
  bodyTwoA: string;
  bodyTwoB: string;
  bodyTwoC: string;
  headOneD: string;
}

interface arrayFive {
  data: arrayFiveType[];
}

export default function ContentFive({ data }: arrayFive) {
  return (
    <Grid sx={{ display: "flex", textAlign: "left", paddingLeft: "4%" }}>
      <Grid sx = {{paddingRight : '5%'}}>
      <Typography sx = {{fontSize : 14 , lineHeight : 3}}>
        <h3>{data[0].headOne}</h3>
      </Typography>
      <Typography sx ={{lineHeight : 2}}>
        <li>{data[0].bodyOneA}</li>
        <li>{data[0].bodyOneB}</li>
      </Typography>
      </Grid>
     
      <Grid>
        <Typography sx = {{fontSize : 14 , lineHeight : 3}}>
        <h3>{data[0].headTwo}</h3>
        </Typography>
        <Typography sx = {{fontSize : 14 , lineHeight : 2}}>
        <li>{data[0].bodyTwoA}</li>
        <li>{data[0].bodyTwoB}</li>
        <li>{data[0].bodyTwoC}</li>
        <li>{data[0].headOneD}</li>
      </Typography>
    </Grid>
    </Grid>
  );
}
