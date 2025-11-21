function AkilliButon({ yazi, renk }) {
  
  return (
    <button style={{ 
      padding: '10px 20px', 
      backgroundColor: renk, // Dışarıdan gelen rengi buraya koyduk
      color: 'white', 
      border: 'none', 
      borderRadius: '5px',
      margin: '10px',
      fontSize: '16px',
      cursor: 'pointer'
    }}>
      {yazi} {/* Dışarıdan gelen yazıyı buraya koyduk */}
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
      <AkilliButon yazi="Giriş Yap" renk="blue" />
      <AkilliButon yazi="Kayıt Ol" renk="red" />
      <AkilliButon yazi="Şifremi Unuttum" renk="green" />
    </div>
  );
}

export default App;