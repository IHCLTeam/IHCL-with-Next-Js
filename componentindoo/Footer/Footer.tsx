import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import imageLoader from "../../pages/imageLoader";
// import imageLoader from "../../imageLoader";

interface dataTypes {
  logo: string;
  TajIcon: string;
  seleqtionsBrandIcon: string;
  vivantaIcon: string;
  gingerIcon: string;
  expressionsIcon: string;
  tajSatsIcon: string;
  brands: string;
  content: string;
}

interface arrayDataTypes {
  data: dataTypes[];
}

export function Footer({ data }: arrayDataTypes) {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "86%",
        marginLeft: "8%",
        marginTop: "1%",
      }}
    >
      <Grid> 
        <Typography>
          <Image
            loader={imageLoader}
            src={data[0]?.logo}
            width={50}
            height={50}
            alt="not found"
          />
        </Typography>
        <Typography sx={{fontSize:12}}>{data[0]?.content}</Typography>
      </Grid>
      <Grid sx={{paddingRight : '2%'}}>
        <Typography sx={{fontSize:12}}>{data[0]?.brands}</Typography>
        <Typography>
          <Image
            loader={imageLoader}
            src={data[0]?.TajIcon}
            width={50}
            height={40}
            alt="not found"
          />
          <Image
            loader={imageLoader}
            src={data[0]?.seleqtionsBrandIcon}
            width={80}
            height={20}
            alt="not found"
          />
          <Image
            loader={imageLoader}
            src={data[0]?.vivantaIcon}
            width={80}
            height={20}
            alt="not found"
          />
          <Image
            loader={imageLoader}
            src={data[0]?.gingerIcon}
            width={86}
            height={20}
            alt="not found"
          />
          <Image
            loader={imageLoader}
            src={data[0]?.expressionsIcon}
            width={89}
            height={20}
            alt="not found"
          />
          <Image
            loader={imageLoader}
            src={data[0]?.tajSatsIcon}
            width={40}
            height={26}
            alt="not found"
          />
        </Typography>
      </Grid>
    </Grid>
  );
}
