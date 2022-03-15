import Image from 'next/image'
import img from '../public/press.jpg'
import styles from '../styles/Home.module.css'

export default function Press() {
    return (
        <>
            <div className={styles.all}>
                <div className={styles.sixth}>
                    <h1>This is a PressRoom Page.!</h1>
                    <h3>Click Me!</h3>
                </div>

                <Image src={img} alt="Picture of the author" width="800" height="500" />

            </div>

            <div className={styles.titleandcontent}>
                    <h2>Gather Here</h2>
                    <div className={styles.emptydiv}></div>
                    <p className={styles.para}>We are pleased to report that in Section 2 of SB 8, the Texas Legislature appropriated $180 million in federal American Rescue Plan Act (ARPA) funds to the Governors office on Economic Development and Tourism for the purpose of funding grants to tourism, travel, and hospitality entities negatively affected by the pandemic.

                    THLA worked hard on this issue along with our partners at the Texas Restaurant Association, Texas Travel Alliance, NFIB, and others. We thank our partners for their efforts in helping to make this happen, and we thank those crucial THLA members who acted by contacting their members of the Legislature.</p>
            </div>
        </>
    )
}