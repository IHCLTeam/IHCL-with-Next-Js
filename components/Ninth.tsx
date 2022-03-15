import styles from '../styles/Home.module.css'

const Ninth = ({title, copyright, subtitle, taj, seleqtions, vivanta, ginger, ama, qmin, tajsats}) => {
    return (
        <>
            <div className={styles.copyright}>

                <div className={styles.copyrightboth}>
                    <p className={styles.copytitle}>{title}</p>
                    <p>&copy; {copyright}</p>
                </div>

                <div className={styles.copyrightboth}>

                    <p className={styles.brandhead}>{subtitle}</p>

                    <div className={styles.brandNames}>
                        <p className={styles.brandColorOne}>{taj}</p>
                        <p className={styles.brandColorTwo}>{seleqtions}</p>
                        <p className={styles.brandColorThree}>{vivanta}</p>
                        <p className={styles.brandColorFour}>{ginger}</p>
                        <p className={styles.brandColorFive}>{ama}</p>
                        <p className={styles.brandColorSix}>{qmin}</p>
                        <p className={styles.brandColorSeven}>{tajsats}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Ninth