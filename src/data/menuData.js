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
        id: "vangi-bath-powder",
        name: "Vangi Bath Powder",
        kannadaName: "ವಾಂಗಿ ಬಾತ್ ಪುಡಿ",
        description: "Traditional spice powder for authentic brinjal / capsicum rice, infused with star anise and dry coconut.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 95, "200g": 179, "500g": 439 },
        badge: "Traditional",
        shelfLife: "6 Months",
      },
      {
        id: "bisi-bele-bath",
        name: "Bisi Bele Bath Powder",
        kannadaName: "ಬಿಸಿ ಬೇಳೆ ಬಾತ್ ಪುಡಿ",
        description: "The crown jewel of Karnataka cuisine. Aromatic blend of roasted coriander, cinnamon, marathi moggu, and byadagi chillies.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 95, "200g": 198, "500g": 449 },
        badge: "Bestseller",
        shelfLife: "6 Months"
      },
      {
        id: "puliogare-powder",
        name: "Puliogare Powder",
        kannadaName: "ಪುಳಿಯೋಗರೆ ಪುಡಿ",
        description: "Temple-style authentic tangy and spicy tamarind rice dry spice mix with nutty sesame aroma.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 92, "200g": 183, "500g": 410 },
        badge: "Temple Style",
        shelfLife: "6 Months"
      },
      {
        id: "puliogare-gojju",
        name: "Puliogare Gojju",
        kannadaName: "ಪುಳಿಯೋಗರೆ ಗೊಜ್ಜು",
        description: "Slow-simmered thick tamarind paste cooked with organic jaggery, roasted spices, peanuts and sesame oil.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 89, "200g": 176, "500g": 389 },
        badge: "Instant Mix",
        shelfLife: "6 Months"
      },
      {
        id: "sambar-huli-pudi",
        name: "Sambar Pudi / Huli Pudi",
        kannadaName: "ಸಾಂಬಾರ್ ಪುಡಿ / ಹುಳಿ ಪುಡಿ",
        description: "Authentic Brahmin style sambar powder made without onion or garlic. Gives rich aroma and golden color to your dal.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 94, "200g": 179, "500g": 410 },
        badge: "Pure Brahmin Style",
        shelfLife: "6 Months"
      },
      {
        id: "mysore-rasam-powder",
        name: "Rasam Powder / Saarina Pudi",
        kannadaName: "ರಸಂ ಪುಡಿ / ಸಾರಿನ ಪುಡಿ",
        description: "Soul-soothing traditional rasam powder. Mildly spiced, fragrant with roasted cumin, pepper and curry leaves.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 93, "200g": 170, "500g": 399 },
        badge: "Everyday Staple",
        shelfLife: "6 Months"
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
        
        id: "kadale-bele-chutney-pudi",
        name: "Kadale Bele Chutney Pudi",
        kannadaName: "ಕಡಲೆ ಬೇಳೆ ಚಟ್ನಿ ಪುಡಿ",
        description: "Roasted gram dal chutney powder with crispy curry leaves, dry coconut, and a touch of organic jaggery.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 96, "200g": 180, "500g": 400 },
        badge: "All-Time Favourite",
        shelfLife: "4 Months"
      },
      {
        id: "shenga-chutney-pudi",
        name: "Shenga (Peanut) Chutney Pudi",
        kannadaName: "ಶೇಂಗಾ ಚಟ್ನಿ ಪುಡಿ",
        description: "North Karnataka style coarse roasted peanut powder. Nutty, crunchy, and packed with plant protein.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 95, "200g": 175, "500g": 410 },
        badge: "High Protein",
        shelfLife: "4 Months"
      },
      {
        id: "karibevina-chutney-pudi",
        name: "Karibevina (Curry Leaf) Pudi",
        kannadaName: "ಕರಿಬೇವಿನ ಚಟ್ನಿ ಪುಡಿ",
        description: "Hand-picked, shade-dried fresh curry leaves roasted with lentils. Extremely rich in iron and hair health benefits.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 94, "200g": 180, "500g": 410 },
        badge: "Health Special",
        shelfLife: "4 Months"
      },
      {
      
        id: "moringa-chutney-pudi",
        name: "Moringa Chutney Pudi",
        kannadaName: "ನುಗ್ಗೆ ಸೊಪ್ಪಿನ ಚಟ್ನಿ ಪುಡಿ",
        description: "Nutritious drumstick leaf (moringa) chutney powder roasted with sesame and lentils. A modern superfood prepared traditionally.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 100, "200g": 195, "500g": 460 },
        badge: "Immunity Booster",
        shelfLife: "4 Months"
      },
      {
        id: "hurali-kaalu-pudi",
        name: "Hurali Kaalu (Horsegram) Pudi",
        kannadaName: "ಹುರಳಿ ಕಾಳು ಪುಡಿ",
        description: "Hearty roasted horsegram powder known for warmth, digestion, and authentic rustic Malnad flavor.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 93, "200g": 175, "500g": 410 },
        badge: "Malnad Heritage",
        shelfLife: "4 Months"
      },
      {
        id: "thogari-bele-pudi",
        name: "Thogari Bele Pudi (Paruppu Podi)",
        kannadaName: "ತೊಗರಿ ಬೇಳೆ ಪುಡಿ",
        description: "Golden roasted toor dal and pepper powder. Melts divinely into hot rice topped with a spoonful of melted ghee.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 95, "200g": 189, "500g": 430 },
        badge: "Comfort Food",
        shelfLife: "4 Months"
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
        name: "Butter Chakkuli",
        kannadaName: "ಬೆಣ್ಣೆ ಮುರುಕು",
        description: "Crunchy spiral delight made with rice flour, roasted urad dal, cumin, sesame and rich country butter.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 69, "200g": 139, "500g": 299 },
        badge: "Melt In Mouth",
        shelfLife: "45 Days"
      },
      {
        id: "nippattu",
        name: "Crispy Nippattu",
        kannadaName: "ಗರಿಗರಿ ನಿಪ್ಪಟ್ಟು",
        description: "Spicy Karnataka rice crisps studded with roasted peanuts, fried gram, curry leaves, and green chillies.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 69, "200g": 139, "500g": 299 },
        badge: "Evening Tea Classic",
        shelfLife: "45 Days"
      },
      {
        id: "kodubale",
        name: "Kodubale",
        kannadaName: "ಕೋಡುಬಳೆ",
        description: "Ring-shaped savoury snack with the distinctive crunch of roasted rice flour, coconut and red chilli.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 72, "200g": 140, "500g": 299 },
        badge: "Crispy Delight",
        shelfLife: "45 Days"
      },
      {
        id: "bele-holige",
        name: "Bele Holige (Dal Obbattu)",
        kannadaName: "ಬೇಳೆ ಹೋಳಿಗೆ (ದಾಲ್ ಒಬ್ಬಟ್ಟು)",
        description: "Delicate sweet flatbread filled with sweet chana dal and organic jaggery puran, scented with green cardamom.",
        weights: ["Pack of 1","Pack of 5", "Pack of 10"],
        prices: { "Pack of 1":42, "Pack of 5": 210, "Pack of 10": 400 },
        badge: "Festive Heirloom",
        shelfLife: "4 Days (Refrigerated 10 Days)"
      },
      {
        id: "kaayi-holige",
        name: "Kaayi Holige (Coconut Obbattu)",
        kannadaName: "ಕಾಯಿ ಹೋಳಿಗೆ (ಕೊಬ್ಬರಿ ಒಬ್ಬಟ್ಟು)",
        description: "Fresh grated coconut cooked with organic jaggery, rolled into soft translucent layers and toasted with ghee.",
        weights: ["Pack of 1","Pack of 5", "Pack of 10"],
        prices: { "Pack of 1":36,"Pack of 5": 180, "Pack of 10": 350 },
        badge: "Melt In Mouth",
        shelfLife: "4 Days (Refrigerated 8 Days)"
      },
      {
        id: "besan-laddu",
        name: "Shuddh Ghee Besan Laddu",
        kannadaName: "ಶುದ್ಧ ತುಪ್ಪದ ಬೇಸನ್ ಲಾಡು",
        description: "Slow-roasted gram flour in authentic desi cow ghee, fragrant with green cardamom, cashews and golden raisins.",
        weights: ["50g", "100g", "200g", "500g"],
        prices: { "50g": 50, "100g": 99, "200g": 199, "500g": 399 },
        badge: "Pure Cow Ghee",
        shelfLife: "30 Days"
      },
      {
        id: "shankara-poli",
        name: "Shankara Poli",
        kannadaName: "ಶಂಕರ ಪೋಲಿ",
        description: "Traditional sweet flatbread layered with aromatic coconut and chana dal filling, gently roasted in pure ghee.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 60, "200g": 120, "500g": 270 },
        badge: "Festive Favourite",
        shelfLife: "30 Days"
      },
      {
        id: "kharjikaayi",
        name: "Kharjikaayi",
        kannadaName: "ಖರ್ಜಿಕಾಯಿ",
        description: "Classic Karnataka sweet prepared with a rich, handcrafted filling and traditional ghee-roasted finish.",
        weights: ["100g", "200g", "500g"],
        prices: { "100g": 60, "200g": 120, "500g": 270 },
        badge: "Heritage Sweet",
        shelfLife: "15 Days"
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
