import Image from 'next/image'
import imageLoader from '../pages/imageLoader'
import styles from '../styles/Home.module.css'

const Second = ({image, subtitle, description, keya, hotel, destination, keys, hotels, destinations, info}) => {
    return (
        <>
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
                                <p className={styles.tablechild}>{keya}</p>
                                <p className={styles.tablechild}>{hotel}</p>
                                <p className={styles.tablechild}>{destination}</p>
                            </div>

                            <div className={styles.tabledata}>
                                <p className={styles.tablechild}>{keys}</p>
                                <p className={styles.tablechild}>{hotels}</p>
                                <p className={styles.tablechild}>{destinations}</p>
                            </div>
                        </div>

                        <p className={styles.contentbutton}>{info}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Second