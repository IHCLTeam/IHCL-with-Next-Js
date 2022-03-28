import styles from '../styles/stylesvenkat/Home.module.css'

import First from '../componentvenkat/First'
import Second from '../componentvenkat/Second'
import Third from '../componentvenkat/Third'
import Fourth from '../componentvenkat/Fourth'
import Fifth from '../componentvenkat/Fifth'
import Sixth from '../componentvenkat/Sixth'
import Seventh from '../componentvenkat/Seventh'
import Eight from '../componentvenkat/Eight'
import Ninth from '../componentvenkat/Ninth'

//Nav files
// import Careers from '../NavbarFiles/careers'

import { getAllBlogs, getBlog, getFeatures, getMealData, getSideBySideList, getFootersData, getFooterSidesData, getOnlyTwoItems, getCopyrightItems } from '../lib/api'

function Home({ blogs, datas, meals, sideLists, featureslist, footerdatainfo, sideFooter, itemsTwo, copyrightItems }) {
  return (
    <>
      {/* First Data are closed here! */}
      {blogs.map((blog: { slug: any; title: any; subtitle: any; coverImage: any; heading: any; description: any }) => {
        return (
          <div key={blog.slug}>
            <First
              title={blog.title}
              subtitle={blog.subtitle}
              image={blog.coverImage}
              heading={blog.heading}
              description={blog.description}
            />
          </div>)
      })}

      {/* Second Data from start here! */}
      <div className={styles.titles}>
        <h1>Hospitality</h1>
        <div className={styles.emptydiv}></div>
      </div>
      {datas.map((data: { slug: any; subtitle: any; coverImage: any; key: any; hotel: any; destination: any; keys: any; hotels: any; destinations: any; info: any; description: any }) => {
        return (
          <div key={data.slug}>
            <Second
              subtitle={data.subtitle}
              image={data.coverImage}
              keya={data.key}
              hotel={data.hotel}
              destination={data.destination}
              keys={data.keys}
              hotels={data.hotels}
              destinations={data.destinations}
              info={data.info}
              description={data.description}
            />
          </div>)
      })}

      {/* Third Part start from here..! */}
      {meals.map((meal: { slug: any; title: any; subtitle: any; coverImage: any; city: any; day: any; market: any; cities: any; days: any; markets: any; info: any; description: any; information: any; heading: any }) => {
        return (
          <div key={meal.slug}>
            <Third
              title={meal.title}
              subtitle={meal.subtitle}
              image={meal.coverImage}
              city={meal.city}
              day={meal.day}
              market={meal.market}
              cities={meal.cities}
              days={meal.days}
              markets={meal.markets}
              info={meal.info}
              description={meal.description}
              information={meal.information}
              heading={meal.heading}
            />
          </div>)
      })}

      {/* Fourth Part start from here..! */}
      <div className={styles.onething}>
        {sideLists.map((sidelist: { slug: any; coverImage: any; title: any; subtitle: any; info: any }) => {
          return (
            <div key={sidelist.slug} className={styles.cent}>
              <Fourth
                image={sidelist.coverImage}
                title={sidelist.title}
                subtitle={sidelist.subtitle}
                info={sidelist.info}
              />
            </div>)
        })}
      </div>

      {/* Fifth part start from here..! */}
      <div className={styles.onethings}>
        {featureslist.map((feature: { slug: any; coverImage: any; title: any; details: any; description: any }) => {
          return (
            <div key={feature.slug} className={styles.twooftwo}>
              <Fifth
                image={feature.coverImage}
                title={feature.title}
                details={feature.details}
                description={feature.description}
              />
            </div>)
        })}
      </div>

      {/* Footer Part Start From Here... */}
      <div className={styles.footerparent}>

        {/* Sixth part start from here..! */}
        <div className={styles.foot}>
          {footerdatainfo.map((footer: { slug: any; title: any; brand: any; taj: any; seleq: any; vivan: any; ginger: any }) => {
            return (
              <div key={footer.slug}>
                <Sixth
                  title={footer.title}
                  brand={footer.brand}
                  taj={footer.taj}
                  seleq={footer.seleq}
                  vivan={footer.vivan}
                  ginger={footer.ginger}
                />
              </div>)
          })}
        </div>

        <div className={styles.footerhorizontalline}></div>

        {/* Seventh part start from here..! */}
        {sideFooter.map((footerone: { slug: any; sitemap: any; accessibility: any; language: any; terms: any; privacyPolicy: any }) => {
          return (
            <div key={footerone.slug}>
              <Seventh
                sitemap={footerone.sitemap}
                accessibility={footerone.accessibility}
                language={footerone.language}
                terms={footerone.terms}
                privacyPolicy={footerone.privacyPolicy}
              />
            </div>)
        })}

        <div className={styles.footerhorizontalline}></div>

        {/* Eighth part start from here..! */}
        {itemsTwo.map((twoitems: { slug: string; title: string; newsButton: string }) => {
          return (
            <div key={twoitems.slug}>
              <Eight
                title={twoitems.title}
                newsButton={twoitems.newsButton}
              />
            </div>)
        })}

        <div className={styles.footerhorizontalline}></div>

        {/* Ninth part starts from here..! */}
        {copyrightItems.map((copyright: { slug: any; title: any; subtitle: any; copyright: any; taj: any; seleqtions: any; vivanta: any; ginger: any; ama: any; qmin: any; tajsats: any }) => {
          return (
            <div key={copyright.slug}>
              <Ninth
                title={copyright.title}
                subtitle={copyright.subtitle}
                copyright={copyright.copyright}
                taj={copyright.taj}
                seleqtions={copyright.seleqtions}
                vivanta={copyright.vivanta}
                ginger={copyright.ginger}
                ama={copyright.ama}
                qmin={copyright.qmin}
                tajsats={copyright.tajsats}
              />
            </div>)
        })}

        {/* Ninth part ends here..! */}
        <br />
        <br />
      </div>
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const blogs = await getAllBlogs()
  const datas = await getBlog()
  const meals = await getMealData()
  const sideLists = await getSideBySideList()
  const featureslist = await getFeatures()
  const footerdatainfo = await getFootersData()
  const sideFooter = await getFooterSidesData()
  const itemsTwo = await getOnlyTwoItems()
  const copyrightItems = await getCopyrightItems()

  return {
    props: {
      blogs,
      datas,
      meals,
      sideLists,
      featureslist,
      footerdatainfo,
      sideFooter,
      itemsTwo,
      copyrightItems,
    }
  }
}