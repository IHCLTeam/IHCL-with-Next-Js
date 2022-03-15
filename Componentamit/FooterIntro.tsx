// import React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary
// }));

// interface props {


//     brands: string;
//     bone: string;
//     btwo: string
//     bthree: string;
//     bfour: string;
//     bfive: string;


// }
// interface foterdata {
//     data: props[]
// }

// export function FooterIntro({ data }: foterdata) {
//     return (
//         <>

//             <Box sx={{ marginTop: "4%", marginBottom: '5%' }}>
//                 <Grid className="f1" >
//                     <Grid>
//                         <Box>Brands</Box>
//                     </Grid>
//                     <Grid>
//                         <Box>bone</Box>
//                     </Grid>
//                     <Grid>
//                         <Box>btwo</Box>
//                     </Grid>
//                     <Grid>
//                         <Box>bthree</Box>
//                     </Grid>
//                     <Grid>
//                         <Box> bfour</Box>
//                     </Grid>
//                     <Grid>
//                         <Box>bfive </Box>
//                     </Grid>
//                     <Grid>
//                         <Box>Pressroom </Box>
//                     </Grid>
//                     <Grid>
//                         <Box>contact us</Box>
//                     </Grid>
//                 </Grid>
//             </Box>

//         </>
//     );
// }


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
interface arrayDataType {
    title: string;
    brands: string;
    brandsone: string;
    brandstwo: string;
    brandsthree: string;
    brandsfour: string;
    brandsfive: string;
    company: string;
    companyone: string;
    companytwo: string;
    companythree: string;
    companyfour: string;
    investors: string;
    investorsone: string;
    investorstwo: string;
    development: string;
    developmentone: string;
    developmenttwo: string;
    developmentthree: string;
    developmentfour: string;
    responsibility: string;
    responsibilityone: string;
    responsibilitytwo: string;
    career: string;
    careerone: string;
    careertwo: string;
    careerthree: string;
    careerfour: string;
    pressroom: string;
    pressroomone: string;
    pressroomtwo: string;
    contact: string;
    contactone: string;
}
interface arrayData {
    data: arrayDataType[];
}
export function FooterIntro({ data }: arrayData) {
    return (
        <Grid className="gridfoot" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item sx={{ border: 0 }}>
                <Box> <b>{data[0]?.title}</b> </Box>
            </Grid>
            <Grid className="gridcols" item >
                <Box> <b>{data[0]?.brands}</b> </Box>
                <Box> {data[0]?.brandsone} </Box>
                <Box> {data[0]?.brandstwo} </Box>
                <Box> {data[0]?.brandsthree} </Box>
                <Box> {data[0]?.brandsfour} </Box>
                <Box> {data[0]?.brandsfive} </Box>
            </Grid>

            <Grid className="gridcols" item >
                <Box> <b>{data[0]?.company}</b> </Box>
                <Box> {data[0]?.companyone} </Box>
                <Box> {data[0]?.companytwo} </Box>
                <Box> {data[0]?.companythree} </Box>
                <Box> {data[0]?.companyfour} </Box>
            </Grid>
            <Grid className="gridcols" item >
                <Box> <b>{data[0]?.investors}</b> </Box>
                <Box> {data[0]?.investorsone} </Box>
                <Box> {data[0]?.investorstwo} </Box>
            </Grid>
            <Grid className="gridcols" item >
                <Box> <b>{data[0]?.development}</b> </Box>
                <Box> {data[0]?.developmentone} </Box>
                <Box> {data[0]?.developmenttwo} </Box>
                <Box> {data[0]?.developmentthree} </Box>
                <Box> {data[0]?.developmentfour} </Box>
            </Grid>
            <Grid className="gridcols" item >
                <Box> <b>{data[0]?.career}</b> </Box>
                <Box> {data[0]?.careerone} </Box>
                <Box> {data[0]?.careertwo} </Box>
                <Box> {data[0]?.careerthree} </Box>
                <Box> {data[0]?.careerfour} </Box>
            </Grid>
            <Grid className="gridcols" item >
                <Box><b> {data[0]?.pressroom}</b> </Box>
                <Box> {data[0]?.pressroomone} </Box>
                <Box> {data[0]?.pressroomtwo} </Box>
            </Grid>
            <Grid className="gridcols" item >
                <Box> <b>{data[0]?.contact}</b> </Box>
                <Box> {data[0]?.contactone} </Box>
            </Grid>
        </Grid>
    )
}