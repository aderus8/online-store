import { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import productsDATA from './productsData';
import ClothesGrid from "./clothes/clothesGrid/ClothesGrid";
import "./UserProducts.css";

export default function UserProducts() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Dodajemy stan ładowania

  useEffect(() => {
    const fetchUserProducts = async () => {
      const user = auth.currentUser;
      if (!user) return;

      try {
        // Rozpocznij ładowanie
        setLoading(true);

        // Favourites
        const favQuery = query(
          collection(db, "favorites"),
          where("userId", "==", user.uid)
        );
        const favSnap = await getDocs(favQuery);
        const favIds = favSnap.docs.map(doc => doc.data().productId);
        const favMatches = productsDATA.products.filter(product =>
          favIds.includes(product.id)
        );
        setFavoriteProducts(favMatches);

        // Cart
        const cartQuery = query(
          collection(db, "cart"),
          where("userId", "==", user.uid)
        );
        const cartSnap = await getDocs(cartQuery);
        const cartIds = cartSnap.docs.map(doc => doc.data().productId);
        const cartMatches = productsDATA.products.filter(product =>
          cartIds.includes(product.id)
        );
        setCartProducts(cartMatches);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        // Zakończ ładowanie
        setLoading(false);
      }
    };

    fetchUserProducts();
  }, []);

  if (!auth.currentUser) {
    return <p style={{ padding: "2rem" }}>Please log in to view your cart and favorites.</p>;
  }

  if (loading) {
    return <p style={{ padding: "2rem" }} className="favorites-page mt">Loading your products...</p>; // ✅ Można tu dodać spinner
  }

  return (
    <div className="favorites-page">
      <div>
        <h4>Your Favorite Products</h4>
        {favoriteProducts.length === 0 ? (
          <p>You don't have any favorite products yet.</p>
        ) : (
          <div className="favorites-grid">
            <ClothesGrid products={favoriteProducts} />
          </div>
        )}
      </div>
      <div>
        <h4>Your Cart</h4>
        {cartProducts.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="favorites-grid">
            <ClothesGrid products={cartProducts} />
          </div>
        )}
      </div>
    </div>
  );
}
