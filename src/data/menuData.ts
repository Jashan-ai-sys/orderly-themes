export interface MenuItem {
  id: string;
  name: string;
  price: number;
  halfPrice?: number;
  description?: string;
  isVeg: boolean;
  category: string;
  cuisine: 'Indian' | 'Chinese' | 'Continental';
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  items: MenuItem[];
}

export const restaurantInfo = {
  name: "The Urban Oven",
  tagline: "Restaurant & Bar",
  slogan: "Quality With Taste",
  phone1: "96572 00029",
  phone2: "96578 00029",
  address: "ADJ. SIDDHAY APARTMENTS & PG, NEAR ELECTRICITY TOWER, LPU LAW GATE, MAHERU",
  cuisines: ["Indian", "Chinese", "Continental"],
  minOrder: 249,
  deliveryInfo: "Free Home Delivery",
  whatsappNumber: "919657200029",
};

export const menuCategories: Category[] = [
  {
    id: "main-course-veg",
    name: "Main Course Veg",
    items: [
      { id: "mcv1", name: "Paneer Butter Masala", price: 220, halfPrice: 140, isVeg: true, category: "Main Course Veg", cuisine: "Indian" },
      { id: "mcv2", name: "Shahi Paneer", price: 220, halfPrice: 140, isVeg: true, category: "Main Course Veg", cuisine: "Indian" },
      { id: "mcv3", name: "Kadhai Paneer", price: 220, halfPrice: 140, isVeg: true, category: "Main Course Veg", cuisine: "Indian" },
      { id: "mcv4", name: "Paneer Do Pyaza", price: 220, halfPrice: 140, isVeg: true, category: "Main Course Veg", cuisine: "Indian" },
      { id: "mcv5", name: "Palak Paneer", price: 220, halfPrice: 140, isVeg: true, category: "Main Course Veg", cuisine: "Indian" },
      { id: "mcv6", name: "Matar Paneer", price: 200, halfPrice: 130, isVeg: true, category: "Main Course Veg", cuisine: "Indian" },
      { id: "mcv7", name: "Mix Veg", price: 180, halfPrice: 110, isVeg: true, category: "Main Course Veg", cuisine: "Indian" },
      { id: "mcv8", name: "Dal Makhani", price: 180, halfPrice: 110, isVeg: true, category: "Main Course Veg", cuisine: "Indian" },
      { id: "mcv9", name: "Dal Tadka", price: 150, halfPrice: 90, isVeg: true, category: "Main Course Veg", cuisine: "Indian" },
      { id: "mcv10", name: "Chana Masala", price: 160, halfPrice: 100, isVeg: true, category: "Main Course Veg", cuisine: "Indian" },
    ],
  },
  {
    id: "main-course-non-veg",
    name: "Main Course Non Veg",
    items: [
      { id: "mcnv1", name: "Butter Chicken", price: 280, halfPrice: 170, isVeg: false, category: "Main Course Non Veg", cuisine: "Indian" },
      { id: "mcnv2", name: "Kadhai Chicken", price: 280, halfPrice: 170, isVeg: false, category: "Main Course Non Veg", cuisine: "Indian" },
      { id: "mcnv3", name: "Chicken Do Pyaza", price: 280, halfPrice: 170, isVeg: false, category: "Main Course Non Veg", cuisine: "Indian" },
      { id: "mcnv4", name: "Chicken Masala", price: 260, halfPrice: 160, isVeg: false, category: "Main Course Non Veg", cuisine: "Indian" },
      { id: "mcnv5", name: "Mutton Rogan Josh", price: 350, halfPrice: 200, isVeg: false, category: "Main Course Non Veg", cuisine: "Indian" },
      { id: "mcnv6", name: "Mutton Curry", price: 350, halfPrice: 200, isVeg: false, category: "Main Course Non Veg", cuisine: "Indian" },
      { id: "mcnv7", name: "Egg Curry", price: 150, halfPrice: 90, isVeg: false, category: "Main Course Non Veg", cuisine: "Indian" },
      { id: "mcnv8", name: "Fish Curry", price: 280, halfPrice: 170, isVeg: false, category: "Main Course Non Veg", cuisine: "Indian" },
    ],
  },
  {
    id: "tandoori-veg",
    name: "Tandoori Veg",
    items: [
      { id: "tv1", name: "Paneer Tikka", price: 220, halfPrice: 140, isVeg: true, category: "Tandoori Veg", cuisine: "Indian" },
      { id: "tv2", name: "Malai Paneer Tikka", price: 240, halfPrice: 150, isVeg: true, category: "Tandoori Veg", cuisine: "Indian" },
      { id: "tv3", name: "Achari Paneer Tikka", price: 240, halfPrice: 150, isVeg: true, category: "Tandoori Veg", cuisine: "Indian" },
      { id: "tv4", name: "Veg Seekh Kebab", price: 200, halfPrice: 120, isVeg: true, category: "Tandoori Veg", cuisine: "Indian" },
      { id: "tv5", name: "Mushroom Tikka", price: 220, halfPrice: 140, isVeg: true, category: "Tandoori Veg", cuisine: "Indian" },
      { id: "tv6", name: "Tandoori Mushroom", price: 200, halfPrice: 120, isVeg: true, category: "Tandoori Veg", cuisine: "Indian" },
    ],
  },
  {
    id: "tandoori-non-veg",
    name: "Tandoori Non Veg",
    items: [
      { id: "tnv1", name: "Chicken Tikka", price: 280, halfPrice: 170, isVeg: false, category: "Tandoori Non Veg", cuisine: "Indian" },
      { id: "tnv2", name: "Malai Chicken Tikka", price: 300, halfPrice: 180, isVeg: false, category: "Tandoori Non Veg", cuisine: "Indian" },
      { id: "tnv3", name: "Tandoori Chicken", price: 320, halfPrice: 190, isVeg: false, category: "Tandoori Non Veg", cuisine: "Indian" },
      { id: "tnv4", name: "Chicken Seekh Kebab", price: 280, halfPrice: 170, isVeg: false, category: "Tandoori Non Veg", cuisine: "Indian" },
      { id: "tnv5", name: "Mutton Seekh Kebab", price: 350, halfPrice: 200, isVeg: false, category: "Tandoori Non Veg", cuisine: "Indian" },
      { id: "tnv6", name: "Fish Tikka", price: 300, halfPrice: 180, isVeg: false, category: "Tandoori Non Veg", cuisine: "Indian" },
    ],
  },
  {
    id: "biryani-veg",
    name: "Veg Biryani",
    items: [
      { id: "bv1", name: "Veg Biryani", price: 180, halfPrice: 110, isVeg: true, category: "Veg Biryani", cuisine: "Indian" },
      { id: "bv2", name: "Paneer Biryani", price: 220, halfPrice: 140, isVeg: true, category: "Veg Biryani", cuisine: "Indian" },
      { id: "bv3", name: "Mushroom Biryani", price: 200, halfPrice: 120, isVeg: true, category: "Veg Biryani", cuisine: "Indian" },
    ],
  },
  {
    id: "biryani-non-veg",
    name: "Non Veg Biryani",
    items: [
      { id: "bnv1", name: "Chicken Biryani", price: 250, halfPrice: 150, isVeg: false, category: "Non Veg Biryani", cuisine: "Indian" },
      { id: "bnv2", name: "Mutton Biryani", price: 320, halfPrice: 190, isVeg: false, category: "Non Veg Biryani", cuisine: "Indian" },
      { id: "bnv3", name: "Egg Biryani", price: 180, halfPrice: 110, isVeg: false, category: "Non Veg Biryani", cuisine: "Indian" },
    ],
  },
  {
    id: "fried-rice",
    name: "Fried Rice",
    items: [
      { id: "fr1", name: "Veg Fried Rice", price: 150, halfPrice: 90, isVeg: true, category: "Fried Rice", cuisine: "Chinese" },
      { id: "fr2", name: "Schezwan Fried Rice", price: 170, halfPrice: 100, isVeg: true, category: "Fried Rice", cuisine: "Chinese" },
      { id: "fr3", name: "Paneer Fried Rice", price: 180, halfPrice: 110, isVeg: true, category: "Fried Rice", cuisine: "Chinese" },
      { id: "fr4", name: "Mushroom Fried Rice", price: 170, halfPrice: 100, isVeg: true, category: "Fried Rice", cuisine: "Chinese" },
      { id: "fr5", name: "Chicken Fried Rice", price: 200, halfPrice: 120, isVeg: false, category: "Fried Rice", cuisine: "Chinese" },
      { id: "fr6", name: "Egg Fried Rice", price: 160, halfPrice: 100, isVeg: false, category: "Fried Rice", cuisine: "Chinese" },
    ],
  },
  {
    id: "noodles",
    name: "Noodles",
    items: [
      { id: "n1", name: "Veg Hakka Noodles", price: 150, halfPrice: 90, isVeg: true, category: "Noodles", cuisine: "Chinese" },
      { id: "n2", name: "Schezwan Noodles", price: 170, halfPrice: 100, isVeg: true, category: "Noodles", cuisine: "Chinese" },
      { id: "n3", name: "Paneer Noodles", price: 180, halfPrice: 110, isVeg: true, category: "Noodles", cuisine: "Chinese" },
      { id: "n4", name: "Chicken Noodles", price: 200, halfPrice: 120, isVeg: false, category: "Noodles", cuisine: "Chinese" },
      { id: "n5", name: "Egg Noodles", price: 160, halfPrice: 100, isVeg: false, category: "Noodles", cuisine: "Chinese" },
    ],
  },
  {
    id: "momos",
    name: "Momos",
    items: [
      { id: "m1", name: "Veg Steam Momos", price: 100, isVeg: true, category: "Momos", cuisine: "Chinese" },
      { id: "m2", name: "Veg Fried Momos", price: 120, isVeg: true, category: "Momos", cuisine: "Chinese" },
      { id: "m3", name: "Veg Tandoori Momos", price: 140, isVeg: true, category: "Momos", cuisine: "Chinese" },
      { id: "m4", name: "Paneer Momos", price: 140, isVeg: true, category: "Momos", cuisine: "Chinese" },
      { id: "m5", name: "Chicken Steam Momos", price: 130, isVeg: false, category: "Momos", cuisine: "Chinese" },
      { id: "m6", name: "Chicken Fried Momos", price: 150, isVeg: false, category: "Momos", cuisine: "Chinese" },
      { id: "m7", name: "Chicken Tandoori Momos", price: 170, isVeg: false, category: "Momos", cuisine: "Chinese" },
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    items: [
      { id: "b1", name: "Veg Burger", price: 80, isVeg: true, category: "Burgers", cuisine: "Continental" },
      { id: "b2", name: "Paneer Burger", price: 100, isVeg: true, category: "Burgers", cuisine: "Continental" },
      { id: "b3", name: "Aloo Tikki Burger", price: 70, isVeg: true, category: "Burgers", cuisine: "Continental" },
      { id: "b4", name: "Chicken Burger", price: 120, isVeg: false, category: "Burgers", cuisine: "Continental" },
      { id: "b5", name: "Chicken Zinger Burger", price: 150, isVeg: false, category: "Burgers", cuisine: "Continental" },
    ],
  },
  {
    id: "pizza-veg",
    name: "Veg Pizza's",
    items: [
      { id: "pv1", name: "Margherita Pizza", price: 180, isVeg: true, category: "Veg Pizza's", cuisine: "Continental" },
      { id: "pv2", name: "Paneer Tikka Pizza", price: 250, isVeg: true, category: "Veg Pizza's", cuisine: "Continental" },
      { id: "pv3", name: "Veggie Supreme Pizza", price: 280, isVeg: true, category: "Veg Pizza's", cuisine: "Continental" },
      { id: "pv4", name: "Mushroom Pizza", price: 220, isVeg: true, category: "Veg Pizza's", cuisine: "Continental" },
      { id: "pv5", name: "Corn & Cheese Pizza", price: 200, isVeg: true, category: "Veg Pizza's", cuisine: "Continental" },
    ],
  },
  {
    id: "pizza-non-veg",
    name: "Non Veg Pizza's",
    items: [
      { id: "pnv1", name: "Chicken Tikka Pizza", price: 300, isVeg: false, category: "Non Veg Pizza's", cuisine: "Continental" },
      { id: "pnv2", name: "Chicken Supreme Pizza", price: 350, isVeg: false, category: "Non Veg Pizza's", cuisine: "Continental" },
      { id: "pnv3", name: "Pepperoni Pizza", price: 320, isVeg: false, category: "Non Veg Pizza's", cuisine: "Continental" },
      { id: "pnv4", name: "BBQ Chicken Pizza", price: 330, isVeg: false, category: "Non Veg Pizza's", cuisine: "Continental" },
    ],
  },
  {
    id: "pasta",
    name: "Baked Pasta",
    items: [
      { id: "pa1", name: "White Sauce Pasta", price: 180, isVeg: true, category: "Baked Pasta", cuisine: "Continental" },
      { id: "pa2", name: "Red Sauce Pasta", price: 180, isVeg: true, category: "Baked Pasta", cuisine: "Continental" },
      { id: "pa3", name: "Pink Sauce Pasta", price: 200, isVeg: true, category: "Baked Pasta", cuisine: "Continental" },
      { id: "pa4", name: "Alfredo Pasta", price: 220, isVeg: true, category: "Baked Pasta", cuisine: "Continental" },
      { id: "pa5", name: "Chicken Pasta", price: 250, isVeg: false, category: "Baked Pasta", cuisine: "Continental" },
    ],
  },
  {
    id: "sandwich",
    name: "Sandwich",
    items: [
      { id: "s1", name: "Veg Sandwich", price: 80, isVeg: true, category: "Sandwich", cuisine: "Continental" },
      { id: "s2", name: "Paneer Sandwich", price: 120, isVeg: true, category: "Sandwich", cuisine: "Continental" },
      { id: "s3", name: "Grilled Sandwich", price: 100, isVeg: true, category: "Sandwich", cuisine: "Continental" },
      { id: "s4", name: "Club Sandwich", price: 150, isVeg: true, category: "Sandwich", cuisine: "Continental" },
      { id: "s5", name: "Chicken Sandwich", price: 140, isVeg: false, category: "Sandwich", cuisine: "Continental" },
    ],
  },
  {
    id: "wraps",
    name: "Wraps",
    items: [
      { id: "w1", name: "Paneer Tikka Wrap", price: 140, isVeg: true, category: "Wraps", cuisine: "Continental" },
      { id: "w2", name: "Veg Kathi Roll", price: 100, isVeg: true, category: "Wraps", cuisine: "Indian" },
      { id: "w3", name: "Chicken Tikka Wrap", price: 160, isVeg: false, category: "Wraps", cuisine: "Continental" },
      { id: "w4", name: "Chicken Kathi Roll", price: 130, isVeg: false, category: "Wraps", cuisine: "Indian" },
    ],
  },
  {
    id: "indian-breads",
    name: "Indian Breads",
    items: [
      { id: "ib1", name: "Plain Naan", price: 40, isVeg: true, category: "Indian Breads", cuisine: "Indian" },
      { id: "ib2", name: "Butter Naan", price: 50, isVeg: true, category: "Indian Breads", cuisine: "Indian" },
      { id: "ib3", name: "Garlic Naan", price: 60, isVeg: true, category: "Indian Breads", cuisine: "Indian" },
      { id: "ib4", name: "Cheese Naan", price: 80, isVeg: true, category: "Indian Breads", cuisine: "Indian" },
      { id: "ib5", name: "Tandoori Roti", price: 30, isVeg: true, category: "Indian Breads", cuisine: "Indian" },
      { id: "ib6", name: "Butter Tandoori Roti", price: 40, isVeg: true, category: "Indian Breads", cuisine: "Indian" },
      { id: "ib7", name: "Laccha Paratha", price: 50, isVeg: true, category: "Indian Breads", cuisine: "Indian" },
      { id: "ib8", name: "Stuffed Paratha", price: 70, isVeg: true, category: "Indian Breads", cuisine: "Indian" },
    ],
  },
  {
    id: "shakes",
    name: "All Shakes",
    items: [
      { id: "sh1", name: "Chocolate Shake", price: 120, isVeg: true, category: "All Shakes", cuisine: "Continental" },
      { id: "sh2", name: "Vanilla Shake", price: 100, isVeg: true, category: "All Shakes", cuisine: "Continental" },
      { id: "sh3", name: "Strawberry Shake", price: 120, isVeg: true, category: "All Shakes", cuisine: "Continental" },
      { id: "sh4", name: "Mango Shake", price: 120, isVeg: true, category: "All Shakes", cuisine: "Continental" },
      { id: "sh5", name: "Oreo Shake", price: 140, isVeg: true, category: "All Shakes", cuisine: "Continental" },
      { id: "sh6", name: "Cold Coffee", price: 100, isVeg: true, category: "All Shakes", cuisine: "Continental" },
    ],
  },
  {
    id: "mojito",
    name: "Mojito",
    items: [
      { id: "mj1", name: "Virgin Mojito", price: 100, isVeg: true, category: "Mojito", cuisine: "Continental" },
      { id: "mj2", name: "Blue Lagoon Mojito", price: 120, isVeg: true, category: "Mojito", cuisine: "Continental" },
      { id: "mj3", name: "Mint Mojito", price: 100, isVeg: true, category: "Mojito", cuisine: "Continental" },
      { id: "mj4", name: "Watermelon Mojito", price: 120, isVeg: true, category: "Mojito", cuisine: "Continental" },
    ],
  },
  {
    id: "lassi",
    name: "Lassi",
    items: [
      { id: "l1", name: "Sweet Lassi", price: 60, isVeg: true, category: "Lassi", cuisine: "Indian" },
      { id: "l2", name: "Mango Lassi", price: 80, isVeg: true, category: "Lassi", cuisine: "Indian" },
      { id: "l3", name: "Rose Lassi", price: 70, isVeg: true, category: "Lassi", cuisine: "Indian" },
      { id: "l4", name: "Salted Lassi", price: 50, isVeg: true, category: "Lassi", cuisine: "Indian" },
    ],
  },
  {
    id: "ice-cream",
    name: "ICE Creams",
    items: [
      { id: "ic1", name: "Vanilla Ice Cream", price: 60, isVeg: true, category: "ICE Creams", cuisine: "Continental" },
      { id: "ic2", name: "Chocolate Ice Cream", price: 70, isVeg: true, category: "ICE Creams", cuisine: "Continental" },
      { id: "ic3", name: "Butterscotch Ice Cream", price: 70, isVeg: true, category: "ICE Creams", cuisine: "Continental" },
      { id: "ic4", name: "Strawberry Ice Cream", price: 70, isVeg: true, category: "ICE Creams", cuisine: "Continental" },
    ],
  },
  {
    id: "fries",
    name: "Fries",
    items: [
      { id: "f1", name: "French Fries", price: 80, isVeg: true, category: "Fries", cuisine: "Continental" },
      { id: "f2", name: "Peri Peri Fries", price: 100, isVeg: true, category: "Fries", cuisine: "Continental" },
      { id: "f3", name: "Cheese Fries", price: 120, isVeg: true, category: "Fries", cuisine: "Continental" },
      { id: "f4", name: "Loaded Fries", price: 150, isVeg: true, category: "Fries", cuisine: "Continental" },
    ],
  },
  {
    id: "garlic-bread",
    name: "Garlic Bread",
    items: [
      { id: "gb1", name: "Plain Garlic Bread", price: 100, isVeg: true, category: "Garlic Bread", cuisine: "Continental" },
      { id: "gb2", name: "Cheese Garlic Bread", price: 140, isVeg: true, category: "Garlic Bread", cuisine: "Continental" },
      { id: "gb3", name: "Stuffed Garlic Bread", price: 160, isVeg: true, category: "Garlic Bread", cuisine: "Continental" },
    ],
  },
];

export const getAllMenuItems = (): MenuItem[] => {
  return menuCategories.flatMap(category => category.items);
};
