import React from "react";
import { Grid, Typography } from "@mui/material";

interface typeContact {
  header: string;
  cOne: string;
}

interface dataTypeContact {
  data: typeContact[];
}

export function ContactUs({ data }: dataTypeContact) {
  return (
    <Grid>
      <Typography sx = {{fontSize : 14,fontWeight : 900}}>{data[0]?.header}
      </Typography>
      <Typography sx = {{fontSize : 12}}>{data[0]?.cOne}</Typography>
    </Grid>
  );
}
