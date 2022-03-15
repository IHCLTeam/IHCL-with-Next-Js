import React from "react";
import { Grid, Typography } from "@mui/material";

interface typeDevelopment {
  header: string;
  cOne: string;
  cTwo: string;
  cThree: string;
  cFour: string;
}

interface dataTypeDevelopment {
  data: typeDevelopment[];
}

export function Developments({ data }: dataTypeDevelopment) {
  return (
    <Grid>
      <Typography sx = {{fontSize : 14,fontWeight : 900}}>{data[0].header}</Typography>
      <Typography sx = {{fontSize : 14}}>{data[0].cOne}</Typography>
      <Typography sx = {{fontSize : 14}}>{data[0].cTwo}</Typography>
      <Typography sx = {{fontSize : 14}}>{data[0].cThree}</Typography>
      <Typography sx = {{fontSize : 14}}>{data[0].cFour}</Typography>
    </Grid>
  );
}
