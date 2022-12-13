import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

export default function Anchor({ href, className, children }) {
  const router = useRouter();

  return (
    <a
      onClick={(event) => {
        event.preventDefault();
        router.push(href);
      }}
      href={href}
      className={className}
    >
      {children}
    </a>
  );
}
