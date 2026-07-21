import styles from "./page.module.css";
import TemplateFrontend from "@/templates/template1/TemplateFrontend";

export default function Home() {
  return (
    <div className={styles.page}>
     <div className="wrapper">
       <TemplateFrontend/>
     </div>
    </div>
  );
}
