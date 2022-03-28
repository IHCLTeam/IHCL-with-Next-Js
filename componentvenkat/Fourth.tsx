import Image from 'next/image'
import imageLoader from '../pages/imageLoader'
import styles from '../styles/stylesvenkat/Home.module.css'
const Fourth = ({title, subtitle, image, info}) => {
    return (
        <>
            {/* <div className={styles.fouriconstext}> */}
                <div className={styles.imagesparent}>
                    <div className={styles.fourimages}>

                        <div>
                            <div>
                            <Image loader={imageLoader} src={image} alt="Not Found" width={313} height={400} />
                            </div>

                            <p className={styles.fourimagetext}>{title}</p>
                            <p>{subtitle}</p>
                            <p className={styles.detailsbutton}>{info}</p>
                        </div>

                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default Fourth