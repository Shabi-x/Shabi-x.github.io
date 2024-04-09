import React from "react";
import styles from "../../styles/techStack.module.css";
import Image from "next/image";

const TechStack = ({
  StackName,
  StackLogo,
  StackDescription,
  MyRate,
  link,
}) => {
  return (
    <div className={styles.item}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src={StackLogo}
          width={120}
          height={120}
          priority
          className={styles.StackLogo}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.StackName}>{StackName}</p>
      </div>
    </div>
  );
};

export default TechStack;
