import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  /* ===============================
     RESTORE USER ON REFRESH
  ================================ */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  /* ===============================
     CART FUNCTIONS
  ================================ */
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  /* ===============================
     TOTAL PRICE
  ================================ */
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  /* ===============================
     PLACE ORDER (DB)
  ================================ */
  const placeOrder = async () => {
    if (!user || cart.length === 0) return;

    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          userId: user.id,
          total,
          items: cart,
        }),
      });

      const data = await res.json();
      console.log("ORDER SAVED:", data);

      setCart([]);
      setPage("success");
    } catch (err) {
      console.error("ORDER FAILED:", err);
    }
  };

  /* ===============================
     LOGOUT
  ================================ */
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setCart([]);
    setPage("login");
  };

  /* ===============================
     PAGE RENDER
  ================================ */
  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home setPage={setPage} />;

      case "login":
        return (
          <Login
            setPage={setPage}
            setUser={(u) => {
              setUser(u);
              localStorage.setItem("user", JSON.stringify(u));
            }}
          />
        );

      case "register":
        return <Register setPage={setPage} />;

      case "products":
        return (
          <ProtectedRoute user={user} setPage={setPage}>
            <Products setPage={setPage} addToCart={addToCart} />
          </ProtectedRoute>
        );

      case "cart":
        return (
          <ProtectedRoute user={user} setPage={setPage}>
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              setPage={setPage}
            />
          </ProtectedRoute>
        );

      case "checkout":
        return (
          <ProtectedRoute user={user} setPage={setPage}>
            <Checkout cart={cart} setPage={setPage} />
          </ProtectedRoute>
        );

      case "payment":
        return (
          <ProtectedRoute user={user} setPage={setPage}>
            <Payment
              total={total}
              setPage={setPage}
              placeOrder={placeOrder}
            />
          </ProtectedRoute>
        );

      case "success":
        return (
          <ProtectedRoute user={user} setPage={setPage}>
            <Success setPage={setPage} />
          </ProtectedRoute>
        );

      case "orders":
        return (
          <ProtectedRoute user={user} setPage={setPage}>
            <Orders user={user} />
          </ProtectedRoute>
        );

      case "favorites":
        return (
          <ProtectedRoute user={user} setPage={setPage}>
            <Favorites setPage={setPage} />
          </ProtectedRoute>
        );

      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header
        setPage={setPage}
        cartCount={cart.length}
        user={user}
        logout={logout}
      />
      <main style={{ flex: 1 }}>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
