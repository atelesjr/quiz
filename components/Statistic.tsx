import styles from '../styles/Statistic.module.css'

interface StatisticProps {
  value: any
  text: string
  colorBkg?: string
  colorFont?: string
}

const Statistic = ({value, text, colorBkg, colorFont}:StatisticProps) => {
  return (
    <div className={styles.statistic}>
      <div className={styles.value} style={{
          backgroundColor: colorBkg ?? '#FDD60F',
          color: colorFont ?? '#333'
      }}>
          { value }
      </div>
      <div className={styles.text}>
          { text }
      </div>
  </div>
  );
}

export default Statistic;