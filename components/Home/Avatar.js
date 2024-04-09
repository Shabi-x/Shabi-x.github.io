import styles from "../../styles/Avatar.module.css";
import React from "react";
import Image from "next/image";

const Avatar = () => {
  const [index, setIndex] = React.useState(0);
  const ref = React.useRef();
  const avatarRef = React.useRef();
  const words = ["Liang Shaojun", "Shabix"];
  const images = ["/avatar.jpg", "/avatar2.jpg"];
  setTimeout(() => {
    if (ref.current) {
      ref.current.classList.add(styles.out);
    }
    if (avatarRef.current) {
      avatarRef.current.classList.add(styles.out);
    }
  }, 2900);

  const handleEnd = () => {
    ref.current.classList.remove(styles.out);
    // ref.current.classList.remove(styles.out);
    avatarRef.current.classList.remove(styles.out);
    setIndex((prev) => (prev + 1 === words.length ? 0 : prev + 1));
  };

  return (
    <div className={styles.container}>
      <div ref={avatarRef} className={styles.avatar}>
        {" "}
        <Image
          src={images[index]}
          width={85}
          height={85}
          priority
          className={styles.avatar}
          onTransitionEnd={handleEnd}
          // className={styles.name}
        />
      </div>
      <div className={styles.description}>
        <h1 className={styles.name} ref={ref} onTransitionEnd={handleEnd}>
          {words[index]}
        </h1>
        <p className={styles.tag}>Front-End Developer / Qingyou / Nanjing</p>
      </div>
    </div>
  );
};

export default Avatar;
