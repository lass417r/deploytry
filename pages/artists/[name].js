import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "./Name.module.css";

export default function Henry({ data }) {
  const src = data.band.logo;
  const srcCredit = data.band.logoCredits;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{data.band.name}</title>
      </Head>
      <Button onClick={() => router.back()}>Go back</Button>
      <h1 className={styles.headline}>{data.band.name}</h1>
      <div className={styles.main}>
        <div className={styles.left}>
          <div>
            <h3 className={styles.underheadline}>Bio:</h3>
            <p className={styles.text}>{data.band.bio}</p>
          </div>
          <div>
            <h3 className={styles.underheading}>Members:</h3>
            {data.band.members.map((members, i) => (
              <p className={styles.members}>{members}</p>
            ))}
          </div>
        </div>
        <div className={styles.outerImage}>
          <div className="image">
            {src.startsWith("http") ? (
              <Image src={src} alt={srcCredit} className={styles.theImage} width={500} height={500} />
            ) : (
              <Image src={"https://proud-star-2129.fly.dev/logos/" + src} alt={srcCredit} className={styles.theImage} width={500} height={500} />
            )}
            {!srcCredit ? null : <p className={styles.credits}>{srcCredit}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

// // Fetching each route from the paths-array
// export async function getStaticProps(context) {
//   const slug = context.params.slug;
//   const res = await fetch("http://localhost:8080/bands/" + slug);
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
// {
// }
// // Creating an array of slugs/paths to be built
// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:8080/bands");
//   const data = await res.json();
//   const jatak = entry[i].name.toLowerCase().trim().replaceAll(" ", "-");
//   const paths = data.map((entry, i) => {
//     return { params: { slug: jatak } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getStaticProps(context) {
  const name = context.params.name;
  const res = await fetch("https://proud-star-2129.fly.dev/bands/" + name);

  // If no succes, return a 404 redirect
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://proud-star-2129.fly.dev/bands/");
  const data = await res.json();

  const paths = data.map((obj) => {
    return { params: { name: obj.name.toLowerCase().split(" ").join("_") } };
  });

  console.log(paths);

  return {
    paths: paths,
    fallback: false,
  };
}
