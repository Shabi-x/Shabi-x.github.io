import styles from "../styles/Nav.module.css";
import Link from "next/link";
import React from "react";

const NavBar = ({ setMode, mode }) => {
  const handleClick = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
    localStorage.setItem("mode", mode === "light" ? "dark" : "light");
  };

  React.useEffect(() => {
    if (mode === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [mode]);

  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.signature}>Shabix</a>
      </Link>
      <nav className={styles.nav}>
        {/* Mobile Icon */}
        {/* <Link href="/blog">
          <span className={`iconfont ${styles.mobile} ${styles.icon}`}>
            &#xe634;
          </span>
        </Link> */}
        <Link href="/project">
          <span className={`iconfont ${styles.mobile} ${styles.icon}`}>
            &#xe650;
          </span>
        </Link>

        {/* Laptop Link */}
        <Link href="/">
          <a className={`${styles.link} ${styles.laptop}`}>About Me</a>
        </Link>
        {/* <Link href="/blog">
          <a className={`${styles.link} ${styles.laptop}`}>Blog</a>
        </Link> */}
        <Link href="/project">
          <a className={`${styles.link} ${styles.laptop}`}>Projects</a>
        </Link>

        {/* Other Icon */}
        <a
          href="https://github.com/Shabi-x"
          rel="noreferrer"
          target="_blank"
          className={`iconfont ${styles.icon}`}
        >
          &#xe885;
        </a>
        <a
          href="https://space.bilibili.com/289168334?spm_id_from=333.1007.0.0"
          rel="noreferrer"
          target="_blank"
          className={`iconfont ${styles.icon}`}
        >
          &#xe66d;
        </a>
        <a
          href="https://qingyou-git.njupt.edu.cn/"
          rel="noreferrer"
          target="_blank"
          className={`iconfont2 ${styles.icon}`}
        >
          &#xe621;
        </a>
        <a
          href="https://www.yuque.com/gududeyoubiaokachi-rl2tl"
          rel="noreferrer"
          target="_blank"
          className={`iconfont2 ${styles.icon}`}
        >
          &#xe604;
        </a>
        <span className={`iconfont ${styles.icon}`} onClick={handleClick}>
          &#xe635;
        </span>
      </nav>
    </div>
  );
};

export default NavBar;
