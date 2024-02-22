import styles from "./footer.module.css"

const Footer = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.logo}>RSA</div>
            <div className={styles.text}>
                RSA creative thoughts agency  All right reserved.
            </div>
        </div>
     );
}
 
export default Footer;