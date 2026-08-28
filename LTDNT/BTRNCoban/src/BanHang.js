import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";

/* =========================================================
   DATA
========================================================= */

const PRODUCTS = [
  {
    id: 1,
    name: "Áo thun Basic Premium",
    category: "Thời trang",
    price: 199000,
    oldPrice: 299000,
    rating: 4.8,
    sold: 1250,
    color: "#E8F0FE",
    emoji: "👕",
    description:
      "Áo thun cotton cao cấp, mềm mại, thoáng mát và phù hợp mặc hàng ngày.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Giày Sneaker Urban",
    category: "Giày dép",
    price: 699000,
    oldPrice: 899000,
    rating: 4.9,
    sold: 892,
    color: "#FFF1E6",
    emoji: "👟",
    description:
      "Giày sneaker phong cách hiện đại, đế cao su êm ái, phù hợp đi học và đi chơi.",
    sizes: ["39", "40", "41", "42", "43"],
  },
  {
    id: 3,
    name: "Tai nghe Bluetooth Pro",
    category: "Điện tử",
    price: 899000,
    oldPrice: 1299000,
    rating: 4.7,
    sold: 678,
    color: "#E8F8EF",
    emoji: "🎧",
    description:
      "Tai nghe không dây chống ồn, pin lâu và âm thanh chất lượng cao.",
    sizes: [],
  },
  {
    id: 4,
    name: "Ba lô Laptop Premium",
    category: "Phụ kiện",
    price: 459000,
    oldPrice: 599000,
    rating: 4.8,
    sold: 531,
    color: "#F1EAFE",
    emoji: "🎒",
    description:
      "Ba lô chống nước, ngăn laptop riêng biệt, thiết kế tiện dụng.",
    sizes: [],
  },
  {
    id: 5,
    name: "Đồng hồ Smart Watch X",
    category: "Điện tử",
    price: 1299000,
    oldPrice: 1699000,
    rating: 4.9,
    sold: 412,
    color: "#E9F7FF",
    emoji: "⌚",
    description:
      "Đồng hồ thông minh theo dõi sức khỏe, thể thao và thông báo điện thoại.",
    sizes: [],
  },
  {
    id: 6,
    name: "Kính mát Classic",
    category: "Phụ kiện",
    price: 299000,
    oldPrice: 399000,
    rating: 4.6,
    sold: 321,
    color: "#FFF8D9",
    emoji: "🕶️",
    description:
      "Kính mát phong cách cổ điển, chống UV và phù hợp nhiều kiểu khuôn mặt.",
    sizes: [],
  },
  {
    id: 7,
    name: "Quần Jeans Slim Fit",
    category: "Thời trang",
    price: 499000,
    oldPrice: 649000,
    rating: 4.8,
    sold: 756,
    color: "#E9F1FF",
    emoji: "👖",
    description:
      "Quần jeans form slim hiện đại, chất vải co giãn thoải mái.",
    sizes: ["28", "29", "30", "31", "32", "34"],
  },
  {
    id: 8,
    name: "Túi đeo chéo Mini",
    category: "Phụ kiện",
    price: 259000,
    oldPrice: 359000,
    rating: 4.7,
    sold: 625,
    color: "#FFE9EF",
    emoji: "👜",
    description:
      "Túi đeo chéo nhỏ gọn, thời trang, phù hợp đi chơi và du lịch.",
    sizes: [],
  },
  {
    id: 9,
    name: "Bàn phím Mechanical RGB",
    category: "Điện tử",
    price: 799000,
    oldPrice: 999000,
    rating: 4.9,
    sold: 245,
    color: "#EDEBFF",
    emoji: "⌨️",
    description:
      "Bàn phím cơ RGB, switch nhanh, phù hợp gaming và làm việc.",
    sizes: [],
  },
  {
    id: 10,
    name: "Áo khoác Bomber",
    category: "Thời trang",
    price: 599000,
    oldPrice: 799000,
    rating: 4.8,
    sold: 368,
    color: "#E9FFF4",
    emoji: "🧥",
    description:
      "Áo khoác bomber trẻ trung, chất liệu nhẹ và giữ ấm tốt.",
    sizes: ["M", "L", "XL"],
  },
  {
    id: 11,
    name: "Loa Bluetooth Mini",
    category: "Điện tử",
    price: 349000,
    oldPrice: 499000,
    rating: 4.7,
    sold: 489,
    color: "#FFF0E8",
    emoji: "🔊",
    description:
      "Loa Bluetooth nhỏ gọn, âm thanh mạnh mẽ, thời lượng pin dài.",
    sizes: [],
  },
  {
    id: 12,
    name: "Ví da nam Classic",
    category: "Phụ kiện",
    price: 229000,
    oldPrice: 329000,
    rating: 4.8,
    sold: 890,
    color: "#F6EBDD",
    emoji: "👛",
    description:
      "Ví da thiết kế tối giản, nhiều ngăn tiện dụng và bền đẹp.",
    sizes: [],
  },
];

const CATEGORIES = [
  { name: "Tất cả", emoji: "✨" },
  { name: "Thời trang", emoji: "👕" },
  { name: "Giày dép", emoji: "👟" },
  { name: "Điện tử", emoji: "📱" },
  { name: "Phụ kiện", emoji: "🎒" },
];

/* =========================================================
   HELPERS
========================================================= */

const money = (value) =>
  new Intl.NumberFormat("vi-VN").format(value) + "đ";

const discount = (oldPrice, price) =>
  Math.round(((oldPrice - price) / oldPrice) * 100);

/* =========================================================
   APP
========================================================= */

export default function BanHang() { 
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tất cả");
  const [sort, setSort] = useState("popular");

  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutVisible, setCheckoutVisible] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
  });

  const [payment, setPayment] = useState("cod");
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  /* ---------------- FILTER ---------------- */

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter((p) => {
      const matchCategory =
        category === "Tất cả" || p.category === category;

      const keyword = search.toLowerCase().trim();

      const matchSearch =
        !keyword ||
        p.name.toLowerCase().includes(keyword) ||
        p.category.toLowerCase().includes(keyword);

      return matchCategory && matchSearch;
    });

    if (sort === "priceAsc") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "priceDesc") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "popular") {
      result.sort((a, b) => b.sold - a.sold);
    }

    return result;
  }, [search, category, sort]);

  /* ---------------- CART ---------------- */

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal === 0 ? 0 : subtotal >= 500000 ? 0 : 30000;

  const discountAmount =
    couponApplied && subtotal >= 300000 ? Math.round(subtotal * 0.1) : 0;

  const total = subtotal + shipping - discountAmount;

  const addToCart = (product, quantity = 1) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...current, { ...product, quantity }];
    });

    setSelectedProduct(null);
  };

  const updateQuantity = (id, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  /* ---------------- FAVORITES ---------------- */

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  /* ---------------- CHECKOUT ---------------- */

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SALE10") {
      if (subtotal < 300000) {
        Alert.alert(
          "Chưa đủ điều kiện",
          "Đơn hàng tối thiểu 300.000đ để sử dụng mã SALE10."
        );
        return;
      }

      setCouponApplied(true);
      Alert.alert("Thành công", "Đã giảm 10% cho đơn hàng.");
    } else {
      setCouponApplied(false);
      Alert.alert("Mã không hợp lệ", "Hãy thử mã SALE10.");
    }
  };

  const openCheckout = () => {
    if (cart.length === 0) {
      Alert.alert("Giỏ hàng trống", "Hãy thêm sản phẩm trước khi thanh toán.");
      return;
    }

    setCheckoutVisible(true);
  };

  const placeOrder = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      Alert.alert(
        "Thiếu thông tin",
        "Vui lòng nhập họ tên, số điện thoại và địa chỉ."
      );
      return;
    }

    const order = {
      id: "DH" + Date.now().toString().slice(-8),
      items: [...cart],
      total,
      date: new Date().toLocaleString("vi-VN"),
      payment,
      customer: { ...customer },
      status: "Đang xử lý",
    };

    setOrders((current) => [order, ...current]);
    setCart([]);
    setCoupon("");
    setCouponApplied(false);
    setCheckoutVisible(false);
    setPage("orders");

    Alert.alert(
      "🎉 Đặt hàng thành công",
      `Mã đơn hàng của bạn là ${order.id}`
    );
  };

  /* =========================================================
     HEADER
  ========================================================= */

  const Header = () => (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <TouchableOpacity
          style={styles.logoBox}
          onPress={() => {
            setPage("home");
            setSearch("");
            setCategory("Tất cả");
          }}
        >
          <View style={styles.logoIcon}>
            <Text style={styles.logoEmoji}>🛍️</Text>
          </View>

          <View>
            <Text style={styles.logo}>SHOPMAX</Text>
            <Text style={styles.logoSub}>MUA SẮM THÔNG MINH</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>⌕</Text>

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Tìm kiếm sản phẩm..."
            placeholderTextColor="#9CA3AF"
            style={styles.searchInput}
            onFocus={() => setPage("products")}
          />

          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch("")}>
              <Text style={styles.clearSearch}>×</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.headerActions}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => setPage("favorites")}
          >
            <Text style={styles.headerIcon}>♡</Text>
            <Text style={styles.headerLabel}>Yêu thích</Text>
            {favorites.length > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{favorites.length}</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => setPage("cart")}
          >
            <Text style={styles.headerIcon}>🛒</Text>
            <Text style={styles.headerLabel}>Giỏ hàng</Text>
            {cartCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const Navigation = () => (
    <View style={styles.nav}>
      <View style={styles.navInner}>
        {[
          ["home", "⌂", "Trang chủ"],
          ["products", "▦", "Sản phẩm"],
          ["favorites", "♡", "Yêu thích"],
          ["cart", "🛒", "Giỏ hàng"],
          ["orders", "▤", "Đơn hàng"],
        ].map(([key, icon, label]) => (
          <TouchableOpacity
            key={key}
            style={[styles.navItem, page === key && styles.navItemActive]}
            onPress={() => setPage(key)}
          >
            <Text
              style={[
                styles.navIcon,
                page === key && styles.navTextActive,
              ]}
            >
              {icon}
            </Text>

            <Text
              style={[
                styles.navText,
                page === key && styles.navTextActive,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  /* =========================================================
     PRODUCT CARD
  ========================================================= */

  const ProductCard = ({ product }) => (
    <View style={styles.productCard}>
      <TouchableOpacity
        style={[styles.productImage, { backgroundColor: product.color }]}
        onPress={() => setSelectedProduct(product)}
      >
        <Text style={styles.productEmoji}>{product.emoji}</Text>

        <View style={styles.saleBadge}>
          <Text style={styles.saleText}>
            -{discount(product.oldPrice, product.price)}%
          </Text>
        </View>

        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => toggleFavorite(product.id)}
        >
          <Text
            style={[
              styles.favoriteIcon,
              favorites.includes(product.id) && styles.favoriteActive,
            ]}
          >
            {favorites.includes(product.id) ? "♥" : "♡"}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <View style={styles.productInfo}>
        <Text style={styles.productCategory}>{product.category}</Text>

        <TouchableOpacity onPress={() => setSelectedProduct(product)}>
          <Text style={styles.productName} numberOfLines={2}>
            {product.name}
          </Text>
        </TouchableOpacity>

        <View style={styles.ratingRow}>
          <Text style={styles.star}>★</Text>
          <Text style={styles.rating}>{product.rating}</Text>
          <Text style={styles.sold}>| Đã bán {product.sold}</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>{money(product.price)}</Text>
          <Text style={styles.oldPrice}>{money(product.oldPrice)}</Text>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addToCart(product)}
        >
          <Text style={styles.addButtonText}>+ Thêm vào giỏ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  /* =========================================================
     HOME
  ========================================================= */

  const HomePage = () => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.pageContainer}
    >
      <View style={styles.hero}>
        <View style={styles.heroContent}>
          <View style={styles.heroText}>
            <Text style={styles.heroSmall}>🔥 SIÊU SALE CUỐI TUẦN</Text>

            <Text style={styles.heroTitle}>
              Mua sắm thông minh.
              {"\n"}
              Giá tốt mỗi ngày.
            </Text>

            <Text style={styles.heroDescription}>
              Hàng ngàn sản phẩm chính hãng với giá ưu đãi.
              Giao hàng nhanh toàn quốc.
            </Text>

            <TouchableOpacity
              style={styles.heroButton}
              onPress={() => {
                setPage("products");
                setCategory("Tất cả");
              }}
            >
              <Text style={styles.heroButtonText}>Mua ngay →</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.heroVisual}>
            <Text style={styles.heroEmoji}>🛍️</Text>
            <View style={styles.discountCircle}>
              <Text style={styles.discountNumber}>50%</Text>
              <Text style={styles.discountLabel}>OFF</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.features}>
        {[
          ["🚚", "Miễn phí vận chuyển", "Đơn từ 500.000đ"],
          ["🔒", "Thanh toán an toàn", "Bảo mật 100%"],
          ["↩️", "Đổi trả dễ dàng", "Trong vòng 7 ngày"],
          ["💬", "Hỗ trợ 24/7", "Luôn sẵn sàng hỗ trợ"],
        ].map(([icon, title, desc]) => (
          <View style={styles.feature} key={title}>
            <Text style={styles.featureIcon}>{icon}</Text>
            <View>
              <Text style={styles.featureTitle}>{title}</Text>
              <Text style={styles.featureDesc}>{desc}</Text>
            </View>
          </View>
        ))}
      </View>

      <SectionTitle
        title="Danh mục nổi bật"
        action="Xem tất cả"
        onPress={() => setPage("products")}
      />

      <View style={styles.categoryGrid}>
        {CATEGORIES.slice(1).map((item) => (
          <TouchableOpacity
            key={item.name}
            style={styles.categoryCard}
            onPress={() => {
              setCategory(item.name);
              setPage("products");
            }}
          >
            <Text style={styles.categoryEmoji}>{item.emoji}</Text>
            <Text style={styles.categoryName}>{item.name}</Text>
            <Text style={styles.categoryCount}>
              {PRODUCTS.filter((p) => p.category === item.name).length} sản phẩm
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <SectionTitle
        title="Sản phẩm bán chạy"
        action="Xem tất cả"
        onPress={() => setPage("products")}
      />

      <View style={styles.productGrid}>
        {PRODUCTS.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </View>
    </ScrollView>
  );

  /* =========================================================
     SECTION TITLE
  ========================================================= */

  const SectionTitle = ({ title, action, onPress }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>

      {action && (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.sectionAction}>{action} →</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  /* =========================================================
     PRODUCTS
  ========================================================= */

  const ProductsPage = () => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.pageContainer}
    >
      <View style={styles.pageTitleRow}>
        <View>
          <Text style={styles.pageTitle}>Tất cả sản phẩm</Text>
          <Text style={styles.pageSubtitle}>
            Tìm thấy {filteredProducts.length} sản phẩm
          </Text>
        </View>

        <View style={styles.sortBox}>
          {[
            ["popular", "Phổ biến"],
            ["rating", "Đánh giá"],
            ["priceAsc", "Giá thấp"],
            ["priceDesc", "Giá cao"],
          ].map(([key, label]) => (
            <TouchableOpacity
              key={key}
              style={[
                styles.sortButton,
                sort === key && styles.sortButtonActive,
              ]}
              onPress={() => setSort(key)}
            >
              <Text
                style={[
                  styles.sortText,
                  sort === key && styles.sortTextActive,
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRow}
      >
        {CATEGORIES.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={[
              styles.filterButton,
              category === item.name && styles.filterButtonActive,
            ]}
            onPress={() => setCategory(item.name)}
          >
            <Text>{item.emoji}</Text>
            <Text
              style={[
                styles.filterText,
                category === item.name && styles.filterTextActive,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {filteredProducts.length > 0 ? (
        <View style={styles.productGrid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </View>
      ) : (
        <EmptyState
          icon="🔎"
          title="Không tìm thấy sản phẩm"
          text="Hãy thử từ khóa hoặc danh mục khác."
        />
      )}
    </ScrollView>
  );

  /* =========================================================
     FAVORITES
  ========================================================= */

  const FavoritesPage = () => {
    const favoriteProducts = PRODUCTS.filter((p) =>
      favorites.includes(p.id)
    );

    return (
      <ScrollView contentContainerStyle={styles.pageContainer}>
        <Text style={styles.pageTitle}>Sản phẩm yêu thích</Text>
        <Text style={styles.pageSubtitle}>
          {favoriteProducts.length} sản phẩm
        </Text>

        {favoriteProducts.length > 0 ? (
          <View style={styles.productGrid}>
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </View>
        ) : (
          <EmptyState
            icon="♡"
            title="Chưa có sản phẩm yêu thích"
            text="Nhấn biểu tượng ♡ trên sản phẩm để lưu lại."
          />
        )}
      </ScrollView>
    );
  };

  /* =========================================================
     CART
  ========================================================= */

  const CartPage = () => (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <Text style={styles.pageTitle}>Giỏ hàng</Text>
      <Text style={styles.pageSubtitle}>
        {cartCount} sản phẩm trong giỏ hàng
      </Text>

      {cart.length === 0 ? (
        <EmptyState
          icon="🛒"
          title="Giỏ hàng đang trống"
          text="Hãy chọn sản phẩm yêu thích và thêm vào giỏ hàng."
          button="Tiếp tục mua sắm"
          onPress={() => setPage("products")}
        />
      ) : (
        <View style={styles.cartLayout}>
          <View style={styles.cartItems}>
            {cart.map((item) => (
              <View style={styles.cartItem} key={item.id}>
                <View
                  style={[
                    styles.cartProductImage,
                    { backgroundColor: item.color },
                  ]}
                >
                  <Text style={styles.cartEmoji}>{item.emoji}</Text>
                </View>

                <View style={styles.cartProductInfo}>
                  <Text style={styles.productCategory}>{item.category}</Text>

                  <Text style={styles.cartProductName}>{item.name}</Text>

                  <Text style={styles.cartPrice}>{money(item.price)}</Text>

                  <View style={styles.quantityRow}>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => updateQuantity(item.id, -1)}
                    >
                      <Text>−</Text>
                    </TouchableOpacity>

                    <Text style={styles.quantityText}>{item.quantity}</Text>

                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => updateQuantity(item.id, 1)}
                    >
                      <Text>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => removeFromCart(item.id)}
                      style={styles.removeButton}
                    >
                      <Text style={styles.removeText}>Xóa</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <Text style={styles.cartItemTotal}>
                  {money(item.price * item.quantity)}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.summary}>
            <Text style={styles.summaryTitle}>Tóm tắt đơn hàng</Text>

            <View style={styles.summaryLine}>
              <Text>Tạm tính</Text>
              <Text>{money(subtotal)}</Text>
            </View>

            <View style={styles.summaryLine}>
              <Text>Phí vận chuyển</Text>
              <Text>{shipping === 0 ? "Miễn phí" : money(shipping)}</Text>
            </View>

            {discountAmount > 0 && (
              <View style={styles.summaryLine}>
                <Text style={styles.discountText}>Giảm giá</Text>
                <Text style={styles.discountText}>
                  -{money(discountAmount)}
                </Text>
              </View>
            )}

            <View style={styles.divider} />

            <View style={styles.summaryTotal}>
              <Text>Tổng cộng</Text>
              <Text style={styles.totalPrice}>{money(total)}</Text>
            </View>

            <View style={styles.couponRow}>
              <TextInput
                value={coupon}
                onChangeText={setCoupon}
                placeholder="Mã giảm giá"
                placeholderTextColor="#9CA3AF"
                style={styles.couponInput}
              />

              <TouchableOpacity
                style={styles.couponButton}
                onPress={applyCoupon}
              >
                <Text style={styles.couponButtonText}>Áp dụng</Text>
              </TouchableOpacity>
            </View>

            {couponApplied && (
              <Text style={styles.couponSuccess}>
                ✓ Đã áp dụng mã SALE10
              </Text>
            )}

            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={openCheckout}
            >
              <Text style={styles.checkoutText}>Tiến hành thanh toán →</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );

  /* =========================================================
     ORDERS
  ========================================================= */

  const OrdersPage = () => (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <Text style={styles.pageTitle}>Đơn hàng của tôi</Text>
      <Text style={styles.pageSubtitle}>
        Theo dõi các đơn hàng của bạn
      </Text>

      {orders.length === 0 ? (
        <EmptyState
          icon="📦"
          title="Chưa có đơn hàng"
          text="Các đơn hàng sau khi đặt sẽ xuất hiện ở đây."
          button="Mua sắm ngay"
          onPress={() => setPage("products")}
        />
      ) : (
        <View style={styles.ordersList}>
          {orders.map((order) => (
            <View style={styles.orderCard} key={order.id}>
              <View style={styles.orderHeader}>
                <View>
                  <Text style={styles.orderId}>#{order.id}</Text>
                  <Text style={styles.orderDate}>{order.date}</Text>
                </View>

                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>{order.status}</Text>
                </View>
              </View>

              <View style={styles.orderProducts}>
                {order.items.map((item) => (
                  <View style={styles.orderProduct} key={item.id}>
                    <View
                      style={[
                        styles.orderEmojiBox,
                        { backgroundColor: item.color },
                      ]}
                    >
                      <Text>{item.emoji}</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                      <Text style={styles.orderProductName}>
                        {item.name}
                      </Text>
                      <Text style={styles.orderQuantity}>
                        x{item.quantity}
                      </Text>
                    </View>

                    <Text style={styles.orderPrice}>
                      {money(item.price * item.quantity)}
                    </Text>
                  </View>
                ))}
              </View>

              <View style={styles.orderFooter}>
                <Text>Thành tiền</Text>
                <Text style={styles.orderTotal}>{money(order.total)}</Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );

  /* =========================================================
     EMPTY STATE
  ========================================================= */

  const EmptyState = ({ icon, title, text, button, onPress }) => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyIcon}>{icon}</Text>
      <Text style={styles.emptyTitle}>{title}</Text>
      <Text style={styles.emptyText}>{text}</Text>

      {button && (
        <TouchableOpacity style={styles.emptyButton} onPress={onPress}>
          <Text style={styles.emptyButtonText}>{button}</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  /* =========================================================
     PRODUCT MODAL
  ========================================================= */

  const ProductModal = () => {
    if (!selectedProduct) return null;

    const product = selectedProduct;

    return (
      <Modal
        visible={!!selectedProduct}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedProduct(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.productModal}>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setSelectedProduct(null)}
            >
              <Text style={styles.modalCloseText}>×</Text>
            </TouchableOpacity>

            <View style={styles.modalProductLayout}>
              <View
                style={[
                  styles.modalImage,
                  { backgroundColor: product.color },
                ]}
              >
                <Text style={styles.modalEmoji}>{product.emoji}</Text>
              </View>

              <View style={styles.modalInfo}>
                <Text style={styles.modalCategory}>
                  {product.category}
                </Text>

                <Text style={styles.modalTitle}>{product.name}</Text>

                <View style={styles.ratingRow}>
                  <Text style={styles.star}>★</Text>
                  <Text style={styles.rating}>{product.rating}</Text>
                  <Text style={styles.sold}>
                    | {product.sold} đã bán
                  </Text>
                </View>

                <View style={styles.modalPriceRow}>
                  <Text style={styles.modalPrice}>
                    {money(product.price)}
                  </Text>

                  <Text style={styles.modalOldPrice}>
                    {money(product.oldPrice)}
                  </Text>

                  <Text style={styles.modalDiscount}>
                    -{discount(product.oldPrice, product.price)}%
                  </Text>
                </View>

                <Text style={styles.description}>
                  {product.description}
                </Text>

                {product.sizes.length > 0 && (
                  <View>
                    <Text style={styles.optionTitle}>Kích thước</Text>

                    <View style={styles.sizeRow}>
                      {product.sizes.map((size, index) => (
                        <View
                          key={size}
                          style={[
                            styles.sizeButton,
                            index === 1 && styles.sizeButtonSelected,
                          ]}
                        >
                          <Text
                            style={[
                              styles.sizeText,
                              index === 1 && styles.sizeTextSelected,
                            ]}
                          >
                            {size}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                )}

                <TouchableOpacity
                  style={styles.modalAddButton}
                  onPress={() => addToCart(product)}
                >
                  <Text style={styles.modalAddText}>
                    🛒 Thêm vào giỏ hàng
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  /* =========================================================
     CHECKOUT MODAL
  ========================================================= */

  const CheckoutModal = () => (
    <Modal
      visible={checkoutVisible}
      animationType="slide"
      onRequestClose={() => setCheckoutVisible(false)}
    >
      <SafeAreaView style={styles.checkoutModal}>
        <View style={styles.checkoutHeader}>
          <TouchableOpacity onPress={() => setCheckoutVisible(false)}>
            <Text style={styles.backText}>← Quay lại</Text>
          </TouchableOpacity>

          <Text style={styles.checkoutTitle}>Thanh toán</Text>

          <View style={{ width: 80 }} />
        </View>

        <ScrollView
          contentContainerStyle={styles.checkoutContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.checkoutSection}>
            <Text style={styles.checkoutSectionTitle}>
              📍 Thông tin giao hàng
            </Text>

            <Text style={styles.inputLabel}>Họ và tên *</Text>
            <TextInput
              value={customer.name}
              onChangeText={(value) =>
                setCustomer({ ...customer, name: value })
              }
              placeholder="Nguyễn Văn A"
              style={styles.input}
            />

            <Text style={styles.inputLabel}>Số điện thoại *</Text>
            <TextInput
              value={customer.phone}
              onChangeText={(value) =>
                setCustomer({ ...customer, phone: value })
              }
              placeholder="09xxxxxxxx"
              keyboardType="phone-pad"
              style={styles.input}
            />

            <Text style={styles.inputLabel}>Địa chỉ *</Text>
            <TextInput
              value={customer.address}
              onChangeText={(value) =>
                setCustomer({ ...customer, address: value })
              }
              placeholder="Số nhà, đường, phường/xã..."
              style={styles.input}
            />

            <Text style={styles.inputLabel}>Ghi chú</Text>
            <TextInput
              value={customer.note}
              onChangeText={(value) =>
                setCustomer({ ...customer, note: value })
              }
              placeholder="Ghi chú cho người giao hàng..."
              multiline
              style={[styles.input, styles.textArea]}
            />
          </View>

          <View style={styles.checkoutSection}>
            <Text style={styles.checkoutSectionTitle}>
              💳 Phương thức thanh toán
            </Text>

            {[
              ["cod", "💵", "Thanh toán khi nhận hàng"],
              ["bank", "🏦", "Chuyển khoản ngân hàng"],
              ["wallet", "📱", "Ví điện tử"],
            ].map(([key, icon, title]) => (
              <TouchableOpacity
                key={key}
                style={[
                  styles.paymentOption,
                  payment === key && styles.paymentSelected,
                ]}
                onPress={() => setPayment(key)}
              >
                <Text style={styles.paymentIcon}>{icon}</Text>

                <Text style={styles.paymentTitle}>{title}</Text>

                <View
                  style={[
                    styles.radio,
                    payment === key && styles.radioSelected,
                  ]}
                >
                  {payment === key && (
                    <View style={styles.radioDot} />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.checkoutSection}>
            <Text style={styles.checkoutSectionTitle}>
              🛍️ Đơn hàng
            </Text>

            {cart.map((item) => (
              <View style={styles.checkoutItem} key={item.id}>
                <View
                  style={[
                    styles.checkoutItemIcon,
                    { backgroundColor: item.color },
                  ]}
                >
                  <Text>{item.emoji}</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.checkoutItemName}>
                    {item.name}
                  </Text>
                  <Text style={styles.checkoutItemQty}>
                    Số lượng: {item.quantity}
                  </Text>
                </View>

                <Text style={styles.checkoutItemPrice}>
                  {money(item.price * item.quantity)}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.checkoutTotalBox}>
            <View style={styles.summaryLine}>
              <Text>Tạm tính</Text>
              <Text>{money(subtotal)}</Text>
            </View>

            <View style={styles.summaryLine}>
              <Text>Vận chuyển</Text>
              <Text>{shipping === 0 ? "Miễn phí" : money(shipping)}</Text>
            </View>

            {discountAmount > 0 && (
              <View style={styles.summaryLine}>
                <Text>Giảm giá</Text>
                <Text style={styles.discountText}>
                  -{money(discountAmount)}
                </Text>
              </View>
            )}

            <View style={styles.divider} />

            <View style={styles.summaryTotal}>
              <Text style={styles.finalTotalLabel}>Tổng thanh toán</Text>
              <Text style={styles.finalTotal}>{money(total)}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.placeOrderButton}
            onPress={placeOrder}
          >
            <Text style={styles.placeOrderText}>
              Đặt hàng • {money(total)}
            </Text>
          </TouchableOpacity>

          <Text style={styles.secureText}>
            🔒 Thông tin của bạn được bảo mật an toàn
          </Text>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );

  /* =========================================================
     FOOTER
  ========================================================= */

  const Footer = () => (
    <View style={styles.footer}>
      <View style={styles.footerInner}>
        <View style={styles.footerColumn}>
          <Text style={styles.footerLogo}>SHOPMAX</Text>
          <Text style={styles.footerText}>
            Nền tảng mua sắm trực tuyến hiện đại, tiện lợi và an toàn.
          </Text>
        </View>

        <View style={styles.footerColumn}>
          <Text style={styles.footerTitle}>Mua sắm</Text>
          <Text style={styles.footerLink}>Sản phẩm</Text>
          <Text style={styles.footerLink}>Khuyến mãi</Text>
          <Text style={styles.footerLink}>Sản phẩm mới</Text>
        </View>

        <View style={styles.footerColumn}>
          <Text style={styles.footerTitle}>Hỗ trợ</Text>
          <Text style={styles.footerLink}>Trung tâm trợ giúp</Text>
          <Text style={styles.footerLink}>Chính sách đổi trả</Text>
          <Text style={styles.footerLink}>Vận chuyển</Text>
        </View>

        <View style={styles.footerColumn}>
          <Text style={styles.footerTitle}>Liên hệ</Text>
          <Text style={styles.footerLink}>☎ 1900 1234</Text>
          <Text style={styles.footerLink}>✉ support@shopmax.vn</Text>
          <Text style={styles.footerLink}>📍 TP. Hồ Chí Minh</Text>
        </View>
      </View>

      <View style={styles.footerBottom}>
        <Text style={styles.footerCopyright}>
          © 2026 SHOPMAX. All rights reserved.
        </Text>
      </View>
    </View>
  );

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style="dark" />

      <Header />
      <Navigation />

      <View style={styles.main}>
        {page === "home" && <HomePage />}
        {page === "products" && <ProductsPage />}
        {page === "favorites" && <FavoritesPage />}
        {page === "cart" && <CartPage />}
        {page === "orders" && <OrdersPage />}
      </View>

      <Footer />

      <ProductModal />
      <CheckoutModal />
    </SafeAreaView>
  );
}

/* =========================================================
   STYLES
========================================================= */

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },

  header: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  headerInner: {
    width: "100%",
    maxWidth: 1250,
    alignSelf: "center",
    height: 82,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 28,
  },

  logoBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  logoIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#111827",
    alignItems: "center",
    justifyContent: "center",
  },

  logoEmoji: {
    fontSize: 22,
  },

  logo: {
    fontSize: 20,
    fontWeight: "900",
    color: "#111827",
    letterSpacing: 1,
  },

  logoSub: {
    fontSize: 8,
    color: "#6B7280",
    fontWeight: "700",
    letterSpacing: 1,
  },

  searchBox: {
    flex: 1,
    maxWidth: 550,
    height: 46,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  searchIcon: {
    fontSize: 27,
    color: "#6B7280",
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    height: "100%",
    fontSize: 14,
    color: "#111827",
    outlineStyle: "none",
  },

  clearSearch: {
    fontSize: 24,
    color: "#9CA3AF",
  },

  headerActions: {
    flexDirection: "row",
    gap: 8,
  },

  headerButton: {
    minWidth: 72,
    alignItems: "center",
    position: "relative",
  },

  headerIcon: {
    fontSize: 22,
    color: "#111827",
  },

  headerLabel: {
    fontSize: 11,
    color: "#6B7280",
    marginTop: 2,
  },

  badge: {
    position: "absolute",
    top: -5,
    right: 9,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#EF4444",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
  },

  nav: {
    backgroundColor: "#FFFFFF",
  },

  navInner: {
    maxWidth: 1250,
    width: "100%",
    alignSelf: "center",
    height: 52,
    flexDirection: "row",
    paddingHorizontal: 24,
  },

  navItem: {
    paddingHorizontal: 24,
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },

  navItemActive: {
    borderBottomColor: "#111827",
  },

  navIcon: {
    fontSize: 17,
    color: "#6B7280",
  },

  navText: {
    color: "#6B7280",
    fontSize: 13,
    fontWeight: "600",
  },

  navTextActive: {
    color: "#111827",
    fontWeight: "800",
  },

  main: {
    flex: 1,
  },

  pageContainer: {
    width: "100%",
    maxWidth: 1250,
    alignSelf: "center",
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 60,
  },

  hero: {
    backgroundColor: "#111827",
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 22,
  },

  heroContent: {
    minHeight: 390,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 65,
  },

  heroText: {
    flex: 1,
  },

  heroSmall: {
    color: "#FBBF24",
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 16,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 46,
    lineHeight: 54,
    fontWeight: "900",
    marginBottom: 18,
  },

  heroDescription: {
    color: "#D1D5DB",
    fontSize: 15,
    lineHeight: 24,
    maxWidth: 520,
    marginBottom: 28,
  },

  heroButton: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 10,
  },

  heroButtonText: {
    color: "#111827",
    fontWeight: "800",
    fontSize: 14,
  },

  heroVisual: {
    width: 360,
    height: 330,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  heroEmoji: {
    fontSize: 170,
  },

  discountCircle: {
    position: "absolute",
    right: 5,
    top: 35,
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#EF4444",
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "12deg" }],
  },

  discountNumber: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "900",
  },

  discountLabel: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  features: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 35,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  feature: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
    justifyContent: "center",
  },

  featureIcon: {
    fontSize: 27,
  },

  featureTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#111827",
  },

  featureDesc: {
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 3,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
    marginTop: 12,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#111827",
  },

  sectionAction: {
    fontSize: 13,
    color: "#4F46E5",
    fontWeight: "700",
  },

  categoryGrid: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 35,
  },

  categoryCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    padding: 22,
    alignItems: "center",
  },

  categoryEmoji: {
    fontSize: 42,
    marginBottom: 10,
  },

  categoryName: {
    fontSize: 15,
    fontWeight: "800",
    color: "#111827",
  },

  categoryCount: {
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 5,
  },

  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 18,
  },

  productCard: {
    width: "23.5%",
    minWidth: 210,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  productImage: {
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  productEmoji: {
    fontSize: 90,
  },

  saleBadge: {
    position: "absolute",
    left: 12,
    top: 12,
    backgroundColor: "#EF4444",
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 4,
  },

  saleText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "900",
  },

  favoriteButton: {
    position: "absolute",
    right: 11,
    top: 10,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  favoriteIcon: {
    fontSize: 20,
    color: "#6B7280",
  },

  favoriteActive: {
    color: "#EF4444",
  },

  productInfo: {
    padding: 14,
  },

  productCategory: {
    color: "#8B5CF6",
    fontSize: 10,
    fontWeight: "800",
    textTransform: "uppercase",
    marginBottom: 5,
  },

  productName: {
    color: "#111827",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    minHeight: 40,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },

  star: {
    color: "#F59E0B",
    fontSize: 13,
  },

  rating: {
    color: "#374151",
    fontSize: 11,
    fontWeight: "700",
    marginLeft: 4,
  },

  sold: {
    color: "#9CA3AF",
    fontSize: 10,
    marginLeft: 5,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 7,
    marginTop: 9,
  },

  price: {
    color: "#EF4444",
    fontSize: 17,
    fontWeight: "900",
  },

  oldPrice: {
    color: "#9CA3AF",
    fontSize: 10,
    textDecorationLine: "line-through",
  },

  addButton: {
    backgroundColor: "#111827",
    height: 38,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "800",
  },

  pageTitleRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  pageTitle: {
    fontSize: 30,
    fontWeight: "900",
    color: "#111827",
  },

  pageSubtitle: {
    color: "#9CA3AF",
    fontSize: 13,
    marginTop: 5,
  },

  sortBox: {
    flexDirection: "row",
    gap: 5,
  },

  sortButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },

  sortButtonActive: {
    backgroundColor: "#111827",
    borderColor: "#111827",
  },

  sortText: {
    color: "#6B7280",
    fontSize: 11,
    fontWeight: "700",
  },

  sortTextActive: {
    color: "#FFFFFF",
  },

  filterRow: {
    gap: 10,
    paddingBottom: 22,
  },

  filterButton: {
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  filterButtonActive: {
    backgroundColor: "#111827",
    borderColor: "#111827",
  },

  filterText: {
    color: "#6B7280",
    fontSize: 12,
    fontWeight: "700",
  },

  filterTextActive: {
    color: "#FFFFFF",
  },

  emptyState: {
    minHeight: 430,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginTop: 20,
    padding: 30,
  },

  emptyIcon: {
    fontSize: 65,
    marginBottom: 15,
    color: "#D1D5DB",
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#111827",
  },

  emptyText: {
    color: "#9CA3AF",
    fontSize: 13,
    marginTop: 8,
    textAlign: "center",
  },

  emptyButton: {
    backgroundColor: "#111827",
    paddingHorizontal: 22,
    paddingVertical: 13,
    borderRadius: 9,
    marginTop: 22,
  },

  emptyButtonText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 13,
  },

  cartLayout: {
    flexDirection: "row",
    gap: 22,
    alignItems: "flex-start",
    marginTop: 25,
  },

  cartItems: {
    flex: 1,
  },

  cartItem: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  cartProductImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  cartEmoji: {
    fontSize: 45,
  },

  cartProductInfo: {
    flex: 1,
    marginLeft: 17,
  },

  cartProductName: {
    fontSize: 16,
    fontWeight: "800",
    color: "#111827",
  },

  cartPrice: {
    color: "#EF4444",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 6,
  },

  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
  },

  quantityText: {
    width: 35,
    textAlign: "center",
    fontWeight: "800",
  },

  removeButton: {
    marginLeft: 18,
  },

  removeText: {
    color: "#EF4444",
    fontSize: 11,
    fontWeight: "700",
  },

  cartItemTotal: {
    color: "#111827",
    fontSize: 15,
    fontWeight: "900",
    marginLeft: 15,
  },

  summary: {
    width: 360,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 22,
  },

  summaryTitle: {
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 20,
  },

  summaryLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    color: "#4B5563",
    fontSize: 13,
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 15,
  },

  summaryTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalPrice: {
    color: "#EF4444",
    fontSize: 22,
    fontWeight: "900",
  },

  discountText: {
    color: "#16A34A",
    fontWeight: "700",
  },

  couponRow: {
    flexDirection: "row",
    marginTop: 22,
  },

  couponInput: {
    flex: 1,
    height: 42,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 12,
    outlineStyle: "none",
  },

  couponButton: {
    backgroundColor: "#F3F4F6",
    marginLeft: 7,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  couponButtonText: {
    fontSize: 11,
    fontWeight: "800",
  },

  couponSuccess: {
    color: "#16A34A",
    fontSize: 11,
    marginTop: 8,
  },

  checkoutButton: {
    backgroundColor: "#111827",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },

  checkoutText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
  },

  ordersList: {
    marginTop: 25,
  },

  orderCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },

  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },

  orderId: {
    fontSize: 15,
    fontWeight: "900",
  },

  orderDate: {
    color: "#9CA3AF",
    fontSize: 11,
    marginTop: 4,
  },

  statusBadge: {
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 7,
  },

  statusText: {
    color: "#B45309",
    fontSize: 11,
    fontWeight: "800",
  },

  orderProducts: {
    paddingVertical: 10,
  },

  orderProduct: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },

  orderEmojiBox: {
    width: 45,
    height: 45,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  orderProductName: {
    fontSize: 13,
    fontWeight: "700",
  },

  orderQuantity: {
    color: "#9CA3AF",
    fontSize: 11,
    marginTop: 3,
  },

  orderPrice: {
    fontWeight: "800",
    fontSize: 13,
  },

  orderFooter: {
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  orderTotal: {
    color: "#EF4444",
    fontSize: 17,
    fontWeight: "900",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },

  productModal: {
    width: "100%",
    maxWidth: 900,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 25,
    position: "relative",
  },

  modalClose: {
    position: "absolute",
    right: 18,
    top: 15,
    zIndex: 10,
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },

  modalCloseText: {
    fontSize: 24,
    color: "#374151",
  },

  modalProductLayout: {
    flexDirection: "row",
    gap: 30,
    paddingTop: 15,
  },

  modalImage: {
    width: 390,
    height: 390,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  modalEmoji: {
    fontSize: 150,
  },

  modalInfo: {
    flex: 1,
    paddingTop: 25,
  },

  modalCategory: {
    color: "#8B5CF6",
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
  },

  modalTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#111827",
    marginTop: 8,
  },

  modalPriceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },

  modalPrice: {
    color: "#EF4444",
    fontSize: 28,
    fontWeight: "900",
  },

  modalOldPrice: {
    color: "#9CA3AF",
    fontSize: 13,
    textDecorationLine: "line-through",
  },

  modalDiscount: {
    color: "#FFFFFF",
    backgroundColor: "#EF4444",
    fontSize: 11,
    fontWeight: "900",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 5,
  },

  description: {
    color: "#6B7280",
    fontSize: 13,
    lineHeight: 21,
    marginTop: 18,
  },

  optionTitle: {
    fontSize: 13,
    fontWeight: "800",
    marginTop: 22,
    marginBottom: 10,
  },

  sizeRow: {
    flexDirection: "row",
    gap: 8,
  },

  sizeButton: {
    minWidth: 42,
    height: 38,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },

  sizeButtonSelected: {
    backgroundColor: "#111827",
    borderColor: "#111827",
  },

  sizeText: {
    fontSize: 12,
    fontWeight: "700",
  },

  sizeTextSelected: {
    color: "#FFFFFF",
  },

  modalAddButton: {
    backgroundColor: "#111827",
    height: 52,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 28,
  },

  modalAddText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 14,
  },

  checkoutModal: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },

  checkoutHeader: {
    height: 70,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },

  backText: {
    color: "#4F46E5",
    fontSize: 13,
    fontWeight: "700",
  },

  checkoutTitle: {
    fontSize: 20,
    fontWeight: "900",
  },

  checkoutContent: {
    width: "100%",
    maxWidth: 850,
    alignSelf: "center",
    padding: 25,
    paddingBottom: 60,
  },

  checkoutSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  checkoutSectionTitle: {
    fontSize: 17,
    fontWeight: "900",
    marginBottom: 18,
  },

  inputLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: "#374151",
    marginBottom: 6,
    marginTop: 8,
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 13,
    backgroundColor: "#FFFFFF",
    outlineStyle: "none",
  },

  textArea: {
    height: 80,
    paddingTop: 12,
    textAlignVertical: "top",
  },

  paymentOption: {
    minHeight: 58,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    marginBottom: 9,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  paymentSelected: {
    borderColor: "#111827",
    backgroundColor: "#F9FAFB",
  },

  paymentIcon: {
    fontSize: 22,
    marginRight: 12,
  },

  paymentTitle: {
    flex: 1,
    fontSize: 13,
    fontWeight: "700",
  },

  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    alignItems: "center",
    justifyContent: "center",
  },

  radioSelected: {
    borderColor: "#111827",
  },

  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#111827",
  },

  checkoutItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  checkoutItemIcon: {
    width: 50,
    height: 50,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  checkoutItemName: {
    fontSize: 13,
    fontWeight: "800",
  },

  checkoutItemQty: {
    color: "#9CA3AF",
    fontSize: 11,
    marginTop: 3,
  },

  checkoutItemPrice: {
    fontSize: 13,
    fontWeight: "800",
  },

  checkoutTotalBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 20,
  },

  finalTotalLabel: {
    fontSize: 15,
    fontWeight: "900",
  },

  finalTotal: {
    color: "#EF4444",
    fontSize: 24,
    fontWeight: "900",
  },

  placeOrderButton: {
    height: 55,
    backgroundColor: "#111827",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },

  placeOrderText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "900",
  },

  secureText: {
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: 11,
    marginTop: 14,
  },

  footer: {
    backgroundColor: "#111827",
    paddingTop: 45,
  },

  footerInner: {
    maxWidth: 1250,
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 40,
  },

  footerColumn: {
    width: "22%",
  },

  footerLogo: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 12,
  },

  footerTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 13,
  },

  footerText: {
    color: "#9CA3AF",
    fontSize: 12,
    lineHeight: 20,
  },

  footerLink: {
    color: "#9CA3AF",
    fontSize: 12,
    marginBottom: 9,
  },

  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: "#374151",
    padding: 18,
    alignItems: "center",
  },

  footerCopyright: {
    color: "#6B7280",
    fontSize: 11,
  },
});

/* =========================================================
   RESPONSIVE WEB
========================================================= */

if (Platform.OS === "web") {
  // Các thuộc tính responsive cơ bản cho trình duyệt.
  // Giao diện vẫn hoạt động bình thường trên desktop.
}