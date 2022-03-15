import Image from 'next/image'
import imageLoader from '../pages/imageLoader'
import styles from '../styles/Home.module.css'

const Fifth = ({title, image, details, description}) => {
    return (
        <>
            <div className={styles.lasttwo}>
                    <div>
                        <div>
                        <Image loader={imageLoader} src={image} alt="Not Found" width={600} height={430} />
                        </div>

                        <div className={styles.lasttwodata}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        </div>

                        <p className={styles.detailsbuttonlast}>{details}</p>
                    </div>
            </div>
        </>
    )
}

export default Fifth