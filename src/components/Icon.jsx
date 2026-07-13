export default function Icon({ name, style, className = '' }) {
  return (
    <span className={`msr ${className}`} style={style}>
      {name}
    </span>
  );
}
