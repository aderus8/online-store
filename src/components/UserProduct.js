import { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";

export default function UserProducts() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "" });

  const user = auth.currentUser;

  const loadProducts = async () => {
    if (!user) return;
    const q = query(collection(db, "products"), where("owner", "==", user.uid));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setProducts(data);
  };

  const addProduct = async () => {
    if (!user) return;
    await addDoc(collection(db, "products"), {
      ...newProduct,
      owner: user.uid,
      createdAt: serverTimestamp(),
    });
    setNewProduct({ name: "", description: "", price: "" });
    loadProducts();
  };

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    loadProducts();
  };

  const updateProduct = async (id, updatedFields) => {
    await updateDoc(doc(db, "products", id), updatedFields);
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, [user]);

  return (
    <div>
      <h2>Twoje produkty</h2>
      <input
        placeholder="Nazwa"
        value={newProduct.name}
        onChange={(e) => setNewProduct((p) => ({ ...p, name: e.target.value }))}
      />
      <input
        placeholder="Opis"
        value={newProduct.description}
        onChange={(e) => setNewProduct((p) => ({ ...p, description: e.target.value }))}
      />
      <input
        placeholder="Cena"
        type="number"
        value={newProduct.price}
        onChange={(e) => setNewProduct((p) => ({ ...p, price: e.target.value }))}
      />
      <button onClick={addProduct}>Dodaj</button>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>: {product.description} — {product.price} zł
            <button onClick={() => deleteProduct(product.id)}>Usuń</button>
            {/* Tu możesz dodać przycisk edycji */}
          </li>
        ))}
      </ul>
    </div>
  );
}
