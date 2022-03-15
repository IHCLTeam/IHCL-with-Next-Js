import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Image from 'next/image'
import imageloader from '../pages/imageLoader';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


interface arrayDataType {
    heading: string;
    textOne: string;
    textTwo: string;
    textThree: string;
    image: string;
}

interface contentData {
    data: arrayDataType[];
}


export function ContentMiddle({ data }: contentData) {
    return (

        <Paper
            sx={{
                p: 6,
                margin: 'auto',
                maxWidth: 1200,
                maxHeight: 1200,
                bottom: 10,
                flexGrow: 2,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid item sm container >
                <Grid item xs container direction="column" >
                    <Grid item xs container spacing={1}>
                        <Typography gutterBottom variant="h4" component="h5">
                            {data[0]?.heading}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {data[0]?.textOne}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data[0]?.textTwo}
                        </Typography>
                        <Typography variant="body2">
                            {data[0]?.textThree}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <ButtonBase sx={{ width: 588, top: 30, left: 40, height: 420 }}>
                        
                          <Image src={data[0]?.image} loader={imageloader}  alt="img delt" height={400} width={600} />
                    </ButtonBase>

                </Grid>
            </Grid>
        </Paper>
    );
}
