import styles from '../styles/Home.module.css'

const Eight = ({title, newsButton}) => {
    return (
        <>
            <div>
                <div className={styles.paddingclass}>
                  <p>{title}</p>
                  <p className={styles.lastButton}>{newsButton}</p>
                </div>
            </div>
        </>
    )
}

export default Eight