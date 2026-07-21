import styles from "./progressbar.module.scss"
interface IProps {
    full : number
}
const Progressbar = ({full} : IProps) => {
  return (
    <div className={styles.bar}>
        <div className={styles.bar__full} style={{width : `${full}%`}}></div>
      
    </div>
  )
}

export default Progressbar
