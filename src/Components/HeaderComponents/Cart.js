import React from 'react';

const Cart = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img 
        src="https://spicy-pricey.sharadindudas.com/assets/empty-cart.webp" 
        alt="Empty Cart" 
        style={{ width: '300px', marginBottom: '20px' }} 
      />
      <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
        Your Cart is Empty
      </div>
      <div style={{ fontSize: '16px', fontStyle: 'italic', color: '#888' }}>
        I'm still building this feature, will ship this soon to production.
      </div>
    </div>
  );
}

export default Cart;
