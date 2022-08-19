import styles from '../styles/Result.module.css'
import { useRouter } from "next/router";
import Statistic from '../components/Statistic';

const Result = () => {
  const router = useRouter()
  const { total, rightAnswers } = router.query
  const result = (total && rightAnswers) ?  Math.round((+rightAnswers / +total )*100) : 0
  console.log(total, rightAnswers, result)

  return (
    <div className={styles.result}>
      <h1>Final result</h1>
      <Statistic text={'Questions'} value={total}/>
      <Statistic text={'Right Answers'} value={rightAnswers} colorBkg="#9CD2A4"/>
      <Statistic text={'Result'} value={`${result}%`} colorBkg="#DE6A33"/>
    </div>
  );
}

export default Result;