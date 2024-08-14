import { StatisticLine } from "./StatisticLine";

export const Statistics = ({
  good,
  bad,
  neutral,
  sumOfScores,
  averageOfScores,
  positivePercentage,
}) => {
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={sumOfScores} />
        <StatisticLine text="average" value={averageOfScores} />
        <StatisticLine text="positive" value={positivePercentage} />
      </tbody>
    </table>
  );
};
