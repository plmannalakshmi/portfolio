import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1>Welcome to Our Website!</h1>
        <p>Your journey into React development begins here.</p>
        <button style={styles.ctaButton}>Get Started</button>
      </section>

      <section style={styles.features}>
        <div style={styles.featureBox}>
          <h2>🚀 Fast Performance</h2>
          <p>Built with React and Vite for lightning-fast load times.</p>
        </div>
        <div style={styles.featureBox}>
          <h2>📦 Modular Design</h2>
          <p>Well-structured components make development simple and scalable.</p>
        </div>
        <div style={styles.featureBox}>
          <h2>📱 Responsive Layout</h2>
          <p>Fully responsive layout that looks great on any device.</p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fafafa',
    minHeight: '100vh',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '50px',
    background: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  ctaButton: {
    marginTop: '20px',
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer'
  },
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px'
  },
  featureBox: {
    flex: '1 1 300px',
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  }
};

export default Home;
