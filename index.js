// =========================================================
// AMAZÓN – PRODUCT DATA
// Uses Unsplash placeholder images & emoji fallbacks
// =========================================================

const PRODUCTS = [
  // ── ELECTRONICS ─────────────────────────────────────
  {
    id: 1,
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    brand: "Sony",
    category: "electronics",
    price: 24999,
    originalPrice: 34990,
    rating: 4.8,
    reviews: 12480,
    badge: "Best Seller",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    emoji: "🎧",
    delivery: "FREE delivery Tomorrow",
    prime: true
  },
  {
    id: 2,
    name: "Apple iPhone 15 Pro (256GB) – Natural Titanium",
    brand: "Apple",
    category: "electronics",
    price: 134900,
    originalPrice: 149900,
    rating: 4.7,
    reviews: 8930,
    badge: "Prime",
    badgeType: "prime",
    image: "https://images.unsplash.com/photo-1696426057273-a67fe86f51f0?w=300&h=300&fit=crop",
    emoji: "📱",
    delivery: "FREE delivery Today",
    prime: true
  },
  {
    id: 3,
    name: "Samsung 65-inch 4K QLED Smart TV",
    brand: "Samsung",
    category: "electronics",
    price: 74999,
    originalPrice: 109999,
    rating: 4.6,
    reviews: 4201,
    badge: "32% off",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f4834b?w=300&h=300&fit=crop",
    emoji: "📺",
    delivery: "FREE delivery in 3 days",
    prime: true
  },
  {
    id: 4,
    name: "Apple MacBook Air M3 (15-inch, 8GB RAM, 256GB SSD)",
    brand: "Apple",
    category: "electronics",
    price: 134900,
    originalPrice: 149900,
    rating: 4.9,
    reviews: 5621,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
    emoji: "💻",
    delivery: "FREE delivery Tomorrow",
    prime: true
  },
  {
    id: 5,
    name: "Canon EOS R50 Mirrorless Camera with 18-45mm Lens",
    brand: "Canon",
    category: "electronics",
    price: 69990,
    originalPrice: 79990,
    rating: 4.7,
    reviews: 3120,
    badge: "Deal",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop",
    emoji: "📷",
    delivery: "FREE delivery in 2 days",
    prime: true
  },
  {
    id: 6,
    name: "Logitech MX Master 3S Wireless Mouse",
    brand: "Logitech",
    category: "electronics",
    price: 8995,
    originalPrice: 10495,
    rating: 4.8,
    reviews: 9870,
    badge: "Best Seller",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop",
    emoji: "🖱️",
    delivery: "FREE delivery Tomorrow",
    prime: true
  },

  // ── CLOTHING ─────────────────────────────────────────
  {
    id: 7,
    name: "Men's Classic Fit Oxford Shirt – Navy Blue",
    brand: "Arrow",
    category: "clothing",
    price: 1299,
    originalPrice: 2499,
    rating: 4.3,
    reviews: 6780,
    badge: "48% off",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop",
    emoji: "👔",
    delivery: "FREE delivery Tomorrow",
    prime: false
  },
  {
    id: 8,
    name: "Women's Floral Wrap Midi Dress",
    brand: "Libas",
    category: "clothing",
    price: 899,
    originalPrice: 1799,
    rating: 4.4,
    reviews: 3200,
    badge: "50% off",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop",
    emoji: "👗",
    delivery: "FREE delivery in 2 days",
    prime: false
  },
  {
    id: 9,
    name: "Nike Air Max 270 Running Shoes – White/Black",
    brand: "Nike",
    category: "clothing",
    price: 10995,
    originalPrice: 12495,
    rating: 4.6,
    reviews: 8910,
    badge: "Prime",
    badgeType: "prime",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    emoji: "👟",
    delivery: "FREE delivery Tomorrow",
    prime: true
  },

  // ── BOOKS ─────────────────────────────────────────────
  {
    id: 10,
    name: "Atomic Habits – James Clear (Paperback)",
    brand: "Penguin",
    category: "books",
    price: 299,
    originalPrice: 699,
    rating: 4.9,
    reviews: 42000,
    badge: "Best Seller",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=300&fit=crop",
    emoji: "📖",
    delivery: "FREE delivery Tomorrow",
    prime: false
  },
  {
    id: 11,
    name: "The Psychology of Money – Morgan Housel",
    brand: "Jaico Publishing",
    category: "books",
    price: 249,
    originalPrice: 399,
    rating: 4.8,
    reviews: 28000,
    badge: "Deal",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop",
    emoji: "💰",
    delivery: "FREE delivery Tomorrow",
    prime: false
  },
  {
    id: 12,
    name: "Rich Dad Poor Dad – Robert T. Kiyosaki",
    brand: "Manjul Publishing",
    category: "books",
    price: 199,
    originalPrice: 350,
    rating: 4.7,
    reviews: 55000,
    badge: "43% off",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=300&fit=crop",
    emoji: "📚",
    delivery: "FREE delivery in 2 days",
    prime: false
  },

  // ── HOME ─────────────────────────────────────────────
  {
    id: 13,
    name: "Philips Air Fryer HD9200 (1400W, 4.1L)",
    brand: "Philips",
    category: "home",
    price: 6999,
    originalPrice: 9999,
    rating: 4.5,
    reviews: 18400,
    badge: "30% off",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=300&h=300&fit=crop",
    emoji: "🍳",
    delivery: "FREE delivery Tomorrow",
    prime: true
  },
  {
    id: 14,
    name: "Dyson V12 Detect Slim Cordless Vacuum Cleaner",
    brand: "Dyson",
    category: "home",
    price: 47900,
    originalPrice: 56900,
    rating: 4.7,
    reviews: 4210,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    emoji: "🧹",
    delivery: "FREE delivery Tomorrow",
    prime: true
  },
  {
    id: 15,
    name: "Saatva Classic Pillow Set (Standard, Firm Support)",
    brand: "Saatva",
    category: "home",
    price: 3499,
    originalPrice: 4999,
    rating: 4.6,
    reviews: 2100,
    badge: "30% off",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=300&fit=crop",
    emoji: "🛏️",
    delivery: "FREE delivery in 2 days",
    prime: true
  },

  // ── SPORTS ───────────────────────────────────────────
  {
    id: 16,
    name: "Nivia Football Storm (Size 5, Water-Resistant)",
    brand: "Nivia",
    category: "sports",
    price: 549,
    originalPrice: 999,
    rating: 4.3,
    reviews: 5600,
    badge: "45% off",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=300&h=300&fit=crop",
    emoji: "⚽",
    delivery: "FREE delivery in 2 days",
    prime: false
  },
  {
    id: 17,
    name: "Lifelong Yoga Mat with Carrying Bag (6mm, Anti-Slip)",
    brand: "Lifelong",
    category: "sports",
    price: 599,
    originalPrice: 1299,
    rating: 4.4,
    reviews: 12300,
    badge: "54% off",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=300&h=300&fit=crop",
    emoji: "🧘",
    delivery: "FREE delivery Tomorrow",
    prime: false
  },
  {
    id: 18,
    name: "Strauss Adjustable Dumbbell Set (2×10 kg)",
    brand: "Strauss",
    category: "sports",
    price: 1899,
    originalPrice: 3500,
    rating: 4.5,
    reviews: 8900,
    badge: "Deal",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=300&fit=crop",
    emoji: "🏋️",
    delivery: "FREE delivery in 2 days",
    prime: false
  }
];

// Helper: star string
function getStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

// Helper: format INR
function formatPrice(n) {
  return n.toLocaleString('en-IN');
}

// Helper: savings %
function savingsPct(orig, curr) {
  return Math.round((orig - curr) / orig * 100);
}
// =========================================================
// AMAZÓN – CART ENGINE  (shared across pages)
// =========================================================

const Cart = (() => {
  const KEY = 'amazon_clone_cart';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch { return []; }
  }

  function save(items) {
    localStorage.setItem(KEY, JSON.stringify(items));
    updateBadge();
  }

  function getItems() { return load(); }

  function addItem(productId, qty = 1) {
    const items = load();
    const idx   = items.findIndex(i => i.id === productId);
    if (idx >= 0) {
      items[idx].qty += qty;
    } else {
      items.push({ id: productId, qty });
    }
    save(items);
    showToast('✓ Added to cart!');
  }

  function removeItem(productId) {
    save(load().filter(i => i.id !== productId));
  }

  function setQty(productId, qty) {
    if (qty < 1) { removeItem(productId); return; }
    const items = load();
    const idx   = items.findIndex(i => i.id === productId);
    if (idx >= 0) { items[idx].qty = qty; save(items); }
  }

  function clear() { save([]); }

  function count() {
    return load().reduce((s, i) => s + i.qty, 0);
  }

  function subtotal() {
    return load().reduce((s, item) => {
      const p = PRODUCTS.find(p => p.id === item.id);
      return s + (p ? p.price * item.qty : 0);
    }, 0);
  }

  function updateBadge() {
    const el = document.getElementById('cartCount');
    if (el) el.textContent = count();
  }

  return { getItems, addItem, removeItem, setQty, clear, count, subtotal, updateBadge };
})();

// ── Toast notification ────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

// Init badge on every page load
document.addEventListener('DOMContentLoaded', () => Cart.updateBadge());
// =========================================================
// AMAZÓN – HOMEPAGE APP LOGIC
// =========================================================

let currentProducts = [...PRODUCTS];
let currentCategory = 'all';
let currentSort     = 'default';

// ── Render product grid ───────────────────────────────────
function renderProducts(products) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  if (products.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#555">
        <div style="font-size:56px;margin-bottom:12px">🔍</div>
        <h3 style="font-size:20px;margin-bottom:8px">No products found</h3>
        <p style="color:#888">Try a different search or category</p>
        <button onclick="filterCategory('all')" style="margin-top:16px;background:var(--amazon-yellow);border:none;padding:10px 24px;border-radius:20px;font-size:14px;font-weight:700;cursor:pointer;">
          View All Products
        </button>
      </div>`;
    return;
  }

  grid.innerHTML = products.map(p => `
    <div class="product-card" onclick="void(0)">
      ${p.badge ? `<div class="product-badge ${p.badgeType === 'prime' ? 'prime' : p.badgeType === 'new' ? 'new' : ''}">${p.badge}</div>` : ''}

      <div class="product-img-wrap">
        <img
          src="${p.image}"
          alt="${p.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
          loading="lazy"
        />
        <span style="display:none;font-size:64px;line-height:1">${p.emoji}</span>
      </div>

      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>

        <div class="product-rating">
          <span class="stars" title="${p.rating}/5">${getStars(p.rating)}</span>
          <span class="rating-count">(${p.reviews.toLocaleString()})</span>
        </div>

        <div class="product-price-wrap">
          <div class="price-original">M.R.P: ₹${formatPrice(p.originalPrice)}</div>
          <div class="price-main"><span>₹</span>${formatPrice(p.price)}</div>
          <div class="price-savings">Save ${savingsPct(p.originalPrice, p.price)}% (₹${formatPrice(p.originalPrice - p.price)})</div>
        </div>

        ${p.prime ? `<div style="margin-top:4px"><span style="color:#00a8e1;font-weight:700;font-size:12px">prime</span> <span style="font-size:11px;color:#555">eligible</span></div>` : ''}
        <div class="delivery-badge">${p.delivery}</div>

        <button class="add-to-cart-btn" onclick="event.stopPropagation();addToCart(${p.id})">
          Add to Cart
        </button>
        <button class="buy-now-btn" onclick="event.stopPropagation();buyNow(${p.id})">
          Buy Now
        </button>
      </div>
    </div>
  `).join('');
}

// ── Filter by category ────────────────────────────────────
function filterCategory(cat) {
  currentCategory = cat;
  applyFilters();

  const titleMap = {
    all: 'All Products',
    electronics: '📱 Electronics',
    clothing: '👗 Clothing & Fashion',
    books: '📚 Books',
    home: '🏠 Home & Kitchen',
    sports: '⚽ Sports & Fitness'
  };

  const el = document.getElementById('productsTitle');
  if (el) el.textContent = titleMap[cat] || 'Products';

  // Smooth scroll to products
  const section = document.getElementById('productsSection');
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Sort products ─────────────────────────────────────────
function sortProducts(val) {
  currentSort = val;
  applyFilters();
}

// ── Search ────────────────────────────────────────────────
function searchProducts() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!query) { filterCategory('all'); return; }

  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.brand.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  currentProducts = results;
  renderProducts(applySort(results));

  const el = document.getElementById('productsTitle');
  if (el) el.textContent = `Search results for "${query}" (${results.length})`;

  document.getElementById('productsSection')?.scrollIntoView({ behavior: 'smooth' });
}

// Enter key for search
document.getElementById('searchInput')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') searchProducts();
});

// ── Apply combined filters + sort ─────────────────────────
function applyFilters() {
  let filtered = currentCategory === 'all'
    ? [...PRODUCTS]
    : PRODUCTS.filter(p => p.category === currentCategory);

  currentProducts = filtered;
  renderProducts(applySort(filtered));
}

function applySort(arr) {
  const a = [...arr];
  switch (currentSort) {
    case 'price-asc':  return a.sort((x, y) => x.price - y.price);
    case 'price-desc': return a.sort((x, y) => y.price - x.price);
    case 'rating':     return a.sort((x, y) => y.rating - x.rating);
    default:           return a;
  }
}

// ── Add to cart / Buy now ─────────────────────────────────
function addToCart(id) {
  Cart.addItem(id);
}

function buyNow(id) {
  Cart.addItem(id);
  window.location.href = 'cart.html';
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(PRODUCTS);

  // Sync login display
  const user = localStorage.getItem('amazon_user');
  const btn  = document.getElementById('loginBtn');
  if (btn && user) {
    const parsed = JSON.parse(user);
    btn.innerHTML = `
      <span class="nav-small">Hello, ${parsed.name || 'User'}</span>
      <span class="nav-bold">Account & Lists ▾</span>`;
    btn.href = '#';
    btn.onclick = () => {
      if (confirm('Sign out?')) {
        localStorage.removeItem('amazon_user');
        location.reload();
      }
    };
  }
});