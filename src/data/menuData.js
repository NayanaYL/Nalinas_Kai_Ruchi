export const MENU_CATEGORIES = [
  {
    id: "bath-rice-powders",
    title: "Bath & Rice Powders",
    kannadaTitle: "ಬಾತ್ ಮತ್ತು ಅನ್ನದ ಪುಡಿಗಳು",
    image: "/images/spice-powders.jpg",
    summary: "Puliogare, Vangi Bath, Bisi Bele Bath, Rasam, Sambar / Huli Pudi",
    description: "Authentic, freshly ground spice blends crafted with traditional Mysore & Bengaluru Brahmin heirloom recipes. Sun-dried spices, slow-roasted to perfection with no added colors or artificial preservatives.",
    items: [
      {
        id: "bisi-bele-bath",
        name: "Bisi Bele Bath Powder",
        kannadaName: "ಬಿಸಿ ಬೇಳೆ ಬಾತ್ ಪುಡಿ",
        description: "The crown jewel of Karnataka cuisine. Aromatic blend of roasted coriander, cinnamon, marathi moggu, and byadagi chillies.",
        weights: ["100g", "250g", "500g"],
        prices: { "100g": 90, "250g": 210, "500g": 400 },
        badge: "Bestseller",
        shelfLife: "6 Months",
        ingredients: "Byadagi Chilli, Coriander Seeds, Bengal Gram, Cinnamon, Cloves, Kapok Buds (Marathi Moggu), Fenugreek, Cumin"
      },
      {
        id: "puliogare-gojju-pudi",
        name: "Puliogare Mix / Pudi",
        kannadaName: "ಪುಳಿಯೋಗರೆ ಗೊಜ್ಜು / ಪುಡಿ",
        description: "Temple-style authentic tangy and spicy tamarind rice mix with nutty crunch and aromatic sesame aroma.",
        weights: ["100g", "250g", "500g"],
        prices: { "100g": 85, "250g": 200, "500g": 380 },
        badge: "Temple Style",
        shelfLife: "6 Months",
        ingredients: "Tamarind, Jaggery, Byadagi Chilli, White Sesame, Groundnuts, Mustard, Fenugreek, Asafoetida, Curry Leaves"
      },
      {
        id: "vangi-bath-powder",
        name: "Vangi Bath Powder",
        kannadaName: "ವಾಂಗಿ ಬಾತ್ ಪುಡಿ",
        description: "Traditional spice powder for authentic brinjal / capsicum rice, infused with star anise and dry coconut.",
        weights: ["100g", "250g", "500g"],
        prices: { "100g": 85, "250g": 200, "500g": 380 },
        badge: "Traditional",
        shelfLife: "6 Months",
        ingredients: "Coriander, Byadagi Chilli, Dry Coconut (Kobbari), Cloves, Cinnamon, Chana Dal, Urad Dal, Asafoetida"
      },
      {
        id: "mysore-rasam-powder",
        name: "Rasam Powder (Mysuru Saaru)",
        kannadaName: "ರಸಂ ಪುಡಿ (ಮೈಸೂರು ಸಾರು)",
        description: "Soul-soothing traditional rasam powder. Mildly spiced, fragrant with roasted cumin, pepper and curry leaves.",
        weights: ["100g", "250g", "500g"],
        prices: { "100g": 80, "250g": 190, "500g": 360 },
        badge: "Everyday Staple",
        shelfLife: "6 Months",
        ingredients: "Coriander, Cumin, Black Pepper, Red Chilli, Turmeric, Fenugreek, Mustard, Curry Leaves"
      },
      {
        id: "sambar-huli-pudi",
        name: "Sambar / Huli Pudi",
        kannadaName: "ಸಾಂಬಾರ್ / ಹುಳಿ ಪುಡಿ",
        description: "Authentic Brahmin style sambar powder made without onion or garlic. Gives rich aroma and golden color to your dal.",
        weights: ["100g", "250g", "500g"],
        prices: { "100g": 85, "250g": 200, "500g": 380 },
        badge: "Pure Brahmin Style",
        shelfLife: "6 Months",
        ingredients: "Coriander Seeds, Byadagi Chilli, Chana Dal, Toor Dal, Fenugreek, Turmeric, Hing, Curry Leaves"
      }
    ]
  },
  {
    id: "chutney-pudis",
    title: "Chutney Pudis",
    kannadaTitle: "ಚಟ್ನಿ ಪುಡಿಗಳು",
    image: "/images/chutney-pudi.jpg",
    summary: "Kadale, Hurali Kaalu, Thogari Bele, Shenga, Karibevina, Nugge Soppina, Pepper Garlic",
    description: "The soul of a South Indian breakfast. Sprinkle over hot idlis, crispy dosas, akki rotti, or mix with steaming hot rice and pure cow ghee.",
    items: [
      {
        id: "kadale-chutney-pudi",
        name: "Kadale Chutney Pudi",
        kannadaName: "ಕಡಲೆ ಚಟ್ನಿ ಪುಡಿ",
        description: "Roasted gram dal chutney powder with crispy curry leaves, dry coconut, and a touch of organic jaggery.",
        weights: ["100g", "250g", "500g"],
        prices: { "100g": 75, "250g": 180, "500g": 340 },
        badge: "All-Time Favourite",
        shelfLife: "4 Months",
        ingredients: "Roasted Bengal Gram (Putani), Dry Coconut, Red Chilli, Tamarind, Jaggery, Salt, Curry Leaves, Hing"
      },
      {
        id: "shenga-chutney-pudi",
        name: "Shenga (Peanut) Chutney Pudi",
        kannadaName: "ಶೇಂಗಾ ಚಟ್ನಿ ಪುಡಿ",
        description: "North Karnataka style coarse roasted peanut powder. Nutty, crunchy, and packed with plant protein.",
        weights: ["100g", "250g", "500g"],
        prices: { "100g": 80, "250g": 190, "500g": 360 },
        badge: "High Protein",
        shelfLife: "4 Months",
        ingredients: "Roasted Peanuts, Red Chilli, Cumin, Tamarind, Jaggery, Garlic (optional), Salt"
      },
      {
        id: "karibevina-chutney-pudi",
        name: "Karibevina (Curry Leaf) Pudi",
        kannadaName: "ಕರಿಬೇವಿನ ಚಟ್ನಿ ಪುಡಿ",
        description: "Hand-picked, shade-dried fresh curry leaves roasted with lentils. Extremely rich in iron and hair health benefits.",
        weights: ["100g", "250g", "500g"],
        prices: { "100g": 85, "250g": 200, "500g": 380 },
        badge: "Health Special",
        shelfLife: "4 Months",
        ingredients: "Fresh Country Curry Leaves, Urad Dal, Chana Dal, Red Chilli, Tamarind, Hing, Cumin, Salt"
      },
      {
        id: "nugge-soppina-pudi",
        name: "Nugge Soppina (Moringa) Pudi",
        kannadaName: "ನುಗ್ಗೆ ಸೊಪ್ಪಿನ ಪುಡಿ",
        description: "Nutritious drumstick leaf (moringa) chutney powder roasted with sesame and lentils. A modern superfood prepared traditionally.",
        weights: ["100g", "250g", "500g"],
        prices: { "100g": 90, "250g": 215, "500g": 410 },
        badge: "Immunity Booster",
        shelfLife: "4 Months",
        ingredients: "Organic Moringa Leaves, Chana Dal, White Sesame, Red Chilli, Tamarind, Jaggery, Salt"
      },
      {
        id: "hurali-kaalu-pudi",
        name: "Hurali Kaalu (Horsegram) Pudi",
        kannadaName: "ಹುರಳಿ ಕಾಳು ಪುಡಿ",
        description: "Hearty roasted horsegram powder known for warmth, digestion, and authentic rustic Malnad flavor.",
        weights: ["100g", "250g", "500g"],
        prices: { "100g": 80, "250g": 190, "500g": 360 },
        badge: "Malnad Heritage",
        shelfLife: "4 Months",
        ingredients: "Roasted Horsegram, Pepper, Cumin, Red Chilli, Dry Coconut, Tamarind, Salt"
      },
      {
        id: "thogari-bele-pudi",
        name: "Thogari Bele Pudi (Paruppu Podi)",
        kannadaName: "ತೊಗರಿ ಬೇಳೆ ಪುಡಿ",
        description: "Golden roasted toor dal and pepper powder. Melts divinely into hot rice topped with a spoonful of melted ghee.",
        weights: ["100g", "250g", "500g"],
        prices: { "100g": 80, "250g": 190, "500g": 360 },
        badge: "Comfort Food",
        shelfLife: "4 Months",
        ingredients: "Toor Dal, Roasted Gram, Black Pepper, Cumin, Red Chilli, Hing, Salt"
      }
    ]
  },
  {
    id: "snacks-sweets",
    title: "Snacks & Sweets",
    kannadaTitle: "ತಿಂಡಿಗಳು ಮತ್ತು ಸಿಹಿಗಳು",
    image: "/images/snacks-sweets.jpg",
    summary: "Chakkuli, Nippattu, Kodubale, Shankara Poli, Besan Laddu, Kaayi Holige, Bele Holige, Kharji Kaayi",
    description: "Handmade festive snacks and heritage Karnataka sweets prepared with pure cold-pressed groundnut oil, homemade pure cow ghee, and natural jaggery.",
    items: [
      {
        id: "kai-chakkuli",
        name: "Traditional Butter Chakkuli",
        kannadaName: "ಬೆಣ್ಣೆ ಚಕ್ಕುಲಿ",
        description: "Crunchy spiral delight made with rice flour, roasted urad dal, cumin, sesame and rich country butter.",
        weights: ["250g", "500g", "1kg"],
        prices: { "250g": 130, "500g": 250, "1kg": 480 },
        badge: "Melt In Mouth",
        shelfLife: "45 Days",
        ingredients: "Rice Flour, Urad Dal Flour, Country Butter, Sesame, Cumin, Salt, Cold Pressed Oil"
      },
      {
        id: "nippattu",
        name: "Crispy Nippattu",
        kannadaName: "ಗರಿಗರಿ ನಿಪ್ಪಟ್ಟು",
        description: "Spicy Karnataka rice crisps studded with roasted peanuts, fried gram, curry leaves, and green chillies.",
        weights: ["250g", "500g", "1kg"],
        prices: { "250g": 130, "500g": 250, "1kg": 480 },
        badge: "Evening Tea Classic",
        shelfLife: "45 Days",
        ingredients: "Rice Flour, Roasted Peanuts, Roasted Gram, Onion, Green Chilli, Curry Leaves, Salt, Oil"
      },
      {
        id: "kodubale",
        name: "Karnataka Kodubale",
        kannadaName: "ಮೈಸೂರು ಕೋಡುಬಳೆ",
        description: "Ring-shaped savoury snack with the distinctive crunch of roasted rice flour, coconut and red chilli.",
        weights: ["250g", "500g", "1kg"],
        prices: { "250g": 130, "250g": 250, "1kg": 480 },
        badge: "Crispy Delight",
        shelfLife: "45 Days",
        ingredients: "Rice Flour, Maida, Fresh Grated Coconut, Red Chilli Paste, Cumin, Hing, Hot Oil"
      },
      {
        id: "bele-holige",
        name: "Bele Holige (Dal Obbattu)",
        kannadaName: "ಬೇಳೆ ಹೋಳಿಗೆ (ದಾಲ್ ಒಬ್ಬಟ್ಟು)",
        description: "Delicate sweet flatbread filled with sweet chana dal and organic jaggery puran, scented with green cardamom.",
        weights: ["Pack of 5", "Pack of 10"],
        prices: { "Pack of 5": 175, "Pack of 10": 340 },
        badge: "Festive Heirloom",
        shelfLife: "4 Days (Refrigerated 10 Days)",
        ingredients: "Chana Dal, Organic Jaggery, Cardamom, Nutmeg, Maida/Chiroti Rava, Pure Ghee"
      },
      {
        id: "kaayi-holige",
        name: "Kaayi Holige (Coconut Obbattu)",
        kannadaName: "ಕಾಯಿ ಹೋಳಿಗೆ (ಕೊಬ್ಬರಿ ಒಬ್ಬಟ್ಟು)",
        description: "Fresh grated coconut cooked with organic jaggery, rolled into soft translucent layers and toasted with ghee.",
        weights: ["Pack of 5", "Pack of 10"],
        prices: { "Pack of 5": 190, "Pack of 10": 370 },
        badge: "Melt In Mouth",
        shelfLife: "4 Days (Refrigerated 8 Days)",
        ingredients: "Fresh Grated Coconut, Jaggery, Cardamom, Pure Ghee, Chiroti Rava"
      },
      {
        id: "besan-laddu",
        name: "Shuddh Ghee Besan Laddu",
        kannadaName: "ಶುದ್ಧ ತುಪ್ಪದ ಬೇಸನ್ ಲಾಡು",
        description: "Slow-roasted gram flour in authentic desi cow ghee, fragrant with green cardamom, cashews and golden raisins.",
        weights: ["250g (6 pcs)", "500g (12 pcs)"],
        prices: { "250g (6 pcs)": 180, "500g (12 pcs)": 350 },
        badge: "Pure Cow Ghee",
        shelfLife: "30 Days",
        ingredients: "Gram Flour (Besan), Pure Cow Desi Ghee, Khandsari Sugar, Cardamom, Cashews, Raisins"
      }
    ]
  }
];

export const JOURNAL_POSTS = [
  {
    id: "secret-to-bisi-bele-bath",
    title: "The Sacred Ratio: Crafting True Brahmin Bisi Bele Bath",
    kannadaTitle: "ಬಿಸಿ ಬೇಳೆ ಬಾತ್ ಮಸಾಲೆಯ ಅಸಲಿ ಗುಟ್ಟು",
    date: "Sep 2026",
    readTime: "4 min read",
    author: "Smt. Nalina",
    image: "/images/kitchen-masala.jpg",
    excerpt: "Why the order in which spices hit the iron kadai dictates the entire soul of this Karnataka classic.",
    content: `In our ancestral home in Mysuru, making Bisi Bele Bath powder was never a rushed affair. My grandmother used to wake up at dawn, inspect the Byadagi chillies to ensure they were sun-baked to a crisp snap, and heat her heavy black cast-iron skillet over a gentle tamarind-wood fire.

The secret lies not in adding more spices, but in the sequence:
1. Kapok Buds (Marathi Moggu) must be gently toasted first in just three drops of cold-pressed oil until their unique floral aroma blossoms.
2. Coriander seeds are roasted until they turn nutty golden, never letting them turn dark.
3. Cinnamon and cloves follow next, releasing warm essential oils.
4. Finally, dry copra (kobbari) is tossed into the warm residual heat without scorching.

When this hand-ground masala joins slow-cooked toor dal, sona masuri rice, fresh country vegetables, and a generous dollop of pure cow ghee, it isn't just breakfast—it is a blessing on a banana leaf.`
  },
  {
    id: "chutney-pudi-culture",
    title: "Why Chutney Pudi is Karnataka's Soul Food & Life Saver",
    kannadaTitle: "ಕನ್ನಡಿಗರ ಜೀವನಾಡಿ: ಚಟ್ನಿ ಪುಡಿಯ ಮಹಿಮೆ",
    date: "Aug 2026",
    readTime: "3 min read",
    author: "Smt. Nalina",
    image: "/images/chutney-pudi.jpg",
    excerpt: "From bachelor hostel boxes to traditional weddings, how podi carries the comfort of home across continents.",
    content: `Ask any Kannadiga living away from home what they pack first in their suitcase, and without hesitation, they will pull out airtight steel dabbas of Kadale Chutney Pudi and Shenga Pudi.

Chutney Pudi is the great democratizer of South Indian kitchens. On days when time is short and work is endless, a steaming mound of rice, two spoons of homemade chutney pudi, and warm ghee transforms an ordinary meal into pure culinary royalty. 

At Nalina's Kai Ruchi, we still roast our lentils in micro-batches of just 2 kilograms at a time. This guarantees that every grain is evenly roasted and the curry leaves retain their vibrant emerald flavor.`
  },
  {
    id: "art-of-obbattu",
    title: "The Art of Thin, Translucent Holige (Obbattu)",
    kannadaTitle: "ಹೋಳಿಗೆಯ ಕಲೆ: ತೆಳುವಾದ ಒಬ್ಬಟ್ಟಿನ ರಹಸ್ಯ",
    date: "Jul 2026",
    readTime: "5 min read",
    author: "Smt. Nalina",
    image: "/images/snacks-sweets.jpg",
    excerpt: "How three generations of gentle hand movements create sweet flatbreads that melt like morning mist.",
    content: `A truly authentic Holige should be so tender and thin that you can fold it four times with one hand. Achieving this requires patience and deep respect for the dough.

We allow our dough (Kanaka) to rest soaked in cold-pressed oil for at least 4 hours. The filling (Hoorana)—whether sweet chana dal with organic Bellary jaggery or fresh grated coastal coconut—must match the exact softness of the dough. When rolled gently on banana leaves with pure ghee, each obbattu puffs up on the tawa like a golden balloon.`
  }
];
