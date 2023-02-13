// penjelasan materi
var ele = document.querySelector('#data-type');
const data = {
    nama:[
      "Document Object Model (DOM)",
      "Node",
      "Element",
      "Attribute",
      "Text Node",
      "Event Listener",
      "Document Object",
      "Window Object",
      "HTMLCollection",
      "NodeList	",
    ],
    exp:[
" Document Object Model (DOM): adalah sebuah API yang menyediakan struktur untuk mengakses dan memanipulasi dokumen HTML, XML, dan SVG",
  " Node adalah elemen dasar dari Document Object Model (DOM). Node dapat berupa elemen HTML, teks, komentar, atribut, atau objek lainnya yang terkait dengan dokumen. Node memiliki properti dan metode yang dapat digunakan untuk mengakses dan memodifikasi DOM. Node juga dapat memiliki anak-anak, yang disebut node anak. Node anak dapat berupa elemen HTML, teks, komentar, atribut, atau objek lainnya yang terkait dengan dokumen.",
  "Element adalah salah satu komponen utama dari Document Object Model (DOM). Element merupakan bagian dari dokumen HTML yang menyatakan struktur dan konten. Element dapat berupa tag HTML, seperti <p>, <div>, <h1>, atau <span>. Element juga dapat berupa atribut HTML, seperti id, class, dan style. Element memungkinkan Anda untuk mengatur struktur dan konten dokumen HTML Anda.",
  "Atribut adalah properti dari sebuah elemen DOM yang menyimpan informasi tambahan tentang elemen tersebut. Atribut dapat berupa nilai teks atau boolean, dan dapat digunakan untuk mengontrol perilaku atau tampilan elemen. Atribut dapat diakses dan dimodifikasi melalui JavaScript dengan menggunakan metode getAttribute() dan setAttribute()",
  "Text Node adalah jenis node DOM yang menyimpan teks dalam dokumen HTML. Text Node berisi teks yang ditampilkan di halaman web, tetapi tidak termasuk tag HTML atau atribut. Text Node dapat diakses melalui properti childNodes dari elemen DOM. Text Node dapat diubah dengan menggunakan metode textContent atau innerText.",
  "Event Listener adalah sebuah metode yang digunakan untuk menangkap suatu event yang terjadi pada DOM (Document Object Model). Event Listener akan memanggil sebuah fungsi atau kode yang telah ditentukan ketika event tersebut terjadi.",
  "Document Object adalah sebuah model objek yang menyediakan struktur untuk mengakses dan memanipulasi dokumen HTML, XML, atau SVG. Model ini menyediakan struktur yang sama untuk semua jenis dokumen, sehingga memudahkan pengembangan aplikasi yang dapat berjalan di berbagai platform.",
  "Window Object adalah objek global yang tersedia di semua browser. Ini menyediakan akses ke berbagai properti, metode, dan event handler yang dapat digunakan untuk membuat aplikasi web interaktif. Window Object juga menyediakan akses ke objek lain seperti Document, History, Location, dan Navigator. Window Object juga menyediakan akses ke fungsi bawaan JavaScript seperti alert(), confirm(), dan prompt().",
  "HTMLCollection adalah objek yang menyimpan kumpulan elemen HTML. HTMLCollection dapat diakses dengan menggunakan indeks atau nama elemen. HTMLCollection dapat diperoleh dengan menggunakan metode DOM seperti document.getElementsByTagName(), document.getElementsByClassName(), dan document.querySelectorAll(). HTMLCollection dapat berisi elemen HTML, tetapi juga bisa berisi teks atau komentar. HTMLCollection tidak dapat diubah, jadi jika Anda ingin mengubah isinya, Anda harus membuat salinan baru.",
  "NodeList adalah objek yang berisi daftar node DOM. NodeList dapat diakses seperti array, tetapi tidak memiliki metode array seperti push () atau pop (). NodeList dapat dihasilkan oleh fungsi DOM seperti document.querySelectorAll () dan document.getElementsByTagName (). NodeList dapat digunakan untuk mengulangi melalui setiap node DOM dan mengambil informasi dari setiap node."
  
    ]
  }

var hasil = "";
for(let i=0; i<data.nama.length;i++){
    hasil += `
        <div class="flex-row" id="${data.nama[i]}">
            <div class="card">
                <div class="card-header">
                    <h3>${data.nama[i]}</h3>
                </div>
                <div class="card-body">
                    <div class="detail">
                        <p>${data.exp[i]}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    ele.innerHTML = hasil
}
// console.log(data.nama[0])