var msg1 = document.getElementById("mesaj1");
var msg2 = document.getElementById("mesaj2");
var msg3 = document.getElementById("mesaj3");

var cevap = Math.floor(Math.random() * 100) + 1;
var tahminSayisi = 0;
var tahminEdilenSayilar = [];

function oyna() {
  var oyuncuTahmini = document.getElementById("tahmin").value;
  if (oyuncuTahmini < 1 || oyuncuTahmini > 100) {
    alert("Lütfen 1 ile 100 arasında bir sayı seç.");
  } else {
    tahminEdilenSayilar.push(oyuncuTahmini);
    tahminSayisi += 1;

    if (oyuncuTahmini < cevap) {
      msg1.textContent = "Tahminin düşük";
      msg2.textContent = "Tahmin Sayın: " + tahminSayisi;
      msg3.textContent = "Tahmin ettiğin sayılar: " + tahminEdilenSayilar;
    } else if (oyuncuTahmini > cevap) {
      msg1.textContent = "Tahminin yüksek";
      msg2.textContent = "Tahmin Sayın: " + tahminSayisi;
      msg3.textContent = "Tahmin ettiğin sayılar: " + tahminEdilenSayilar;
    } else if (oyuncuTahmini == cevap) {
      msg1.textContent = "Tebrikler bildin.";
      msg2.textContent = "Tuttuğum sayı: " + cevap;
      msg3.textContent = "Toplam " + tahminSayisi + " denemede bildin.";
      document.getElementById("btn").disabled = true;
    }
  }
}
