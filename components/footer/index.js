import styles from "./styles.module.scss";
import GithubIcon from "@/assets/icons/github.svg";
import LinkedlnIcon from "@/assets/icons/linkedIn.svg";
import Link from "next/link";

const Footer = () => {
  return (
      <footer className={styles.footer}>
          <Link href="https://github.com/onurcgnl" target="_blank">
              <GithubIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/onurcangonul/" target="_blank">
              <LinkedlnIcon />
          </Link>
          <p>
              Made by <b>Onurcan Gönül</b>
              <br />
              and, built with <b>Next.js</b>
          </p>
      </footer>
  )
}

export default Footer