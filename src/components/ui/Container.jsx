export default function Container({ children, style }) {
  return (
    <div style={{
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      width: '100%',
      ...style
    }}>
      {children}
    </div>
  );
}
