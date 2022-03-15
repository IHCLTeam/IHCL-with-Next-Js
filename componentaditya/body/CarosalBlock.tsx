

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import image from "next/image";
import { Grid, Typography } from "@mui/material";

interface arrayDtatType {
  image: string;
  description: string;
  content : string;
}

interface carosalProps {
  data: arrayDtatType[];
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


export function CarosalBlock({ data }: carosalProps) {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = image.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (carosalContent: React.SetStateAction<number>) => {
    setActiveStep(carosalContent);
  };
  return (
    <div className="carosal1">

      <Typography>
      <h3 className="ctext">What's New</h3>
      </Typography>

      <Box>
        
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {
          data.map((item, index) => (
            <Grid key={index}>
              <Grid  style={{display:'flex'}}>
                <Typography>
                  <Box
                    component="img"
                    sx={{
                      height: 160,
                      display: "block",
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={item.image}
                    alt={item.image}
                  />
                </Typography>
                <Grid style={{width : '60%',padding:'1%',fontWeight:'bolder',fontSize : '115%'}}>
                  {item.description}
                  <br></br>                  
                  <button className="button1">View Vedio</button>
                </Grid>

              </Grid>
             
            </Grid>
          ))}
        </AutoPlaySwipeableViews>
      </Box>     
    </div>
  );
}
