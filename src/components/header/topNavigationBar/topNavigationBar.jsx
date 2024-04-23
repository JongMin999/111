import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";

export const TopNavigationBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/">
          <h1 className={styles.logo}>
            <img src="/images/leaf.svg" alt="logo" />
          </h1>
        </Link>
        
      </div>

      <nav className={styles.navigation}>
        <Link to="/">Home</Link>
        <Link to="/community">Community</Link>
        <Link to="/worldcup">Matching</Link>
      </nav>

      <div className={styles.menu}>
        <Link to="/star">
          <div className={styles.star}>
            <img src="/images/star.svg" alt="star" />
            <span>Github</span>
          </div>
        </Link>
        <Link to="">
          <div className={styles.mypage}>
            <img src="/images/user.svg" alt="user" />
            <span>로그인</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
