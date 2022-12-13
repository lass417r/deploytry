import styles from "../styles/Program.module.css";
import { Link } from "@nextui-org/react";

function program(props) {
  console.log(props.bandData);
  const topArtist = props.bandData.slice(0, 12);
  const mediumArtist = props.bandData.slice(12, 24);
  const smallArtist = props.bandData.slice(24, 60);
  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>PROGRAM</h1>
      <div className={styles.topArtist}>
        {topArtist.map((e, i) => {
          const link = e.name.toLowerCase().split(" ").join("_");
          return (
            <div className={styles.act} key={i}>
              <Link href={"/artists/" + link}>
                <h2 className={styles.topArtisth2}>{e.name} </h2>
              </Link>
            </div>
          );
        })}
      </div>
      <div className={styles.mediumArtist}>
        {mediumArtist.map((e, i) => {
          const link = e.name.toLowerCase().split(" ").join("_");
          return (
            <div className={styles.act} key={i}>
              <Link href={"/artists/" + link}>
                <h2 className={styles.mediumArtisth2}>{e.name}</h2>
              </Link>
            </div>
          );
        })}
      </div>
      <div className={styles.smallArtist}>
        {smallArtist.map((e, i) => {
          const link = e.name.toLowerCase().split(" ").join("_");
          return (
            <div className={styles.act} key={i}>
              <Link href={"/artists/" + link}>
                <h2 className={styles.smallArtisth2}>{e.name}</h2>
              </Link>
            </div>
          );
        })}
      </div>
      <div className={styles.svg} style={{ backgroundImage: "url(/1555186463.svg)" }}></div>
    </div>
  );
}

export default program;
