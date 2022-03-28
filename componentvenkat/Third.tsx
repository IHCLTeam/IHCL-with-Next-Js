import Image from 'next/image'
import imageLoader from '../pages/imageLoader'
import styles from '../styles/stylesvenkat/Home.module.css'

const Third = ({info, title, image, subtitle, description, city, day, market, cities, days, markets, information, heading}) => {
    return (
        <>
            <div className={styles.showmoreparent}>
              <p className={styles.showmorebutton}>{info} &#62;</p>
            </div>

            <div className={styles.titles}>
              <h1>{title}</h1>
              <div className={styles.emptydiv}></div>
            </div>

            <div className={styles.threeblocks}>

                <div className={styles.maincontent}>

                  <div className={styles.offimage}>
                    <Image loader={imageLoader} src={image} alt="Not Found" width={600} height={450} />
                  </div>

                  <div className={styles.offcontent}>
                    <h2 className={styles.textfitting}>{subtitle}</h2>
                    <p className={styles.textfittings}>{description}</p>

                    <div className={styles.tableparent}>
                      <div className={styles.tabledata}>
                        <p className={styles.tablechild}>{city}</p>
                        <p className={styles.tablechild}>{day}</p>
                        <p className={styles.tablechild}>{market}</p>
                      </div>
                      <div className={styles.tabledata}>
                        <p className={styles.tablechild}>{cities}</p>
                        <p className={styles.tablechild}>{days}</p>
                        <p className={styles.tablechild}>{markets}%</p>
                      </div>
                    </div>

                    <p className={styles.contentbutton}>{information}</p>
                  </div>

                </div>

            </div>

            <div className={styles.fouriconstext}>
              <h1>{heading}</h1>
              <div className={styles.empt}></div>
            </div>
        </>
    )
}

export default Third