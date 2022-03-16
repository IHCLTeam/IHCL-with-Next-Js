import { Grid, Typography } from "@mui/material";
import React from "react";

interface arrayBlock {
  header: string;
  bodyOne: string;
  bodyTwo: string;
  bodyThree: string;
  bodyFour: string;
  bodyFive: string;
  bodySix: string;
}

interface blocks {
  data: arrayBlock[];
}

export function ContentBlockSix({ data }: blocks) {
  return (
    <Grid className="footer_head colors">
      
      <Typography className="fhead">
        {data[0]?.header}
      </Typography>

      <Grid className="footerz">
        <Typography>
          <li> {data[0].bodyOne} </li>
          <li> {data[0].bodyFour} </li>
        </Typography>
        <Typography>
          <li> {data[0].bodyTwo} </li>
          <li> {data[0].bodyFive} </li>
        </Typography>
        <Typography>
          <li> {data[0].bodyThree} </li>
          <li> {data[0].bodySix} </li>
        </Typography>
      </Grid>
    </Grid>
  );
}
