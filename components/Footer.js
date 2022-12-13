import styles from "../styles/Footer.module.css";
import Anchor from "./Anchor";
import Newsletter from "./Newsletter";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.newsletterform}>
          <Newsletter />
        </div>
        <div className={styles.quicklinks}>
          <h6 className={styles.heading}>QUICK LINKS</h6>
          <ul className={styles.footer_links}>
            <li>
              <Anchor href="/program">Program</Anchor>
            </li>
            <li>
              <Anchor href="/schedule">Schedule</Anchor>
            </li>
            <li>
              <Anchor href="/about/">About Us</Anchor>
            </li>
            <li>
              <Anchor href="/contact/">Contact Us</Anchor>
            </li>

            <li>
              <Anchor href="/faq">FAQ</Anchor>
            </li>
          </ul>
        </div>
      </footer>

      <div>&copy;2022 Lasse & son</div>
    </>
  );
}

export default Footer;
