import * as React from 'react';
import { Grid, Typography } from "@mui/material"

interface props {
  sitemap: string;
  ascessbility: string;
  language: string;
  privacyPolicy: string;
  termsofuse: string;
}
interface foterdata {
  data: props[]
}

export function FooterOn({ data }: foterdata) {
  
  return (
    <Grid sx = {{display : 'flex', justifyContent : 'space-between',borderTop : 1, borderBottom : 1 , width : '70%' , marginLeft : '14%', paddingTop: '1%' , paddingBottom : '1%',marginTop : '2%'}}>
      <Typography>
        {data[0].sitemap}
      </Typography>
      <Typography>
        {data[0].ascessbility}
      </Typography>
      <Typography>
        {data[0].language}
      </Typography>
      <Typography>
        {data[0].privacyPolicy}
      </Typography>
      <Typography>
        {data[0].termsofuse}
      </Typography>
    </Grid>
  )
}

