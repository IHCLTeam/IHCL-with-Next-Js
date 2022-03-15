import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import imageLoader from "../../pages/imageLoader";

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
        width: "75%",
        marginLeft: "12%",
        marginTop: "1%",
      }}
    >
      <Grid>
        <Typography>
          <Image
            loader={imageLoader}
            src={data[0]?.logo}
            width={60}
            height={25}
            alt="not found"
          />
        </Typography>
        <Typography>{data[0]?.content}</Typography>
      </Grid>
      <Grid>
        <Typography>{data[0]?.brands}</Typography>
        <Typography>
          <Image
            loader={imageLoader}
            src={data[0]?.TajIcon}
            width={40}
            height={30}
            alt="not found"
          />
          <Image
            loader={imageLoader}
            src={data[0]?.seleqtionsBrandIcon}
            width={80}
            height={28}
            alt="not found"
          />
          <Image
            loader={imageLoader}
            src={data[0]?.vivantaIcon}
            width={100}
            height={16}
            alt="not found"
          />
          <Image
            loader={imageLoader}
            src={data[0]?.gingerIcon}
            width={80}
            height={20}
            alt="not found"
          />
          <Image
            loader={imageLoader}
            src={data[0]?.expressionsIcon}
            width={80}
            height={20}
            alt="not found"
          />
          <Image
            loader={imageLoader}
            src={data[0]?.tajSatsIcon}
            width={40}
            height={30}
            alt="not found"
          />
        </Typography>
      </Grid>
    </Grid>
  );
}
