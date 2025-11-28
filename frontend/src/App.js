import "./App.css";

function App() {
  // Redirect to presentation website immediately
  window.location.href = '/index.html';
  
  return (
    <div className="App">
      <header className="App-header">
        <div style={{textAlign: 'center', padding: '2rem'}}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '1rem', color: 'white'}}>QuadraMind</h1>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'white'}}>Centralized Student Dashboard</p>
          <p style={{color: '#ccc'}}>Redirecting to presentation website...</p>
          <div style={{marginTop: '2rem'}}>
            <a 
              href="/index.html" 
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1.1rem',
                marginRight: '1rem'
              }}
            >
              View Presentation Site
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
