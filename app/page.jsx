import Image from "next/image";
import styles from "./page.module.css"
import Hero from "../public/designer-giving-a-keynote-2.svg"
import Button from "../components/Button/Button"
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}> Better Design for your Digital Products</h1>
<p  className={styles.desc}>
  Turnng your idea into reality. we bring togather the teams from the global tech industry
</p>

<Button className={styles.button}  url="/portfolio" text=" See Our Work"/>
      </div>
    <div className={styles.item}>
  <Image className={styles.img} src={Hero} alt="banner image"/>
    </div>
    </div>
  );
}