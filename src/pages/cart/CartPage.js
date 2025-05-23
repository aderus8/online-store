import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../../components/firebase";
import productsDATA from "../../components/productsData";
import "./CartPage.css"; // Możesz dostosować stylizację

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      const user = auth.currentUser;
      if (!user) return;

      try {
        const cartQuery = query(
          collection(db, "cart"),
          where("userId", "==", user.uid)
        );
        const cartSnap = await getDocs(cartQuery);
        const items = cartSnap.docs.map(docSnap => ({
          docId: docSnap.id,
          productId: docSnap.data().productId,
          quantity: docSnap.data().quantity || 1,
        }));

        const matched = items.map(item => {
          const product = productsDATA.products.find(p => p.id === item.productId);
          return product ? { ...product, ...item } : null;
        }).filter(Boolean);

        setCartItems(matched);
        setLoading(false);
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    };

    fetchCart();
  }, []);

  const handleRemove = async (docId) => {
    try {
      await deleteDoc(doc(db, "cart", docId));
      setCartItems(prev => prev.filter(item => item.docId !== docId));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const handleBuyNow = () => {
    alert("Thank you for your purchase! (simulate checkout)");
    // Tutaj możesz np. wyczyścić koszyk lub przekierować do strony płatności
  };

  if (!auth.currentUser) {
    return <p style={{ padding: "2rem" }}>You must be logged in to view your cart.</p>;
  }

  if (loading) return  <p className="cart-page mt"> Loading cart...</p>;
  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.docId}>
                <td>{item.name}</td>
                <td>{item.price} zł</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity} zł</td>
                <td>
                  <button className="remove-button" onClick={() => handleRemove(item.docId)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {cartItems.length > 0 && (
        <div className="cart-actions">
          <h3>
            Total:{" "}
            {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)} zł
          </h3>
          <button className="hero-video-cta-button" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
}