import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import imageloader from "../../pages/imageLoader";

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
        width: "68%",
        marginLeft: "16%",
        marginTop: "1%",
      }}
    >
      <Grid>
        <Typography>
          <Image
            loader={imageloader}
            src={data[0]?.logo}
            width={40}
            height={15}
            alt="not found"
          />
        </Typography>
        <Typography sx={{fontSize:14}}>{data[0]?.content}</Typography>
      </Grid>
      <Grid>
        <Typography sx={{fontSize:14}}>{data[0]?.brands}</Typography>
        <Typography>
          <Image
            loader={imageloader}
            src={data[0]?.TajIcon}
            width={40}
            height={40}
            alt="not found"
          />
          <Image
            loader={imageloader}
            src={data[0]?.seleqtionsBrandIcon}
            width={90}
            height={25}
            alt="not found"
          />
          <Image
            loader={imageloader}
            src={data[0]?.vivantaIcon}
            width={90}
            height={20}
            alt="not found"
          />
          <Image
            loader={imageloader}
            src={data[0]?.gingerIcon}
            width={80}
            height={24}
            alt="not found"
          />
          <Image
            loader={imageloader}
            src={data[0]?.expressionsIcon}
            width={90}
            height={24}
            alt="not found"
          />
          <Image
            loader={imageloader}
            src={data[0]?.tajSatsIcon}
            width={50}
            height={30}
            alt="not found"
          />
        </Typography>
      </Grid>
    </Grid>
  );
}
