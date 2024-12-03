import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

const CartWidget = () => {
  const cartItemCount = 5; 

  return (
    <div style={styles.cartContainer}>
      <FaShoppingCart size={30} /> {/* Ícono del carrito */}
      {cartItemCount > 0 && (
        <span style={styles.cartCount}>{cartItemCount}</span> 
      )}
    </div>
  );
};


const styles = {
  cartContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  cartCount: {
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: '50%',
    padding: '5px',
    fontSize: '14px',
  },
};

export default CartWidget;