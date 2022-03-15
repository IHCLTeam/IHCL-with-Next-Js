import React from "react";
import { Grid, Typography } from "@mui/material";

interface typeInvestors {
  header: string;
  cOne: string;
  cTwo: string;
}

interface dataTypeInvestors {
  data: typeInvestors[];
}

export function Investors({ data }: dataTypeInvestors) {
  return (
    <Grid>
      <Typography sx = {{fontSize : 14,fontWeight : 900}}>{data[0]?.header}</Typography>
      <Typography sx = {{fontSize : 14}}>{data[0]?.cOne}</Typography>
      <Typography sx = {{fontSize : 14}}>{data[0]?.cTwo}</Typography>
    </Grid>
  );
}
