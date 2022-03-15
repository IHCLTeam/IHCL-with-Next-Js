import React from 'react'
import Link from 'next/link'
import { Tabs, Tab, Typography } from '@mui/material'
import { style } from '@mui/system'
import { blue, red } from '@mui/material/colors'

export function Navbar() {
    return (
        <>
            <Tabs sx={{ bgcolor: '#002b49', color: '#ffffff' }}>

                <Link href='/' passHref>
                    <Tab label='IHCL' />

                </Link>
                <Typography sx={{ marginLeft: 20 }}>
                    <Link href='/' passHref>
                        <Tab label='brand' />

                    </Link>

                    <Link href='/' passHref>
                        <Tab label='company' />

                    </Link>

                    <Link href='/' passHref>
                        <Tab label='investor' />

                    </Link>
                    <Link href='/' passHref>
                        <Tab label='Devlopment' />

                    </Link>
                    <Link href='/' passHref>
                        <Tab label='carrier' />

                    </Link>
                    <Link href='/' passHref>
                        <Tab label='pressroom' />

                    </Link>
                    <Link href='/' passHref>
                        <Tab label='contact-us' />

                    </Link>
                </Typography>
            </Tabs>
        </>
    )
}