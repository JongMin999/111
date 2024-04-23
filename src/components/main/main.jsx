import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Kind } from "../kind/kind";
import { useEffect } from "react"
import axios from "axios";

export const Main = ({kinds, setKinds}) => {
   useEffect(() => {
    axios.get("/data/kind.json").then((data) => {
      setKinds(data.data.kind);
    });
}, [setKinds]);

  return (
    <>
      <EventBanner />
      <main className={styles.flex_wrap}>
        {kinds.map((kinds) => {
          return <Kind key={'key-${kind.id}'} kind = {kinds}  />;
        })}
      </main> 
      <footer className={styles.footer}>
      <p>Demo</p>
    </footer>
    </>
  );
};
