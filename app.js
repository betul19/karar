// =====================================================================
// METİNLER: uygulamadaki öneri ve mesaj metinlerinin hepsi burada.
// Bir cümleyi değiştirmek istersen sadece bu bölümü düzenle.
//
// - genel:    o kutuda her zaman gösterilebilecek öneriler
// - kelimeler: yazılan metinde "anahtar" kelimelerden biri geçerse
//              ona bağlı "oneri" listenin BAŞINA konur
//              (anahtar kelimeleri küçük harfle yaz)
// =====================================================================
const METINLER = {
  kutular: {
    atistirma: {
      genel: [
        "Bir bardak su iç, sonra tekrar kendine bak.",
        "Kendine sor: Gerçekten aç mıyım, yoksa canım mı bir şey istedi?",
        "10 dakika bekle. Sonra hâlâ istiyorsan, bunu bilerek seç.",
        "Yerinden kalk, 5 dakika başka bir şeyle ilgilen."
      ],
      kelimeler: [
        {
          anahtar: ["çikolata", "tatlı", "şeker", "bisküvi"],
          oneri: "İstersen küçük bir parçayı tabağına koy, yavaş ve tadını fark ederek ye. Bilerek seçmek, kaptırmaktan farklı hissettirir."
        },
        {
          anahtar: ["gece", "akşam", "geç"],
          oneri: "Akşam için sakin bir ritüel dene: ılık bir içecek ya da kısa bir duş."
        },
        {
          anahtar: ["stres", "sıkıldım", "sıkıntı", "yorgun"],
          oneri: "Önce duyguna isim ver: sıkıntı mı, yorgunluk mu? Sonra ne iyi gelir ona bak."
        }
      ]
    },
    telefon: {
      genel: [
        "Telefonu ekranı aşağı bakacak şekilde bir kol boyu uzağa bırak.",
        "3 derin nefes al, sonra neden aldığına bak.",
        "5 dakikalık bir zamanlayıcı kur, çalınca karar ver.",
        "Kendine sor: Ne arıyorum? Haber mi, oyalanma mı, bağ kurmak mı?"
      ],
      kelimeler: [
        {
          anahtar: ["instagram", "tiktok", "kaydır", "sosyal", "video"],
          oneri: "Uygulamayı kapat, 2 dakika başka bir şey yap. İstersen sonra dönersin."
        },
        {
          anahtar: ["gece", "yatak", "uyku"],
          oneri: "Telefonu şarja yatağından uzakta tak, yarın sabah kavuşursunuz."
        }
      ]
    },
    harcama: {
      genel: [
        "Sepeti beklet, 24 saat sonra tekrar bak.",
        "Dürüstçe yaz: Bunu almazsam ne olur?",
        "Bir ay sonra da bunu isteyecek miyim?",
        "Aklındaki bütçeye bak: Bu, ona uyuyor mu?"
      ],
      kelimeler: [
        {
          anahtar: ["indirim", "kampanya", "fırsat", "son gün"],
          oneri: "İndirim biter, ihtiyaç bitmez. Bu bir ihtiyaç mı, fırsat heyecanı mı?"
        }
      ]
    },
    erteleme: {
      genel: [
        "Sadece 5 dakika başla, sonra bırakabilirsin.",
        "İşi en küçük parçaya böl, ilk parçayı seç.",
        "Neden zor geliyor? Tek cümleyle yaz.",
        "Masanı hazırla, sadece onu yap."
      ],
      kelimeler: [
        {
          anahtar: ["ders", "sınav", "ödev", "çalış", "proje"],
          oneri: "Konunun sadece ilk sayfasını aç. Başlamak çoğu zaman en zor kısmı."
        }
      ]
    }
  },

  // Kullanıcının kendi açtığı kutular için genel öneriler
  kendiKutular: {
    genel: [
      "Bir nefes al, 3 saniye tut, yavaşça ver.",
      "Şu an ne hissediyorum? Tek kelimeyle yaz.",
      "10 dakika bekle, sonra tekrar karar ver.",
      "Hedefine bak: Bu adım ona yaklaştırıyor mu?"
    ]
  },

  // Bir öneri seçilince bunlardan biri rastgele gösterilir
  dogruCumleleri: [
    "Durdun ve seçtin. Bu küçük bir şey değil.",
    "Kendine bir an tanıdın. Bu güçlü bir adım.",
    "İşte bu: tepki yerine seçim.",
    "Bugün kendin için güzel bir karar verdin."
  ],

  // Kullanıcı kendi doğrusunu yazıp seçince
  kendiDogru: "Kendi doğrunu biliyorsun ve yazdın. Farkındalık tam olarak bu.",

  // "Düşünmeye devam ediyorum"
  beklemeMesaji: "Acele yok. Bir nefes al, 10 dakika sonra tekrar bakalım.",
  sureBitti: "10 dakika geçti. Şimdi nasıl hissediyorsun?",

  // Nazik uyarılar
  uyarilar: {
    anBos: "Bir an durup tek bir cümle yazmaya ne dersin? Sonra önerilere bakarız.",
    dogruBos: "Önce kendi doğrunu bir cümleyle yazar mısın? Ya da yukarıdan bir öneri seçebilirsin."
  }
};

// ---------- Ayarlar ve veri ----------
const VARSAYILAN_EMOJI = "🌱";
const EN_FAZLA_KUTU = 12;
const EN_FAZLA_ONERI = 4;
const BEKLEME_SANIYE = 10 * 60;
const KUTLAMA_SURESI_MS = 2000;
const PARCACIK_SAYISI = 24;
const PARCACIK_RENKLERI = ["#EBB9C6", "#A8CDB5", "#F0C4A8"];

const hazirKutular = [
  { id: "atistirma", emoji: "🍫", ad: "Atıştırma", hedef: "Gerçekten aç mıyım diye bakmak" },
  { id: "telefon", emoji: "📱", ad: "Telefon", hedef: "Telefona refleksle uzanmamak" },
  { id: "harcama", emoji: "🛍️", ad: "Harcama", hedef: "Almadan önce bir an durmak" },
  { id: "erteleme", emoji: "⏳", ad: "Erteleme", hedef: "Küçük bir adımla başlamak" }
];

let kutular = hazirKutular.slice();
let aktifKutu = null;      // akışta açık olan kutu
let sonOneriler = [];      // en son gösterilen öneriler
let sayacZamanlayici = null;

// ---------- Sayfadaki öğeleri bul ----------
const kutuEkrani = document.getElementById("kutu-ekrani");
const liste = document.getElementById("kutu-listesi");
const secimBilgi = document.getElementById("secim-bilgi");
const acDugme = document.getElementById("yeni-ac");
const form = document.getElementById("kutu-formu");
const adKutusu = document.getElementById("kutu-ad");
const emojiKutusu = document.getElementById("kutu-emoji");
const hedefKutusu = document.getElementById("kutu-hedef");
const hataYazisi = document.getElementById("form-hata");
const vazgecDugme = document.getElementById("vazgec");

const akisEkrani = document.getElementById("akis-ekrani");
const akisGeri = document.getElementById("akis-geri");
const akisEmoji = document.getElementById("akis-emoji");
const akisBaslik = document.getElementById("akis-baslik");
const akisHedef = document.getElementById("akis-hedef");
const bolumYaz = document.getElementById("akis-yaz");
const bolumOneriler = document.getElementById("akis-oneriler");
const bolumSonuc = document.getElementById("akis-sonuc");
const bolumBekle = document.getElementById("akis-bekle");
const anYazisi = document.getElementById("an-yazisi");
const anSayac = document.getElementById("an-sayac");
const anUyari = document.getElementById("an-uyari");
const oneriDugme = document.getElementById("oneri-dugme");
const oneriListesi = document.getElementById("oneri-listesi");
const kendiDogruKutusu = document.getElementById("kendi-dogru");
const dogruUyari = document.getElementById("dogru-uyari");
const secDugme = document.getElementById("sec-dugme");
const bekleDugme = document.getElementById("bekle-dugme");
const sonucYazi = document.getElementById("sonuc-yazi");
const yeniAnDugme = document.getElementById("yeni-an");
const sonucGeri = document.getElementById("sonuc-geri");
const bekleYazi = document.getElementById("bekle-yazi");
const geriSayim = document.getElementById("geri-sayim");
const secenekDugme = document.getElementById("secenekler-dugme");
const durumBildirim = document.getElementById("durum-bildirim");
const kutlamaAlani = document.getElementById("kutlama");

// ---------- Yazılan metinden ilk emojiyi ayıkla ----------
const EMOJI_DESENI = /\p{Extended_Pictographic}(?:️|\p{Emoji_Modifier})?(?:‍\p{Extended_Pictographic}(?:️|\p{Emoji_Modifier})?)*/u;

function emojiAyikla(metin) {
  const eslesme = metin.match(EMOJI_DESENI);
  return eslesme ? eslesme[0] : VARSAYILAN_EMOJI;
}

// ---------- Kutuları ekrana çiz ----------
function kutulariCiz(odaklanacakId) {
  liste.replaceChildren();

  kutular.forEach(function (kutu) {
    const satir = document.createElement("li");
    const dugme = document.createElement("button");
    dugme.type = "button";
    dugme.className = "kutu";
    dugme.dataset.id = kutu.id;

    const emoji = document.createElement("span");
    emoji.className = "kutu-emoji";
    emoji.setAttribute("aria-hidden", "true");
    emoji.textContent = kutu.emoji;

    const ad = document.createElement("span");
    ad.className = "kutu-ad";
    ad.textContent = kutu.ad;

    dugme.append(emoji, ad);

    if (kutu.hedef) {
      const hedef = document.createElement("span");
      hedef.className = "kutu-hedef";
      hedef.textContent = kutu.hedef;
      dugme.append(hedef);
    }

    dugme.addEventListener("click", function () {
      akisiAc(kutu);
    });

    satir.append(dugme);
    liste.append(satir);
  });

  secimBilgi.textContent = "Bir kutu seç ya da kendi kutunu aç.";

  if (odaklanacakId) {
    const hedefDugme = liste.querySelector('[data-id="' + odaklanacakId + '"]');
    if (hedefDugme) hedefDugme.focus();
  }
}

// ---------- Formu aç / kapat ----------
function formuAc() {
  hataYazisi.textContent = "";
  form.hidden = false;
  acDugme.setAttribute("aria-expanded", "true");
  adKutusu.focus();
}

function formuKapat() {
  form.hidden = true;
  acDugme.setAttribute("aria-expanded", "false");
  form.reset();
  hataYazisi.textContent = "";
}

acDugme.addEventListener("click", function () {
  if (form.hidden) {
    formuAc();
  } else {
    formuKapat();
  }
});

vazgecDugme.addEventListener("click", function () {
  formuKapat();
  acDugme.focus();
});

// ---------- Yeni kutu oluştur ----------
form.addEventListener("submit", function (olay) {
  olay.preventDefault();

  const ad = adKutusu.value.trim();
  if (ad === "") {
    hataYazisi.textContent = "Kutuna bir ad verelim.";
    adKutusu.focus();
    return;
  }
  if (kutular.length >= EN_FAZLA_KUTU) {
    hataYazisi.textContent = "En fazla " + EN_FAZLA_KUTU + " kutun olabilir. Önce birini ayırmak gerekecek.";
    return;
  }

  const yeni = {
    id: "kendi-" + Date.now(),
    emoji: emojiAyikla(emojiKutusu.value),
    ad: ad,
    hedef: hedefKutusu.value.trim()
  };

  kutular.push(yeni);
  formuKapat();
  kutulariCiz(yeni.id);
});

// =====================================================================
// Aşama 3: an yaz + öneri seç
// =====================================================================

// ---------- Önerileri seç (yapay zeka yok, sadece kelime eşleştirme) ----------
function onerileriSec(kutu, yazi) {
  const kucuk = yazi.toLocaleLowerCase("tr");
  const veri = METINLER.kutular[kutu.id];
  const sonuc = [];

  function ekle(oneri) {
    if (sonuc.length < EN_FAZLA_ONERI && sonuc.indexOf(oneri) === -1) {
      sonuc.push(oneri);
    }
  }

  if (veri) {
    veri.kelimeler.forEach(function (grup) {
      const var_mi = grup.anahtar.some(function (kelime) {
        return kucuk.includes(kelime);
      });
      if (var_mi) ekle(grup.oneri);
    });
    veri.genel.forEach(ekle);
  } else {
    METINLER.kendiKutular.genel.forEach(ekle);
  }

  return sonuc;
}

// ---------- Bölümleri göster / gizle ----------
function bolumGoster(hangisi) {
  bolumYaz.hidden = hangisi !== "yaz";
  bolumOneriler.hidden = hangisi !== "oneriler";
  bolumSonuc.hidden = hangisi !== "sonuc";
  bolumBekle.hidden = hangisi !== "bekle";
}

function sayaciDurdur() {
  if (sayacZamanlayici !== null) {
    clearInterval(sayacZamanlayici);
    sayacZamanlayici = null;
  }
}

function sayacYazisiniGuncelle() {
  anSayac.textContent = anYazisi.value.length + " / 200";
}

// ---------- Akışı aç / kapat ----------
function akisiAc(kutu) {
  aktifKutu = kutu;
  akisEmoji.textContent = kutu.emoji;
  akisBaslik.textContent = kutu.ad;
  akisHedef.textContent = kutu.hedef ? "Hedefin: " + kutu.hedef : "";
  akisHedef.hidden = !kutu.hedef;

  anYazisi.value = "";
  kendiDogruKutusu.value = "";
  anUyari.textContent = "";
  dogruUyari.textContent = "";
  durumBildirim.textContent = "";
  sayacYazisiniGuncelle();

  kutuEkrani.hidden = true;
  akisEkrani.hidden = false;
  bolumGoster("yaz");
  akisBaslik.focus();
}

function kutulariGeriGetir() {
  sayaciDurdur();
  const donulecekId = aktifKutu ? aktifKutu.id : null;
  aktifKutu = null;
  akisEkrani.hidden = true;
  kutuEkrani.hidden = false;
  kutulariCiz(donulecekId);
}

akisGeri.addEventListener("click", kutulariGeriGetir);
sonucGeri.addEventListener("click", kutulariGeriGetir);

// ---------- Adım 1: anı yaz ----------
anYazisi.addEventListener("input", sayacYazisiniGuncelle);

oneriDugme.addEventListener("click", function () {
  const yazi = anYazisi.value.trim();
  if (yazi === "") {
    anUyari.textContent = METINLER.uyarilar.anBos;
    anYazisi.focus();
    return;
  }
  anUyari.textContent = "";
  oneriler(yazi);
});

function oneriler(yazi) {
  sonOneriler = onerileriSec(aktifKutu, yazi);
  oneriListesi.replaceChildren();

  sonOneriler.forEach(function (metin) {
    const satir = document.createElement("li");
    const dugme = document.createElement("button");
    dugme.type = "button";
    dugme.className = "oneri";
    dugme.textContent = metin;
    dugme.addEventListener("click", function () {
      sonucuGoster(false);
    });
    satir.append(dugme);
    oneriListesi.append(satir);
  });

  dogruUyari.textContent = "";
  bolumGoster("oneriler");
  const ilk = oneriListesi.querySelector("button");
  if (ilk) ilk.focus();
}

// ---------- Adım 2: kendi doğrunu yaz ----------
secDugme.addEventListener("click", function () {
  if (kendiDogruKutusu.value.trim() === "") {
    dogruUyari.textContent = METINLER.uyarilar.dogruBos;
    kendiDogruKutusu.focus();
    return;
  }
  sonucuGoster(true);
});

// ---------- Sonuç ----------
function sonucuGoster(kendiMi) {
  sayaciDurdur();
  let cumle;
  if (kendiMi) {
    cumle = METINLER.kendiDogru;
  } else {
    const liste_ = METINLER.dogruCumleleri;
    cumle = liste_[Math.floor(Math.random() * liste_.length)];
  }
  sonucYazi.textContent = cumle;
  durumBildirim.textContent = cumle;
  bolumGoster("sonuc");
  yeniAnDugme.focus();
  kutla();
}

yeniAnDugme.addEventListener("click", function () {
  anYazisi.value = "";
  kendiDogruKutusu.value = "";
  anUyari.textContent = "";
  durumBildirim.textContent = "";
  sayacYazisiniGuncelle();
  bolumGoster("yaz");
  anYazisi.focus();
});

// ---------- Düşünmeye devam ediyorum ----------
function formatla(saniye) {
  const dk = Math.floor(saniye / 60);
  const sn = saniye % 60;
  return String(dk).padStart(2, "0") + ":" + String(sn).padStart(2, "0");
}

bekleDugme.addEventListener("click", function () {
  sayaciDurdur();
  bekleYazi.textContent = METINLER.beklemeMesaji;
  durumBildirim.textContent = METINLER.beklemeMesaji;
  secenekDugme.hidden = true;
  geriSayim.hidden = false;
  geriSayim.textContent = formatla(BEKLEME_SANIYE);
  bolumGoster("bekle");

  const bitis = Date.now() + BEKLEME_SANIYE * 1000;
  sayacZamanlayici = setInterval(function () {
    const kalan = Math.max(0, Math.ceil((bitis - Date.now()) / 1000));
    geriSayim.textContent = formatla(kalan);
    if (kalan === 0) {
      sayaciDurdur();
      sureBitti();
    }
  }, 1000);
});

function sureBitti() {
  bekleYazi.textContent = METINLER.sureBitti;
  durumBildirim.textContent = METINLER.sureBitti;
  geriSayim.hidden = true;
  secenekDugme.hidden = false;
  secenekDugme.focus();
}

secenekDugme.addEventListener("click", function () {
  dogruUyari.textContent = "";
  bolumGoster("oneriler");
  const ilk = oneriListesi.querySelector("button");
  if (ilk) ilk.focus();
});

// ---------- Kutlama efekti ----------
function kutla() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  kutlamaAlani.replaceChildren();
  for (let i = 0; i < PARCACIK_SAYISI; i++) {
    const p = document.createElement("span");
    p.className = "parcacik";
    p.style.left = Math.round(Math.random() * 100) + "%";
    p.style.background = PARCACIK_RENKLERI[i % PARCACIK_RENKLERI.length];
    p.style.animationDelay = Math.round(Math.random() * 300) + "ms";
    p.style.setProperty("--kayma", Math.round(Math.random() * 120 - 60) + "px");
    p.style.setProperty("--donus", Math.round(Math.random() * 360 + 120) + "deg");
    kutlamaAlani.append(p);
  }

  setTimeout(function () {
    kutlamaAlani.replaceChildren();
  }, KUTLAMA_SURESI_MS + 300);
}

// ---------- Başlangıç ----------
kutulariCiz();
