// Har verse: text, poet, aur kahan se (desh / zabaan)
const verses = [
    // Mirza Ghalib
    { text: "Har ek baat pe kehte ho tum ki tu kya hai, tumhi kaho ki yeh andaaz-e-guftagu kya hai.", poet: "Mirza Ghalib", from: "Hindustan" },
    { text: "Hazaaron khwahishen aisi ki har khwahish pe dam nikle, bahut nikle mere armaan lekin phir bhi kam nikle.", poet: "Mirza Ghalib", from: "Hindustan" },
    { text: "Dil-e-nadaan tujhe hua kya hai, aakhir is dard ki dawa kya hai.", poet: "Mirza Ghalib", from: "Hindustan" },
    { text: "Humne maana ki tagaaful na karoge lekin, khaak ho jayenge hum tumko khabar hone tak.", poet: "Mirza Ghalib", from: "Hindustan" },
    { text: "Ishq ne Ghalib nikamma kar diya, varna hum bhi aadmi the kaam ke.", poet: "Mirza Ghalib", from: "Hindustan" },
    { text: "Hum ko maaloom hai jannat ki haqeeqat lekin, dil ke khush rakhne ko Ghalib ye khayal achha hai.", poet: "Mirza Ghalib", from: "Hindustan" },
    { text: "Rekhte ke tumhi ustaad nahi ho Ghalib, kehte hain agle zamaane mein koi Meer bhi tha.", poet: "Mirza Ghalib", from: "Hindustan" },
    { text: "Na tha kuch to Khuda tha, kuch na hota to Khuda hota, duboya mujh ko hone ne, na hota main to kya hota.", poet: "Mirza Ghalib", from: "Hindustan" },
    { text: "Ye na thi hamari qismat ki visaal-e-yaar hota, agar aur jeete rehte yahi intezaar hota.", poet: "Mirza Ghalib", from: "Hindustan" },
    { text: "Unke dekhe se jo aa jaati hai munh par raunaq, woh samajhte hain ki beemar ka haal achha hai.", poet: "Mirza Ghalib", from: "Hindustan" },

    // Duniya bhar ke shayar
    { text: "Suno is baansuri ko, kaise shikayat karti hai, judaaiyon ki kahani sunati hai.", poet: "Rumi", from: "Faras (Farsi se tarjuma)" },
    { text: "The Moving Finger writes; and, having writ, moves on: nor all thy Piety nor Wit shall lure it back to cancel half a Line, nor all thy Tears wash out a Word of it.", poet: "Omar Khayyam", from: "Faras (tarjuma: FitzGerald)" },
    { text: "If you shed tears when you miss the sun, you also miss the stars.", poet: "Rabindranath Tagore", from: "Bengal" },
    { text: "Sitaron se aage jahan aur bhi hain, abhi ishq ke imtihan aur bhi hain.", poet: "Allama Iqbal", from: "Hindustan" },
    { text: "Bura jo dekhan main chala, bura na milya koye, jo dil khoja aapna, mujhse bura na koye.", poet: "Kabir", from: "Hindustan" },
    { text: "Shall I compare thee to a summer's day? Thou art more lovely and more temperate.", poet: "William Shakespeare", from: "England" },
    { text: "To see a World in a Grain of Sand, and a Heaven in a Wild Flower, hold Infinity in the palm of your hand, and Eternity in an hour.", poet: "William Blake", from: "England" },
    { text: "A thing of beauty is a joy for ever: its loveliness increases; it will never pass into nothingness.", poet: "John Keats", from: "England" },
    { text: "'Tis better to have loved and lost than never to have loved at all.", poet: "Alfred Tennyson", from: "England" },
    { text: "\"Hope\" is the thing with feathers that perches in the soul, and sings the tune without the words, and never stops at all.", poet: "Emily Dickinson", from: "America" },
    { text: "The woods are lovely, dark and deep, but I have promises to keep, and miles to go before I sleep.", poet: "Robert Frost", from: "America" },
    { text: "Purana talaab — ek mendak koodta hai, paani ki awaaz.", poet: "Matsuo Basho", from: "Japan (haiku ka tarjuma)" }
];

let currentIndex = 0;
let currentFilter = "all";

// Filter ke hisaab se verses ke index
function pool() {
    return verses
        .map((v, i) => i)
        .filter((i) => {
            if (currentFilter === "ghalib") return verses[i].poet === "Mirza Ghalib";
            if (currentFilter === "world") return verses[i].poet !== "Mirza Ghalib";
            return true;
        });
}

function newVerse() {
    // Hamesha pichhle verse se alag verse chuno
    const choices = pool();
    let randomIndex;
    do {
        randomIndex = choices[Math.floor(Math.random() * choices.length)];
    } while (randomIndex === currentIndex && choices.length > 1);
    currentIndex = randomIndex;

    const verseEl = document.getElementById("verse");
    verseEl.classList.add("fade");
    setTimeout(() => {
        const v = verses[currentIndex];
        verseEl.innerText = v.text;
        document.getElementById("poet").innerText = "— " + v.poet + " · " + v.from;
        verseEl.classList.remove("fade");
        updateCounter();
    }, 250);
}

function setFilter(filter) {
    currentFilter = filter;
    document.querySelectorAll(".filters button").forEach((btn) => {
        btn.setAttribute("aria-pressed", btn.dataset.filter === filter);
    });
    newVerse();
}

function copyVerse() {
    const btn = document.getElementById("copy-btn");
    const v = verses[currentIndex];
    const text = v.text + " — " + v.poet;
    navigator.clipboard.writeText(text).then(() => {
        btn.innerText = "Copied!";
        setTimeout(() => (btn.innerText = "Copy"), 1500);
    });
}

function updateCounter() {
    const choices = pool();
    document.getElementById("counter").innerText =
        (choices.indexOf(currentIndex) + 1) + " / " + choices.length;
}

// Space dabane par bhi naya verse
document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && e.target === document.body) {
        e.preventDefault();
        newVerse();
    }
});

updateCounter();
