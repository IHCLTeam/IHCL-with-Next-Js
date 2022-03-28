import Image from 'next/image'
import imageLoader from '../pages/imageLoader'
import styles from '../styles/stylesvenkat/Home.module.css'
const First = ({title, subtitle, image, description, heading}) => {
    return (
        <>
            <div className={styles.imagesetting}>
                <Image loader={imageLoader} src={image} alt="Not Found" height={650} width={1583} />
            </div> 

            <div className={styles.title}>
                <h1>{title}</h1>
                <h1>{subtitle}</h1>
            </div>

            <div className={styles.headingcontent}>
                <h2 className={styles.paddingnill}>{heading}</h2>
                <div className={styles.emptydivone}></div>
                <p className={styles.paragraph}>{description}</p>
            </div>

        </>
    )
}

export default First