# React 

Facebook(Meta) tarafından geliştirilmiştir. 

UI oluşturmaya yarayan bir JavaScript kütüphanesidir.

Component bazlıdır : Parçalardan oluşur.

Virtual DOM : Sayfada bir şey değiştiğinde sadece değişen kısım güncellenir. Bu sebeple çok hızlıdır.


### JSX Nedir?

JS içine yazılmış HTML gibidir. React'da HTML doğrudan JS dosyasının içine yazılır. 

### Props ve State Nedir?

Props (Properties): Bir bileşene dışarıdan gönderilen veridir. Sabittir, değişmez.

State : Bileşenin hafızasıdır. Değişebilir.

### Kurulum

Node.js bilgisayarda kurulu olmalıdır. Eğer kurulu ise en modern ve hızlı başlangıç yöntemi Vite kullanmaktadır.

Terminalde sırasıyla:

1) Proje oluştur : npm create vite@latest ilk-projem -- --template react

2) Klasöre git : cd ilk-projem

3) Paketleri yükle : npm install

4) Projeyi çalıştır : npm run dev

Bu komutlar sonrasında proje http://localhost:5173 gibi verdiği adresde çalışıyor olacak. 

### Bilmemiz gerekenler:

1) JSX Yapısı : HTML ' den farklı olarak class yerine className kullanılır.

2) Components Yapısı : Bir bileşeni diğerinin içinde kullanma.

3) Props : Bileşenler arası veri taşıma

4) State(useState) : Veri tutma ve değiştirme

5) useEffect Hook : Sayfa yüklendiğinde veri çekme gibi yan etkiler

