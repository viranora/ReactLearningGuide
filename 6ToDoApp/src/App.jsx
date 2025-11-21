import { useState } from 'react';

function App() {
  const [gorevler, setGorevler] = useState(["React Öğren", "Kod Yaz"]);
  const [yeniGorev, setYeniGorev] = useState("");

  // EKLEME FONKSİYONU (Aynı kalıyor)
  const ekle = () => {
    if (yeniGorev === "") return;
    setGorevler([...gorevler, yeniGorev]);
    setYeniGorev("");
  };

  // SİLME FONKSİYONU (YENİ)
  // Hangi sıradaki (index) elemanı sileceğimizi parametre olarak alıyoruz.
  const sil = (silinecekIndex) => {
    
    // .filter() döngüye girer.
    // Eğer o anki elemanın sırası (i), silinecek sıraya (silinecekIndex) EŞİT DEĞİLSE, onu yeni listeye al.
    // Eşitse, onu dışarıda bırak (yani sil).
    const kalanGorevler = gorevler.filter((eleman, i) => i !== silinecekIndex);
    
    // State'i güncelliyoruz
    setGorevler(kalanGorevler);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Yapılacaklar Listesi</h1>

      {/* Input Kısmı */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={yeniGorev} 
          onChange={(e) => setYeniGorev(e.target.value)}
          placeholder="Bir görev yaz..."
          style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={ekle}
          style={{ padding: '10px 20px', marginLeft: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Ekle
        </button>
      </div>

      {/* Liste Kısmı */}
      <ul style={{ listStyleType: 'none', padding: 0, maxWidth: '400px', margin: '0 auto' }}>
        {gorevler.map((gorev, index) => (
          
          <li key={index} style={{ 
            backgroundColor: '#f8f9fa', 
            margin: '10px 0', 
            padding: '15px', 
            border: '1px solid #ddd',
            borderRadius: '5px',
            display: 'flex',            // Yazı ve butonu yan yana koymak için
            justifyContent: 'space-between', // Biri sola, biri sağa yaslansın
            alignItems: 'center'
          }}>
            
            {/* Görev Metni */}
            <span>{index + 1}. {gorev}</span>

            {/* SİL BUTONU (YENİ) */}
            {/* onClick içine sil(index) yazarken "arrow function" () => kullandık. */}
            {/* Bunu yapmazsak sayfa açılır açılmaz hepsi silinir! */}
            <button 
              onClick={() => sil(index)}
              style={{ 
                backgroundColor: '#dc3545', 
                color: 'white', 
                border: 'none', 
                padding: '5px 10px', 
                borderRadius: '3px', 
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Sil
            </button>

          </li>
        ))}
      </ul>

      {/* Eğer liste boşsa mesaj verelim */}
      {gorevler.length === 0 && <p style={{color: 'gray'}}>Hiç görev kalmadı, harikasın!</p>}

    </div>
  );
}

export default App;