import PropTypes from 'prop-types';

import { StatisicsSection } from './Statistics.styles';
import { StatList } from './Statistics.styles';
import { StatItem } from './Statistics.styles';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatisicsSection className="statistics">
      {title && <h2 className="title">Upload stats</h2>}

      <StatList className="stat-list">
        {stats.map(item => (
          <StatItem
            className="item"
            style={{ backgroundColor: getRandomHexColor() }}
            key={item.id}
          >
            <span className="label">{item.label}:</span>
            <span className="percentage">{item.percentage}</span>
          </StatItem>
        ))}
      </StatList>
    </StatisicsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
