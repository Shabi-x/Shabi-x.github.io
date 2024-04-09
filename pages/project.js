import Wrapper from "../components/Wrapper";
import styles from "../styles/Project.module.css";
import Item from "../components/Project/Item";
import TechStack from "../components/Project/techStack";
import Head from "next/head";
import Footer from "../components/Footer";
// import reactlogo from "../public/react.svg";

const Project = () => {
  return (
    <Wrapper>
      <Head>
        <title>My Projects</title>
      </Head>
      <div className={styles.container}>
        <p className={styles.title}>Projects</p>
        <div className={styles.list}>
          <Item
            name="NJUPT Mini Program"
            description="A Mini Program with React&Taro for NJUPT students to get information about courses, daily schedules, and grades."
            icon="&#xe64b;"
          />
          <Item
            name="Annual Report of 2023"
            description="A website for undergraduate students of NJUPT to view annual summaries of 2023,with react,gsap,lottie to create excellent animation effects."
            icon="&#xe64b;"
          />
          <Item
            name="NJUPT Mini Program"
            description="A Mini Program with React&Taro for NJUPT students to get information about courses, daily schedules, and grades."
            icon="&#xe64b;"
          />
          <Item
            name="NJUPT Mini Program"
            description="A Mini Program with React&Taro for NJUPT students to get information about courses, daily schedules, and grades."
            icon="&#xe64b;"
          />
          {/* StackName, StackLogo, StackDescription, MyRate, link, */}
        </div>
        <p className={styles.title}>Skills</p>
        <div className={styles.scrollList}>
          <TechStack
            StackName={"HTML5"}
            StackLogo={"/html.svg"}
            StackDescription={
              "React is a JavaScript library for building user interfaces."
            }
            MyRate={"Good"}
            link={"https://reactjs.org/"}
          />
          <TechStack
            StackName={"CSS3"}
            StackLogo={"/css.svg"}
            StackDescription={
              "React is a JavaScript library for building user interfaces."
            }
            MyRate={4}
            link={"https://reactjs.org/"}
          />{" "}
          <TechStack
            StackName={"JavaScript"}
            StackLogo={"/js.svg"}
            StackDescription={
              "React is a JavaScript library for building user interfaces."
            }
            MyRate={4}
            link={"https://reactjs.org/"}
          />{" "}
          <TechStack
            StackName={"TypeScript"}
            StackLogo={"/ts.svg"}
            StackDescription={
              "React is a JavaScript library for building user interfaces."
            }
            MyRate={4}
            link={"https://reactjs.org/"}
          />
          <TechStack
            StackName={"Nodejs"}
            StackLogo={"/node.svg"}
            StackDescription={
              "React is a JavaScript library for building user interfaces."
            }
            MyRate={4}
            link={"https://reactjs.org/"}
          />{" "}
          <TechStack
            StackName={"React"}
            StackLogo={"/react.svg"}
            StackDescription={
              "React is a JavaScript library for building user interfaces."
            }
            MyRate={4}
            link={"https://reactjs.org/"}
          />
          <TechStack
            StackName={"Taro"}
            StackLogo={"/taro.png"}
            StackDescription={
              "React is a JavaScript library for building user interfaces."
            }
            MyRate={4}
            link={"https://reactjs.org/"}
          />
          <TechStack
            StackName={"GraphQL"}
            StackLogo={"/graphql.svg"}
            StackDescription={
              "React is a JavaScript library for building user interfaces."
            }
            MyRate={4}
            link={"https://reactjs.org/"}
          />{" "}
          <TechStack
            StackName={"Nestjs"}
            StackLogo={"/nest.svg"}
            StackDescription={
              "React is a JavaScript library for building user interfaces."
            }
            MyRate={4}
            link={"https://reactjs.org/"}
          />{" "}
          <TechStack
            StackName={"Nextjs"}
            StackLogo={"/next.svg"}
            StackDescription={
              "React is a JavaScript library for building user interfaces."
            }
            MyRate={4}
            link={"https://reactjs.org/"}
          />{" "}
          <TechStack
            StackName={"Redux"}
            StackLogo={"/redux.svg"}
            StackDescription={
              "React is a JavaScript library for building user interfaces."
            }
            MyRate={4}
            link={"https://reactjs.org/"}
          />{" "}
          <TechStack
            StackName={"Git"}
            StackLogo={"/git.svg"}
            StackDescription={
              "React is a JavaScript library for building user interfaces."
            }
            MyRate={4}
            link={"https://reactjs.org/"}
          />{" "}
          <TechStack
            StackName={"Sass"}
            StackLogo={"/sass.svg"}
            StackDescription={
              "React is a JavaScript library for building user interfaces."
            }
            MyRate={4}
            link={"https://reactjs.org/"}
          />{" "}
          <TechStack
            StackName={"npm"}
            StackLogo={"/npm.svg"}
            StackDescription={
              "React is a JavaScript library for building user interfaces."
            }
            MyRate={4}
            link={"https://reactjs.org/"}
          />
          <TechStack
            StackName={"Webpack"}
            StackLogo={"/webpack.svg"}
            StackDescription={
              "React is a JavaScript library for building user interfaces."
            }
            MyRate={4}
            link={"https://reactjs.org/"}
          />{" "}
          <TechStack
            StackName={"Vite"}
            StackLogo={"/vite.svg"}
            StackDescription={
              "React is a JavaScript library for building user interfaces."
            }
            MyRate={4}
            link={"https://reactjs.org/"}
          />
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Project;
