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

  // Art arda doğru adımlar ve gün serisi metinleri. Not: "2" ve ekler hak = 2 varsayımıyla.
  seri: {
    baslik: "Art arda: {anlik} · Gün serisi: {mevcut} gün",
    hakBas: "Bugünkü ‘olmadı’ hakkın: {hak}'den ",
    hakHicbiri: "hiçbiri kullanılmadı",
    hakKullanildi: "{olmadi} kullanıldı",
    hakDoldu: "Bugünkü ‘olmadı’ hakkın doldu",
    nasilBaslik: "Bu ne demek?",
    nasilMetin: "Art arda: bugün ‘Bu sefer olmadı’ demeden üst üste seçtiğin doğru adımlar. Gün serisi: üst üste kaç gün en az bir doğru adım seçtin ve ‘olmadı’ sayın 2'yi geçmedi. Her gün her kutu için 2 ‘olmadı’ hakkın var; üçüncüsü o günü ve gün serisini sıfırlar. Önceki günlerin olduğu gibi kalır.",

    dogruIlk: "İlk doğru adım. Güzel bir başlangıç.",
    dogruYeniden: "Yeniden başladın. Bu da bir doğru adım.",
    dogruArdArda: "Art arda {n} doğru adım. Devam!",

    olmadiOncekiVar: "Bu sefer olmadı. Bugünkü serin {p} adımdı, yeni bir başlangıç yapabilirsin. Günlük 2 hakkından {kullanilan}'ini kullandın, gün serin korunuyor.",
    olmadiOncekiYok: "Bu sefer olmadı, ve bu da olur. Günlük 2 hakkından {kullanilan}'ini kullandın, gün serin korunuyor.",
    olmadiHakBitti: "Bu sefer olmadı. İki hakkını da kullandın. Bir ‘olmadı’ daha gün serini sıfırlar, ama yeni bir gün her zaman başlıyor.",
    olmadiBozuk: "Bugün olmadı sayın 2'yi geçti, gün serin sıfırlandı. Yarın yeni bir başlangıç.",
    olmadiBozukEnUzun: " En uzun gün serin {en} gündü."
  },

  // Kayıt ve silme ile ilgili mesajlar
  depo: {
    bozuk: "Kayıtlı veri okunamadı, temiz bir başlangıç yaptım.",
    yok: "Bu tarayıcı kayıt tutmuyor. Bu oturumda devam edebilirsin ama sayfayı kapatınca kayıtlar gider."
  },

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

const DEPO_ANAHTARI = "karar-v1";
const DEPO_SURUMU = 1;
const EN_FAZLA_KAYIT = 2000;
const GUNLUK_OLMADI_HAKKI = 2; // bir kutuda bir günde "olmadı" hakkı (aşılırsa o gün bozulur)
const DOGRULAMA_EN_FAZLA_KUTU = 50;
const SONUCLAR = ["dogru", "olmadi", "dusunuyor"];
const ADIM_TURLERI = ["oneri", "kendi", ""];

// =====================================================================
// DEPOLAMA: localStorage SADECE bu bölümde geçer.
// Diğer yerler depoOku / depoYaz / depoSil fonksiyonlarını kullanır.
// =====================================================================
function varsayilanVeri() {
  return {
    surum: DEPO_SURUMU,
    kutular: hazirKutular.map(function (k) { return Object.assign({}, k); }),
    kayitlar: []
  };
}

function metinMi(deger, enFazla) {
  return typeof deger === "string" && deger.length <= enFazla;
}

function kutuIdGecerliMi(id) {
  if (!metinMi(id, 40)) return false;
  return hazirKutular.some(function (k) { return k.id === id; }) || /^kendi-\d+$/.test(id);
}

// Okunan veri beklenen şekilde mi? Değilse null döner.
function veriyiDogrula(ham) {
  if (!ham || typeof ham !== "object" || Array.isArray(ham)) return null;
  if (ham.surum !== DEPO_SURUMU) return null;
  if (!Array.isArray(ham.kutular) || !Array.isArray(ham.kayitlar)) return null;
  if (ham.kutular.length > DOGRULAMA_EN_FAZLA_KUTU || ham.kayitlar.length > EN_FAZLA_KAYIT) return null;

  const kutular = [];
  const kutuIdleri = {};
  for (const k of ham.kutular) {
    if (!k || typeof k !== "object") return null;
    if (!kutuIdGecerliMi(k.id) || kutuIdleri[k.id] === true) return null;
    if (!metinMi(k.emoji, 12) || !metinMi(k.ad, 24) || !metinMi(k.hedef, 80)) return null;
    if (k.ad.trim() === "") return null;
    kutuIdleri[k.id] = true;
    kutular.push({ id: k.id, emoji: k.emoji, ad: k.ad, hedef: k.hedef });
  }

  const kayitlar = [];
  const kayitIdleri = {};
  for (const r of ham.kayitlar) {
    if (!r || typeof r !== "object") return null;
    if (!metinMi(r.id, 60) || r.id === "" || kayitIdleri[r.id] === true) return null;
    if (!metinMi(r.kutuId, 40) || !metinMi(r.zaman, 40)) return null;
    if (Number.isNaN(new Date(r.zaman).getTime())) return null;
    if (!metinMi(r.an, 200) || !metinMi(r.adim, 300)) return null;
    if (ADIM_TURLERI.indexOf(r.adimTuru) === -1 || SONUCLAR.indexOf(r.sonuc) === -1) return null;
    // sonucZamani isteğe bağlı (eski kayıtlarda yok); varsa geçerli bir tarih olmalı
    if (r.sonucZamani !== undefined) {
      if (!metinMi(r.sonucZamani, 40) || Number.isNaN(new Date(r.sonucZamani).getTime())) return null;
    }
    kayitIdleri[r.id] = true;
    // Kutusu silinmiş (yetim) kayıtlar sessizce atılır
    if (kutuIdleri[r.kutuId] === true) {
      const temiz = {
        id: r.id, kutuId: r.kutuId, zaman: r.zaman, an: r.an,
        adim: r.adim, adimTuru: r.adimTuru, sonuc: r.sonuc
      };
      if (r.sonucZamani !== undefined) temiz.sonucZamani = r.sonucZamani;
      kayitlar.push(temiz);
    }
  }

  return { surum: DEPO_SURUMU, kutular: kutular, kayitlar: kayitlar };
}

// Döner: { veri, durum } — durum: "tamam" | "bozuk" | "yok"
function depoOku() {
  let metin;
  try {
    metin = window.localStorage.getItem(DEPO_ANAHTARI);
  } catch (hata) {
    return { veri: varsayilanVeri(), durum: "yok" };
  }
  if (metin === null) return { veri: varsayilanVeri(), durum: "tamam" };

  try {
    const dogru = veriyiDogrula(JSON.parse(metin));
    if (dogru) return { veri: dogru, durum: "tamam" };
  } catch (hata) {
    // JSON hatası: aşağıda "bozuk" olarak ele alınır
  }
  return { veri: varsayilanVeri(), durum: "bozuk" };
}

// Döner: yazılabildiyse true
function depoYaz(veri) {
  try {
    window.localStorage.setItem(DEPO_ANAHTARI, JSON.stringify(veri));
    return true;
  } catch (hata) {
    return false;
  }
}

function depoSil() {
  try {
    window.localStorage.removeItem(DEPO_ANAHTARI);
    return true;
  } catch (hata) {
    return false;
  }
}

// =====================================================================
// SERİ HESABI: saf fonksiyonlar (sayfaya bağlı değil, bugünü parametre alır)
// =====================================================================
function yerelGun(tarih) {
  const ay = String(tarih.getMonth() + 1).padStart(2, "0");
  const gun = String(tarih.getDate()).padStart(2, "0");
  return tarih.getFullYear() + "-" + ay + "-" + gun;
}

// "YYYY-MM-DD" -> gün numarası (yaz saati kaymasından etkilenmez)
function gunNumarasi(gunYazisi) {
  const parca = gunYazisi.split("-");
  return Date.UTC(Number(parca[0]), Number(parca[1]) - 1, Number(parca[2])) / 86400000;
}

// Bir kutunun BİR gününe ait kayıtları özetler. Sıralama: sonucZamani (yoksa zaman).
// Art arda sayacı: dogru +1, olmadi sayacı 0'a çeker, dusunuyor ne artırır ne bozar.
// oncekiAnlik: günün en son "olmadi" kaydından hemen önceki art arda sayısı.
// Günün son kaydı (dusunuyor sayılmaz) olmadi değilse ya da hiç olmadi yoksa 0'dır.
function gunKayitlariniOzetle(liste) {
  const sirali = liste
    .map(function (r, i) {
      return { r: r, t: Date.parse(r.sonucZamani || r.zaman), i: i };
    })
    .sort(function (a, b) { return a.t - b.t || a.i - b.i; });

  let dogru = 0;
  let olmadi = 0;
  let dusunuyor = 0;
  let anlik = 0;
  let enIyi = 0;
  let sayacOlmadidanOnce = 0;
  let sonOlmadiMi = false;

  sirali.forEach(function (o) {
    if (o.r.sonuc === "dogru") {
      dogru += 1;
      anlik += 1;
      if (anlik > enIyi) enIyi = anlik;
      sonOlmadiMi = false;
    } else if (o.r.sonuc === "olmadi") {
      olmadi += 1;
      sayacOlmadidanOnce = anlik;
      anlik = 0;
      sonOlmadiMi = true;
    } else {
      dusunuyor += 1;
    }
  });

  return {
    dogru: dogru,
    olmadi: olmadi,
    dusunuyor: dusunuyor,
    anlik: anlik,
    enIyi: enIyi,
    oncekiAnlik: sonOlmadiMi ? sayacOlmadidanOnce : 0,
    kalanHak: Math.max(0, GUNLUK_OLMADI_HAKKI - olmadi),
    tamam: dogru >= 1 && olmadi <= GUNLUK_OLMADI_HAKKI,
    bozuk: olmadi > GUNLUK_OLMADI_HAKKI
  };
}

// Bir kutunun bir günü ("YYYY-MM-DD", yerel gün) için özet
function gunOzeti(kayitlar, kutuId, gunStr) {
  return gunKayitlariniOzetle(kayitlar.filter(function (r) {
    return r.kutuId === kutuId && yerelGun(new Date(r.zaman)) === gunStr;
  }));
}

// Gün serisi: art arda "tamam" günler. Gün = kaydın zaman alanının yerel günü.
function gunSerisi(kayitlar, kutuId, bugunStr) {
  const gruplar = {};
  kayitlar.forEach(function (r) {
    if (r.kutuId !== kutuId) return;
    const no = gunNumarasi(yerelGun(new Date(r.zaman)));
    (gruplar[no] = gruplar[no] || []).push(r);
  });

  const ozetler = {};
  const tamamGunler = [];
  Object.keys(gruplar).forEach(function (no) {
    ozetler[no] = gunKayitlariniOzetle(gruplar[no]);
    if (ozetler[no].tamam) tamamGunler.push(Number(no));
  });
  tamamGunler.sort(function (a, b) { return a - b; });

  let enUzun = 0;
  let dizi = 0;
  tamamGunler.forEach(function (g, i) {
    dizi = i > 0 && tamamGunler[i - 1] === g - 1 ? dizi + 1 : 1;
    if (dizi > enUzun) enUzun = dizi;
  });

  // Bugün tamamsa bugünden, bozuksa 0, henüz doğru yoksa (ama bozuk değilse) dünden geriye
  const bugunNo = gunNumarasi(bugunStr);
  const bugun = ozetler[bugunNo];
  let mevcut = 0;
  if (!(bugun && bugun.bozuk)) {
    let g = bugun && bugun.tamam ? bugunNo : bugunNo - 1;
    while (ozetler[g] && ozetler[g].tamam) {
      mevcut += 1;
      g -= 1;
    }
  }

  return { mevcut: mevcut, enUzun: enUzun };
}

function gunYazisi(n) {
  return n + " gün";
}

// ---------- Seri metinleri (METINLER.seri'den) ----------
function seriBaslikMetni(ozet, seri) {
  return METINLER.seri.baslik
    .replace("{anlik}", ozet.anlik)
    .replace("{mevcut}", seri.mevcut);
}

function hakMetni(ozet) {
  if (ozet.bozuk) return METINLER.seri.hakDoldu;
  const bas = METINLER.seri.hakBas.replace("{hak}", GUNLUK_OLMADI_HAKKI);
  if (ozet.olmadi === 0) return bas + METINLER.seri.hakHicbiri;
  return bas + METINLER.seri.hakKullanildi.replace("{olmadi}", ozet.olmadi);
}

function dogruSonucMetni(ozet) {
  if (ozet.anlik >= 2) return METINLER.seri.dogruArdArda.replace("{n}", ozet.anlik);
  if (ozet.olmadi > 0) return METINLER.seri.dogruYeniden;
  return METINLER.seri.dogruIlk;
}

// Not: metinlerdeki sayılar ve Türkçe ekler ("2'yi", "2'den") hak = 2 varsayımıyla yazıldı.
// GUNLUK_OLMADI_HAKKI değişirse METINLER.seri cümleleri de gözden geçirilmeli.
function olmadiSonucMetni(ozet, seri) {
  if (ozet.bozuk) {
    return METINLER.seri.olmadiBozuk + (seri.enUzun > 0
      ? METINLER.seri.olmadiBozukEnUzun.replace("{en}", seri.enUzun)
      : "");
  }
  if (ozet.olmadi >= GUNLUK_OLMADI_HAKKI) return METINLER.seri.olmadiHakBitti;
  return (ozet.oncekiAnlik >= 1 ? METINLER.seri.olmadiOncekiVar : METINLER.seri.olmadiOncekiYok)
    .replace("{p}", ozet.oncekiAnlik)
    .replace("{kullanilan}", ozet.olmadi);
}

// ---------- Uygulama durumu ----------
const ilkOkuma = depoOku();
let veri = ilkOkuma.veri;
let aktifKutu = null;      // akışta açık olan kutu
let aktifKayitId = null;   // akışta üzerinde çalışılan kayıt
let sonAn = "";            // kayıtta saklanacak, en son yazılan an
let sonOneriler = [];      // en son gösterilen öneriler
let sayacZamanlayici = null;
let aktifOnay = null;      // açık onay alanı: { alan, tetikleyen, ... }

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

const depoNotu = document.getElementById("depo-notu");
const bosKart = document.getElementById("bos-kart");
const hazirlariGetir = document.getElementById("hazirlari-getir");
const hazirlariGetirKucuk = document.getElementById("hazirlari-getir-kucuk");
const akisHak = document.getElementById("akis-hak");
const akisSeri = document.getElementById("akis-seri");
const olmadiDugme = document.getElementById("olmadi-dugme");
const sonucSeri = document.getElementById("sonuc-seri");
const uyduBlok = document.getElementById("uydu-blok");
const uyduEvet = document.getElementById("uydu-evet");
const uyduOlmadi = document.getElementById("uydu-olmadi");
const bekleSonrasi = document.getElementById("bekle-sonrasi");
const bekleDogru = document.getElementById("bekle-dogru");
const bekleOlmadi = document.getElementById("bekle-olmadi");
const kutuSil = document.getElementById("kutu-sil");
const tumSil = document.getElementById("tum-sil");
const onayAlanlari = {
  kutu: {
    alan: document.getElementById("kutu-onay"),
    metin: document.getElementById("kutu-onay-metin"),
    vazgec: document.getElementById("kutu-onay-vazgec"),
    evet: document.getElementById("kutu-onay-evet")
  },
  tum: {
    alan: document.getElementById("tum-onay"),
    metin: document.getElementById("tum-onay-metin"),
    vazgec: document.getElementById("tum-onay-vazgec"),
    evet: document.getElementById("tum-onay-evet")
  }
};

// ---------- Depolama notu (başlığın altında) ----------
function depoNotuGoster(metin) {
  depoNotu.textContent = metin;
  depoNotu.hidden = false;
}

// Kaydet; yazılamazsa uygulama bellekte devam eder ve sakin bir not gösterir
function kaydet() {
  if (!depoYaz(veri)) depoNotuGoster(METINLER.depo.yok);
}

// ---------- Yazılan metinden ilk emojiyi ayıkla ----------
const EMOJI_DESENI = /\p{Extended_Pictographic}(?:️|\p{Emoji_Modifier})?(?:‍\p{Extended_Pictographic}(?:️|\p{Emoji_Modifier})?)*/u;

function emojiAyikla(metin) {
  const eslesme = metin.match(EMOJI_DESENI);
  return eslesme ? eslesme[0] : VARSAYILAN_EMOJI;
}

function hazirVarMi(hazir) {
  return veri.kutular.some(function (k) { return k.id === hazir.id; });
}

// ---------- Kutuları ekrana çiz ----------
function kutulariCiz(odaklanacakId, bilgi) {
  liste.replaceChildren();
  liste.hidden = veri.kutular.length === 0;
  bosKart.hidden = veri.kutular.length !== 0;
  const bugunStr = yerelGun(new Date());
  hazirlariGetirKucuk.hidden = veri.kutular.length === 0 || hazirKutular.every(hazirVarMi);

  veri.kutular.forEach(function (kutu) {
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

    const seri = gunSerisi(veri.kayitlar, kutu.id, bugunStr);
    if (seri.mevcut >= 1) {
      const seriYazi = document.createElement("span");
      seriYazi.className = "kutu-seri";
      const okuyucu = document.createElement("span");
      okuyucu.className = "sadece-okuyucu";
      okuyucu.textContent = "Gün serisi: ";
      seriYazi.append(okuyucu, document.createTextNode(gunYazisi(seri.mevcut)));
      dugme.append(seriYazi);
    }

    dugme.addEventListener("click", function () {
      akisiAc(kutu);
    });

    satir.append(dugme);
    liste.append(satir);
  });

  secimBilgi.textContent = bilgi || (veri.kutular.length === 0 ? "" : "Bir kutu seç ya da kendi kutunu aç.");

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
  if (veri.kutular.length >= EN_FAZLA_KUTU) {
    hataYazisi.textContent = "En fazla " + EN_FAZLA_KUTU + " kutun olabilir. Önce birini ayırmak gerekecek.";
    return;
  }

  const yeni = {
    id: "kendi-" + Date.now(),
    emoji: emojiAyikla(emojiKutusu.value),
    ad: ad,
    hedef: hedefKutusu.value.trim()
  };

  veri.kutular.push(yeni);
  kaydet();
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

// ---------- Kayıt yardımcıları ----------
function yeniKayitId() {
  return "k-" + Date.now() + "-" + Math.floor(Math.random() * 1e6);
}

// Akıştaki kaydı günceller; henüz yoksa oluşturur. Bir akışta hep aynı kayıt kullanılır.
// adim / adimTuru verilmezse mevcut değerler (yeni kayıtta boş) korunur.
function kaydiYaz(sonuc, adim, adimTuru) {
  let kayit = veri.kayitlar.find(function (r) { return r.id === aktifKayitId; });

  if (!kayit) {
    kayit = {
      id: yeniKayitId(),
      kutuId: aktifKutu.id,
      zaman: new Date().toISOString(),
      an: sonAn,
      adim: "",
      adimTuru: "",
      sonuc: sonuc
    };
    veri.kayitlar.push(kayit);
    aktifKayitId = kayit.id;
    // En fazla EN_FAZLA_KAYIT kayıt: aşılırsa en eskiler silinir
    if (veri.kayitlar.length > EN_FAZLA_KAYIT) {
      veri.kayitlar.splice(0, veri.kayitlar.length - EN_FAZLA_KAYIT);
    }
  }

  kayit.sonuc = sonuc;
  kayit.sonucZamani = new Date().toISOString(); // sonuç belirlenince / değişince
  if (adim !== undefined) {
    kayit.adim = adim;
    kayit.adimTuru = adimTuru;
  }
  kaydet();
  akisSeriGuncelle();
}

// Bugünün özeti ve gün serisi, her seferinde kayıtlardan yeniden hesaplanır
function bugunOzeti() {
  return gunOzeti(veri.kayitlar, aktifKutu.id, yerelGun(new Date()));
}

function bugunGunSerisi() {
  return gunSerisi(veri.kayitlar, aktifKutu.id, yerelGun(new Date()));
}

function akisSeriGuncelle() {
  if (!aktifKutu) {
    akisSeri.textContent = "";
    akisHak.textContent = "";
    return;
  }
  const ozet = bugunOzeti();
  akisSeri.textContent = seriBaslikMetni(ozet, bugunGunSerisi());
  akisHak.textContent = hakMetni(ozet);
}

// ---------- Akışı aç / kapat ----------
function akisiAc(kutu) {
  onayKapat(false);
  aktifKutu = kutu;
  aktifKayitId = null;
  sonAn = "";
  akisSeriGuncelle();
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
  onayKapat(false);
  const donulecekId = aktifKutu ? aktifKutu.id : null;
  aktifKutu = null;
  aktifKayitId = null;
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
  sonAn = yazi;
  sonOneriler = onerileriSec(aktifKutu, yazi);
  oneriListesi.replaceChildren();

  sonOneriler.forEach(function (metin) {
    const satir = document.createElement("li");
    const dugme = document.createElement("button");
    dugme.type = "button";
    dugme.className = "oneri";
    dugme.textContent = metin;
    dugme.addEventListener("click", function () {
      kaydiYaz("dogru", metin, "oneri");
      sonucuGoster("dogru", false);
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
  kaydiYaz("dogru", kendiDogruKutusu.value.trim(), "kendi");
  sonucuGoster("dogru", true);
});

// ---------- "Bu sefer olmadı" (öneri ekranından) ----------
olmadiDugme.addEventListener("click", function () {
  kaydiYaz("olmadi");
  sonucuGoster("olmadi");
});

// ---------- Sonuç ----------
function rastgele(liste_) {
  return liste_[Math.floor(Math.random() * liste_.length)];
}

// tur: "dogru" | "olmadi". Kayıt bu fonksiyondan ÖNCE yazılmış olmalı (seri ona göre hesaplanır).
function sonucuGoster(tur, kendiMi) {
  sayaciDurdur();
  const ozet = bugunOzeti();
  let cumle;
  let seriCumlesi = "";

  if (tur === "dogru") {
    cumle = kendiMi ? METINLER.kendiDogru : rastgele(METINLER.dogruCumleleri);
    seriCumlesi = dogruSonucMetni(ozet);
  } else {
    // "Olmadı" sonucunda tek mesaj gösterilir (lavanta kutuda); altında ek satır yok
    cumle = olmadiSonucMetni(ozet, bugunGunSerisi());
  }

  sonucYazi.textContent = cumle;
  sonucYazi.classList.toggle("olmadi", tur === "olmadi");
  sonucSeri.textContent = seriCumlesi;
  uyduBlok.hidden = tur !== "dogru";
  durumBildirim.textContent = seriCumlesi === "" ? cumle : cumle + " " + seriCumlesi;
  bolumGoster("sonuc");
  yeniAnDugme.focus();
  if (tur === "dogru") kutla();
}

// Doğru adımın hedefe uyup uymadığı (isteğe bağlı soru)
uyduEvet.addEventListener("click", function () {
  uyduBlok.hidden = true;
  yeniAnDugme.focus();
});

uyduOlmadi.addEventListener("click", function () {
  kaydiYaz("olmadi");
  sonucuGoster("olmadi");
});

yeniAnDugme.addEventListener("click", function () {
  aktifKayitId = null;
  sonAn = "";
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
  kaydiYaz("dusunuyor");
  bekleYazi.textContent = METINLER.beklemeMesaji;
  durumBildirim.textContent = METINLER.beklemeMesaji;
  bekleSonrasi.hidden = true;
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
  bekleSonrasi.hidden = false;
  secenekDugme.hidden = false;
  secenekDugme.focus();
}

// Süre bitince: aynı kayıt güncellenir, ikinci kayıt oluşmaz
bekleDogru.addEventListener("click", function () {
  kaydiYaz("dogru");
  sonucuGoster("dogru", false);
});

bekleOlmadi.addEventListener("click", function () {
  kaydiYaz("olmadi");
  sonucuGoster("olmadi");
});

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

// =====================================================================
// Silme: sayfa içi onay alanları (window.confirm kullanılmaz)
// =====================================================================
function onayAc(anahtar, metin, tetikleyen, odakDonsun, onayFonksiyonu) {
  onayKapat(false);
  const o = onayAlanlari[anahtar];
  o.metin.textContent = metin;
  o.alan.hidden = false;
  aktifOnay = { anahtar: anahtar, tetikleyen: tetikleyen, odakDonsun: odakDonsun, onay: onayFonksiyonu };
  o.vazgec.focus(); // odak güvenli seçeneğe
}

function onayKapat(odakDon) {
  if (!aktifOnay) return;
  const gecici = aktifOnay;
  aktifOnay = null;
  onayAlanlari[gecici.anahtar].alan.hidden = true;
  if (odakDon && gecici.tetikleyen.offsetParent !== null) gecici.tetikleyen.focus();
}

Object.keys(onayAlanlari).forEach(function (anahtar) {
  onayAlanlari[anahtar].vazgec.addEventListener("click", function () {
    onayKapat(true);
  });
  onayAlanlari[anahtar].evet.addEventListener("click", function () {
    if (!aktifOnay) return;
    const onay = aktifOnay.onay;
    onayKapat(aktifOnay.odakDonsun);
    onay();
  });
});

document.addEventListener("keydown", function (olay) {
  if (olay.key === "Escape" && aktifOnay) {
    olay.preventDefault();
    onayKapat(true);
  }
});

function ilkKutuyaOdaklan() {
  const hedef = liste.querySelector("button") || (bosKart.hidden ? acDugme : hazirlariGetir);
  hedef.focus();
}

function kutuSilmeOnayiIste() {
  const ad = aktifKutu.ad;
  const metin = "‘" + ad + "’ kutusu ve bu kutudaki tüm seçimlerin silinecek. Bu işlem geri alınamaz. Emin misin?";
  onayAc("kutu", metin, kutuSil, false, function () {
    kutuyuSil();
  });
}

function kutuyuSil() {
  sayaciDurdur();
  const id = aktifKutu.id;
  const ad = aktifKutu.ad;
  veri.kutular = veri.kutular.filter(function (k) { return k.id !== id; });
  veri.kayitlar = veri.kayitlar.filter(function (r) { return r.kutuId !== id; });
  kaydet();

  aktifKutu = null;
  aktifKayitId = null;
  akisEkrani.hidden = true;
  kutuEkrani.hidden = false;
  kutulariCiz(null, "‘" + ad + "’ kutusu silindi.");
  ilkKutuyaOdaklan();
}

function tumVeriyiSil() {
  sayaciDurdur();
  if (depoSil()) {
    depoNotu.hidden = true;
    depoNotu.textContent = "";
  } else {
    depoNotuGoster(METINLER.depo.yok);
  }
  veri = varsayilanVeri();
  aktifKutu = null;
  aktifKayitId = null;
  akisEkrani.hidden = true;
  kutuEkrani.hidden = false;
  kutulariCiz(null, "Tüm verilerin silindi. Temiz bir başlangıç yaptım.");
}

kutuSil.addEventListener("click", kutuSilmeOnayiIste);

tumSil.addEventListener("click", function () {
  onayAc(
    "tum",
    "Bu cihazdaki tüm kutuların, seçimlerin ve serilerin silinecek. Bu işlem geri alınamaz. Emin misin?",
    tumSil,
    true,
    tumVeriyiSil
  );
});

// Sadece eksik hazır kutuları ekler, kayıtlara dokunmaz (iki düğme de bunu kullanır)
function hazirKutulariGeriGetir() {
  hazirKutular.forEach(function (hazir) {
    if (!hazirVarMi(hazir)) veri.kutular.push(Object.assign({}, hazir));
  });
  kaydet();
  kutulariCiz(null, "Hazır kutular geri geldi.");
  ilkKutuyaOdaklan();
}

hazirlariGetir.addEventListener("click", hazirKutulariGeriGetir);
hazirlariGetirKucuk.addEventListener("click", hazirKutulariGeriGetir);

// ---------- Başlangıç ----------
if (ilkOkuma.durum === "bozuk") depoNotuGoster(METINLER.depo.bozuk);
if (ilkOkuma.durum === "yok") depoNotuGoster(METINLER.depo.yok);
kutulariCiz();
