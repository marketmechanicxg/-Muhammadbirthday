/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "1107";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Muhammad";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Penjaga Hati",             // ← GANTI JUDUL LAGU
    artist: " ",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "one smile from you and my whole day just gets so much better" },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "you’re literally the reason my heart feels this full" },
  { file: "img3.jpeg", caption: "every single second with you is hands down my sweetheart" },
  { file: "img4.jpeg", caption: "some people search their whole life for happiness, i just found it in you" },
  { file: "img5.jpeg", caption: "you turned my whole ordinary life into very beautiful and liveable" },
  { file: "img6.jpeg", caption: "still my favourite person, like, highlights, always and forever" },
  { file: "img7.jpeg", caption: "my heart genuinely feels safest whenever it’s with you" },
  { file: "img8.jpeg", caption: "if i could relive literally any moment, I’d pick us every single time " },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
  "okay so here i’m trying new ways, never i have done this to anyone except you. this is mybe one of the ways yang i want you to be ‘dirayakan’. if before this i didn’t do it, it’s just because of the perasaan ragu ragu that i have. but now, perasaan ragu ragu tu hilang because you’re literally my favourite person ever. ",
  "today’s little your day. i hope you don’t to feels sad, disappointed, serabut. I want you to feels happy, amazing, full of good little things. saya harap hari ni hari awak yang paling bahagia dari sebelum sebelumnya. saya harap juga hari ni hari yang awak penuh dengan senyum je. you deserve every single but of it.",
  "muhammad adam irfan, orang yang saya dah kenal setahun lebih nak masuk dua tahun. dah banyak bulan kita declare and sayang satu sama lain. walaupun kita ada banyak rintangan dan dugaan, saya tak pernah menyesal sekali pun kenal awak. ",
  "saya nak awak tau saya ada kat sini untuk awak sampai bila bila. saya janji saya jaga awak, sayang awak dengan semua jiwa raga saya, tu janji saya pada awak. saya bersyukur dapat awak satu dalam sejuta.",
  "thankyou sebab jadi orang yang paling baik terhadap saya, jadi orang yang saya selalu cari even happy or sedih, jadi orang yang selalu dalam kepala saya tak kira masa dan dimana. wujudnya awak kat atas muka bumi ni makes hari hari kebiasaan saya jadi luar biasa. ",
  "so, saya harap hari ni awak dikelilingi orang yang sayang awak macam mana awak sayang saya and macam mana saya sayang awak. semoga hari ni semua orang layan muhammad saya dengan baik and ikhlas. happy birthday again b, my favourite person ever. ",

];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "Where It All Started",
    text:  "even if me met online, that night, everything just clicked with each other. kita share stories, kita gelak sama sama, kita tengok movie and drama sama sama. It’s all just makes sense why we’re clicked.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "the calm days",
    text:  "berbulan bulan kita buat our routine, call, text, share our daily life without miss one day pun. It’s makes us calm even we’re in a distance.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "the quiet days",
    text:  "that few days, we were different. It’s not like our routine, then it’s feels like we have a very big distance between us. but we manage to have deep talk with each other. finding the way out of that quiet days.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "through the storms",
    text:  "we had our storms, two of it right ? we fight, i fight, but you always came and apologised. I’m very bersyukur you did that because it’s makes me feel that you wants me gila gila. then, we always find our own way to settle things down.",
  },
  {
    depth: "24m",
    year:  "Chapter Five",
    title: " finding our light",
    text:  "now, we’re getting better for each other, loving each other, loyal to each other. you’re genuinely the biggest part of my whole journey, yang selalu buat everything feels a little lighter even things get heavy.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "may this remaining months give you all the happiness that you wants as you always makes other people happy with you kindness." },
  { icon: "shell",   text: "hoping you stays bright and funny, teruskan perangai loya buruk awak tu okay ? i love it 😍" },
  { icon: "star",    text: "whatever rintangan that comes to you, i hope you always can find you way back to the people yang sayang awak. please find me if you ever have any rintangan okay ?" },
  { icon: "compass", text: "may every of your wishes come true slowly in time, especially when you need it the most." },
  { icon: "anchor",  text: "may your wishes that we’ll get married in two years come true as i hoping to be your lovely wife and your kids mother in our future." },
  { icon: "heart",   text: "⁠happy birthday my usyuk asyam, another birthday another memories that will be makes right ?" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "60163192904";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "Hey, I just opened the bottle. Thank you for making my day! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);
