import Icon from './Icon';

const NAV_ICONS = [
  'home',
  'hub',
  'description',
  'link',
  'headset_mic',
  'lightbulb',
  'trending_up',
  'groups',
  'support_agent',
  'language',
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo-wrap">
        <div className="sidebar-logo">e</div>
      </div>
      {NAV_ICONS.map((icon, i) => (
        <div key={icon} className={`sidebar-icon${i === 0 ? ' active' : ''}`}>
          <Icon name={icon} />
        </div>
      ))}
      <div className="sidebar-spacer" />
      <div className="sidebar-icon">
        <Icon name="settings" />
      </div>
      <div className="sidebar-icon">
        <Icon name="help" />
      </div>
    </aside>
  );
}
