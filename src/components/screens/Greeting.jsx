import styles from './Greeting.module.css'

export default function Greeting() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>explore the universe</h1>
      <button className={styles.roundBtn}>→</button>
    </div>
  )
}
