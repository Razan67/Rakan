// ============================================================
//  ✏️  EDIT EVERYTHING HERE — names, photos, captions, texts.
//  You should never need to touch the other files for content.
// ============================================================

export const NAME = "Rakoonnti"; // shown in the big titles

// ---------- Photos (files live in /public/images) ----------
// To swap a photo: replace the file in public/images with the same name,
// OR change the "image" path. Add/remove items freely.
export const memories = [
  { image: "/images/photo1.jpg", caption: "One of my favorite memories ❤️", alt: "Rakan and me on a balcony at night" },
  { image: "/images/photo2.jpg", caption: "Us.", alt: "Rakan and me sitting together" },
  { image: "/images/photo3.jpg", caption: "A little me, for you.", alt: "Me in front of a mirror" },
  { image: "/images/photo4.jpg", caption: "This smile.", alt: "Rakan and me taking a selfie" },
  { image: "/images/photo5.jpg", caption: "My favorite person.", alt: "Rakan and me taking a selfie" },
  { image: "/images/photo6.jpg", caption: "Rakoonti, always.", alt: "Rakan and me taking a selfie" },
  { image: "/images/photo7.jpg", caption: "Just us, being us.", alt: "Rakan and me sitting together" },
  { image: "/images/photo8.jpg", caption: "Another one I love ❤️", alt: "Rakan and me sitting together" },
];

// ---------- Where it all started ----------
export const STORY = {
  logo: "/images/safwa-logo.jpg",          // the sign (cropped)
  place: "/images/safwa-place.jpg",        // the photo of the place
  label: "Where it all started ❤️",
  title: "And then... there was Safwa.",
  lines: [
    "This is where our story quietly started.",
    "The place where our paths crossed... where our first eye contact happened... and where something neither of us knew would become so special, began.",
  ],
  quote: "Our love story started with a look. ❤️",
};

// ---------- Arabic birthday message (keep line breaks) ----------
export const arabicMessage = [
  "كل عام وانت بخييير ركوووونتي حبيبي ❤️",
  "بحبك كتيييير يا عمررري،",
  "عقبال المليون سنة يا رووووح قلبي انت ❤️",
  "الله يخليلي اياك،",
  "وان شاء الله نكون كل سنة مع بعض ونحتفل بهاد اليوم.",
  "أنا كتيييير محظوظة فيك حبيبي ❤️",
];

// ---------- English love message (each item = one paragraph) ----------
export const englishMessage = [
  "Happy birthday to the person who somehow became one of the most beautiful parts of my life.",
  "I don't know what the future has written for us, but I know I want to keep making memories with you, laughing with you, annoying you a little, and celebrating all the small moments together.",
  "I feel incredibly lucky to have met you.",
  "If I could choose one thing for your birthday, it would be that you always know how loved and appreciated you are.",
  "Here's to you, to us, and to all the birthdays we still have to celebrate together.",
  "Happy birthday, my love. ❤️",
];

// ---------- Timeline (no dates invented — add your own in "date") ----------
export const timeline = [
  { date: "", title: "The Beginning", text: "Where our eyes first met." },
  { date: "", title: "The First Memories", text: "Where everything started becoming a little more special." },
  { date: "", title: "Us", text: "All the little moments that became my favorite memories." },
  { date: "Today", title: "Your Birthday", text: "Your birthday — and another chapter of us." },
];

// ---------- The "Click me" surprise ----------
export const surprise = {
  title: "One last thing... ❤️",
  button: "Click me",
  lines: [
    "Out of all the people in the world, somehow I got lucky enough to meet you.",
    "And honestly...",
    "I'd choose that first look all over again. ❤️",
  ],
};

// ---------- Final screen ----------
export const finale = {
  title: `Happy Birthday, ${NAME} ❤️`,
  text: "Here's to another year of you, another year of us, and hopefully many, many more birthdays together.",
  love: "I love you. ❤️",
  footer: "Made with love, just for you.",
};

// ---------- Music (YouTube video IDs — the part after v= or youtu.be/) ----------
export const songs = [
  { id: "HFIl70Vg8zw", title: "Our first song", link: "https://youtu.be/HFIl70Vg8zw" },
  { id: "Rtd8yHrlgXY", title: "The song I promised you", link: "https://youtu.be/Rtd8yHrlgXY" },
];
