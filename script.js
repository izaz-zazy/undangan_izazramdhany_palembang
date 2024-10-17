document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Loaded");
    document.getElementById("open-invitation-btn").addEventListener("click", function() {
        console.log("Button clicked");
        document.getElementById("qoutes").scrollIntoView({ behavior: "smooth" });
    });
});
// BATAS COVER
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rsvp-form');
    const notifikasi = document.getElementById('notifikasi');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Mencegah pengiriman default form

      // Menampilkan notifikasi
      notifikasi.style.display = 'block';  // Ubah style display menjadi block untuk menampilkan
      notifikasi.textContent = 'Terima kasih! RSVP Anda telah diterima.';

      // Kosongkan form setelah submit
      form.reset();

      // Sembunyikan notifikasi setelah 3 detik
      setTimeout(function() {
        notifikasi.style.display = 'none';  // Sembunyikan setelah 3 detik
      }, 3000);
    });
  });

// batas notif rsvp

function copybankinfo() {
    // Mendapatkan elemen yang berisi informasi bank
    const bankInfo = document.querySelector('.bank-info').innerText;
    
    // Membuat elemen textarea sementara untuk menyalin teks
    const textarea = document.createElement('textarea');
    textarea.value = bankInfo;
    document.body.appendChild(textarea);
    
    // Memilih dan menyalin teks dari textarea
    textarea.select();
    document.execCommand('copy');
    
    // Menghapus textarea setelah menyalin
    document.body.removeChild(textarea);
    
    // Menampilkan notifikasi bahwa teks telah disalin
    alert('Informasi rekening telah disalin ke clipboard!');
}

// batas kirim hadiah

function copyAddress() {
    // Mendapatkan elemen yang berisi alamat
    const addressInfo = document.querySelector('.address-info').innerText;
    
    // Membuat elemen textarea sementara untuk menyalin teks
    const textarea = document.createElement('textarea');
    textarea.value = addressInfo;
    document.body.appendChild(textarea);
    
    // Memilih dan menyalin teks dari textarea
    textarea.select();
    document.execCommand('copy');
    
    // Menghapus textarea setelah menyalin
    document.body.removeChild(textarea);
    
    // Menampilkan notifikasi bahwa teks telah disalin
    alert('Alamat telah disalin ke clipboard!');
}
// batas menyalin alamat

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('message-form');
    const notification = document.getElementById('notification');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Mencegah pengiriman default form

      // Tampilkan notifikasi di bawah tombol
      notification.style.display = 'block';
      notification.textContent = 'Terima kasih! Pesan Anda telah terkirim.';

      // Kosongkan form setelah submit
      form.reset();

      // Sembunyikan notifikasi setelah 5 detik
      setTimeout(function() {
        notification.style.display = 'none';
      }, 5000); // Notifikasi akan hilang setelah 5 detik
    });
  });

// batas kirim doa 
