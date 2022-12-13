import Head from "next/head";
import styles from "../styles/Home.module.css";
import AnchorLink from "../components/AnchorLink";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>GREENMARK FESTIVAL</title>
        <meta name="description" content="GREENMARK FESTIVAL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.splashGroup}>
        <div className={styles.splash_titles}>
          <h2 className={styles.splash_h2}>Sustainable sounds for a brighter future.</h2>
          <h2 className={styles.splash_h2}>Music, nature, and community, all in one.</h2>
          <h2 className={styles.splash_h2}>Join the eco-friendly party, and make memories.</h2>
          <h2 className={styles.splash_h2}>Green tunes for a greener world.</h2>
        </div>
        <div className={styles.splash_calltoaction}>
          <AnchorLink className={styles.calltoaction} href="/booking">
            BUY TICKETS
          </AnchorLink>
          <AnchorLink className={styles.calltoaction} href="/schedule">
            SCHEDULE
          </AnchorLink>
        </div>
        <div className={styles.splash} style={{ backgroundImage: "url(/treelines.svg)" }}></div>
      </div>
      {/* <div className={styles.info}>
        <div className={styles.infomation}>
          <Image></Image>
          <h3></h3>
          <p></p>
        </div>
        <div className={styles.infomation}>
          <Image></Image>
          <h3></h3>
          <p></p>
        </div>
        <div className={styles.infomation}>
          <Image></Image>
          <h3></h3>
          <p></p>
        </div>
      </div> */}
    </>
  );
}
