import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.cc}>
        <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
          by Next.js
        </a>{" "}
        © Liang Shaojun
      </p>
      {/* <a href="https://beian.miit.gov.cn/" rel="noreferrer" target="_blank">
        京ICP备2022001803号
      </a> */}
    </div>
  );
};

export default Footer;
