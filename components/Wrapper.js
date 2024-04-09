import styles from "../styles/Wrapper.module.css";
//使用wrappr包裹的子组件，宽度最大都为  max-width: 820px;,有媒体查询控制响应式
const Wrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
