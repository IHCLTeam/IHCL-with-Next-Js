import client from './sanity'

// First Data
const opts = `title, subtitle, slug, directors, 'coverImage': coverImage.asset->url, heading, description`

export async function getAllBlogs() {
    const results = await client.fetch(`*[_type == 'movie' ] {${opts}}`)
    return results;
}

// Second Data
const authorData = `subtitle, slug, 'coverImage': coverImage.asset->url, description, hotel, key, destination, hotels, keys, destinations, info`

export async function getBlog() {
    const data = await client.fetch(`*[_type == 'author1' ] {${authorData}}`)
    return data;
}

// Third Data
const mealDataList = `title, subtitle, slug, 'coverImage': coverImage.asset->url, description, city, day, market, cities, days, markets, info, information, heading`

export async function getMealData() {
    const mealData = await client.fetch(`*[_type == 'avatar'] {${mealDataList}}`)
    return mealData;
}

// Fourth Data
const sidebysidelist = `title, subtitle, 'coverImage': coverImage.asset->url, info`

export async function getSideBySideList() {
    const sideList = await client.fetch(`*[_type == 'authorIntro'] {${sidebysidelist}}`)
    return sideList;
}

// Fifth Data
const extrafeatures = `title, slug, 'coverImage': coverImage.asset->url, details, description`

export async function getFeatures() {
    const featuresfun = await client.fetch(`*[_type == 'featuresInfo'] {${extrafeatures}}`)
    return featuresfun;
}

// Sixth Data
const footerdata = `title, slug, brand, taj, seleq, vivan, ginger`

export async function getFootersData() {
    const footersdata = await client.fetch(`*[_type == 'footerIntro1'] {${footerdata}}`)

    console.log(await client.fetch(`*[_type == 'footerIntro'] {${footerdata}}`) , 'footersdatabuild')
    return footersdata;
}

// Seventh Data 
const footerSide = `accessibility, slug, sitemap, language, terms, privacyPolicy`

export async function getFooterSidesData() {
    const footerdatasideitems = await client.fetch(`*[_type == 'underFooter'] {${footerSide}}`)
    return footerdatasideitems;
}

// Eighth Data
const onlyTwo = `title, slug, newsButton`

export async function getOnlyTwoItems() {
    const twoItemsOnly = await client.fetch(`*[_type == 'newsLetter'] {${onlyTwo}}`)
    return twoItemsOnly;
}

// Ninth Data 
const lastLogos = `title, subtitle, slug, copyright, taj, seleqtions, ginger, vivanta, ama, qmin, tajsats`

export async function getCopyrightItems() {
    const copyrightItems = await client.fetch(`*[_type == 'brands'] {${lastLogos}}`)
    return copyrightItems;
}

// Nav Files Data 
const navone = `title, subtitle, slug, heading, body, 'coverImage': coverImage.asset->url,`

export async function getNavDataOne() {
    const navfile = await client.fetch(`*[_type == 'navbarfileone'] {${navone}}`)
    return navfile;
}

// Santosh 
const blogFields = `
text,
'image':image.asset->url,
title,`

const hrcard = `
title,
text,
text1,
text2,
`

const bannercard = `
'image':image.asset->url,
alttext,
slug,
`
const bordernone = `
title,
descripition,
`

const headtwo = `
header`


//FOOTER DATA

const footerbrnd = `
header,
cOne,
cTwo,
cThree,
cFour,
cFive,
`
const footercarer = `
header,
cOne,
cTwo,
cThree,
cFour,
`
const footercompny = `
header,
cOne,
cTwo,
cThree,
cFour,
`
const footercontact = `
header,
cOne,
cTwo,
`

const footerdevlpt = `
header,
cOne,
cTwo,
cThree,
cFour,
`

const footerinvestr = `
header,
cOne,
cTwo,
`

const footerPressRom = `
header,
cOne,
cTwo,
`

const footerResponsibil = `
header,
cOne,
cTwo,
`

const subfooter = `
headerOne,
headerTwo,
headerThree,
headerFour,
headerFive,
`

const joinus = `
content,
btn, 
`

const footerdwn = `
'logo':logo.asset->url,
'TajIcon':TajIcon.asset->url,
'seleqtionsBrandIcon':seleqtionsBrandIcon.asset->url,
'vivantaIcon':vivantaIcon.asset->url,
'gingerIcon':gingerIcon.asset->url,
'expressionsIcon':expressionsIcon.asset->url,
'tajSatsIcon':tajSatsIcon.asset->url,
brands,
content,
`
export async function getAllBlo() {

  const results = await client
    .fetch(`*[_type =="contact"]{${blogFields}}`);
  return results;
}

export async function getAllBlog() {
  const results = await client
    .fetch(`*[_type =="hrcard"]{${hrcard}}`);
  return results;
}

export async function getAll() {
  const results = await client
    .fetch(`*[_type =="banner"]{${bannercard}}`);
  return results;
}

export async function witoutcard() {
  const results = await client
    .fetch(`*[_type =="bordernone"]{${bordernone}}`);
  return results;
}

export async function getheadtwo() {
  const results = await client
    .fetch(`*[_type =="header"]{${headtwo}}`);
  return results;
}


export async function getBrands() {
  const results = await client
    .fetch(`*[_type =="footerBrands"]{${footerbrnd}}`);
  return results;
}

export async function getCareer() {
  const results = await client
    .fetch(`*[_type =="footerCareer"]{${footercarer}}`);
  return results;
}


export async function getCompany() {
  const results = await client
    .fetch(`*[_type =="footerCompany"]{${footercompny}}`);
  return results;
}


export async function getContact() {
  const results = await client
    .fetch(`*[_type =="footerContact"]{${footercontact}}`);
  return results;
}



export async function getDevlopmnt() {
  const results = await client
    .fetch(`*[_type =="footerDevelopment"]{${footerdevlpt}}`);
  return results;
}


export async function getInvestor() {
  const results = await client
    .fetch(`*[_type =="footerInvestors"]{${footerinvestr}}`);
  return results;
}

export async function getPressrom() {
  const results = await client
    .fetch(`*[_type =="footerPressRoom"]{${footerPressRom}}`);
  return results;
}

export async function getResponsibil() {
  const results = await client
    .fetch(`*[_type =="footerResponsibility"]{${footerResponsibil}}`);
  return results;
}

export async function getSubfooter() {
  const results = await client
    .fetch(`*[_type =="subFooter"]{${subfooter}}`);
  return results;
}

export async function getJoinUS() {
  const results = await client
    .fetch(`*[_type =="joinUs"]{${joinus}}`);
  return results;
}

export async function getFooter() {
  const results = await client
    .fetch(`*[_type =="footer"]{${footerdwn}}`);
  return results;
}


// Amit
const page = `
'image':image.asset->url,
tittle,
`

const content = `
heading,
textOne,
textTwo,
textThree,
'image':image.asset->url,
`


const ContentOne = `
'image':image.asset->url,
heading,
  text,
  button, `

const footerOne = `
title,
   brands,
   brandsone,
   brandstwo,
   brandsthree,
   brandsfour,
   brandsfive,
   company,
   companyone,
   companytwo,
   companythree,
   companyfour,
   investors,
   investorsone,
   investorstwo,
   development,
   developmentone,
   developmenttwo,
   developmentthree,
   developmentfour,
   responsibility,
   responsibilityone,
   responsibilitytwo,
   career,
   careerone,
   careertwo,
   careerthree,
   careerfour,
   pressroom,
   pressroomone,
   pressroomtwo,
   contact,
   contactone
   `
const footeron = `
 sitemap,
 ascessbility,
 language,
 privacyPolicy,
 termsofuse`


const footertwo = `
  joinus,
  subscribe`


const footerth = `
    'image':image.asset->url,
    text,
    text1,
    'imageone' :imageone.asset->url,
    'imagetwo' :imagetwo.asset->url,
   'imagethree' :imagethree.asset->url,
   'imagefour' :imagefour.asset->url,
   'imagefive':imagefive.asset->url,
   'imagesix':imagesix.asset->url,
    `




//Footer Content

const Brand = `
header,
cOne,
cTwo,
cThree,
cFour,
cFive,
`
const Companyy = `
header,
cOne,
cTwo,
cThree,
cFour,
`
const Investor = `
header,
cOne,
cTwo,
`
const Developments = `
header,
cOne,
cTwo,
cThree,
cFour,
`
const Responsibilitys = `
header,
cOne,
cTwo,
`
const Careers = `
header,
cOne,
cTwo,
`
const PressRooms = `
header,
cOne,
cTwo,
`
const Contactuss = `
header,
cOne,
`
const subFooterss = `
headerOne,
headerTwo,
headerThree,
headerFour,
headerFive,
`
const joinOurs = `
content,
btn,
`
const footerss = `
'logo':logo.asset->url,
'TajIcon':TajIcon.asset->url,
'seleqtionsBrandIcon':seleqtionsBrandIcon.asset->url,
'vivantaIcon':vivantaIcon.asset->url,
'gingerIcon':gingerIcon.asset->url,
'expressionsIcon':expressionsIcon.asset->url,
'tajSatsIcon':tajSatsIcon.asset->url,
brands,
content,
`





export async function getBlogg() {
  const results = await client.fetch(`*[_type =="property"]{${page}}`);
  return results;
}


export async function getContent() {
  const results = await client.fetch(`*[_type =="content"]{${content}}`);
  return results;
}

export async function getContentOne() {
  const results = await client.fetch(`*[_type =="contentOne"]{${ContentOne}}`);
  return results;
}
export async function getfooterIntro() {
  const results = await client.fetch(`*[_type =="footerIntro"]{${footerOne}}`);
  return results;
}

export async function getfooteron() {
  const results = await client.fetch(`*[_type =="footeron"]{${footeron}}`);
  return results;
}

export async function getfootwo() {
  const results = await client.fetch(`*[_type =="footertwo"]{${footertwo}}`);
  return results;
}

export async function getFooterThree() {
  const results = await client.fetch(`*[_type =="footerthree"]{${footerth}}`);
  return results;
}



//footer content 

export async function footerBrands() {
  const results = await client
    .fetch(`*[_type == 'footerBrands']{${Brand}}`);
  return results;
}

export async function footerCompany() {
  const results = await client
    .fetch(`*[_type == 'footerCompany']{${Companyy}}`);
  return results;
}

export async function footerInvestors() {
  const results = await client
    .fetch(`*[_type == 'footerInvestors']{${Investor}}`);
  return results;
}

export async function footerDevelopment() {
  const results = await client
    .fetch(`*[_type == 'footerDevelopment']{${Developments}}`);
  return results;
}

export async function footerResponsibility() {
  const results = await client
    .fetch(`*[_type == 'footerResponsibility']{${Responsibilitys}}`);
  return results;
}

export async function footerCareer() {
  const results = await client
    .fetch(`*[_type == 'footerCareer']{${Careers}}`);
  return results;
}

export async function footerPressRoom() {
  const results = await client
    .fetch(`*[_type == 'footerPressRoom']{${PressRooms}}`);
  return results;
}

export async function footerContactus() {
  const results = await client
    .fetch(`*[_type == 'footerContact']{${Contactuss}}`);
  return results;
}

export async function subFooter() {
  const results = await client
    .fetch(`*[_type == 'subFooter']{${subFooterss}}`);
  return results;
}

export async function joinUs() {
  const results = await client
    .fetch(`*[_type == 'joinUs']{${joinOurs}}`);
  return results;
}

export async function footer() {
  const results = await client
    .fetch(`*[_type == 'footer']{${footerss}}`);
  return results;
}


// Aditya
// import {imageUrlBuilder} from "@sanity/image-url";

//logo
const blogFieldsAdi = `
'image':image.asset->url,
`

// export default function urlFor(source) {
//   return imageUrlBuilder(client).image(source)
// }

//carosal
const carosalFields = `

'carosalImage':carosalImage.asset->url,
`

//carosal with content
const carosalOneFields = `

description,
'image':image.asset->url,
content,
`
const contentOneFields = `
header,
bodyOne,
bodyTwo,
bodyThree,
bodyFour,
bodyFive,
bodySix,
bodySeven,
'image':image.asset->url,
`

const ContentTwoFields = `
headerOne,
headerTwo,
bodyOne,
bodyOneO,
bodyTwo,
`

const ContentThreeFields = `
headerOne,
headerTwo,
bodyOneA,
bodyOneB,
bodyOneC,
bodyTwoA,
bodyTwoAO,
bodyTwoB,
bodyTwoBO,
footer,
`
const ContentFourFields = `
bodyOne,
bodyTwo,
bodyThree,
`
const ContentFiveFields =`
headOne,
headTwo,
bodyOneA,
bodyOneB,
bodyTwoA,
bodyTwoB,
bodyTwoC,
headOneD,
`

const ContentSixFields = `
header,
bodyOne,
bodyTwo,
bodyThree,
bodyFour,
bodyFive,
bodySix,
`

const ChartFields = `
'image':image.asset->url,
`

const ClanderFields = `
'image':image.asset->url,
`
const BlogFieldsOnes = `
header,
cOne,
cTwo,
cThree,
cFour,
cFive,
cSix,
cSeven,
`
const BlogFieldsTwos = `
header,
cOne,
cTwo,
cThree,
cFour,
cFive,
cSix,
cSeven,
`
const BlogFieldsThrees = `
header,
cOne,
cTwo,
cThree,
cFour,
cFive,
cSix,
`
const BlogFieldsFours = `
header,
cOne,
cTwo,
cThree,
cFour,
cFive,
cSix,
`
const BlogFieldsFives = `
header,
cOne,
cTwo,
cThree,
cFour,
cFive,
cSix,
`

//Footer Content

const Brands = `
header,
cOne,
cTwo,
cThree,
cFour,
cFive,
`
const Company = `
header,
cOne,
cTwo,
cThree,
cFour,
`
const Investors = `
header,
cOne,
cTwo,
`
const Development = `
header,
cOne,
cTwo,
cThree,
cFour,
`
const Responsibility = `
header,
cOne,
cTwo,
`
const Career = `
header,
cOne,
cTwo,
`
const PressRoom = `
header,
cOne,
cTwo,
`
const Contact = `
header,
cOne,
`
const subFooters = `
headerOne,
headerTwo,
headerThree,
headerFour,
headerFive,
`
const joinOur = `
content,
btn,
`
const footers = `
'logo':logo.asset->url,
'TajIcon':TajIcon.asset->url,
'seleqtionsBrandIcon':seleqtionsBrandIcon.asset->url,
'vivantaIcon':vivantaIcon.asset->url,
'gingerIcon':gingerIcon.asset->url,
'expressionsIcon':expressionsIcon.asset->url,
'tajSatsIcon':tajSatsIcon.asset->url,
brands,
content,
`


//blog logo 
export async function getLogo(){
    const results = await client
    .fetch(`*[_type =='blog']{${blogFieldsAdi}}`);
  return results;
}

//carosal
export async function getCarosal(){
  const results = await client
  .fetch(`*[_type == 'carosalImages']{${carosalFields}}`);
return results;
}

//carosal with content
export async function getCarosalImages(){
  const results = await client
  .fetch(`*[_type == 'carosalOne']{${carosalOneFields}}`);
return results;
}

export async function getContentOneAdi(){
  const results = await client
  .fetch(`*[_type == 'companyInformations']{${contentOneFields}}`);
return results;
}

export async function getContentTwo(){
  const results = await client
  .fetch(`*[_type == 'corporateAnnouncement']{${ContentTwoFields}}`);
return results;
}

export async function getContentThree(){
  const results = await client
  .fetch(`*[_type == 'financialResult']{${ContentThreeFields}}`);
return results;
}

export async function getContentFour(){
  const results = await client
  .fetch(`*[_type == 'agms']{${ContentFourFields}}`);
return results;
}

export async function getContentFive(){
  const results = await client
  .fetch(`*[_type == 'corporateAction']{${ContentFiveFields}}`);
return results;
}

export async function getContentSix(){
  const results = await client
  .fetch(`*[_type == 'investorToolKit']{${ContentSixFields}}`);
return results;
}

export async function getChart(){
  const results = await client
  .fetch(`*[_type == 'chart']{${ChartFields}}`);
return results;
}

export async function getClander(){
  const results = await client
  .fetch(`*[_type == 'calender']{${ClanderFields}}`);
return results;
}

export async function BlogFieldsOne(){
  const results = await client
  .fetch(`*[_type == 'companyInformation']{${BlogFieldsOnes}}`);
return results;
}

export async function BlogFieldsTwo(){
  const results = await client
  .fetch(`*[_type == 'Financialsipts']{${BlogFieldsTwos}}`);
return results;
}

export async function BlogFieldsThree(){
  const results = await client
  .fetch(`*[_type == 'corporateAnnouncements']{${BlogFieldsThrees}}`);
return results;
}

export async function BlogFieldsFour(){
  const results = await client
  .fetch(`*[_type == 'investorToolkit']{${BlogFieldsFours}}`);
return results;
}

export async function BlogFieldsFive(){
  const results = await client
  .fetch(`*[_type == 'Disclosures']{${BlogFieldsFives}}`);
return results;
}

//footer content 
// export async function footerBrands(){
//   const results = await client
//   .fetch(`*[_type == 'footerBrands']{${Brands}}`);
// return results;
// }

// export async function footerCompany(){
//   const results = await client
//   .fetch(`*[_type == 'footerCompany']{${Company}}`);
// return results;
// }

// export async function footerInvestors(){
//   const results = await client
//   .fetch(`*[_type == 'footerInvestors']{${Investors}}`);
// return results;
// }

// export async function footerDevelopment(){
//   const results = await client
//   .fetch(`*[_type == 'footerDevelopment']{${Development}}`);
// return results;
// }

// export async function footerResponsibility(){
//   const results = await client
//   .fetch(`*[_type == 'footerResponsibility']{${Responsibility}}`);
// return results;
// }

// export async function footerCareer(){
//   const results = await client
//   .fetch(`*[_type == 'footerCareer']{${Career}}`);
// return results;
// }

// export async function footerPressRoom(){
//   const results = await client
//   .fetch(`*[_type == 'footerPressRoom']{${PressRoom}}`);
// return results;
// }

export async function footerContact(){
  const results = await client
  .fetch(`*[_type == 'footerContact']{${Contact}}`);
return results;
}

// export async function subFooter(){
//   const results = await client
//   .fetch(`*[_type == 'subFooter']{${subFooters}}`);
// return results;
// }

// export async function joinUs(){
//   const results = await client
//   .fetch(`*[_type == 'joinUs']{${joinOur}}`);
// return results;
// }

// export async function footer(){
//   const results = await client
//   .fetch(`*[_type == 'footer']{${footers}}`);
// return results;
// }

// Indoo
const blogFieldsInd = `
title,
'image':image.asset->url,
'slug': slug.current,`

const puneet = `
title,
title2,
'img':img.asset->url,

 'text':description,`


const IHCL = `
 ihcl,
 'imagee':imagee.asset->url,
 'text':description1,
 
 `
const chef = `
 cap,
 'imgchef':imgchef.asset->url,
 title,
 'text':descriptions,
 button,
 
 `
const ja = `
ja,
'text':description1,
'imgj':imgj.asset->url,
title,
 'text2':description2,`


//Footer Content

// const Brands = `
// header,
// cOne,
// cTwo,
// cThree,
// cFour,
// cFive,
// `
// const Company = `
// header,
// cOne,
// cTwo,
// cThree,
// cFour,
// `
// const Investors = `
// header,
// cOne,
// cTwo,
// `
// const Development = `
// header,
// cOne,
// cTwo,
// cThree,
// cFour,
// `
// const Responsibility = `
// header,
// cOne,
// cTwo,
// `
// const Career = `
// header,
// cOne,
// cTwo,
// `
// const PressRoom = `
// header,
// cOne,
// cTwo,
// `
// const Contactus = `
// header,
// cOne,
// `
// const subFooters = `
// headerOne,
// headerTwo,
// headerThree,
// headerFour,
// headerFive,
// `
// const joinOur = `
// content,
// btn,
// `
// const footers = `
// 'logo':logo.asset->url,
// 'TajIcon':TajIcon.asset->url,
// 'seleqtionsBrandIcon':seleqtionsBrandIcon.asset->url,
// 'vivantaIcon':vivantaIcon.asset->url,
// 'gingerIcon':gingerIcon.asset->url,
// 'expressionsIcon':expressionsIcon.asset->url,
// 'tajSatsIcon':tajSatsIcon.asset->url,
// brands,
// content,
// `



//first
export async function getAllBlogsInd() {
  const results = await client.fetch(`*[_type =="author"]{${blogFieldsInd}}`);
  return results;
}
//second
export async function getAllBlogInd() {
  const results = await client.fetch(`*[_type =="puneet"]{${puneet}}`);
  return results;
}
//third
export async function getAllBlogs3() {
  const results = await client.fetch(`*[_type =="ihcl"]{${IHCL}}`);
  return results;
}
//fourth
export async function getAllBlogs4() {
  const results = await client.fetch(`*[_type =="cap"]{${chef}}`);
  return results;
}
//fifth
export async function getAllBlogs5() {
  const results = await client.fetch(`*[_type =="ja"]{${ja}}`);
  return results;
}


//footer content 
// export async function footerBrands() {
//   const results = await client
//     .fetch(`*[_type == 'footerBrands']{${Brands}}`);
//   return results;
// }

// export async function footerCompany() {
//   const results = await client
//     .fetch(`*[_type == 'footerCompany']{${Company}}`);
//   return results;
// }

// export async function footerInvestors() {
//   const results = await client
//     .fetch(`*[_type == 'footerInvestors']{${Investors}}`);
//   return results;
// }

// export async function footerDevelopment() {
//   const results = await client
//     .fetch(`*[_type == 'footerDevelopment']{${Development}}`);
//   return results;
// }

// export async function footerResponsibility() {
//   const results = await client
//     .fetch(`*[_type == 'footerResponsibility']{${Responsibility}}`);
//   return results;
// }

// export async function footerCareer() {
//   const results = await client
//     .fetch(`*[_type == 'footerCareer']{${Career}}`);
//   return results;
// }

// export async function footerPressRoom() {
//   const results = await client
//     .fetch(`*[_type == 'footerPressRoom']{${PressRoom}}`);
//   return results;
// }

// export async function footerContactus() {
//   const results = await client
//     .fetch(`*[_type == 'footerContact']{${Contactus}}`);
//   return results;
// }

// export async function subFooter() {
//   const results = await client
//     .fetch(`*[_type == 'subFooter']{${subFooters}}`);
//   return results;
// }

// export async function joinUs() {
//   const results = await client
//     .fetch(`*[_type == 'joinUs']{${joinOur}}`);
//   return results;
// }

// export async function footer() {
//   const results = await client
//     .fetch(`*[_type == 'footer']{${footers}}`);
//   return results;
// }