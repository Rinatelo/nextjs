import Image from "next/image";
import styles from "./home.module.css"

const Home = () => {
  return <div className={styles.container}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>Creative Thoughts Agency.</h1>
              <p className={styles.descr}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dolorem rerum, aliquam fugiat porro esse nobis. Ea nobis quia officiis!</p>
              <div className={styles.buttons}>
                <button className={styles.button}>Lern More</button>
                <button className={styles.button}>Contact</button>
              </div>
              <div className={styles.brands}>
                <Image src="/brands.png" alt="" fill className={styles.brand} />
              </div>
            </div>
            <div className={styles.imageContainer}>
            <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
            </div>
         </div>;
};

export default Home;