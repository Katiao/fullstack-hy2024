import { FeedbackCount } from "./FeedbackCount";

export const Statistics = ({
  good,
  bad,
  neutral,
  sumOfScores,
  averageOfScores,
  positivePercentage,
}) => {
  return (
    <div>
      <FeedbackCount feedback="good" count={good} />
      <FeedbackCount feedback="neutral" count={neutral} />
      <FeedbackCount feedback="bad" count={bad} />
      <div>all {sumOfScores}</div>
      <div>average {averageOfScores}</div>
      <div>positive {positivePercentage} %</div>
    </div>
  );
};

export default Statistics;
