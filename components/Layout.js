import Head from "next/head";
import NavBar from "./NavBar";
import React from "react";

const Layout = ({ children }) => {
  const [mode, setMode] = React.useState("dark");

  React.useEffect(() => {
    if (localStorage.getItem("mode")) {
      setMode(localStorage.getItem("mode"));
    }
  }, []);
  // .layout[color-mode="light"]这个选择器用来查找layout类名的元素中类名为color-mode且值为light的元素
  // 然后通过JavaScript修改其color-mode属性的值为dark或light，从而切换主题颜色
  return (
    <div className="layout" color-mode={mode}>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="My portfolio website contains blogs and projects."
          key="desc"
        />
      </Head>
      <main>
        <NavBar setMode={setMode} mode={mode} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
