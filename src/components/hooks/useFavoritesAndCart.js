// src/hooks/useFavoritesAndCart.js
import { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  query,
  where,
  addDoc,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";

export default function useFavoritesAndCart(productId) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [favoriteDocId, setFavoriteDocId] = useState(null);
  const [cartDocId, setCartDocId] = useState(null);

  useEffect(() => {
    const checkStatus = async () => {
      const user = auth.currentUser;
      if (!user || !productId) return;

      const favQuery = query(
        collection(db, "favorites"),
        where("userId", "==", user.uid),
        where("productId", "==", productId)
      );

      const cartQuery = query(
        collection(db, "cart"),
        where("userId", "==", user.uid),
        where("productId", "==", productId)
      );

      const favSnapshot = await getDocs(favQuery);
      const cartSnapshot = await getDocs(cartQuery);

      if (!favSnapshot.empty) {
        setIsFavorite(true);
        setFavoriteDocId(favSnapshot.docs[0].id);
      } else {
        setIsFavorite(false);
        setFavoriteDocId(null);
      }

      if (!cartSnapshot.empty) {
        setIsInCart(true);
        setCartDocId(cartSnapshot.docs[0].id);
      } else {
        setIsInCart(false);
        setCartDocId(null);
      }
    };

    checkStatus();
  }, [productId]);

  const toggleFavorite = async () => {
    const user = auth.currentUser;
    if (!user || !productId) return;

    if (isFavorite && favoriteDocId) {
      await deleteDoc(doc(db, "favorites", favoriteDocId));
      setIsFavorite(false);
      setFavoriteDocId(null);
    } else {
      const docRef = await addDoc(collection(db, "favorites"), {
        userId: user.uid,
        productId,
      });
      setIsFavorite(true);
      setFavoriteDocId(docRef.id);
    }
  };

  const toggleCart = async () => {
    const user = auth.currentUser;
    if (!user || !productId) return;

    if (isInCart && cartDocId) {
      await deleteDoc(doc(db, "cart", cartDocId));
      setIsInCart(false);
      setCartDocId(null);
    } else {
      const docRef = await addDoc(collection(db, "cart"), {
        userId: user.uid,
        productId,
      });
      setIsInCart(true);
      setCartDocId(docRef.id);
    }
  };

  return { isFavorite, toggleFavorite, isInCart, toggleCart };
}
