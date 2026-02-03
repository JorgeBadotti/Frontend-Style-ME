import { NavItem, FeedbackOption, ClosetCategory, AppRoute } from './types'; // FIX: Added AppRoute to import

export const RoutePath = {
  Welcome: '/',
  Login: '/login',
  Home: '/home',
  Closet: '/closet',
  WardrobeGrid: '/closet/category/:categoryName',
  ItemCapture: '/studio/item-capture',
  QRScanner: '/studio/qr-scanner',
  BodyPhotoCapture: '/studio/body-capture',
  Profile: '/profile',
  Bag: '/bag',
  LookDetail: '/look/:lookId',
  ItemDetail: '/item/:itemId',
  PartnerBrands: '/partner-brands',
  StoreCatalog: '/store',
  Feedback: '/feedback'
};

export const BOTTOM_NAV_ITEMS: NavItem[] = [
  { name: 'Home', icon: 'home', route: AppRoute.HOME },
  { name: 'Closet', icon: 'checkroom', route: AppRoute.CLOSET },
  { name: 'Studio', icon: 'photo_camera', route: RoutePath.ItemCapture }, // Placeholder for Studio entry
  { name: 'Plan', icon: 'calendar_month', route: AppRoute.PLAN },
  { name: 'Profile', icon: 'person', route: AppRoute.PROFILE },
];

export const MOCK_LOOK_SUGGESTION = {
  id: 'look1',
  name: 'Midnight Minimalist',
  occasion: 'Suggested for Tonight',
  matchScore: 94,
  reasoning: `Based on your preference for monochromatic silhouettes and the current forecast of 18°C. This look integrates your silk textures with architectural outerwear for an elevated evening profile.`,
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCltnMpvuznHnzsZyT25M7ZRB37PzP6c3N3G-aOqCClIJB9gN6qGqX5rN362zclRU_GJjegf4Y9d0ODwVGpRwO7lKjz0VCCkucpbVz2YFjPDF_vxz--UHvhQIcSUOkqiptCoCn7e2Pop6vcrfspA6dj6x-arN7gCIyINZ5IOKqDRHGJFVwoaEkXWls49xmBnlftxG8UE-i3LwZJuuYaGFN-Ansc56maJVIDMBZAWuw4mA2qbgtFu0ObKtmH0ZB603NnkwCP5wIpQGKa',
  items: [
    { id: 'item1', name: 'Architectural Blazer', category: 'Outerwear', imageUrl: 'https://picsum.photos/80/80?random=1', source: 'store' },
    { id: 'item2', name: 'Silk Slip Trousers', category: 'Bottoms', imageUrl: 'https://picsum.photos/80/80?random=2', source: 'mine' },
  ],
  tags: ['monochromatic', 'evening', 'silk', 'architectural'],
};

export const MOCK_WEATHER_INFO = {
  temperature: 22,
  condition: 'Partly Cloudy',
  recommendation: 'Light layers',
};

// Explicitly type MOCK_CLOSET_CATEGORIES to ensure source property is correctly inferred
export const MOCK_CLOSET_CATEGORIES: ClosetCategory[] = [
  { name: 'Headwear', items: [
    { id: 'hat1', name: 'Fedora', imageUrl: 'https://picsum.photos/80/80?random=11', category: 'Headwear', source: 'mine', selected: true },
    { id: 'hat2', name: 'Beanie', imageUrl: 'https://picsum.photos/80/80?random=12', category: 'Headwear', source: 'mine', selected: false },
    { id: 'hat3', name: 'Headband', imageUrl: 'https://picsum.photos/80/80?random=13', category: 'Headwear', source: 'store', selected: false },
  ]},
  { name: 'Outerwear', items: [
    { id: 'coat1', name: 'Trench', imageUrl: 'https://picsum.photos/80/80?random=21', category: 'Outerwear', source: 'mine', selected: false },
    { id: 'coat2', name: 'Blazer', imageUrl: 'https://picsum.photos/80/80?random=22', category: 'Outerwear', source: 'mine', selected: true },
    { id: 'coat3', name: 'Leather', imageUrl: 'https://picsum.photos/80/80?random=23', category: 'Outerwear', source: 'store', selected: false },
  ]},
  { name: 'Tops', items: [
    { id: 'top1', name: 'Silk Shirt', imageUrl: 'https://picsum.photos/80/80?random=31', category: 'Tops', source: 'mine', selected: false },
    { id: 'top2', name: 'Sweater', imageUrl: 'https://picsum.photos/80/80?random=32', category: 'Tops', source: 'mine', selected: true },
    { id: 'top3', name: 'T-Shirt', imageUrl: 'https://picsum.photos/80/80?random=33', category: 'Tops', source: 'store', selected: false },
  ]},
  { name: 'Bottoms', items: [
    { id: 'bot1', name: 'Jeans', imageUrl: 'https://picsum.photos/80/80?random=41', category: 'Bottoms', source: 'mine', selected: false },
    { id: 'bot2', name: 'Skirt', imageUrl: 'https://picsum.photos/80/80?random=42', category: 'Bottoms', source: 'mine', selected: false },
    { id: 'bot3', name: 'Pants', imageUrl: 'https://picsum.photos/80/80?random=43', category: 'Bottoms', source: 'store', selected: false },
  ]},
  { name: 'Footwear', items: [
    { id: 'shoe1', name: 'Heels', imageUrl: 'https://picsum.photos/80/80?random=51', category: 'Footwear', source: 'mine', selected: false },
    { id: 'shoe2', name: 'Boots', imageUrl: 'https://picsum.photos/80/80?random=52', category: 'Footwear', source: 'mine', selected: false },
    { id: 'shoe3', name: 'Sneakers', imageUrl: 'https://picsum.photos/80/80?random=53', category: 'Footwear', source: 'store', selected: false },
  ]},
  { name: 'Accessories', items: [
    { id: 'acc1', name: 'Bag', imageUrl: 'https://picsum.photos/80/80?random=61', category: 'Accessories', source: 'mine', selected: false },
    { id: 'acc2', name: 'Scarf', imageUrl: 'https://picsum.photos/80/80?random=62', category: 'Accessories', source: 'mine', selected: false },
    { id: 'acc3', name: 'Jewelry', imageUrl: 'https://picsum.photos/80/80?random=63', category: 'Accessories', source: 'store', selected: false },
  ]},
];

export const MOCK_BAG_ITEMS = [
  { id: 'bagItem1', name: 'Classic Tote', price: 1200, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1N89bWFIoEUXS2JaIZC8hhFwUhG-q6Tw0if62S5Jy42HBIiU3OmXcPs5odbYdLN0J-IO09LfWPtLkmEaWa1tgGQzG4U1q-EWQ7W_f4KEjGya27dZcZr_ymkJag8efWKSBZFFgsFchgeoWGlGDX56q-qe3Ff2ZbuXx6aYfIwpUhjBPhZ35fqEFuDOuilKjqPz-bhkcfsamwlR5MlJDhGAh5dB7dgwdUv4VGZazHl36Kxqs5AGN0FrOoClBQaunaxepKGUWZjNoMj7i', quantity: 1 },
  { id: 'bagItem2', name: 'Silk Blouse', price: 450, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAb3GOnQDA5oOyQ5EyyN4qAAZDxzyizNlPRwawobnjvw6ohmgobmvph9kst_zdyjo8q0id2anrhjjdvzzucry4l9miipagci_lyga9m4zkg6izsbnmgem_fvu_0l9ovrnyelmyxgdtu7xgadpsgxgi_yhwbq3zdorp_clv-ohfp4orkxxv_m3k6gvvezbmu-wiqc9r2jn0vfilpyah1jevzxia6dhfrj2y9s-fypi_zne_n4k9yeidlran-zb_lz46himdac_f6kyn6', quantity: 1 },
  { id: 'bagItem3', name: 'Heels', price: 650, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALzoRINsz3WmmcECu5wa_kWIVQxoEKEyjKnLSKqMV2M6RwqRzgWgKJ5Adwz2vwaUr_27X_xgxXOape44un7tYVD7tASf-8qGRDAzxP4j6rE4j3o_1JUFccvcgPqdjljr2n6hh7yVLSiHgozaDPsGXgi_yHwBq3zdOrp_ClV-oHfP4orKXXv_m3K6gvVeZbm-wiQc9r2jn0vfilpyah1jevzxia6dhfrj2y9s-fypi_zne_n4k9yeidlran-zb_lz46himdac_f6kyn6', quantity: 1 },
];

export const MOCK_STORE_ITEMS = [
  { id: 'store1', name: 'Classic White Tee', category: 'Tops', imageUrl: 'https://picsum.photos/200/250?random=71', price: 25.00, sku: '12345', source: 'store' },
  { id: 'store2', name: 'Slim Fit Jeans', category: 'Bottoms', imageUrl: 'https://picsum.photos/200/250?random=72', price: 60.00, sku: '67890', source: 'store' },
  { id: 'store3', name: 'Leather Jacket', category: 'Outerwear', imageUrl: 'https://picsum.photos/200/250?random=73', price: 150.00, sku: '11223', source: 'store' },
  { id: 'store4', name: 'Summer Dress', category: 'Dresses', imageUrl: 'https://picsum.photos/200/250?random=74', price: 45.00, sku: '44556', source: 'store' },
];

export const MOCK_BRANDS = [
  { id: 'brand1', name: 'Acne Studios' },
  { id: 'brand2', name: 'Alaïa', isFavorite: true },
  { id: 'brand3', name: 'Alexander McQueen' },
  { id: 'brand4', name: 'Balenciaga', isFavorite: true },
  { id: 'brand5', name: 'Bottega Veneta' },
  { id: 'brand6', name: 'Burberry' },
  { id: 'brand7', name: 'Cartier' },
  { id: 'brand8', name: 'Chloé', isFavorite: true },
];

export const MOCK_ITEM_DETAILS = {
  id: 'item-details-1',
  name: 'Champagne Silk Shirt',
  material: '100% Organic Silk',
  fit: 'Slim Fit',
  color: 'Champagne', // Represented as hex in UI, but string here
  care: 'Dry Clean Only',
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_K8ofCccmRbJKjMUiNCm69kYecfwuryfMRo9jEyXvp22bsL32dwj1CRM0vKnxQm0-9avmmiqbAOavXs91s_f4zDr83YjLG8Br3K0PgIgiWikQNjF91h7aFm8jpFtmdxzmUpC5NyyhLFoJX9kNqjxs9QELdPWisYbYlDA8jH1tuGnXikjfRchwTxBI2u-WnGWHCaqPDkiC0p-at9ZOr5bxojFaD0NqfeyM-fBA3mWX_gvVeySByWYeCiZH31Gy89IQoOUWS4IPJrFc'
};

export const MOCK_FEEDBACK_OPTIONS: FeedbackOption[] = [
  { label: 'Not my style', value: 'not_my_style' },
  { label: 'Body Type', value: 'body_type' },
  { label: 'Colors/Prints', value: 'colors_prints' },
  { label: 'Wrong occasion', value: 'wrong_occasion' },
  { label: 'Already wore this', value: 'already_wore_this' },
];

export const MOCK_GENAI_API_KEY = process.env.API_KEY || 'YOUR_GEMINI_API_KEY_HERE';