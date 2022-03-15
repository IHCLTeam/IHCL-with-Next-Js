import Image from 'next/image'
import img from '../public/contact.jpg'
import styles from '../styles/Home.module.css'

export default function Contact() {
    return (
        <>
            <div className={styles.all}>
                <div className={styles.third}>
                    <h1>This is a Contact Page.!</h1>
                    <h3>Click Me!</h3>
                </div>

                <Image src={img} alt="Picture of the author" width="800" height="500" />

            </div>

            <div className={styles.titleandcontent}>
                    <h2>Contact here..</h2>
                    <div className={styles.emptydiv}></div>
                    <p className={styles.para}>Contact Hôtels cest, avant tout plus de 300 hôteliers, des hommes et des femmes fiers dêtre indépendants, fiers de leur métier, fiers de leur région ! Nos hôtels sont uniques. Nous vous réservons le meilleur accueil et vous proposons le meilleur de nous-mêmes. Profitez-en !

                    Découvrez plus de 300 hôtels en France de catégorie 2, 3 et 4 étoiles et réservez votre prochain séjour sur notre site sécurisé. Des centaines doffres promotionnelles et de bons plans vous attendent pour tous vos prochains séjours professionnels, vos week-ends en couple, en famille ou entre amis.

                    Vous dormez souvent à lhôtel ? Rejoignez sans plus attendre notre programme de fidélité : lun des plus généreux de France comptant plus de 100 000 membres !

                    Nous sommes passionnés. Nous sommes à votre écoute, à votre service… Soyez les bienvenus! Contact Hôtels, le contact humain en plus ! Contactez Le siège Guide Contact Hôtel Suivez-nous sur les réseaux sociaux Inscrivez-vousà la newsletter Contact Hôtel Qui sommes-nous Boutique Hôtelier, rejoignez-nous Nos partenaires Demander un guide Programme de fidelité Avantages inscrire Nous contacter Connexion CGU Réservation Trouver un hôtel Louer une voiture Gérer mes réservations Service Clients Nos offres / Nos bons plans Information sur le site Plan du site CGU Mentions légales FAQ Solutions Pro Groupes Séminaires Sociétés Société partenaire Contact Hotel© 1990 - 2021 - Tous droits réservés. Contact Hôtel</p>
            </div>
        </>
    )
}