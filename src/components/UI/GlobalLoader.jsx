import styles from './GlobalLoader.module.css'

export default function GlobalLoader({ className }) {
  return (
    <p className={`${styles.loaderText} ${styles.blinkingText} ${className}`}>
      Accessing NASA Archives — Preparing Visual Feed…
    </p>
  )
}
