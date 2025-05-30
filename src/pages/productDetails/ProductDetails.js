import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import productsDATA from '../../components/productsData';
import './ProductDetails.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { doc, addDoc, collection, serverTimestamp, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import { auth, db } from "../../components/firebase/firebase"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsDATA.products.find(p => String(p.id) === id);
  const [isInCart, setIsInCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [cartDocId, setCartDocId] = useState(null);
  const [favoriteDocId, setFavoriteDocId] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const checkStatus = async () => {
      const user = auth.currentUser;
      if (!user || !product) return;

      try {
        const favQuery = query(
          collection(db, "favorites"),
          where("userId", "==", user.uid),
          where("productId", "==", product.id)
        );
        const favSnap = await getDocs(favQuery);
        if (!favSnap.empty) {
          setIsFavorite(true);
          setFavoriteDocId(favSnap.docs[0].id);
        } else {
          setIsFavorite(false);
          setFavoriteDocId(null);
        }

        const cartQuery = query(
          collection(db, "cart"),
          where("userId", "==", user.uid),
          where("productId", "==", product.id)
        );
        const cartSnap = await getDocs(cartQuery);
        if (!cartSnap.empty) {
          setIsInCart(true);
          setCartDocId(cartSnap.docs[0].id);
        } else {
          setIsInCart(false);
          setCartDocId(null);
        }

      } catch (err) {
        console.error("Error checking statuses:", err);
        toast.error("An error occurred while fetching statuses.");
      }
    };

    checkStatus();
  }, [product]);

  if (!product) return <p style={{ padding: "2rem" }}>Product not found.</p>;

  product.availableSizes = ["S", "M", "L", "XL"];

  const relatedProducts = productsDATA.products.filter(
    (p) => p.company === product.company && String(p.id) !== id
  );

  const colorRelatedProducts = productsDATA.products.filter(
    (p) => p.color === product.color && String(p.id) !== id
  );

  const handleToggleFavorite = async () => {
    const user = auth.currentUser;
    if (!user) return toast.info("You must be logged in to add to favorites.");

    try {
      if (isFavorite && favoriteDocId) {
        await deleteDoc(doc(db, "favorites", favoriteDocId));
        setIsFavorite(false);
        setFavoriteDocId(null);
        toast.success("Removed from favorites.");
      } else {
        const docRef = await addDoc(collection(db, "favorites"), {
          userId: user.uid,
          productId: product.id,
          addedAt: serverTimestamp(),
        });
        setIsFavorite(true);
        setFavoriteDocId(docRef.id);
        toast.success("Added to favorites.");
      }
    } catch (error) {
      console.error("Error managing favorites:", error);
      toast.error("An error occurred while updating favorites.");
    }
  };

  const handleToggleCart = async () => {
    const user = auth.currentUser;
    if (!user) return toast.info("You must be logged in to add to cart.");

    try {
      if (isInCart && cartDocId) {
        await deleteDoc(doc(db, "cart", cartDocId));
        setIsInCart(false);
        setCartDocId(null);
        toast.success("Removed from cart.");
      } else {
        const docRef = await addDoc(collection(db, "cart"), {
          userId: user.uid,
          productId: product.id,
          quantity: 1,
          addedAt: serverTimestamp(),
        });
        setIsInCart(true);
        setCartDocId(docRef.id);
        toast.success("Added to cart.");
      }
    } catch (error) {
      console.error("Error managing cart:", error);
      toast.error("An error occurred while updating the cart.");
    }
  };

  return (
    <div className='product-details-page'>
      <div className="breadcrumbs">
        <span><Link to="/">Home</Link></span>
        <span className="separator">/</span>
        <span><Link to="/all-products">Products</Link></span>
        <span className="separator">/</span>
        <span className="current">{product.name}</span>
      </div>

      <div className="product-details-container" data-aos="fade-up">
        <div className="product-details-img-container">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h5>{product.name}</h5>
          <p className="product-price">{product.price} zł</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Brand:</strong> {product.company}</p>
          <p><strong>Color:</strong> {product.color}</p>

          {product.url && (
            <p>
              <a className="external-link" href={product.url} target="_blank" rel="noopener noreferrer">
                View in store
              </a>
            </p>
          )}

          <div className="product-actions">
            <button className={`add-to-cart-btn ${isInCart ? "in-cart" : ""}`} onClick={handleToggleCart}>
              {isInCart ? "✓ In Cart (click to remove)" : "Add to Cart"}
            </button>
            <button className="wishlist-btn" onClick={handleToggleFavorite}>
              {isFavorite ? "♥ Favorite (click to remove)" : "♡ Add to Favorites"}
            </button>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products-slider greybg" data-aos="fade-up">
          <h3>Explore more styles from {product.company}</h3>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 3 },
              0: { slidesPerView: 2 }
            }}
          >
            {relatedProducts.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="slider-item" onClick={() => navigate(`/product/${item.id}`)}>
                  <img src={item.image} alt={item.name} className="slider-product-img" />
                  <h4>{item.name}</h4>
                  <p>{item.price} zł</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {colorRelatedProducts.length > 0 && (
        <div className="related-products-slider" data-aos="fade-up">
          <h3>Bring more {product.color} into your wardrobe</h3>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 3 },
              0: { slidesPerView: 2 }
            }}
          >
            {colorRelatedProducts.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="slider-item" onClick={() => navigate(`/product/${item.id}`)}>
                  <img src={item.image} alt={item.name} className="slider-product-img" />
                  <h4>{item.name}</h4>
                  <p>{item.price} zł</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
