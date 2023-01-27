import PropTypes from 'prop-types';
import { Feedback, Wrapper } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Wrapper>
        <Feedback>Good: {good}</Feedback>
        <Feedback>Neutral: {neutral}</Feedback>
        <Feedback>Bad: {bad}</Feedback>
        <Feedback>Total: {total}</Feedback>
        <Feedback>Positive Feedback: {positivePercentage}%</Feedback>
      </Wrapper>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
