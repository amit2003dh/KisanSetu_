import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error loading cart from localStorage:", e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem._id === item._id && cartItem.type === item.type
      );

      if (existingItem) {
        // Update quantity if item already exists
        return prevCart.map((cartItem) =>
          cartItem._id === item._id && cartItem.type === item.type
            ? { ...cartItem, quantity: cartItem.quantity + (item.quantity || 1) }
            : cartItem
        );
      } else {
        // Add new item
        return [...prevCart, { ...item, quantity: item.quantity || 1 }];
      }
    });
  };

  const removeFromCart = (itemId, type) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item._id === itemId && item.type === type)
      )
    );
  };

  const updateQuantity = (itemId, type, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId, type);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === itemId && item.type === type
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartCount,
    getCartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

