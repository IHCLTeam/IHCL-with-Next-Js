import { Typography } from "@mui/material";
import React from "react";

interface arrayCon {
  headerOne: string;
  headerTwo: string;
  bodyOne: string;
  bodyOneO : string;
  bodyTwo: string;
}

interface con {
  data: arrayCon[];
}
export function ContentBlockOne({ data }: con) {
  return (
    <>
    <Typography variant="h6" sx={{color:'#002a49', textAlign: 'left',fontSize: '18px',lineHeight: '22px'}}>
    {data[0]?.headerOne}
    </Typography>
    <br />
    <Typography variant="subtitle2" sx={{textAlign: 'left',color:'#000',fontSize: '14px'}} >
    {data[0]?.bodyOne}
    </Typography>
    <Typography variant="subtitle2" sx={{textAlign: 'left',color:'#000',fontSize: '14px'}} >
    {data[0]?.bodyOneO}
    </Typography>
   
    <br />
    <Typography variant="h6"sx={{color:'#002a49', textAlign: 'left',fontSize: '18px',lineHeight: '22px'}}>
    {data[0]?.headerTwo}
    </Typography>
    <br />
    <Typography variant="subtitle2" sx={{textAlign: 'left',color:'#000',fontSize: '14px', paddingBottom : '4%'}} >
    {data[0]?.bodyTwo}
    </Typography>
    
    </>
  );
}
