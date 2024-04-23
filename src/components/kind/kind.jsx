import { Link } from "react-router-dom";
import styles from "./kind.module.css";

export const Kind = ({kind}) => {
  return (
    <div className={styles.kind}>
      <Link to={`/kind/${kind.id}`}>
        <div className={styles.kind_image}>
          <img src={kind.image} alt="kind" />
        </div>
      </Link>
      <div className={styles.kind1}>
        <span>{kind.provider}</span>
      </div>

      <div className={styles.kind_name}>
        <span>{kind.name}</span>
      </div>
    </div>

    
  );
};
