import React from 'react'
import Link from 'next/link'
import { Card, Grid, Typography } from '@mui/material'
import { getBlogg, getContent, getContentOne, footerBrands, footerCompany, footerInvestors, footerDevelopment, footerResponsibility, footerCareer, footerPressRoom, footerContactus, subFooter, joinUs, footer } from '../lib/api'
import { HomeBanner } from '../Componentamit/HomeBanner'
import { ContentMiddle } from '../Componentamit/ContentMiddle'
import ContentOne from '../Componentamit/ContentOne'
import { Brands } from '../Componentamit/footer/brands'
import { Developments } from '../Componentamit/footer/Developments'
import { Careers } from '../Componentamit/footer/Careers'
import { PressRooms } from '../Componentamit/footer/PressRooms'
import { ContactUs } from '../Componentamit/footer/Contact'
import SubFooter from '../Componentamit/footer/subFooter'
import Company from '../Componentamit/footer/Company'
import { Investors } from '../Componentamit/footer/Investors'
import { Responsibility } from '../Componentamit/footer/Responsibility'
import { Join } from '../Componentamit/footer/Join'
import { Footer } from '../Componentamit/footer/Footer'

function Home({ blog, content, contentOne, Brandes,
  Companys, Investor, Developmentes, Responsibilitys, Careeres, PressRoomes, Contactus, subFooters, us, foter }: any) {
  return (
    <>
      <div>
        <>
          <HomeBanner data={blog} />

        </> <br /> <br />
        <>
          <ContentMiddle data={content} />
        </>
        <br />
        <br />
        <>
          {contentOne.map((contentOnes: { slug: React.Key | null | undefined; image: string; heading: string; text: string; button: string }) => {
            return (<div key={contentOnes.slug}>
              <ContentOne
                image={contentOnes.image}
                heading={contentOnes.heading}
                text={contentOnes.text}
                button={contentOnes.button}
              />
            </div>
            )
          })}
        </>
      </div>


      {/* footer */}
      <Grid sx = {{backgroundColor:' #efeeee',paddingTop : '1%',marginTop : '4%'}}>
        <Typography sx = {{display : 'flex',justifyContent  : 'space-around',marginTop : '2%', width : '69%',marginLeft : '15%'}}>
          <Brands data={Brandes} />
          <Company data={Companys} /> 
          <Investors data={Investor} />
          <Developments data={Developmentes} />
          <Responsibility data={Responsibilitys} />
          <Careers data={Careeres} />
          <PressRooms data={PressRoomes} />
          <ContactUs data={Contactus} />
        </Typography>
        <Typography>
          <SubFooter data={subFooters} />
          <Join data={us} />
        <hr className='hr' />
          <Footer data={foter} />
        </Typography>

      </Grid>


    </>


  )
}

export default Home

export async function getStaticProps() {
  const blog = await getBlogg();
  const content = await getContent();
  const contentOne = await getContentOne();
  const Brandes = await footerBrands();
  const Companys = await footerCompany();
  const Investor = await footerInvestors();
  const Developmentes = await footerDevelopment();
  const Responsibilitys = await footerResponsibility();
  const Careeres = await footerCareer();
  const PressRoomes = await footerPressRoom();
  const Contactus = await footerContactus();
  const subFooters = await subFooter();
  const us = await joinUs();
  const foter = await footer();
  return {
    props: {
      blog,
      content,
      contentOne,
      Brandes,
      Companys,
      Investor,
      Developmentes,
      Responsibilitys,
      Careeres,
      PressRoomes,
      Contactus,
      subFooters,
      us,
      foter
    },
  };
}


