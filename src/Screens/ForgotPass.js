import React from 'react';

function ForgotPass() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Feel free to write us:</h1>
      <p style={styles.message}>
      Please write your concerns here 
      <div></div>
      <a href="/email">vid.eds.lv@gmail.com</a>
      </p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height to center vertically
    textAlign: 'center', // Center text horizontally
    padding: '20px',
    backgroundColor: '#f0f0f0', // Optional: Background color
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  message: {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#555',
    maxWidth: '600px', // Limit the width of the text for better readability
  },
};

export default ForgotPass;
