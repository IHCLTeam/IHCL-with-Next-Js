import Image from 'next/image'
import imageLoader from '../pages/imageLoader'
import styles from '../styles/Home.module.css'

export default function Careers({ title, subtitle, heading, body, image }) {

    return (
        <>
            <div className={styles.all}>
                <div className={styles.first}>
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
 {/* first */}
                <div>
                    <Image loader={imageLoader} src={image} alt="Not Found" width={600} height={430} />
                </div>


            </div>

            <div className={styles.titleandcontent}>
                <h2>{heading}</h2>
                <div className={styles.emptydiv}></div>
                <p className={styles.para}>{body}</p>
            </div>

        </>
    )
}
