import * as React from 'react';
import { Button, Grid, Typography } from "@mui/material"

interface props {
    joinus: string;
    subscribe: string;

}
interface fotertwodata {
    data: props[]
}
export function FooterTwo({ data }: fotertwodata) {

    return (

        <Grid sx={{
            marginTop: 5, marginLeft: 15, borderTop: 1, borderBottom: 1, paddingTop: '1%'
            , paddingBottom: '3%', justifyContent: 'space-between', width: '90%'
        }}>
            <Typography>
                {data[0].joinus}
            </Typography>
            <button className='btn'>
                {data[0].subscribe}
            </button>
        </Grid>
    )
}