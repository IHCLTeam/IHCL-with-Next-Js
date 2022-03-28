
import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import imageloader from "../pages/imageLoader";

interface iconssd {
 
    image: string;
    text  : string;
    text1: string;
    imageone: string;
    imagetwo: string;
    imagethree: string;
    imagefour: string;
    imagefive: string;
    imagesix: string;
}


interface foterthreedata {
    data: iconssd[];
}
export function FooterThree({ data }: foterthreedata) {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "75%",
        marginLeft: "12%",
        marginTop : '1%',
      }}
    >
      <Grid>
        <Typography>
          <Image
            loader={imageloader}
            src={data[0]?.image}
            width={60}
            height={25}
            alt="not found"
          />
        </Typography>
        <Typography>{data[0]?.text}</Typography>
      </Grid>
      <Grid>
        <Typography>{data[0]?.text1}</Typography>
        <Typography>
          <Image
            loader={imageloader}
            src={data[0]?.imageone}
            width={40}
            height={30}
            alt="not found"
          />
          <Image
            loader={imageloader}
            src={data[0]?.imagetwo}
            width={80}
            height={28}
            alt="not found"
          />
          <Image
            loader={imageloader}
            src={data[0]?.imagethree}
            width={100}
            height={16}
            alt="not found"
          />
          <Image
            loader={imageloader}
            src={data[0]?.imagefour}
            width={80}
            height={20}
            alt="not found"
          />
          <Image
            loader={imageloader}
            src={data[0]?.imagefive}
            width={80}
            height={20}
            alt="not found"
          />
          <Image
            loader={imageloader}
            src={data[0]?.imagesix}
            width={40}
            height={30}
            alt="not found"
          />
        </Typography>
      </Grid>
    </Grid>
  );
}