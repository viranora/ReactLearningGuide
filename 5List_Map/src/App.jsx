function App() {
  // 1. Veri Kaynağımız (Dizi)
  // Gerçek hayatta bu veriler veritabanından (Backend) gelir.
  const diller = ["Python", "JavaScript", "Java", "C#", "Go"];

  return (
    <div style={{ padding: '50px' }}>
      <h1>Öğrenilecek Diller</h1>
      
      <ul>
        {/* 2. Döngü Başlıyor */}
        {/* diller dizisini haritalıyoruz (map). */}
        {/* 'dil' değişkeni sırasıyla Python, JavaScript... değerlerini alır. */}
        
        {diller.map((dil, index) => (
          
          // 3. Her eleman için bir <li> oluşturuyoruz
          <li key={index}>
            {dil}
          </li>

        ))}
      </ul>

    </div>
  );
}

export default App;