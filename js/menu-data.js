// Kongu Parotta Stall - Complete Menu Dataset
// Transcribed from Official Menu Cards (Dosa & Parotta, Main Course, Starters, Gravy)

const MENU_CATEGORIES = [
  { id: 'all', name: 'All Items', icon: '🍽️' },
  { id: 'master-special', name: 'Master Specials', icon: '👑', badge: 'Must Try' },
  { id: 'parotta-breads', name: 'Parotta & Breads', icon: '🫓' },
  { id: 'dosa-roast', name: 'Dosa & Roast', icon: '🥞' },
  { id: 'starters', name: 'Starters & Fries', icon: '🍗' },
  { id: 'biriyani-meals', name: 'Biriyani & Meals', icon: '🍚' },
  { id: 'gravies', name: 'Gravies & Curries', icon: '🍲' },
  { id: 'chinese-schezwan', name: 'Fried Rice & Noodles', icon: '🥢' },
  { id: 'south-indian', name: 'Tiffin & Breakfast', icon: '☕' }
];

const MENU_ITEMS = [
  // ==========================================
  // PAGE 1: MASTER SPECIALS & PAROTTA & DOSA
  // ==========================================
  {
    id: 'ms-vazhai-ilai-parotta',
    name: 'Vazhai Ilai Parotta',
    category: 'master-special',
    subCategory: 'Master Special',
    type: 'non-veg',
    isKonguSpecial: true,
    isMasterSpecial: true,
    spicyLevel: 3,
    description: 'Flaky layered parottas soaked in rich, aromatic chicken or mutton salna, packed inside a tender banana leaf and slow tawa-roasted to smoky perfection.',
    tags: ['Kongu Signature', 'House Favorite', 'Banana Leaf']
  },
  {
    id: 'ms-chicken-kari-dosa',
    name: 'Chicken Kari-Dosa',
    category: 'master-special',
    subCategory: 'Master Special',
    type: 'non-veg',
    isKonguSpecial: true,
    isMasterSpecial: true,
    spicyLevel: 2,
    description: 'Thick, fluffy sponge dosa topped with beaten egg and a generous heap of rich, slow-simmered spicy minced chicken masala.',
    tags: ['Kongu Special', 'Bestseller', 'Egg & Chicken']
  },
  {
    id: 'ms-mutton-kari-dosa',
    name: 'Mutton Kari-Dosa',
    category: 'master-special',
    subCategory: 'Master Special',
    type: 'non-veg',
    isKonguSpecial: true,
    isMasterSpecial: true,
    spicyLevel: 3,
    description: 'Iconic Madurai/Kongu delicacy: Thick kal dosa layered with spicy egg and tender, juicy minced mutton keema cooked with freshly crushed pepper.',
    tags: ['Kongu Special', 'Chef Recommended', 'Mutton Keema']
  },
  {
    id: 'ms-nool-parotta',
    name: 'Nool Parotta (Master Special)',
    category: 'master-special',
    subCategory: 'Master Special',
    type: 'veg',
    isKonguSpecial: true,
    isMasterSpecial: true,
    spicyLevel: 0,
    description: 'Delicate, stringy thread-spun parotta that unravels effortlessly in your fingers, crafted with master hand technique and served with hot salna.',
    tags: ['Artisan Bread', 'Crispy & Flaky']
  },
  {
    id: 'ms-chicken-murthapa',
    name: 'Chicken Murthapa',
    category: 'master-special',
    subCategory: 'Master Special',
    type: 'non-veg',
    isKonguSpecial: true,
    isMasterSpecial: true,
    spicyLevel: 2,
    description: 'Crispy folded pan-fried layered flatbread stuffed with spiced minced chicken, onion, egg, and fresh herbs.',
    tags: ['Stuffed Special', 'Crunchy Crust']
  },

  // --- PAROTTA ITEMS ---
  {
    id: 'parotta-plain',
    name: 'Parotta',
    category: 'parotta-breads',
    subCategory: 'Parotta Items',
    type: 'veg',
    isKonguSpecial: true,
    spicyLevel: 0,
    description: 'Classic Tamil Nadu layered golden-brown parotta, fluffy, crisp on the edges, hand-clapped hot from the griddle.',
    tags: ['All-Time Favorite', 'Stall Signature']
  },
  {
    id: 'parotta-bun',
    name: 'Bun Parotta',
    category: 'parotta-breads',
    subCategory: 'Parotta Items',
    type: 'veg',
    isKonguSpecial: true,
    spicyLevel: 0,
    description: 'Plump, golden, bun-shaped layered parotta with a crunchy crust and pillow-soft, airy interior.',
    tags: ['Kongu Special', 'Fluffy & Crispy']
  },
  {
    id: 'parotta-veechu',
    name: 'Veechu Parotta',
    category: 'parotta-breads',
    subCategory: 'Parotta Items',
    type: 'veg',
    spicyLevel: 0,
    description: 'Thin, wide, master-spun square parotta tossed high in the air and tawa-roasted till light and crisp.',
    tags: ['Classic Tawa']
  },
  {
    id: 'parotta-mutta-veechu',
    name: 'Mutta Veechu Parotta',
    category: 'parotta-breads',
    subCategory: 'Parotta Items',
    type: 'egg',
    spicyLevel: 1,
    description: 'Thinly flipped veechu parotta generously stuffed with spiced whisked egg, onion, and black pepper.',
    tags: ['Egg Stuffed']
  },
  {
    id: 'parotta-kothu',
    name: 'Kothu Parotta (Egg)',
    category: 'parotta-breads',
    subCategory: 'Parotta Items',
    type: 'egg',
    spicyLevel: 2,
    description: 'Shredded parotta minced vigorously on a sizzling iron griddle with farm eggs, onions, green chillies, and aromatic salna.',
    tags: ['Street Favorite', 'Tawa Minced']
  },
  {
    id: 'parotta-veg-kothu',
    name: 'Veg Kothu Parotta',
    category: 'parotta-breads',
    subCategory: 'Parotta Items',
    type: 'veg',
    spicyLevel: 2,
    description: 'Finely chopped parotta tossed with fresh garden vegetables, onions, curry leaves, and spicy vegetable salna.',
    tags: ['Pure Veg']
  },
  {
    id: 'parotta-chicken-kothu',
    name: 'Chicken Kothu Parotta',
    category: 'parotta-breads',
    subCategory: 'Parotta Items',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 2,
    description: 'Sizzling griddle-minced parotta cooked with tender shredded chicken pieces, scrambled eggs, and spiced chicken gravy.',
    tags: ['Crowd Favorite', 'Juicy Chicken']
  },
  {
    id: 'parotta-mutton-kothu',
    name: 'Mutton Kothu Parotta',
    category: 'parotta-breads',
    subCategory: 'Parotta Items',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Rich and hearty kothu parotta loaded with soft, peppery mutton pieces, egg, and spiced mutton gravy.',
    tags: ['Chef Signature', 'Spicy Mutton']
  },
  {
    id: 'parotta-nool-reg',
    name: 'Nool Parotta',
    category: 'parotta-breads',
    subCategory: 'Parotta Items',
    type: 'veg',
    spicyLevel: 0,
    description: 'Artfully spun delicate thread strands of flaky parotta served with spicy kurma and salna.',
    tags: ['Thread Parotta']
  },
  {
    id: 'parotta-chilli',
    name: 'Chilli Parotta',
    category: 'parotta-breads',
    subCategory: 'Parotta Items',
    type: 'veg',
    spicyLevel: 3,
    description: 'Crisp bite-sized parotta chunks wok-tossed with capsicum, onions, curry leaves, and a spicy tangy sauce.',
    tags: ['Indo-Kongu Fusion', 'Spicy Snack']
  },
  {
    id: 'chapathi-plain',
    name: 'Chapathi',
    category: 'parotta-breads',
    subCategory: 'Parotta Items',
    type: 'veg',
    spicyLevel: 0,
    description: 'Wholesome whole-wheat soft flatbreads prepared on hot tawa, light on the stomach.',
    tags: ['Healthy Choice']
  },
  {
    id: 'chapathi-egg',
    name: 'Egg Chapathi',
    category: 'parotta-breads',
    subCategory: 'Parotta Items',
    type: 'egg',
    spicyLevel: 1,
    description: 'Whole wheat chapathi layered with seasoned fried egg and herbs.',
    tags: ['Protein Rich']
  },

  // --- TANDOOR BREADS ---
  {
    id: 'tandoor-naan',
    name: 'Naan (Plain / Butter / Garlic)',
    category: 'parotta-breads',
    subCategory: 'Tandoor Breads',
    type: 'veg',
    spicyLevel: 0,
    description: 'Clay-oven baked leavened bread available in crisp Plain, rich Butter brushed, or fragrant roasted Garlic.',
    tags: ['Clay Tandoor', 'Customizable']
  },
  {
    id: 'tandoor-roti',
    name: 'Roti (Plain / Butter / Garlic)',
    category: 'parotta-breads',
    subCategory: 'Tandoor Breads',
    type: 'veg',
    spicyLevel: 0,
    description: 'Traditional whole-wheat tandoori roti with a light smoky crust, served plain or finished with golden butter.',
    tags: ['Tandoori Whole Wheat']
  },
  {
    id: 'tandoor-kulcha',
    name: 'Kulcha (Plain / Butter / Garlic)',
    category: 'parotta-breads',
    subCategory: 'Tandoor Breads',
    type: 'veg',
    spicyLevel: 0,
    description: 'Soft and slightly chewy leavened bread baked in the tandoor, topped with coriander and nigella seeds.',
    tags: ['Tandoori Special']
  },

  // --- DOSA & ROAST ---
  {
    id: 'dosa-plain',
    name: 'Dosa',
    category: 'dosa-roast',
    subCategory: 'Dosa',
    type: 'veg',
    spicyLevel: 0,
    description: 'Traditional fermented rice-lentil golden crepe, served with homemade chutneys and piping hot sambar.',
    tags: ['Traditional Breakfast']
  },
  {
    id: 'dosa-podi',
    name: 'Podi Dosa',
    category: 'dosa-roast',
    subCategory: 'Dosa',
    type: 'veg',
    isKonguSpecial: true,
    spicyLevel: 2,
    description: 'Crispy dosa generously dusted with spicy Kongu idli podi and drizzled with fragrant gingelly oil or ghee.',
    tags: ['Podi Special', 'Spicy']
  },
  {
    id: 'dosa-egg',
    name: 'Egg Dosa',
    category: 'dosa-roast',
    subCategory: 'Dosa',
    type: 'egg',
    spicyLevel: 1,
    description: 'Crisp dosa topped with fresh egg spread evenly across the surface, seasoned with black pepper and salt.',
    tags: ['Classic Egg']
  },
  {
    id: 'dosa-onion',
    name: 'Onion Dosa',
    category: 'dosa-roast',
    subCategory: 'Dosa',
    type: 'veg',
    spicyLevel: 1,
    description: 'Golden dosa embedded with finely chopped sautéed shallots and green chillies.',
    tags: ['Shallot Crunch']
  },
  {
    id: 'dosa-ghee',
    name: 'Ghee Dosa',
    category: 'dosa-roast',
    subCategory: 'Dosa',
    type: 'veg',
    spicyLevel: 0,
    description: 'Rich dosa roasted in pure country cow ghee, giving a heavenly buttery aroma and golden crunch.',
    tags: ['Pure Ghee', 'Aromatic']
  },
  {
    id: 'dosa-kall',
    name: 'Kall Dosa',
    category: 'dosa-roast',
    subCategory: 'Dosa',
    type: 'veg',
    isKonguSpecial: true,
    spicyLevel: 0,
    description: 'Soft, spongy home-style thick dosa made on an iron griddle, perfect for soaking up spicy non-veg gravies and salna.',
    tags: ['Soft & Spongy', 'Pairs with Salna']
  },
  {
    id: 'dosa-uthappam',
    name: 'Uthappam',
    category: 'dosa-roast',
    subCategory: 'Dosa',
    type: 'veg',
    spicyLevel: 0,
    description: 'Thick, fluffy rice pancake crisped on the exterior and tender inside, garnished with onions and curry leaves.',
    tags: ['Fluffy Tiffin']
  },
  {
    id: 'roast-plain',
    name: 'Plain Roast',
    category: 'dosa-roast',
    subCategory: 'Roast',
    type: 'veg',
    spicyLevel: 0,
    description: 'Paper-thin, extra crispy golden cone dosa roasted to a crunchy finish.',
    tags: ['Crispy Golden']
  },
  {
    id: 'roast-podi',
    name: 'Podi Roast',
    category: 'dosa-roast',
    subCategory: 'Roast',
    type: 'veg',
    spicyLevel: 2,
    description: 'Paper-crisp roast layered with spicy gun-powder (milagai podi) and aromatic melted ghee.',
    tags: ['Podi Crunch']
  },
  {
    id: 'roast-egg',
    name: 'Egg Roast',
    category: 'dosa-roast',
    subCategory: 'Roast',
    type: 'egg',
    spicyLevel: 1,
    description: 'Crisp paper roast layered with seasoned beaten egg and crushed black pepper.',
    tags: ['Egg Roast']
  },
  {
    id: 'roast-onion',
    name: 'Onion Roast',
    category: 'dosa-roast',
    subCategory: 'Roast',
    type: 'veg',
    spicyLevel: 1,
    description: 'Golden paper roast filled with caramelised crunchy onions and cumin.',
    tags: ['Caramelised Onion']
  },
  {
    id: 'roast-ghee',
    name: 'Ghee Roast',
    category: 'dosa-roast',
    subCategory: 'Roast',
    type: 'veg',
    spicyLevel: 0,
    description: 'Our signature crispy golden roast roasted generously in fragrant aromatic country ghee.',
    tags: ['Pure Ghee Bestseller']
  },
  {
    id: 'roast-ghee-podi',
    name: 'Ghee Podi Roast',
    category: 'dosa-roast',
    subCategory: 'Roast',
    type: 'veg',
    isKonguSpecial: true,
    spicyLevel: 2,
    description: 'The ultimate indulgence: Super crisp roast drenched in country ghee and coated with authentic spice podi.',
    tags: ['Kongu Special', 'House Favorite']
  },
  {
    id: 'roast-ghee-onion',
    name: 'Ghee Onion Roast',
    category: 'dosa-roast',
    subCategory: 'Roast',
    type: 'veg',
    spicyLevel: 1,
    description: 'Crispy ghee-roasted cone filled with sweet, slow-roasted shallots.',
    tags: ['Ghee & Shallots']
  },
  {
    id: 'roast-masal',
    name: 'Masal Roast',
    category: 'dosa-roast',
    subCategory: 'Roast',
    type: 'veg',
    spicyLevel: 1,
    description: 'Classic crisp roast stuffed with fragrant spiced potato and onion masala.',
    tags: ['Classic Masala']
  },
  {
    id: 'roast-podi-onion',
    name: 'Podi Onion Roast',
    category: 'dosa-roast',
    subCategory: 'Roast',
    type: 'veg',
    spicyLevel: 2,
    description: 'Crispy roast combined with the punch of podi and the sweetness of sautéed onions.',
    tags: ['Crunch & Spice']
  },

  // --- SOUTH INDIAN TIFFIN ---
  {
    id: 'si-idly',
    name: 'Idly',
    category: 'south-indian',
    subCategory: 'South Indian',
    type: 'veg',
    spicyLevel: 0,
    description: 'Steamed, feather-light fluffy rice and lentil cakes served with sambar and fresh chutneys.',
    tags: ['Steamed & Light']
  },
  {
    id: 'si-poori',
    name: 'Poori',
    category: 'south-indian',
    subCategory: 'South Indian',
    type: 'veg',
    spicyLevel: 1,
    description: 'Puffy deep-fried golden wheat bread served with spiced potato masala gravy.',
    tags: ['Crispy & Puffed']
  },
  {
    id: 'si-pongal',
    name: 'Pongal',
    category: 'south-indian',
    subCategory: 'South Indian',
    type: 'veg',
    spicyLevel: 1,
    description: 'Traditional hot ghee ven pongal tempered with whole black pepper, cumin, ginger, and cashew nuts.',
    tags: ['Comfort Food', 'Pure Ghee']
  },
  {
    id: 'si-tomato-rice',
    name: 'Tomato Rice',
    category: 'south-indian',
    subCategory: 'South Indian',
    type: 'veg',
    spicyLevel: 2,
    description: 'Homestyle fragrant rice simmered with ripe country tomatoes, whole spices, and curry leaves.',
    tags: ['Tangy & Flavorful']
  },
  {
    id: 'si-vada',
    name: 'Vada (1pc)',
    category: 'south-indian',
    subCategory: 'South Indian',
    type: 'veg',
    spicyLevel: 1,
    description: 'Crisp on the outside, airy and fluffy inside medu vada with black pepper and crushed ginger.',
    tags: ['Crispy Snack']
  },

  // ==========================================
  // PAGE 2: MAIN COURSE (BIRIYANI, MEALS, CHINESE)
  // ==========================================
  {
    id: 'biriyani-naatukozhi-varuval',
    name: 'Naatukozhi Varuval Biriyani',
    category: 'biriyani-meals',
    subCategory: 'Biriyani',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Our crown jewel: Fragrant dum biriyani rice served with authentic Kongu country chicken (Naatukozhi) dry fry, rich in country flavors.',
    tags: ['Kongu Pride', 'Country Chicken', 'Signature']
  },
  {
    id: 'biriyani-chicken',
    name: 'Chicken Biriyani',
    category: 'biriyani-meals',
    subCategory: 'Biriyani',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Aromatic traditional spiced biriyani cooked with tender chicken pieces and subtle whole spices, served with onion raita and dalcha.',
    tags: ['Bestseller', 'Aromatic Dum']
  },
  {
    id: 'biriyani-chicken-varuval',
    name: 'Chicken Varuval Biriyani',
    category: 'biriyani-meals',
    subCategory: 'Biriyani',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Fragrant biriyani topped with spicy pan-fried chicken varuval sautéed with shallots and curry leaves.',
    tags: ['Varuval Special', 'Spicy']
  },
  {
    id: 'biriyani-chicken-65',
    name: 'Chicken 65 Biriyani',
    category: 'biriyani-meals',
    subCategory: 'Biriyani',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Flavorful biriyani rice topped with crispy, juicy pieces of classic Chicken 65.',
    tags: ['Crunchy Chicken']
  },
  {
    id: 'biriyani-mutton-varuval',
    name: 'Mutton Varuval Biriyani',
    category: 'biriyani-meals',
    subCategory: 'Biriyani',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Rich spiced biriyani paired with melt-in-the-mouth peppery roasted mutton varuval.',
    tags: ['Premium Special', 'Tender Mutton']
  },
  {
    id: 'biriyani-empty',
    name: 'Empty Biriyani (Kuska)',
    category: 'biriyani-meals',
    subCategory: 'Biriyani',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Pure flavorful biriyani rice cooked in rich meat stock without meat pieces, served with raita and salna.',
    tags: ['Kuska', 'Flavorful Rice']
  },
  {
    id: 'biriyani-egg',
    name: 'Egg Biriyani',
    category: 'biriyani-meals',
    subCategory: 'Biriyani',
    type: 'egg',
    spicyLevel: 2,
    description: 'Fragrant biriyani served with spiced boiled and pan-roasted eggs.',
    tags: ['Egg Special']
  },

  // --- MEALS ---
  {
    id: 'meal-veg',
    name: 'Veg Meal (Unlimited)',
    category: 'biriyani-meals',
    subCategory: 'Meals',
    type: 'veg',
    spicyLevel: 1,
    description: 'Traditional South Indian unlimited feast: Steamed rice, authentic Sambar, Rasam, Kara Kuzhambu, Kootu, Poriyal, Curd, Appalam, and Pickle.',
    tags: ['Unlimited Feast', 'Pure Veg']
  },
  {
    id: 'meal-non-veg',
    name: 'Non-Veg Meal (Unlimited)',
    category: 'biriyani-meals',
    subCategory: 'Meals',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 2,
    description: 'Iconic Tamil non-veg unlimited meal with steaming hot ponni rice, authentic Chicken Kuzhambu, Mutton Kuzhambu, Fish Kuzhambu, Rasam, Curd & Appalam.',
    tags: ['Kongu Feast', 'Unlimited Gravies']
  },
  {
    id: 'meal-extra-rice',
    name: 'Extra Rice',
    category: 'biriyani-meals',
    subCategory: 'Meals',
    type: 'veg',
    spicyLevel: 0,
    description: 'Steaming hot portion of freshly cooked South Indian ponni rice.',
    tags: ['Side']
  },

  // --- CHINESE RICE ---
  {
    id: 'cr-chicken',
    name: 'Chicken Fried Rice',
    category: 'chinese-schezwan',
    subCategory: 'Chinese Rice',
    type: 'non-veg',
    spicyLevel: 1,
    description: 'Wok-tossed basmati rice with shredded chicken, egg, crunchy scallions, and light soya sauce.',
    tags: ['Wok Fried']
  },
  {
    id: 'cr-mutton',
    name: 'Mutton Fried Rice',
    category: 'chinese-schezwan',
    subCategory: 'Chinese Rice',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Smoky wok-tossed fried rice packed with tender seasoned mutton chunks and egg.',
    tags: ['Hearty Mutton']
  },
  {
    id: 'cr-egg',
    name: 'Egg Fried Rice',
    category: 'chinese-schezwan',
    subCategory: 'Chinese Rice',
    type: 'egg',
    spicyLevel: 1,
    description: 'Fluffy wok-tossed rice with scrambled eggs, fresh vegetables, and white pepper.',
    tags: ['Classic Wok']
  },
  {
    id: 'cr-veg',
    name: 'Veg Fried Rice',
    category: 'chinese-schezwan',
    subCategory: 'Chinese Rice',
    type: 'veg',
    spicyLevel: 1,
    description: 'Steamed rice tossed with diced carrots, beans, cabbage, and spring onions.',
    tags: ['Vegetarian']
  },
  {
    id: 'cr-mixed-veg',
    name: 'Mixed Veg Rice',
    category: 'chinese-schezwan',
    subCategory: 'Chinese Rice',
    type: 'veg',
    spicyLevel: 1,
    description: 'Flavorful wok rice loaded with assorted seasonal vegetables and mild oriental seasoning.',
    tags: ['Garden Fresh']
  },
  {
    id: 'cr-mushroom',
    name: 'Mushroom Fried Rice',
    category: 'chinese-schezwan',
    subCategory: 'Chinese Rice',
    type: 'veg',
    spicyLevel: 1,
    description: 'Fragrant fried rice loaded with fresh button mushrooms sautéed in garlic and pepper.',
    tags: ['Mushroom Special']
  },
  {
    id: 'cr-paneer',
    name: 'Paneer Fried Rice',
    category: 'chinese-schezwan',
    subCategory: 'Chinese Rice',
    type: 'veg',
    spicyLevel: 1,
    description: 'Tender cottage cheese cubes tossed with vegetables and long-grain rice.',
    tags: ['Paneer Special']
  },

  // --- SCHEZWAN RICE ---
  {
    id: 'sr-chicken',
    name: 'Schezwan Chicken Rice',
    category: 'chinese-schezwan',
    subCategory: 'Schezwan Rice',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Fiery wok-tossed rice with chicken and our signature spicy Schezwan chili paste.',
    tags: ['Spicy & Tangy']
  },
  {
    id: 'sr-mutton',
    name: 'Schezwan Mutton Rice',
    category: 'chinese-schezwan',
    subCategory: 'Schezwan Rice',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Bold and spicy Schezwan rice loaded with succulent mutton chunks and egg.',
    tags: ['Fiery Mutton']
  },
  {
    id: 'sr-egg',
    name: 'Schezwan Egg Rice',
    category: 'chinese-schezwan',
    subCategory: 'Schezwan Rice',
    type: 'egg',
    spicyLevel: 3,
    description: 'Spicy Schezwan rice scrambled with fresh farm eggs and scallions.',
    tags: ['Egg Schezwan']
  },
  {
    id: 'sr-veg',
    name: 'Schezwan Veg Rice',
    category: 'chinese-schezwan',
    subCategory: 'Schezwan Rice',
    type: 'veg',
    spicyLevel: 3,
    description: 'Crunchy vegetables tossed in fiery red Schezwan pepper sauce with aromatic rice.',
    tags: ['Spicy Veg']
  },
  {
    id: 'sr-mixed-veg',
    name: 'Schezwan Mixed Veg Rice',
    category: 'chinese-schezwan',
    subCategory: 'Schezwan Rice',
    type: 'veg',
    spicyLevel: 3,
    description: 'Spicy wok-tossed rice with mixed garden vegetables in bold Schezwan spices.',
    tags: ['Loaded Veg']
  },
  {
    id: 'sr-mushroom',
    name: 'Schezwan Mushroom Rice',
    category: 'chinese-schezwan',
    subCategory: 'Schezwan Rice',
    type: 'veg',
    spicyLevel: 3,
    description: 'Fresh button mushrooms tossed in sharp spicy Schezwan sauce with fragrant rice.',
    tags: ['Spicy Mushroom']
  },
  {
    id: 'sr-paneer',
    name: 'Schezwan Paneer Rice',
    category: 'chinese-schezwan',
    subCategory: 'Schezwan Rice',
    type: 'veg',
    spicyLevel: 3,
    description: 'Succulent paneer cubes tossed in spicy Schezwan wok rice.',
    tags: ['Spicy Paneer']
  },

  // --- CHINESE NOODLES ---
  {
    id: 'cn-chicken',
    name: 'Chicken Noodles',
    category: 'chinese-schezwan',
    subCategory: 'Chinese Noodles',
    type: 'non-veg',
    spicyLevel: 1,
    description: 'Stir-fried noodles with julienned chicken, shredded cabbage, carrots, and light soya.',
    tags: ['Classic Noodles']
  },
  {
    id: 'cn-mutton',
    name: 'Mutton Noodles',
    category: 'chinese-schezwan',
    subCategory: 'Chinese Noodles',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Wok-tossed noodles with soft spiced mutton pieces, egg, and crunchy scallions.',
    tags: ['Mutton Noodles']
  },
  {
    id: 'cn-egg',
    name: 'Egg Noodles',
    category: 'chinese-schezwan',
    subCategory: 'Chinese Noodles',
    type: 'egg',
    spicyLevel: 1,
    description: 'Noodles tossed in high heat with scrambled eggs, shredded veggies, and herbs.',
    tags: ['Egg Noodles']
  },
  {
    id: 'cn-veg',
    name: 'Veg Noodles',
    category: 'chinese-schezwan',
    subCategory: 'Chinese Noodles',
    type: 'veg',
    spicyLevel: 1,
    description: 'Quick-tossed noodles with colorful crisp vegetables in light seasoning.',
    tags: ['Light & Mild']
  },
  {
    id: 'cn-mixed-veg',
    name: 'Mixed Veg Noodles',
    category: 'chinese-schezwan',
    subCategory: 'Chinese Noodles',
    type: 'veg',
    spicyLevel: 1,
    description: 'Loaded with cabbage, bell peppers, carrots, and spring onions in savory wok style.',
    tags: ['Veg Lovers']
  },
  {
    id: 'cn-mushroom',
    name: 'Mushroom Noodles',
    category: 'chinese-schezwan',
    subCategory: 'Chinese Noodles',
    type: 'veg',
    spicyLevel: 1,
    description: 'Sliced button mushrooms stir-fried with spring noodles and garlic.',
    tags: ['Mushroom Noodles']
  },
  {
    id: 'cn-paneer',
    name: 'Paneer Noodles',
    category: 'chinese-schezwan',
    subCategory: 'Chinese Noodles',
    type: 'veg',
    spicyLevel: 1,
    description: 'Soft cottage cheese cubes and fresh vegetables tossed with noodles.',
    tags: ['Paneer Delight']
  },

  // --- SCHEZWAN NOODLES ---
  {
    id: 'sn-chicken',
    name: 'Schezwan Chicken Noodles',
    category: 'chinese-schezwan',
    subCategory: 'Schezwan Noodles',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Spicy stir-fried noodles tossed with chicken in fiery homemade Schezwan sauce.',
    tags: ['Fiery Noodles']
  },
  {
    id: 'sn-mutton',
    name: 'Schezwan Mutton Noodles',
    category: 'chinese-schezwan',
    subCategory: 'Schezwan Noodles',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Spicy Schezwan noodles with shredded mutton, egg, and crunchy capsicum.',
    tags: ['Spicy Mutton Noodles']
  },
  {
    id: 'sn-egg',
    name: 'Schezwan Egg Noodles',
    category: 'chinese-schezwan',
    subCategory: 'Schezwan Noodles',
    type: 'egg',
    spicyLevel: 3,
    description: 'Fiery noodles scrambled with eggs, garlic, and hot red chillies.',
    tags: ['Egg Schezwan']
  },
  {
    id: 'sn-veg',
    name: 'Schezwan Veg Noodles',
    category: 'chinese-schezwan',
    subCategory: 'Schezwan Noodles',
    type: 'veg',
    spicyLevel: 3,
    description: 'Crisp vegetables tossed with long noodles in spicy garlic Schezwan chili paste.',
    tags: ['Spicy Veg Noodles']
  },
  {
    id: 'sn-mixed-veg',
    name: 'Schezwan Mixed Veg Noodles',
    category: 'chinese-schezwan',
    subCategory: 'Schezwan Noodles',
    type: 'veg',
    spicyLevel: 3,
    description: 'Hearty mix of vegetables in fiery red Schezwan sauce with noodles.',
    tags: ['Fiery Veg']
  },
  {
    id: 'sn-mushroom',
    name: 'Schezwan Mushroom Noodles',
    category: 'chinese-schezwan',
    subCategory: 'Schezwan Noodles',
    type: 'veg',
    spicyLevel: 3,
    description: 'Sliced button mushrooms tossed in spicy chili-garlic Schezwan noodles.',
    tags: ['Spicy Mushroom']
  },
  {
    id: 'sn-paneer',
    name: 'Schezwan Paneer Noodles',
    category: 'chinese-schezwan',
    subCategory: 'Schezwan Noodles',
    type: 'veg',
    spicyLevel: 3,
    description: 'Soft paneer cubes tossed in fiery Schezwan noodles.',
    tags: ['Spicy Paneer']
  },

  // ==========================================
  // PAGE 3: STARTERS (NAATUKOZHI, MUTTON, CHICKEN, SEAFOOD, VEG)
  // ==========================================
  // --- NAATUKOZHI STARTERS (KONGU SPECIALTY) ---
  {
    id: 'st-nk-pallipalayam',
    name: 'Naatukozhi Pallipalayam Fry',
    category: 'starters',
    subCategory: 'Naatukozhi Starters',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'The legendary taste of Erode & Pallipalayam! Tender country chicken cooked simply with small onions (chinna vengayam), whole dried red chillies, and fresh coconut bits.',
    tags: ['Legendary Kongu', 'No Masala Powder', 'Coconut & Chillies']
  },
  {
    id: 'st-nk-chinthamani',
    name: 'Naatukozhi Chinthamani Fry',
    category: 'starters',
    subCategory: 'Naatukozhi Starters',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Ancient Kongu recipe: Boneless pieces of country chicken sautéed solely with deseeded dry red chillies, shallots, and gingelly oil. Unmatched rustic punch.',
    tags: ['Authentic Kongu', 'Rustic Flavor']
  },
  {
    id: 'st-nk-nallampatty',
    name: 'Naatukozhi Nallampatty Fry',
    category: 'starters',
    subCategory: 'Naatukozhi Starters',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Authentic village-style recipe from Nallampatty: Country chicken tossed with stone-ground Kongu spices and fresh curry leaves.',
    tags: ['Village Recipe', 'Stone-Ground Spices']
  },
  {
    id: 'st-nk-pepper',
    name: 'Naatukozhi Pepper Fry',
    category: 'starters',
    subCategory: 'Naatukozhi Starters',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Tender country chicken braised and pan-roasted with freshly crushed black pepper and garlic.',
    tags: ['Black Pepper', 'Hot & Spicy']
  },
  {
    id: 'st-nk-chettinad',
    name: 'Naatukozhi Chettinad Fry',
    category: 'starters',
    subCategory: 'Naatukozhi Starters',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Country chicken tossed in freshly roasted Chettinad spices (kalpasi, star anise, fennel).',
    tags: ['Chettinad Spiced']
  },
  {
    id: 'st-nk-chukka',
    name: 'Naatukozhi Chukka Fry',
    category: 'starters',
    subCategory: 'Naatukozhi Starters',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Slow-roasted dry country chicken cooked down till the masala clings tightly to every bone.',
    tags: ['Dry Chukka', 'Crispy Masala']
  },

  // --- MUTTON STARTERS ---
  {
    id: 'st-mutton-pallipalayam',
    name: 'Mutton Pallipalayam Fry',
    category: 'starters',
    subCategory: 'Mutton Starters',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Tender mutton cooked in authentic Kongu Pallipalayam style with shallots, red chillies, and fried coconut flakes.',
    tags: ['Kongu Special', 'Tender Mutton']
  },
  {
    id: 'st-mutton-chinthamani',
    name: 'Mutton Chinthamani Fry',
    category: 'starters',
    subCategory: 'Mutton Starters',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Melt-in-mouth boneless mutton tossed with crushed red chillies, shallots, and cold-pressed oil.',
    tags: ['Kongu Special', 'Boneless Mutton']
  },
  {
    id: 'st-mutton-nallampatty',
    name: 'Mutton Nallampatty Fry',
    category: 'starters',
    subCategory: 'Mutton Starters',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Rustic countryside mutton fry prepared with hand-pounded spices and crispy shallots.',
    tags: ['Village Spices']
  },
  {
    id: 'st-mutton-chukka',
    name: 'Mutton Chukka Fry',
    category: 'starters',
    subCategory: 'Mutton Starters',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Classic Tamil Nadu dry mutton roast, spiced with crushed pepper, cumin, and fried curry leaves.',
    tags: ['Bestseller', 'Chukka Roast']
  },
  {
    id: 'st-mutton-pepper',
    name: 'Mutton Pepper Fry',
    category: 'starters',
    subCategory: 'Mutton Starters',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Succulent mutton cubes roasted with aromatic black pepper, shallots, and green chillies.',
    tags: ['Peppery Kick']
  },
  {
    id: 'st-mutton-chettinad',
    name: 'Mutton Chettinad Fry',
    category: 'starters',
    subCategory: 'Mutton Starters',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Rich roasted Chettinad masala coated tender mutton pieces with curry leaves.',
    tags: ['Chettinad Special']
  },
  {
    id: 'st-mutton-kudal',
    name: 'Mutton Kudal Fry',
    category: 'starters',
    subCategory: 'Mutton Starters',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Traditional cleaned mutton boti/kudal slow-cooked and crisp-fried with pepper, onions, and garlic. A Kongu delicacy!',
    tags: ['Kongu Delicacy', 'Traditional Boti']
  },

  // --- CHICKEN STARTERS ---
  {
    id: 'st-ch-65',
    name: 'Chicken 65',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Crispy deep-fried chicken cubes marinated with ginger, garlic, red chilli, and lemon, garnished with curry leaves.',
    tags: ['Classic Starter', 'Crispy']
  },
  {
    id: 'st-ch-lollipop',
    name: 'Chicken Lollipop',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Frenched chicken winglets coated in spicy red batter, deep-fried till golden and served with dipping sauce.',
    tags: ['Party Favorite', 'Juicy']
  },
  {
    id: 'st-ch-pallipalayam',
    name: 'Chicken Pallipalayam',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Broiler chicken pieces cooked in authentic Kongu Pallipalayam style with shallots, dried red chillies, and coconut.',
    tags: ['Kongu Signature']
  },
  {
    id: 'st-ch-pichupota-kari',
    name: 'Chicken Pichupota Kari',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Tender shredded chicken tossed on an open tawa with crushed black pepper, caramelized shallots, and green chillies.',
    tags: ['Kongu Special', 'Shredded Chicken']
  },
  {
    id: 'st-ch-nallampatty',
    name: 'Chicken Nallampatty',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Rural Kongu preparation with hand-ground spices and fresh herbs, pan-fried to rich aroma.',
    tags: ['Rustic Kongu']
  },
  {
    id: 'st-ch-manchurian',
    name: 'Chicken Manchurian',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Crisp chicken balls tossed in garlic, ginger, spring onion, and savory soy sauce.',
    tags: ['Indo-Chinese']
  },
  {
    id: 'st-ch-pepper',
    name: 'Chicken Pepper Fry',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Pan-roasted chicken packed with crushed black peppercorns, onions, and curry leaves.',
    tags: ['Pepper Heat']
  },
  {
    id: 'st-ch-chukka',
    name: 'Chicken Chukka',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Dry roasted chicken with caramelized onions, tomato, and ground garam masala.',
    tags: ['Tawa Roast']
  },
  {
    id: 'st-ch-chettinad-dry',
    name: 'Chicken Chettinad Dry',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Spicy dry chicken toss with freshly ground Chettinad whole spices.',
    tags: ['Chettinad Spices']
  },
  {
    id: 'st-ch-dragon',
    name: 'Dragon Chicken',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Thin crispy chicken strips glazed in spicy red chilli sauce, bell peppers, and cashew nuts.',
    tags: ['Crispy Strips', 'Spicy']
  },
  {
    id: 'st-ch-honey',
    name: 'Honey Chicken',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    spicyLevel: 1,
    description: 'Crispy batter-fried chicken tossed in sweet honey glaze, sesame seeds, and mild spice.',
    tags: ['Sweet & Savory']
  },
  {
    id: 'st-ch-garlic',
    name: 'Garlic Chicken',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Chicken pieces sautéed with plenty of golden roasted garlic, onions, and green chillies.',
    tags: ['Garlic Infused']
  },
  {
    id: 'st-ch-kadai',
    name: 'Kadai Chicken (Quail)',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Whole or cut quail (kaadai) pan-roasted with spicy shallot masala and curry leaves.',
    tags: ['Quail Specialty', 'Country Taste']
  },
  {
    id: 'st-ch-kadai-65',
    name: 'Kadai 65',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 2,
    description: 'Crispy deep-fried quail (kaadai) marinated in spiced masala with curry leaf garnish.',
    tags: ['Quail 65', 'Crispy Fry']
  },
  {
    id: 'st-ch-777',
    name: 'Chicken 777',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Thin chicken slices coated in special batter, fried crisp and tossed with curd, green chillies, and garlic.',
    tags: ['Spicy Crunch']
  },
  {
    id: 'st-ch-555',
    name: 'Chicken 555',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Crispy shredded chicken strips wok-tossed with green chillies, garlic, and special 555 sauce.',
    tags: ['Fiery Strips']
  },
  {
    id: 'st-ch-tandoori',
    name: 'Tandoori Chicken',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Tender chicken marinated in yogurt, Kashmiri red chilli, and tandoori spices, smoked in clay oven.',
    tags: ['Tandoor Smoked', 'Juicy']
  },
  {
    id: 'st-ch-grill',
    name: 'Grill Chicken',
    category: 'starters',
    subCategory: 'Chicken Starters',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Slow-grilled chicken with crisp seasoned skin and moist, tender meat served with garlic dip.',
    tags: ['Charcoal Grill']
  },

  // --- VEG STARTERS ---
  {
    id: 'st-veg-paneer-65',
    name: 'Paneer 65',
    category: 'starters',
    subCategory: 'Veg Starters',
    type: 'veg',
    spicyLevel: 2,
    description: 'Soft cottage cheese cubes marinated in spicy South Indian 65 batter and fried till golden.',
    tags: ['Paneer Snack']
  },
  {
    id: 'st-veg-paneer-pepper',
    name: 'Paneer Pepper Fry',
    category: 'starters',
    subCategory: 'Veg Starters',
    type: 'veg',
    spicyLevel: 2,
    description: 'Paneer cubes tossed with crushed black pepper, onions, and bell peppers.',
    tags: ['Pepper Paneer']
  },
  {
    id: 'st-veg-paneer-manchurian',
    name: 'Paneer Manchurian',
    category: 'starters',
    subCategory: 'Veg Starters',
    type: 'veg',
    spicyLevel: 2,
    description: 'Golden fried paneer chunks tossed in savory garlic and soya Manchurian sauce.',
    tags: ['Indo-Chinese']
  },
  {
    id: 'st-veg-kadai-paneer-dry',
    name: 'Kadai Paneer Dry',
    category: 'starters',
    subCategory: 'Veg Starters',
    type: 'veg',
    spicyLevel: 2,
    description: 'Paneer cubes tossed in a wok with pounded coriander seeds, dried chillies, and bell peppers.',
    tags: ['Wok Spiced']
  },
  {
    id: 'st-veg-mushroom-65',
    name: 'Mushroom 65',
    category: 'starters',
    subCategory: 'Veg Starters',
    type: 'veg',
    spicyLevel: 2,
    description: 'Fresh button mushrooms dipped in spicy batter and deep-fried to a crunchy finish.',
    tags: ['Crispy Mushroom']
  },
  {
    id: 'st-veg-mushroom-pepper',
    name: 'Mushroom Pepper Fry',
    category: 'starters',
    subCategory: 'Veg Starters',
    type: 'veg',
    spicyLevel: 2,
    description: 'Juicy button mushrooms wok-tossed with shallots and freshly ground black pepper.',
    tags: ['Peppery Mushroom']
  },
  {
    id: 'st-veg-mushroom-manchurian',
    name: 'Mushroom Manchurian',
    category: 'starters',
    subCategory: 'Veg Starters',
    type: 'veg',
    spicyLevel: 2,
    description: 'Crispy fried mushrooms tossed in garlic, ginger, and Manchurian sauce.',
    tags: ['Manchurian']
  },
  {
    id: 'st-veg-gobi-65',
    name: 'Gobi 65',
    category: 'starters',
    subCategory: 'Veg Starters',
    type: 'veg',
    spicyLevel: 2,
    description: 'Crisp cauliflower florets marinated in spiced batter and deep-fried golden brown.',
    tags: ['Crispy Gobi']
  },
  {
    id: 'st-veg-gobi-pepper',
    name: 'Gobi Pepper Fry',
    category: 'starters',
    subCategory: 'Veg Starters',
    type: 'veg',
    spicyLevel: 2,
    description: 'Crispy cauliflower tossed with black pepper, curry leaves, and onions.',
    tags: ['Pepper Gobi']
  },
  {
    id: 'st-veg-gobi-manchurian',
    name: 'Gobi Manchurian',
    category: 'starters',
    subCategory: 'Veg Starters',
    type: 'veg',
    spicyLevel: 2,
    description: 'All-time favorite crispy cauliflower florets in spicy Indo-Chinese Manchurian glaze.',
    tags: ['Classic Favorite']
  },

  // --- SEA-FOOD STARTERS ---
  {
    id: 'st-sf-fish-65',
    name: 'Fish 65',
    category: 'starters',
    subCategory: 'Sea-food Starters',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Boneless fish fillets marinated with spicy South Indian masala and fried crisp.',
    tags: ['Seafood Special', 'Crispy Fish']
  },
  {
    id: 'st-sf-paarai-meen',
    name: 'Paarai Meen (1pc)',
    category: 'starters',
    subCategory: 'Sea-food Starters',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Whole fresh Trevally (Paarai Meen) slice marinated in hand-ground Kongu chili paste and tawa-fried in coconut oil.',
    tags: ['Fresh Catch', 'Tawa Meen Varuval']
  },
  {
    id: 'st-sf-prawn-65',
    name: 'Prawn 65',
    category: 'starters',
    subCategory: 'Sea-food Starters',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Juicy prawns coated in spiced batter and fried crisp with curry leaves.',
    tags: ['Crispy Prawns']
  },
  {
    id: 'st-sf-prawn-kadai',
    name: 'Prawn Kadai Roast',
    category: 'starters',
    subCategory: 'Sea-food Starters',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Fresh prawns pan-roasted with pounded whole spices, onions, and capsicum.',
    tags: ['Spicy Prawn Roast']
  },
  {
    id: 'st-sf-prawn-pepper',
    name: 'Prawn Pepper Roast',
    category: 'starters',
    subCategory: 'Sea-food Starters',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Succulent prawns tossed with fresh black pepper, shallots, and curry leaves.',
    tags: ['Black Pepper Prawns']
  },

  // ==========================================
  // PAGE 4: GRAVY (NAATUKOZHI, MUTTON, CHICKEN, VEG, SEAFOOD)
  // ==========================================
  // --- NAATUKOZHI GRAVY (KONGU SPECIALTY) ---
  {
    id: 'gr-nk-masala',
    name: 'Naatukozhi Masala',
    category: 'gravies',
    subCategory: 'Naatukozhi Gravy',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Traditional country chicken simmered in rich gravy of shallots, garlic, tomatoes, and stone-ground spices.',
    tags: ['Kongu Authentic', 'Rich Gravy']
  },
  {
    id: 'gr-nk-pallipalayam',
    name: 'Naatukozhi Pallipalayam Gravy',
    category: 'gravies',
    subCategory: 'Naatukozhi Gravy',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Authentic Pallipalayam style country chicken gravy infused with small onions, dry red chillies, and coconut.',
    tags: ['Kongu Signature', 'Best with Parotta']
  },
  {
    id: 'gr-nk-chinthamani',
    name: 'Naatukozhi Chinthamani Gravy',
    category: 'gravies',
    subCategory: 'Naatukozhi Gravy',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Distinctive country chicken gravy with crushed red chillies, shallots, and gingelly oil notes.',
    tags: ['Rustic Kongu', 'Spicy']
  },
  {
    id: 'gr-nk-chettinad',
    name: 'Naatukozhi Chettinad Gravy',
    category: 'gravies',
    subCategory: 'Naatukozhi Gravy',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Country chicken simmered in rich roasted coconut and Chettinad spice gravy.',
    tags: ['Chettinad Flavors']
  },
  {
    id: 'gr-nk-pepper',
    name: 'Pepper Naatukozhi Gravy',
    category: 'gravies',
    subCategory: 'Naatukozhi Gravy',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Fiery and comforting country chicken gravy cooked with generous crushed black pepper.',
    tags: ['Soothing & Spicy', 'Black Pepper']
  },

  // --- MUTTON GRAVY ---
  {
    id: 'gr-mutton-masala',
    name: 'Mutton Masala',
    category: 'gravies',
    subCategory: 'Mutton Gravy',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Tender goat mutton simmered slowly in a rich, deeply spiced onion-tomato and whole-spice gravy.',
    tags: ['Slow Cooked', 'Rich Gravy']
  },
  {
    id: 'gr-mutton-pallipalayam',
    name: 'Mutton Pallipalayam Gravy',
    category: 'gravies',
    subCategory: 'Mutton Gravy',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Kongu Pallipalayam style mutton gravy loaded with shallots and dried red chillies, finished with coconut.',
    tags: ['Kongu Special', 'Pairs with Dosa']
  },
  {
    id: 'gr-mutton-chinthamani',
    name: 'Mutton Chinthamani Gravy',
    category: 'gravies',
    subCategory: 'Mutton Gravy',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Tender boneless mutton pieces in rustic Chinthamani spicy sauce.',
    tags: ['Kongu Authentic', 'Spicy']
  },
  {
    id: 'gr-mutton-chettinad',
    name: 'Mutton Chettinad Gravy',
    category: 'gravies',
    subCategory: 'Mutton Gravy',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Rich Chettinad style mutton curry cooked with fennel seeds, star anise, and toasted coconut.',
    tags: ['Aromatic Curry']
  },
  {
    id: 'gr-mutton-pepper',
    name: 'Pepper Mutton Gravy',
    category: 'gravies',
    subCategory: 'Mutton Gravy',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Spicy and warming mutton gravy with fresh black pepper and shallot base.',
    tags: ['Peppery Mutton']
  },

  // --- CHICKEN GRAVY ---
  {
    id: 'gr-ch-chettinad',
    name: 'Chicken Chettinad Gravy',
    category: 'gravies',
    subCategory: 'Chicken Gravy',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Classic Tamil Nadu chicken curry prepared with freshly dry-roasted Chettinad spices.',
    tags: ['Crowd Favorite']
  },
  {
    id: 'gr-ch-chinthamani',
    name: 'Chicken Chinthamani Gravy',
    category: 'gravies',
    subCategory: 'Chicken Gravy',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Spicy chicken gravy crafted with shallots, dried red chillies, and sesame oil.',
    tags: ['Kongu Recipe']
  },
  {
    id: 'gr-ch-pallipalayam',
    name: 'Chicken Pallipalayam Gravy',
    category: 'gravies',
    subCategory: 'Chicken Gravy',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Erode-style chicken curry cooked with dry red chillies, shallots, and tender coconut bits.',
    tags: ['Kongu Special']
  },
  {
    id: 'gr-ch-hyderabadi',
    name: 'Chicken Hyderabadi Gravy',
    category: 'gravies',
    subCategory: 'Chicken Gravy',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Rich and creamy chicken curry infused with fried onions, coriander, and mint paste.',
    tags: ['Rich & Creamy']
  },
  {
    id: 'gr-ch-tikka-masala',
    name: 'Chicken Tikka Masala',
    category: 'gravies',
    subCategory: 'Chicken Gravy',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Smoky clay-oven roasted chicken tikka pieces in a luscious spiced tomato-butter sauce.',
    tags: ['Tandoori Gravy']
  },
  {
    id: 'gr-ch-nallampatty',
    name: 'Chicken Nallampatty Gravy',
    category: 'gravies',
    subCategory: 'Chicken Gravy',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Traditional village chicken curry flavored with hand-pounded spices and curry leaves.',
    tags: ['Village Style']
  },
  {
    id: 'gr-ch-uppukari',
    name: 'Chicken Uppukari Gravy',
    category: 'gravies',
    subCategory: 'Chicken Gravy',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Traditional Kongu Uppukari: Chicken simmered with crystal salt, abundant dry red chillies, and shallots.',
    tags: ['Heritage Kongu', 'Uppukari']
  },
  {
    id: 'gr-ch-pepper',
    name: 'Pepper Chicken Gravy',
    category: 'gravies',
    subCategory: 'Chicken Gravy',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Fiery chicken gravy cooked with generous freshly crushed black peppercorns.',
    tags: ['Black Pepper Heat']
  },
  {
    id: 'gr-ch-butter',
    name: 'Butter Chicken Gravy',
    category: 'gravies',
    subCategory: 'Chicken Gravy',
    type: 'non-veg',
    spicyLevel: 1,
    description: 'Tender chicken pieces cooked in a silky, rich makhani gravy with butter and fresh cream.',
    tags: ['Creamy & Mild']
  },
  {
    id: 'gr-ch-garlic',
    name: 'Garlic Chicken Gravy',
    category: 'gravies',
    subCategory: 'Chicken Gravy',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Aromatic chicken curry simmered with golden sautéed garlic pods and spices.',
    tags: ['Garlic Flavor']
  },
  {
    id: 'gr-ch-kadai',
    name: 'Kadai Chicken Gravy',
    category: 'gravies',
    subCategory: 'Chicken Gravy',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Chicken and bell peppers cooked in a spicy kadai masala ground with whole coriander seeds.',
    tags: ['Kadai Spiced']
  },
  {
    id: 'gr-ch-guntur',
    name: 'Guntur Chicken Masala',
    category: 'gravies',
    subCategory: 'Chicken Gravy',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Fiery Andhra-style chicken gravy prepared with sun-dried spicy Guntur red chillies.',
    tags: ['Fiery Guntur']
  },

  // --- VEG GRAVIES ---
  {
    id: 'gr-veg-paneer-masala',
    name: 'Paneer Masala',
    category: 'gravies',
    subCategory: 'Veg Gravy',
    type: 'veg',
    spicyLevel: 1,
    description: 'Fresh cottage cheese cubes cooked in a spiced onion-tomato gravy with aromatic spices.',
    tags: ['Vegetarian Favorite']
  },
  {
    id: 'gr-veg-paneer-butter',
    name: 'Paneer Butter Masala',
    category: 'gravies',
    subCategory: 'Veg Gravy',
    type: 'veg',
    spicyLevel: 1,
    description: 'Soft paneer cubes simmered in a velvety smooth tomato, butter, and cashew nut cream sauce.',
    tags: ['Rich & Mild', 'Bestseller']
  },
  {
    id: 'gr-veg-paneer-pallipalayam',
    name: 'Paneer Pallipalayam Gravy',
    category: 'gravies',
    subCategory: 'Veg Gravy',
    type: 'veg',
    isKonguSpecial: true,
    spicyLevel: 2,
    description: 'Kongu vegetarian twist: Soft paneer cooked in Pallipalayam style with shallots and red chillies.',
    tags: ['Kongu Veg Special']
  },
  {
    id: 'gr-veg-kadai-paneer',
    name: 'Kadai Paneer Gravy',
    category: 'gravies',
    subCategory: 'Veg Gravy',
    type: 'veg',
    spicyLevel: 2,
    description: 'Paneer and crunchy capsicum cooked in a wok with freshly ground kadai spices.',
    tags: ['Kadai Masala']
  },
  {
    id: 'gr-veg-mushroom-masala',
    name: 'Mushroom Masala',
    category: 'gravies',
    subCategory: 'Veg Gravy',
    type: 'veg',
    spicyLevel: 2,
    description: 'Tender button mushrooms cooked in a flavorful onion, tomato, and ground garam masala gravy.',
    tags: ['Mushroom Lovers']
  },
  {
    id: 'gr-veg-mushroom-pepper',
    name: 'Mushroom Pepper Gravy',
    category: 'gravies',
    subCategory: 'Veg Gravy',
    type: 'veg',
    spicyLevel: 2,
    description: 'Sliced button mushrooms simmered in a spicy black pepper and curry leaf gravy.',
    tags: ['Peppery Kick']
  },
  {
    id: 'gr-veg-mushroom-pallipalayam',
    name: 'Mushroom Pallipalayam Gravy',
    category: 'gravies',
    subCategory: 'Veg Gravy',
    type: 'veg',
    isKonguSpecial: true,
    spicyLevel: 2,
    description: 'Button mushrooms in Kongu Pallipalayam style with small onions and dry red chillies.',
    tags: ['Kongu Special']
  },
  {
    id: 'gr-veg-gobi-masala',
    name: 'Gobi Masala',
    category: 'gravies',
    subCategory: 'Veg Gravy',
    type: 'veg',
    spicyLevel: 2,
    description: 'Cauliflower florets simmered in rich homestyle onion-tomato gravy.',
    tags: ['Homestyle']
  },
  {
    id: 'gr-veg-gobi-pepper',
    name: 'Gobi Pepper Gravy',
    category: 'gravies',
    subCategory: 'Veg Gravy',
    type: 'veg',
    spicyLevel: 2,
    description: 'Cauliflower florets cooked in spicy crushed black pepper and garlic sauce.',
    tags: ['Pepper Heat']
  },
  {
    id: 'gr-veg-gobi-pallipalayam',
    name: 'Gobi Pallipalayam Gravy',
    category: 'gravies',
    subCategory: 'Veg Gravy',
    type: 'veg',
    isKonguSpecial: true,
    spicyLevel: 2,
    description: 'Cauliflower prepared with authentic Pallipalayam red chillies and shallots.',
    tags: ['Kongu Veg']
  },

  // --- SEA-FOOD GRAVY ---
  {
    id: 'gr-sf-crab-nandu',
    name: 'Crab (Nandu) Gravy',
    category: 'gravies',
    subCategory: 'Sea-food Gravy',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Fresh sea crabs slow-simmered in rich country style masala with garlic, cumin, and shallots. Deep coastal-Tamil flavor.',
    tags: ['Fresh Crab', 'Kongu Specialty']
  },
  {
    id: 'gr-sf-nandu-pepper',
    name: 'Nandu Pepper Masala',
    category: 'gravies',
    subCategory: 'Sea-food Gravy',
    type: 'non-veg',
    isKonguSpecial: true,
    spicyLevel: 3,
    description: 'Crab cooked in a fiery black pepper and roasted cumin reduction. Known for its soothing and bold kick.',
    tags: ['Fiery Pepper', 'Chef Special']
  },
  {
    id: 'gr-sf-prawn-masala',
    name: 'Prawn Masala',
    category: 'gravies',
    subCategory: 'Sea-food Gravy',
    type: 'non-veg',
    spicyLevel: 2,
    description: 'Juicy prawns simmered in an aromatic onion, tomato, and coconut milk spiced gravy.',
    tags: ['Juicy Prawns']
  },
  {
    id: 'gr-sf-prawn-pepper',
    name: 'Prawn Pepper Gravy',
    category: 'gravies',
    subCategory: 'Sea-food Gravy',
    type: 'non-veg',
    spicyLevel: 3,
    description: 'Fresh prawns cooked in a spicy black pepper and shallot gravy, perfect with Bun Parotta or Dosa.',
    tags: ['Black Pepper Prawns']
  }
];

// Quick statistics
const MENU_STATS = {
  totalItems: MENU_ITEMS.length,
  konguSpecials: MENU_ITEMS.filter(i => i.isKonguSpecial).length,
  vegItems: MENU_ITEMS.filter(i => i.type === 'veg').length,
  nonVegItems: MENU_ITEMS.filter(i => i.type === 'non-veg').length,
  eggItems: MENU_ITEMS.filter(i => i.type === 'egg').length
};

