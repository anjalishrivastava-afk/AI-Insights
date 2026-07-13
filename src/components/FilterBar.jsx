import Icon from './Icon';
import { selectorOptionsByView } from '../data';

const PERIOD_DEFS = [
  { key: 'yesterday', label: 'Yesterday' },
  { key: 'week', label: 'Last Week' },
  { key: 'month', label: 'Last Month' },
];

export default function FilterBar({ view, period, onPeriodChange, selector, onSelectorChange }) {
  const showSelector = view !== 'org';
  const baseOptions = selectorOptionsByView[view] || [];
  const options = baseOptions.includes(selector) ? baseOptions : [selector, ...baseOptions];

  return (
    <div className="filter-bar">
      <div className="periods">
        {PERIOD_DEFS.map((p) => (
          <button
            key={p.key}
            className={`period-btn${period === p.key ? ' active' : ''}`}
            onClick={() => onPeriodChange(p.key)}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="filter-right">
        {showSelector && (
          <div className="selector-wrap">
            <select className="selector" value={selector} onChange={(e) => onSelectorChange(e.target.value)}>
              {options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <Icon name="arrow_drop_down" className="selector-arrow" />
          </div>
        )}
        <Icon name="autorenew" className="refresh-icon" />
      </div>
    </div>
  );
}
