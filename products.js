// ===========================
//  ALI FITNESS — PRODUCTS DATA
//  Real Pexels Images · Faisalabad · City Housing
// ===========================

const PRODUCTS = [
  {
    id: 1,
    name: "Pro Olympic Barbell Set",
    category: "Weights",
    categorySlug: "weights",
    price: 299,
    oldPrice: 399,
    image: "https://images.pexels.com/photos/4164756/pexels-photo-4164756.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Best Seller",
    rating: 4.9,
    reviews: 248,
    desc: "Professional-grade Olympic barbell with 300lb capacity. Chrome finish with aggressive knurling for maximum grip.",
    features: [
      "300lb weight capacity",
      "28mm chrome-plated bar",
      "Aggressive medium knurling",
      "Includes 2x 45lb plates",
      "Dual bearing sleeves",
      "1-year warranty"
    ]
  },
  {
    id: 2,
    name: "Elite Hex Dumbbells",
    category: "Weights",
    categorySlug: "weights",
    price: 189,
    oldPrice: 249,
    image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "New",
    rating: 4.8,
    reviews: 195,
    desc: "Premium rubber hex dumbbells with ergonomic chrome handles. Non-roll hexagonal design for safety.",
    features: [
      "Solid cast-iron core",
      "Rubber hex ends",
      "Ergonomic chrome handle",
      "Available 5–100lbs",
      "Non-slip textured grip",
      "Pair included"
    ]
  },
  {
    id: 3,
    name: "Titan Power Rack X9",
    category: "Equipment",
    categorySlug: "equipment",
    price: 849,
    oldPrice: 1099,
    image: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Premium",
    rating: 5.0,
    reviews: 87,
    desc: "Heavy-duty steel power rack with multi-grip pull-up bar, safety spotter arms and plate storage.",
    features: [
      "11-gauge steel construction",
      "1000lb tested capacity",
      "Multi-grip pull-up bar",
      "J-cup & spotter arms included",
      "Plate storage posts",
      "Band pegs included"
    ]
  },
  {
    id: 4,
    name: "Resistance Bands Pro Kit",
    category: "Accessories",
    categorySlug: "accessories",
    price: 49,
    oldPrice: 79,
    image: "https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Sale",
    rating: 4.7,
    reviews: 421,
    desc: "Complete resistance training system with 5 bands (10–150lbs). Includes handles, ankle straps and door anchor.",
    features: [
      "5 resistance levels",
      "Up to 150lbs resistance",
      "Anti-snap natural latex",
      "Padded handles included",
      "Ankle straps & door anchor",
      "Carry bag included"
    ]
  },
  {
    id: 5,
    name: "Pro Weight Lifting Gloves",
    category: "Accessories",
    categorySlug: "accessories",
    price: 39,
    oldPrice: 59,
    image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Top Rated",
    rating: 4.6,
    reviews: 583,
    desc: "Premium leather palm gloves with wrist support and gel cushioning for maximum protection during lifts.",
    features: [
      "Genuine leather palm",
      "Gel palm cushioning",
      "Wrist wrap support",
      "Breathable mesh back",
      "Anti-slip grip coating",
      "Unisex sizing XS–XXL"
    ]
  },
  {
    id: 6,
    name: "BlendMax Pro Shaker",
    category: "Nutrition",
    categorySlug: "nutrition",
    price: 29,
    oldPrice: 45,
    image: "https://images.pexels.com/photos/6542370/pexels-photo-6542370.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Popular",
    rating: 4.5,
    reviews: 1204,
    desc: "BPA-free stainless shaker with BlenderBall wire whisk, leak-proof lid and measurement markings.",
    features: [
      "BPA-free Tritan plastic",
      "BlenderBall wire whisk",
      "100% leak-proof lid",
      "700ml capacity",
      "Dishwasher safe",
      "Available in 6 colors"
    ]
  },
  {
    id: 7,
    name: "PowerGrip Exercise Mat",
    category: "Accessories",
    categorySlug: "accessories",
    price: 79,
    oldPrice: 110,
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: null,
    rating: 4.8,
    reviews: 312,
    desc: "Extra-thick 6mm natural rubber yoga & exercise mat with alignment lines and premium grip surface.",
    features: [
      "6mm extra thick cushioning",
      "Natural rubber base",
      "Alignment line printed",
      "Sweat-proof surface",
      "183cm x 61cm",
      "Carry strap included"
    ]
  },
  {
    id: 8,
    name: "Olympic Adjustable Bench",
    category: "Equipment",
    categorySlug: "equipment",
    price: 399,
    oldPrice: 529,
    image: "https://images.pexels.com/photos/4162493/pexels-photo-4162493.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Sale",
    rating: 4.9,
    reviews: 156,
    desc: "Adjustable commercial-grade weight bench with 7-position backrest, leg holder and 800lb capacity.",
    features: [
      "800lb capacity",
      "7-position adjustable backrest",
      "Commercial foam padding",
      "Leg developer attachment",
      "Transport wheels",
      "Non-slip rubber feet"
    ]
  }
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "5 Essential Exercises for Building Raw Strength",
    tag: "Training",
    excerpt: "Discover the foundational compound movements that elite powerlifters swear by to build pure, functional strength.",
    date: "June 28, 2026",
    readTime: "6 min read",
    icon: "💪",
    author: "Akbar Ali"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Pre-Workout Nutrition",
    tag: "Nutrition",
    excerpt: "What you eat before your workout can make or break your performance. Learn the science behind optimal pre-workout meals.",
    date: "June 22, 2026",
    readTime: "8 min read",
    icon: "🥗",
    author: "Akbar Ali"
  },
  {
    id: 3,
    title: "How to Choose the Right Gym Equipment for Home",
    tag: "Equipment",
    excerpt: "Setting up a home gym can be overwhelming. Our expert guide helps you choose the best equipment for your goals and budget.",
    date: "June 15, 2026",
    readTime: "10 min read",
    icon: "🏋️",
    author: "Akbar Ali"
  },
  {
    id: 4,
    title: "Recovery Science: Why Rest Days Matter More Than You Think",
    tag: "Recovery",
    excerpt: "Overtraining is a real risk. Understanding rest and recovery is just as important as the workout itself.",
    date: "June 10, 2026",
    readTime: "7 min read",
    icon: "😴",
    author: "Akbar Ali"
  },
  {
    id: 5,
    title: "Resistance Bands vs. Free Weights: The Ultimate Debate",
    tag: "Training",
    excerpt: "Which is better for building muscle? We break down the science and practical application of both training tools.",
    date: "June 3, 2026",
    readTime: "9 min read",
    icon: "🏅",
    author: "Akbar Ali"
  },
  {
    id: 6,
    title: "Beginner's 12-Week Full Body Transformation Plan",
    tag: "Beginner",
    excerpt: "Brand new to fitness? Follow our proven 12-week program designed to build a solid foundation of strength and endurance.",
    date: "May 27, 2026",
    readTime: "15 min read",
    icon: "🔥",
    author: "Akbar Ali"
  }
];

/* ── CART STATE ── */
let cart = JSON.parse(localStorage.getItem('alifitness_cart') || '[]');

function saveCart() {
  localStorage.setItem('alifitness_cart', JSON.stringify(cart));
}
function getCartCount() {
  return cart.reduce((t, i) => t + i.qty, 0);
}
function getCartTotal() {
  return cart.reduce((t, i) => t + (i.price * i.qty), 0);
}
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) { existing.qty += qty; }
  else { cart.push({ id: productId, name: product.name, price: product.price, image: product.image, category: product.category, qty }); }
  saveCart();
  updateCartBadge();
  showToast(product.name);
}
function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
}
function updateCartItemQty(productId, qty) {
  const item = cart.find(i => i.id === productId);
  if (item) { item.qty = Math.max(1, qty); saveCart(); }
}
function updateCartBadge() {
  document.querySelectorAll('.cart-count').forEach(b => {
    const count = getCartCount();
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}
function showToast(name) {
  const old = document.querySelector('.toast');
  if (old) old.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">✓</span>
    <div class="toast-text">
      <strong>Added to Cart</strong>
      <span>${name}</span>
    </div>`;
  document.body.appendChild(toast);
  setTimeout(() => { toast.classList.add('out'); setTimeout(() => toast.remove(), 400); }, 2800);
}
function formatPrice(p) { return `$${p.toFixed(2)}`; }
