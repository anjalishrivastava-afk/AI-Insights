import Icon from './Icon';

export default function Header() {
  return (
    <header className="header">
      <div />
      <div className="header-actions">
        <Icon name="notifications" className="header-icon" />
        <div className="avatar-wrap">
          <div className="avatar">AD</div>
          <span className="avatar-status-dot" />
        </div>
      </div>
    </header>
  );
}
