import Image from "next/image";
import styles from "./page.module.css";
import Template1 from "@/templates/template1/Template1";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Main Page</h1>
      <Template1/>
    </div>
  );
}
