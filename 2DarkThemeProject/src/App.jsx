import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div style={{
      backgroundColor: darkMode ? 'black' : 'white',
      color: darkMode ? 'white' : 'black',
      transition: 'all 0.3s ease',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '20px',
      fontSize: '20px',
      fontWeight: 'bold',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px',
    }}>

      <h1>Hello React</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default App
