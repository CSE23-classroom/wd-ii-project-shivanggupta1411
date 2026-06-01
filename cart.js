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
// AMAZÓN – CART PAGE LOGIC
// =========================================================

const PROMO_CODES = {
  'SAVE10': 10,
  'AMAZON20': 20,
  'WELCOME15': 15,
  'FLAT50': 50
};

let appliedPromo = null;

// ── Render cart items ─────────────────────────────────────
function renderCart() {
  const items    = Cart.getItems();
  const listEl   = document.getElementById('cartItemsList');
  const emptyEl  = document.getElementById('emptyCart');
  const cartPage = document.querySelector('.cart-page');

  if (!items.length) {
    if (cartPage)  cartPage.classList.add('hidden');
    if (emptyEl)   emptyEl.classList.remove('hidden');
    return;
  }

  if (cartPage)  cartPage.classList.remove('hidden');
  if (emptyEl)   emptyEl.classList.add('hidden');

  listEl.innerHTML = items.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';

    return `
      <div class="cart-item" id="cart-item-${p.id}">
        <div class="cart-item-img">
          <img
            src="${p.image}"
            alt="${p.name}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
          />
          <span style="display:none;font-size:48px">${p.emoji}</span>
        </div>

        <div class="cart-item-info">
          <div class="cart-item-brand">${p.brand}</div>
          <div class="cart-item-name">${p.name}</div>
          <div class="in-stock-label">✓ In Stock</div>
          ${p.prime ? '<div style="color:#00a8e1;font-size:12px;font-weight:700;margin-top:4px">prime eligible</div>' : ''}
          <div style="font-size:12px;color:#888;margin-top:2px">${p.delivery}</div>

          <div class="cart-item-controls">
            <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
            <span class="qty-display" id="qty-${p.id}">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${p.id}, +1)">+</button>
            <button class="remove-btn" onclick="removeFromCart(${p.id})">Delete</button>
            <button class="remove-btn" onclick="saveForLater(${p.id})">Save for later</button>
          </div>
        </div>

        <div class="cart-item-price-wrap">
          <div class="cart-item-orig">₹${formatPrice(p.originalPrice)}</div>
          <div class="cart-item-price">₹${formatPrice(p.price * item.qty)}</div>
          ${item.qty > 1 ? `<div style="font-size:11px;color:#888">₹${formatPrice(p.price)} each</div>` : ''}
          <div style="font-size:12px;color:#b12704;margin-top:4px;font-weight:600">
            You save ₹${formatPrice((p.originalPrice - p.price) * item.qty)}
          </div>
        </div>
      </div>
    `;
  }).join('');

  updateSummary();
}

// ── Change quantity ───────────────────────────────────────
function changeQty(id, delta) {
  const items = Cart.getItems();
  const item  = items.find(i => i.id === id);
  if (!item) return;
  const newQty = item.qty + delta;
  if (newQty < 1) {
    if (confirm('Remove this item from cart?')) Cart.removeItem(id);
  } else {
    Cart.setQty(id, newQty);
  }
  renderCart();
}

// ── Remove item ───────────────────────────────────────────
function removeFromCart(id) {
  Cart.removeItem(id);
  renderCart();
  showToast('Item removed from cart');
}

// ── Save for later (mock) ─────────────────────────────────
function saveForLater(id) {
  Cart.removeItem(id);
  renderCart();
  showToast('📌 Saved for later');
}

// ── Update summary box ────────────────────────────────────
function updateSummary() {
  const items   = Cart.getItems();
  const count   = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = Cart.subtotal();

  let discount = 0;
  if (appliedPromo) {
    discount = Math.round(subtotal * appliedPromo / 100);
  }

  const total = subtotal - discount;

  document.getElementById('summaryCount').textContent    = count;
  document.getElementById('summarySubtotal').textContent = formatPrice(subtotal);
  document.getElementById('summaryTotal').textContent    = formatPrice(total);

  const promoRow = document.getElementById('promoRow');
  if (promoRow) {
    promoRow.style.display = appliedPromo ? 'flex' : 'none';
    document.getElementById('promoSavings').textContent = `-₹${formatPrice(discount)}`;
  }
}

// ── Promo code ────────────────────────────────────────────
function applyPromo() {
  const code = document.getElementById('promoCode').value.trim().toUpperCase();
  if (!code) { showToast('Enter a promo code'); return; }

  if (PROMO_CODES[code]) {
    appliedPromo = PROMO_CODES[code];
    showToast(`✓ Promo "${code}" applied — ${appliedPromo}% off!`);
    updateSummary();
  } else {
    showToast('❌ Invalid promo code');
    appliedPromo = null;
    updateSummary();
  }
}

// ── Checkout ──────────────────────────────────────────────
function proceedCheckout() {
  const user = localStorage.getItem('amazon_user');
  if (!user) {
    if (confirm('Please sign in to checkout. Go to login page?')) {
      window.location.href = 'login.html';
    }
    return;
  }

  const orderId = Math.floor(100000 + Math.random() * 900000);
  document.getElementById('orderId').textContent = orderId;
  document.getElementById('checkoutModal').classList.remove('hidden');
}

function closeModal() {
  Cart.clear();
  document.getElementById('checkoutModal').classList.add('hidden');
  window.location.href = 'index.html';
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  Cart.updateBadge();

  // Hint about promo codes
  const hint = document.createElement('p');
  hint.style.cssText = 'font-size:11px;color:#888;text-align:center;margin-top:6px';
  hint.textContent = 'Try: SAVE10, AMAZON20, WELCOME15';
  const promoInput = document.querySelector('.promo-input');
  if (promoInput) promoInput.after(hint);
});