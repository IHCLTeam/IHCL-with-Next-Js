import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Image from 'next/image'
import imageloader from '../pages/imageLoader';
import Button from '@mui/material/Button';


interface Props {
    image: string;
    heading: string;
    text: string;
    button: string
}




export default function ContentOne({ image, heading, text, button }: Props) {
    debugger
    return (
        <Paper
            sx={{

                margin: 'auto',
                maxWidth: 1200,
                maxHeight: 400,
                bottom: 10,
                flexGrow: 2,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid>
                <Grid item sm container spacing={1} >
                    <Image src={image} loader={imageloader} alt="img delt" height={200} width={450} />
                    <Grid item xs container direction="column" >
                        <Typography gutterBottom variant="h5" component="h5" >
                            {heading}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {text}
                        </Typography>
                        <Grid item xs container spacing={0}>

                            <Button className='buttonamit' >{button}</Button>

                        </Grid>
                    </Grid>




                </Grid>
            </Grid>
        </Paper>
    );
}
