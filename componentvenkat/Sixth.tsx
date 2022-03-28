import styles from '../styles/stylesvenkat/Home.module.css'
const Sixth = ({brand, taj, seleq, vivan, ginger, title}) => {
   
    return (
        <>
           {/* <div className={styles.footerparent}> */}
                <div className={styles.footeralign}>
                    <div>
                        <h4>{title}</h4>
                        <p className={styles.footeritems}>{brand}</p>
                        <p className={styles.footeritems}>{taj}</p>
                        <p className={styles.footeritems}>{seleq}</p>
                        <p className={styles.footeritems}>{vivan}</p>
                        <p className={styles.footeritems}>{ginger}</p>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default Sixth
