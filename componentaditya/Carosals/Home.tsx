import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import Button from "@mui/material/Button";
import { autoPlay } from "react-swipeable-views-utils";
import { MobileStepper } from "@mui/material";
import image from "next/image";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface ImageArray {
  carosalImage: string;
}

interface HomeProps {
  data: ImageArray[];
}

export function Carosal ({ data }: HomeProps)  {
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const maxSteps = image?.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (carosalImage: React.SetStateAction<number>) => {
    setActiveStep(carosalImage);
  };
  return (
    <div>
      <h1 className="text">Annual General Meeting for FY 2020-21</h1>
      <Box sx={{ flexGrow: 1 }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {
          data?.map((item, index) => (
            <div key={index}>
              <Box
                component="img"
                sx={{
                  display: "block",
                  width: "100%",
                  height: "45%",
                  overflow: "hidden",
                }}
                src={item?.carosalImage}
                alt={item?.carosalImage}
              />
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        backButton={undefined}
        nextButton={undefined}
        className="banner"
      />
      <Button
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
        className="right-button buttons"
      >
        <ArrowForwardIosIcon/>
      </Button>
      <Button
        onClick={handleBack}
        disabled={activeStep === 0}
        className="left-button buttons"
      >
        <ArrowBackIosNewIcon/>
      </Button>
    </div>
  );
};
