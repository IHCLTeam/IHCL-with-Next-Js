import Image from 'next/image'
import img from '../public/development.jpg'
import styles from '../styles/Home.module.css'

export default function Development() {
    return (
        <>
            <div className={styles.all}>
                <div className={styles.four}>
                    <h1>This is a Development Page.!</h1>
                    <h3>Click Me!</h3>
                </div>

                <Image src={img} alt="Picture of the author" width="800" height="500" />

            </div>

            <div className={styles.titleandcontent}>
                    <h2>We are trying to development more</h2>
                    <div className={styles.emptydiv}></div>
                    <p className={styles.para}>By offering our brand standards and assistance of our highly qualified technical team, we help any new building imbibe features of a successful hotel. Our highly trained team of technical and hospitality professionals extends support at every stage, ensuring that new build hotels meet our brand standards and stay competitive.

                    We provide expertise to owners for smooth transition of properties. Our experience across types of conversion projects enables us to design solutions that match the needs of conversion opportunities, while keeping the core of the product intact.
            
                    We embrace the challenge of restoring and operating signature heritage hotels and palaces, as is evident with some of the grandest palace hotels in our portfolio like the Taj Lake Palace, Rambagh Palace, and Taj Falaknuma Palace. With a team of skilled and meticulous experts, we take utmost care to preserve the character of the building while recreating the original magic.</p>
            </div>
        </>
    )
}