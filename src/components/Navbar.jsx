import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      {/* Nombre de la tienda */}
      <div style={styles.storeName}>
        <h1>Outfit</h1>
      </div>

      {/* Categorías */}
      <div style={styles.categories}>
        <a href="#categoria1" style={styles.link}>Pantalones</a>
        <a href="#categoria2" style={styles.link}>Camisetas</a>
        <a href="#categoria3" style={styles.link}>Zapatos</a>
      </div>
      <CartWidget />
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky", 
    top: 0,              // Esto asegura que el navbar se quede en la parte superior
    zIndex: 100,        // Asegura que esté por encima de otros elementos
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    width: "100%",      // Se asegura que cubra todo el ancho de la pantalla
    boxSizing: "border-box",  // Evita que el padding afecte el tamaño del navbar
  },
  storeName: {
    fontSize: "24px",
  },
  categories: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;