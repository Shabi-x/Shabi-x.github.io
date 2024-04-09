import utilStyles from "../../styles/util.module.css";
import styles from "../../styles/Nav.module.css";

import styls from "../../styles/Content.module.css";
import Divider from "../Divider";
import Link from "next/link";

const Content = () => {
  return (
    <div className={`${styls.content} ${utilStyles.plain}`}>
      <article>
        <p>
          Hi, I&apos;m Shabix, a student at{" "}
          <span className={utilStyles.stress}>
            Nanjing University of Post and Telecommunications
          </span>
          , majoring in{" "}
          <span className={utilStyles.stress}>Software Engineering</span>.{" "}
        </p>
        <div>
          The current focus is on the{" "}
          <span className={utilStyles.stress}>front-end</span>, Including web
          and mini program development, based on{" "}
          <span className={utilStyles.stress}>React</span> ecosystem.
          <p>
            And now I am trying to improve my{" "}
            <span className={utilStyles.stress}>back-end</span> skills and{" "}
            <span className={utilStyles.stress}>algorithm</span> level.
          </p>
        </div>
      </article>
      <Divider />
      <article>
        <p>
          I am a teamMember of{" "}
          <a
            href="https://qingyou.njupt.edu.cn/"
            className={utilStyles.textLink}
            rel="noreferrer"
            target="_blank"
          >
            Qingyou Studio
          </a>{" "}
          . We are a group of students who are passionate about programming and
          sharing their knowledge. We are committed to creating high-quality,
          innovative, and impactful projects.
        </p>
      </article>
      <Divider />
      <article>
        <p>
          My hobbies are learning programming and completing projects. In my
          spare time, I pay more attention to NBA, Premier League, European
          Champions League and other events. and can play basketball, football,
          tennis and other sports.
        </p>
      </article>
      <Divider />
      <article>
        <p>Find me on:</p>
        <ul style={{ padding: 0 }}>
          <li>QQ : 2936670268</li>
          <li>WeChat : felsj_0618</li>
        </ul>
      </article>
    </div>
  );
};

export default Content;
