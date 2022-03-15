import React from 'react'
import { Grid, Typography } from "@mui/material";

interface typeCareers {
    header: string;
    cOne: string;
    cTwo: string;
}

interface dataTypeCareers {
    data : typeCareers[];
}

export function Careers({data} : dataTypeCareers) {
  return (
    <Grid>
        <Typography sx = {{fontSize : 14,fontWeight : 900}}>
            {data[0]?.header}
        </Typography>
        <Typography sx = {{fontSize : 12}}>
            {data[0]?.cOne}
        </Typography>
        <Typography sx = {{fontSize : 12}}>
            {data[0]?.cTwo}
        </Typography>
    </Grid>
  )
}
