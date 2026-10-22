# Poetry App

Ek simple, khoobsurat poetry app jo Mirza Ghalib ke ash'aar ke saath duniya bhar ke shayaron (Rumi, Khayyam, Tagore, Iqbal, Kabir, Shakespeare, Blake, Keats, Dickinson, Frost, Basho waghaira) ki shayari dikhata hai. Upar ke filter se "Sab", "Ghalib" ya "Duniya bhar" chun sakte hain. "Agla Verse" button (ya Space key) dabane par ek naya random verse aata hai, aur "Copy" button se verse clipboard par copy ho jata hai.

## Technologies

- Plain HTML, CSS aur vanilla JavaScript — koi framework ya build step nahi
- Google Fonts (Cormorant Garamond, Inter)
- Netlify par static hosting

## Locally chalana

Kisi bhi static server se chalaayein, jaise:

```bash
npx serve .
```

Ya seedha `index.html` browser mein khol dein.

## Naye verses jodna

`app.js` ke `verses` array mein `{ text, poet, from }` object add karein.
