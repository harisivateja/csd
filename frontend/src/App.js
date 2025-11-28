import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  useEffect(() => {
    // Redirect to presentation website
    window.location.href = '/PREVIEW.html';
  }, []);

  return (
    <div>
      <header className="App-header">
        <div style={{textAlign: 'center'}}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Centralized Student Dashboard</h1>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>Redirecting to presentation website...</p>
          <a 
            href="/PREVIEW.html" 
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}
          >
            View Presentation Site
          </a>
          <div style={{marginTop: '2rem'}}>
            <a href="/index.html" style={{color: '#61dafb', marginRight: '1rem'}}>Home</a>
            <a href="/problem.html" style={{color: '#61dafb', marginRight: '1rem'}}>Problem</a>
            <a href="/solution.html" style={{color: '#61dafb', marginRight: '1rem'}}>Solution</a>
            <a href="/dashboard.html" style={{color: '#61dafb'}}>Dashboard</a>
          </div>
        </div>
      </header>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
