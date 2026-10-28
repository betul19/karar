// ---------- Ayarlar ve veri ----------
const VARSAYILAN_EMOJI = "🌱";
const EN_FAZLA_KUTU = 12;

const hazirKutular = [
  { id: "atistirma", emoji: "🍫", ad: "Atıştırma", hedef: "Gerçekten aç mıyım diye bakmak" },
  { id: "telefon", emoji: "📱", ad: "Telefon", hedef: "Telefona refleksle uzanmamak" },
  { id: "harcama", emoji: "🛍️", ad: "Harcama", hedef: "Almadan önce bir an durmak" },
  { id: "erteleme", emoji: "⏳", ad: "Erteleme", hedef: "Küçük bir adımla başlamak" }
];

let kutular = hazirKutular.slice();
let seciliId = null;

// ---------- Sayfadaki öğeleri bul ----------
const liste = document.getElementById("kutu-listesi");
const secimBilgi = document.getElementById("secim-bilgi");
const acDugme = document.getElementById("yeni-ac");
const form = document.getElementById("kutu-formu");
const adKutusu = document.getElementById("kutu-ad");
const emojiKutusu = document.getElementById("kutu-emoji");
const hedefKutusu = document.getElementById("kutu-hedef");
const hataYazisi = document.getElementById("form-hata");
const vazgecDugme = document.getElementById("vazgec");

// ---------- Yazılan metinden ilk emojiyi ayıkla ----------
const EMOJI_DESENI = /\p{Extended_Pictographic}(?:\uFE0F|\p{Emoji_Modifier})?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F|\p{Emoji_Modifier})?)*/u;

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
    dugme.setAttribute("aria-pressed", String(kutu.id === seciliId));

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
      seciliId = kutu.id;
      kutulariCiz(kutu.id);
    });

    satir.append(dugme);
    liste.append(satir);
  });

  secimBilgiyiGuncelle();

  if (odaklanacakId) {
    const hedefDugme = liste.querySelector('[data-id="' + odaklanacakId + '"]');
    if (hedefDugme) hedefDugme.focus();
  }
}

function secimBilgiyiGuncelle() {
  const secili = kutular.find(function (k) { return k.id === seciliId; });
  if (secili) {
    secimBilgi.textContent = secili.emoji + " " + secili.ad + " seçildi. Bir sonraki aşamada burada o anı yazacaksın.";
  } else {
    secimBilgi.textContent = "Bir kutu seç ya da kendi kutunu aç.";
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
  seciliId = yeni.id;
  formuKapat();
  kutulariCiz(yeni.id);
});

// ---------- Başlangıç ----------
kutulariCiz();