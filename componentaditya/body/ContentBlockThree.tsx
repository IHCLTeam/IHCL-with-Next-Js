import { Grid, makeStyles, Typography } from "@mui/material";
import React from "react";


interface arrayTwoTypes {
  headerOne: string;
  headerTwo: string;
  bodyOneA: string;
  bodyOneB: string;
  bodyOneC: string;
  bodyTwoA: string;
  bodyTwoAO: string;
  bodyTwoB: string;
  bodyTwoBO: string;
  footer: string;
}

interface arraytwo {
  data: arrayTwoTypes[];
}

export function ContentBlockThree({ data }: arraytwo) {


  return (
    <>
    <Grid sx={{ display : 'flex',justifyContent:'space-between',backgroundColor:'#084c79',color : 'white'}}>
      <Typography sx= {{textAlign:'left',lineHeight: 2,padding : '1%',fontSize :15}}>
        <h3>{data[0].headerOne}</h3>
        <p>{data[0].bodyOneA}</p>
        <p>{data[0].bodyOneB}</p>
        <p>{data[0].bodyOneC}</p>
        <button className="btn3">View More</button>
      </Typography>

      <Typography sx={{textAlign:'left',lineHeight : 1.6,paddingTop:'1%',paddingRight: '4%' ,color : 'white',fontSize : 15}}>
        <h3>{data[0].headerTwo}</h3>
        <p>{data[0].bodyTwoA}</p>
        <p>{data[0].bodyTwoAO}</p>
        <p>{data[0].bodyTwoB}</p>
        <p>{data[0].bodyTwoBO}</p>
        <button className="btn3">View More</button>
      </Typography>
      </Grid>
    <Typography sx={{fontWeight: 'medium' ,fontFamily: 'Calibri',backgroundColor:'#084c79',fontSize : '24px',color : 'white',paddingBottom : '15px'}} >
    {data[0].footer}
    </Typography>
    </>
  );
}
