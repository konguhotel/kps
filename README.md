# Kongu Parotta Stall - Official Restaurant Website

An authentic, responsive, high-performance website created for **Kongu Parotta Stall** (Multi-Cuisine & Authentic Kongu Style Restaurant), with a special focus on showcasing the complete 160+ item menu with instant search, interactive category filtering, dish details, plate builder, and WhatsApp ordering.

---

## 🌟 Key Features

### 1. Complete Transcribed Menu (160+ Dishes)
The website contains the full menu directly transcribed from the official 4-page menu cards:
- **Master Specials**: *Vazhai Ilai Parotta, Chicken Kari-Dosa, Mutton Kari-Dosa, Nool Parotta, Chicken Murthapa*
- **Parotta & Tandoor**: *Bun Parotta, Veechu, Mutta Veechu, Kothu Parottas, Chilli Parotta, Naan, Roti, Kulcha*
- **Dosa & Roasts**: *Ghee Podi Roast, Kall Dosa, Masal Roast, Onion Roast, Uthappam, Podi Onion Roast*
- **Authentic Starters**: *Naatukozhi Pallipalayam, Chinthamani, Nallampatty, Mutton Chukka, Mutton Kudal Fry, Chicken 65, Dragon Chicken, Quail (Kaadai), Fish 65, Paarai Meen Fry, Prawns, Paneer & Mushroom 65*
- **Kongu Gravies & Curries**: *Country Chicken Gravies, Mutton Masala, Chicken Uppukari, Chettinad, Butter Chicken, Crab (Nandu) Masala, Prawn Pepper Gravy, Paneer Butter Masala*
- **Biriyani & Meals**: *Naatukozhi Varuval Biriyani, Chicken/Mutton Biriyani, Unlimited Veg & Non-Veg Meals*
- **Indo-Chinese**: *Chinese & Schezwan Fried Rice and Noodles (Chicken, Mutton, Egg, Veg, Paneer, Mushroom)*
- **South Indian Tiffin**: *Idly, Poori, Pongal, Tomato Rice, Vada*

### 2. Interactive Menu Navigation & Live Search
- **Instant Search**: Type any dish name (e.g. `Kari`, `Pallipalayam`, `Biriyani`, `Paneer`, `Bun Parotta`) to instantly filter items with matching terms highlighted in real-time.
- **Dietary Filter Pills**: Toggle between *All*, *🟢 Pure Veg*, *🔴 Non-Veg*, *🥚 Egg Items*, *⭐ Kongu Specials*, and *🌶️ Spicy Favorites*.
- **Horizontal Category Tabs**: Quick-jump to any category with live item count badges.

### 3. "My Plate" Order Builder & WhatsApp Order Generator
- Tap **+ Add to Plate** on any dish to increment quantities.
- Open the **My Plate** slide-over drawer to inspect your items, toggle between **Takeaway** (🥡) or **Dine-in** (🍽️), and add special notes (e.g. *"Extra salna please", "Less spicy"*).
- Click **Send Order on WhatsApp** to instantly open WhatsApp with an itemized, formatted order message.
- Click **Copy Order Summary** to copy the order to your clipboard.

### 4. Direct Google Maps & Google Review Integrations
- **Google Maps**: Direct link to the official pin: [https://maps.app.goo.gl/HZJi5ZPTr33wXYJy5](https://maps.app.goo.gl/HZJi5ZPTr33wXYJy5) + interactive map embed.
- **Google Review**: Direct customer review action: [https://g.page/r/CYg3VdgyBTNFEAE/review](https://g.page/r/CYg3VdgyBTNFEAE/review).

---

## 📁 File Structure

```
c:\Users\dinak\kon--gu\
├── index.html            # Main website markup with SEO & Schema.org metadata
├── css\
│   └── style.css         # Responsive modern CSS (Kongu color theme, mobile bottom nav)
├── js\
│   ├── menu-data.js      # Complete structured data for all 161 menu items
│   └── app.js            # Menu search, category filter, plate tray, WhatsApp generator
└── README.md             # Project documentation
```

---

## 🚀 How to Run or Deploy

### Option 1: Open Directly in Any Web Browser
Double-click `index.html` or open it with Chrome, Edge, Safari, or Firefox.

### Option 2: Run with Local HTTP Server
```powershell
# Using Node:
npx serve .
# Or Python:
python -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.

### Option 3: Free Hosting on GitHub Pages / Vercel / Netlify
Because this project is built with clean, standards-compliant static HTML5, CSS3, and JavaScript, you can drag and drop this folder onto [Netlify](https://netlify.com) or push to GitHub Pages for instant free deployment.

