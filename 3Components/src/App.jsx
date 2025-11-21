function Button(){
  return (
    <button style={{
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    }}>
      Click me
    </button>
  );
}

function App(){
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      gap: '20px',
    }}>
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default App;