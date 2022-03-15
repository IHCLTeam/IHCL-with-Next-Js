import { Grid } from "@mui/material";
import React from "react";


interface arrayOne {
  header: string;
  bodyOne: string;
  bodyTwo: string;
  bodyThree: string;
  bodyFour: string;
  bodyFive: string;
  bodySix: string;
  bodySeven: string;
  image: string;
}

interface contentOneProps {
  data: arrayOne[];
}

function ContentOne({ data }: contentOneProps) {
  return (
    <Grid className='etext'>
     
        <h3 style={{paddingBottom : '2%'}}>{data[0]?.header}</h3>

        <li>{data[0]?.bodyOne}</li>
        <li>{data[0]?.bodyTwo}</li>
        <li>{data[0]?.bodyThree}</li>
        <li>{data[0]?.bodyFour}</li>
        <li>{data[0]?.bodyFive}</li>
        <li>{data[0]?.bodySix}</li>
        <li>{data[0]?.bodySeven}</li>
    </Grid>
  );
}

export default ContentOne;
