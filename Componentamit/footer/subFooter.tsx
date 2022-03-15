import React from "react";
import { Grid, Typography } from "@mui/material";

interface typeSub {
  headerOne: string;
  headerTwo: string;
  headerThree: string;
  headerFour: string;
  headerFive: string;
}

interface dataTypeSub {
  data: typeSub[];
}

export default function SubFooter({ data }: dataTypeSub) {
  return (
    <Grid sx = {{display : 'flex', justifyContent : 'space-between',borderTop : 1, borderBottom :1, padding: '2%',width :' 67%', marginLeft:'16%', marginTop : '1%'}}>
      <Typography sx = {{ fontSize : 15}}>{data[0]?.headerOne}</Typography>
      <Typography sx = {{ fontSize : 15}}>{data[0]?.headerTwo}</Typography>
      <Typography sx = {{ fontSize : 15}}>{data[0]?.headerThree}</Typography>
      <Typography sx = {{ fontSize : 15}}>{data[0]?.headerFour}</Typography>
      <Typography sx = {{ fontSize : 15}}>{data[0]?.headerFive}</Typography>
    </Grid>
  );
}
