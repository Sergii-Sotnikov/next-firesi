import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.text}>Сторінку не знайдено</p>
      <Link href="/" style={styles.link}>
        Повернутися на головну
      </Link>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '72px',
    fontWeight: 'bold',
    margin: 0,
  },
  text: {
    fontSize: '20px',
    color: '#555',
  },
  link: {
    marginTop: '12px',
    padding: '10px 20px',
    backgroundColor: '#e00d1d',
    color: '#fff',
    borderRadius: '6px',
    textDecoration: 'none',
  },
};