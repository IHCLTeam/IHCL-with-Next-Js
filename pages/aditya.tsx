import * as React from "react";
import { Carosal } from "../componentaditya/Carosals/Home";
import {
  BlogFieldsFive,  BlogFieldsFour,  BlogFieldsOne,  BlogFieldsThree,  BlogFieldsTwo,
  getCarosal,  getCarosalImages,  getChart,  getClander,  getContentFive,  getContentFour,  getContentOneAdi, 
  getContentSix,  getContentThree,  getContentTwo,  getLogo,footerBrands, footerCompany, footer, footerCareer, 
  footerContact, footerDevelopment, footerInvestors, footerPressRoom, footerResponsibility, joinUs, subFooter 
   } from "../lib/api";
import { CarosalBlock } from "../componentaditya/body/CarosalBlock";
import ContentOne from "../componentaditya/body/ContentOne";
import Image from "next/image";
import imageLoader from "./imageLoader";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { ContentBlockOne } from "../componentaditya/Carosals/ContentBlockOne";
import { ContentBlockThree } from "../componentaditya/body/ContentBlockThree";
import { ContentFour } from "../componentaditya/body/ContentFour";
import ContentFive from "../componentaditya/body/ContentFive";
import { ContentBlockSix } from "../componentaditya/body/ContentBlockSix";
import BlogContentOne from "../componentaditya/BlogContent/BlogContentOne";
import BlogContentTwo from "../componentaditya/BlogContent/BlogContentTwo";
import BlogContentThree from "../componentaditya/BlogContent/BlogContentThree";
import BlogContentFour from "../componentaditya/BlogContent/BlogContentFour";
import BlogContentFive from "../componentaditya/BlogContent/BlogContentFive";
import { Brands } from "../componentaditya/Footer/brands";
import Company from "../componentaditya/Footer/Company";
import { Investors } from "../componentaditya/Footer/Investors";
import { Developments } from "../componentaditya/Footer/Developments";
import { Responsibility } from "../componentaditya/Footer/Responsibility";
import { Careers } from "../componentaditya/Footer/Careers";
import { PressRooms } from "../componentaditya/Footer/PressRooms";
import Contact from "../componentaditya/Footer/Contact";
import SubFooter from "../componentaditya/Footer/subFooter";
import { Join } from "../componentaditya/Footer/Join";
import { Footer } from "../componentaditya/Footer/Footer";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Hello = ({  carosalImage,  carosalContent,  contentOne,  contentTwo,  
  contentThree,  charts,  contentFour,  contentFive,  calender,  contentSix, blogFieldOne,
  blogFieldTwo, blogFieldThree,  blogFieldFour,  blogFielsFive , footerBrand,
  footerCompanys,  footerInvestor,  footerDevelopments,  footerResponsibilitys,
  footerCareers,  footerPressRooms,  footerContacts,  subFooters,  join,  footers,} : any) => {

  return (
    <div >
    
      <div>
        <Carosal data={carosalImage} />
      </div>

      <div className="empty">
        <p>.</p>
      </div>

      {/* box one */}
<Grid sx={{margin:'auto',display:'block',marginLeft : '15%'}}  className = 'borders'>

<Box sx={{ flexGrow: 1 ,margin : '1%'}}>

        <Grid container spacing={3}>
          
          <Grid item xs={2.5}>
            <Item sx = {{border : 'none',boxShadow :'none'}}>
              <ContentOne data={contentOne} />
            </Item>
          </Grid>

          <Grid item xs={5}>
            <Item sx = {{padding : '2%'}}>
              <CarosalBlock data={carosalContent} />
            </Item>
          </Grid>

          <Grid item xs={2.5}>
            <Item  sx = {{border : 'none',boxShadow :'none'}}>
              <Image
                loader={imageLoader}
                src={contentOne[0]?.image}
                alt="not found"
                height={200}
                width={240}
              />
            </Item>
          </Grid>
        </Grid>

        {/* box Two */}

      </Box>
      <Box sx={{ flexGrow: 1 ,margin : '1%'}}  className = 'borders'>
        <Grid container spacing={2}>

          <Grid item xs={2.5}>
            <Item sx = {{padding : '8%'}}>
              <ContentBlockOne data={contentTwo} />
            </Item>
          </Grid>

          <Grid item xs={5} >
            <Item  sx = {{border : 'none',boxShadow :'none'}}>
              <ContentBlockThree data={contentThree} />
            </Item>
          </Grid>

          <Grid item xs={2.3}>
            <Item>
              <Image
                loader={imageLoader}
                src={charts[0]?.image}
                alt="not found"
                height={204}
                width={200}
              />
            </Item>
          </Grid>
        </Grid>

        {/* box Three */}

      </Box>
      <Box sx={{ flexGrow: 1 ,margin : '1%'}}>
        <Grid container spacing={3}>
          <Grid item xs={2.5} className = 'borders'>
            <Item  sx = {{border : 'none',boxShadow :'none'}}>
              <ContentFour data={contentFour} />
            </Item>
          </Grid>

          <Grid item xs={5}>
            <Item sx = {{paddingBottom : '11%'}}>
              <ContentFive data={contentFive} />
            </Item>
          </Grid>

          <Grid item xs={2.5}>
            <Item  sx = {{border : 'none',boxShadow :'none'}}>
              <Image
                loader={imageLoader}
                src={calender[0]?.image}
                alt="not found"
                height={245}
                width={280}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
      
</Grid>

{/* Blog Data */}


      <Box sx = {{marginLeft : '16%',marginBottom : '2%'}}>
        <ContentBlockSix data={contentSix} />
      </Box>

      <Typography sx= {{ backgroundColor : '#002a49',color : 'white',paddingLeft : '13%',paddingTop : '1%'}}>
      <h3>QUICK LINKS</h3>
      </Typography>
      
      <Grid sx = {{display : 'flex', justifyContent : 'center' , backgroundColor : '#002a49',color : 'white' , border : 'none', boxShadow : 'none' , marginBottom : '1%'}}>


        <Item className = "blockText">
          <BlogContentOne data = {blogFieldOne} />
        </Item>

        <Item className = "blockText">
          <BlogContentTwo data = {blogFieldTwo} />
        </Item>

        <Item className = "blockText">
          <BlogContentThree data={blogFieldThree} />
        </Item>

        <Item className = "blockText"> 
          <BlogContentFour data = {blogFieldFour} />
        </Item>

        <Item className = "blockText">
          <BlogContentFive data={blogFielsFive} />
        </Item>

        <Typography sx={{display : 'block',paddingTop : '16%', paddingBottom : '1%' , fontSize : '13px'}}>
        DISCLAIMER
        </Typography>

      </Grid>
      
{/* footer */}

<Box sx={{ flexGrow: 1 , marginLeft : '16%'}}>
      <Grid container spacing={2} columns={23}>
        <Grid item xs={2}>
          <Item sx = {{ border : 'none',boxShadow :'none',fontWeight : 900}}>Home</Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx = {{ border : 'none',boxShadow :'none'}}>
          <Brands data = {footerBrand} />
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx = {{ border : 'none',boxShadow :'none'}}> 
            <Company data = {footerCompanys} /></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx = {{ border : 'none',boxShadow :'none'}}> 
            <Investors data = {footerInvestor} /></Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx = {{ border : 'none',boxShadow :'none'}}>  
          <Developments data = {footerDevelopments} />
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx = {{ border : 'none',boxShadow :'none'}}> 
            <Responsibility data = {footerResponsibilitys} />
            </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx = {{ border : 'none',boxShadow :'none'}}> 
            <Careers data = {footerCareers} />
            </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx = {{ border : 'none',boxShadow :'none'}}>  
            <PressRooms data = {footerPressRooms} />
            </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx = {{ border : 'none',boxShadow :'none'}}> 
            <Contact data = {footerContacts} />
            </Item>
        </Grid>
      </Grid>
    </Box>
 {/* subFooter */}
 
      <Grid>
        <Typography>
          <SubFooter data = {subFooters} />
        </Typography>
      </Grid>

      <Grid>

        <Typography sx = {{marginTop : '1%', marginLeft : '17%'}}>
          <Join data = {join} />
        </Typography>

      </Grid>

      <Grid sx = {{width : '88%' , marginLeft : '7%'}}>
        <Footer data = {footers} />
      </Grid>
      
    </div>
  );
};

export default Hello;

export async function getStaticProps() {
  const blog = await getLogo();
  const carosalImage = await getCarosal();
  const carosalContent = await getCarosalImages();
  const contentOne = await getContentOneAdi();
  const contentTwo = await getContentTwo();
  const contentThree = await getContentThree();
  const contentFour = await getContentFour();
  const contentFive = await getContentFive();
  const contentSix = await getContentSix();
  const charts = await getChart();
  const calender = await getClander();
  //Blog Content
  const blogFieldOne = await BlogFieldsOne();
  const blogFieldTwo = await BlogFieldsTwo();
  const blogFieldThree = await BlogFieldsThree();
  const blogFieldFour = await BlogFieldsFour();
  const blogFielsFive = await BlogFieldsFive();
  //footer Content here
  const footerBrand = await footerBrands();
  const footerCompanys = await footerCompany();
  const footerInvestor = await footerInvestors();
  const footerDevelopments = await footerDevelopment();
  const footerResponsibilitys = await footerResponsibility();
  const footerCareers = await footerCareer();
  const footerPressRooms = await footerPressRoom();
  const footerContacts = await footerContact();
  const subFooters = await subFooter();
  const join = await joinUs();
  const footers = await footer();

  return {
    props: {
      carosalImage,
      blog,
      carosalContent,
      contentOne,
      contentTwo,
      contentThree,
      contentFour,
      contentFive,
      contentSix,
      charts,
      calender,
      blogFieldOne,
      blogFieldTwo,
      blogFieldThree,
      blogFieldFour,
      blogFielsFive,
      footerBrand,
      footerCompanys,
      footerInvestor,
      footerDevelopments,
      footerResponsibilitys,
      footerCareers,
      footerPressRooms,
      footerContacts,
      subFooters,
      join,
      footers,
    },
  };
}