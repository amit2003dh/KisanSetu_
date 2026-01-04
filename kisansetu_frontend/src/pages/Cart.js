import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, clearCart, getCartTotal } = useCart();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        setCurrentUser(JSON.parse(user));
      } catch (e) {
        console.error("Error parsing user data:", e);
      }
    }
  }, []);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    // Navigate to payment page with cart items
    const total = getCartTotal();
    navigate(`/payment?total=${total}&fromCart=true`);
  };

  if (cart.length === 0) {
    return (
      <div className="container" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <div className="page-header">
          <h1>🛒 Shopping Cart</h1>
          <p>Your cart is empty</p>
        </div>

        <div className="empty-state card" style={{ textAlign: "center", padding: "60px 20px" }}>
          <div style={{ fontSize: "64px", marginBottom: "24px" }}>🛒</div>
          <h3 style={{ marginBottom: "12px", color: "var(--text-primary)" }}>
            Your cart is empty
          </h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
            Start adding items to your cart to continue shopping
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link to="/crops" className="btn btn-primary">
              Browse Crops
            </Link>
            <Link to="/products" className="btn btn-secondary">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const total = getCartTotal();

  return (
    <div className="container" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <div className="page-header">
        <h1>🛒 Shopping Cart</h1>
        <p>{cart.length} {cart.length === 1 ? "item" : "items"} in your cart</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "32px", marginTop: "32px" }}>
        {/* Cart Items */}
        <div>
          <div className="card">
            {cart.map((item) => (
              <div
                key={`${item._id}-${item.type}`}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "20px",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    background: item.type === "crop" 
                      ? "linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)"
                      : "linear-gradient(135deg, #ff9800 0%, #f57c00 100%)",
                    borderRadius: "var(--border-radius-sm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "48px",
                    flexShrink: 0
                  }}
                >
                  {item.type === "crop" ? "🌾" : item.type === "seed" ? "🌱" : "🧪"}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <h3 style={{
                        marginBottom: "8px",
                        fontSize: "20px",
                        color: "var(--text-primary)",
                        fontWeight: "600"
                      }}>
                        {item.name}
                      </h3>
                      <div style={{
                        display: "inline-block",
                        padding: "4px 12px",
                        background: item.type === "crop" ? "#e8f5e9" : "#fff3e0",
                        color: item.type === "crop" ? "var(--primary-green)" : "#ff9800",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "600",
                        marginBottom: "8px"
                      }}>
                        {item.type === "crop" ? "Crop" : item.type === "seed" ? "Seed" : "Pesticide"}
                      </div>
                      <div style={{ fontSize: "18px", fontWeight: "700", color: "var(--primary-green)", marginTop: "8px" }}>
                        ₹{item.price?.toFixed(2) || 0} per unit
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item._id, item.type)}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "var(--text-secondary)",
                        cursor: "pointer",
                        fontSize: "20px",
                        padding: "4px 8px",
                        borderRadius: "var(--border-radius-sm)",
                        transition: "background 0.2s"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "#fee";
                        e.target.style.color = "#f44336";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "transparent";
                        e.target.style.color = "var(--text-secondary)";
                      }}
                    >
                      ×
                    </button>
                  </div>

                  <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <label style={{ fontSize: "14px", color: "var(--text-secondary)", fontWeight: "600" }}>
                      Quantity:
                    </label>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <button
                        onClick={() => updateQuantity(item._id, item.type, Math.max(1, item.quantity - 1))}
                        style={{
                          width: "32px",
                          height: "32px",
                          border: "1px solid var(--border)",
                          background: "white",
                          borderRadius: "var(--border-radius-sm)",
                          cursor: "pointer",
                          fontSize: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--text-primary)"
                        }}
                      >
                        −
                      </button>
                      <span style={{
                        minWidth: "40px",
                        textAlign: "center",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "var(--text-primary)"
                      }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item._id, item.type, item.quantity + 1)}
                        style={{
                          width: "32px",
                          height: "32px",
                          border: "1px solid var(--border)",
                          background: "white",
                          borderRadius: "var(--border-radius-sm)",
                          cursor: "pointer",
                          fontSize: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--text-primary)"
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div style={{ marginLeft: "auto", fontSize: "18px", fontWeight: "700", color: "var(--primary-green)" }}>
                      ₹{(item.price * item.quantity)?.toFixed(2) || 0}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="card" style={{ position: "sticky", top: "100px" }}>
            <h2 style={{
              marginBottom: "24px",
              fontSize: "24px",
              color: "var(--text-primary)",
              fontWeight: "600"
            }}>
              Order Summary
            </h2>

            <div style={{ marginBottom: "20px" }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
                fontSize: "16px",
                color: "var(--text-secondary)"
              }}>
                <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
                fontSize: "16px",
                color: "var(--text-secondary)"
              }}>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div style={{
                height: "1px",
                background: "var(--border)",
                margin: "20px 0"
              }}></div>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                fontWeight: "700",
                color: "var(--text-primary)"
              }}>
                <span>Total</span>
                <span style={{ color: "var(--primary-green)" }}>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="btn btn-primary"
              style={{
                width: "100%",
                padding: "14px",
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "12px"
              }}
            >
              Proceed to Checkout
            </button>

            <button
              onClick={clearCart}
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "14px",
                background: "transparent",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                borderRadius: "var(--border-radius-sm)",
                cursor: "pointer",
                fontWeight: "600"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#f5f5f5";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
              }}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

