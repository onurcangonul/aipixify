"use client";
import styles from "./styles.module.scss";
const Tag = ({title, key, onClick}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(title);
    }
  };
  return (
    <button className={styles.tag} key={key} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Tag;
