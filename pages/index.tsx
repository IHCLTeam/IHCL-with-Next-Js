import { getAllBlogsInd, getAllBlogInd, getAllBlogs3, getAllBlogs4, getAllBlogs5, footerBrands, footerCompany, footer, footerCareer, footerContactus, footerDevelopment, footerInvestors, footerPressRoom, footerResponsibility, joinUs, subFooter } from "../lib/api";
import Image from "next/image";
import { Box, Button, Grid, Typography, Paper, styled } from "@mui/material";
// import PositionedMenu from "../componentindoo/MenuItem";
import imageloader from "./imageLoader";
import { Footer } from "../componentindoo/Footer/Footer";
import { Brands } from "../componentindoo/Footer/brands";
import { Careers } from "../componentindoo/Footer/Careers";
import Company from "../componentindoo/Footer/Company";
import { Investors } from "../componentindoo/Footer/Investors";
import { join } from "path";
import { PressRooms } from "../componentindoo/Footer/PressRooms";
import { Responsibility } from "../componentindoo/Footer/Responsibility";
import SubFooter from "../componentindoo/Footer/subFooter";
import { Developments } from "../componentindoo/Footer/Developments";
import { Join } from "../componentindoo/Footer/Join";
import { Banner } from "../componentindoo/Banner";
import { HeadBar } from "../componentindoo/headBar";
import { ManagingDirector } from "../componentindoo/ManagingDirector";
import { ChefLink } from "../componentindoo/ChefLink";
import { Authors } from "../componentindoo/authors";
import { BlogThree } from "../componentindoo/BlogThree";
import { ContactUs } from "../componentindoo/Footer/Contact";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  border: 'none'
}))
const Contact = ({ blogs, blogtwo, blog3, blog4, blog5, footerBrand, footerCareers, footerCompanys, footers, footerContacts, footerDevelopments, footerInvestor, footerPressRooms, footerResponsibilitys, subFooters, join }: any) => {
  // debugger
  {
    console.log("load")
  }
  return (
    <>
      {/* <PositionedMenu /> */}
      <Banner data={blogs} />
      <HeadBar />
      <div className="desc">
        <p>Aspiration 2022 is based on a promise to work together to create greater enterprise value, and make IHCL South Asia’s most iconic and profitable hospitality company. -  Puneet Chhatwal</p>
      </div>
      <div className="titleInd">
        <h2><u>Leaders</u> Speak</h2>
      </div>
      <ManagingDirector data={blogtwo} />
      <br></br>
      <br></br>
      <div>
        <iframe className="youtube" src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
        <h2 className="titleInd"><u>Happen</u>ings at IHCL</h2>
        <BlogThree data={blog3} />
        <h2 className="titleInd"><u>Work w</u>ith a Global Leader in Hospitality</h2>
      </div>
      <div style={{ display: "flex", marginLeft: '5%' }}>
        <ChefLink data={blog4} />
        <Authors data={blog5} />
      </div>
      <Box sx={{ flexGrow: 1, marginLeft: '3%' }}>
        <Grid container spacing={2} columns={18}>
          <Grid item xs={2}>
            <Item sx={{ border: 'none', boxShadow: 'none', fontWeight: 900, fontSize: 14 }}>Home</Item>
          </Grid>
          <Grid item xs={2}>
            <Item sx={{ border: 'none', boxShadow: 'none' }}>
              <Brands data={footerBrand} />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item sx={{ border: 'none', boxShadow: 'none' }}>
              <Company data={footerCompanys} /></Item>
          </Grid>
          <Grid item xs={2}>
            <Item sx={{ border: 'none', boxShadow: 'none' }}>
              <Investors data={footerInvestor} /></Item>
          </Grid>
          <Grid item xs={2}>
            <Item sx={{ border: 'none', boxShadow: 'none' }}>
              <Developments data={footerDevelopments} />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item sx={{ border: 'none', boxShadow: 'none' }}>
              <Responsibility data={footerResponsibilitys} />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item sx={{ border: 'none', boxShadow: 'none' }}>
              <Careers data={footerCareers} />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item sx={{ border: 'none', boxShadow: 'none' }}>
              <PressRooms data={footerPressRooms} />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item sx={{ border: 'none', boxShadow: 'none' }}>
              <ContactUs data={footerContacts} />
            </Item>
          </Grid>
        </Grid>
      </Box>
      {/* subFooter */}
      <Grid>
        <Typography>
          <SubFooter data={subFooters} />
        </Typography>
      </Grid>

      <Grid>
        <Typography sx={{ marginTop: '1%', marginLeft: '8%' }}>
          <Join data={join} />
        </Typography>

      </Grid>
      <Grid>
        <Footer data={footers} />
      </Grid>
    </>
  )
}
export default Contact;
export async function getServerSideProps() {
  const blogs = await getAllBlogsInd();
  const blogtwo = await getAllBlogInd();
  const blog3 = await getAllBlogs3();
  const blog4 = await getAllBlogs4();
  const blog5 = await getAllBlogs5();
  //footer Content here
  const footerBrand = await footerBrands();
  const footerCompanys = await footerCompany();
  const footerInvestor = await footerInvestors();
  const footerDevelopments = await footerDevelopment();
  const footerResponsibilitys = await footerResponsibility();
  const footerCareers = await footerCareer();
  const footerPressRooms = await footerPressRoom();
  const footerContacts = await footerContactus();
  const subFooters = await subFooter();
  const join = await joinUs();
  const footers = await footer();
  return {
    props: {
      blogs,
      blogtwo,
      blog3,
      blog4,
      blog5,
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
    }
  }
}
