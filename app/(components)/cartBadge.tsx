import React, { useState } from 'react';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartBadge() {
  const [itemCount, setItemCount] = useState(3); // Initial number of items in the cart

  const handleAddToCart = () => {
    setItemCount(prevCount => prevCount + 1); // Increment count when item is added
  };

  const handleRemoveFromCart = () => {
    setItemCount(prevCount => Math.max(0, prevCount - 1)); // Decrement, but not below 0
  };

  return (
    <div style={{marginLeft: "auto"}}>
      <IconButton aria-label="shopping cart" onClick={handleAddToCart}>
        <Badge badgeContent={itemCount} color="error">
          <ShoppingCartIcon fontSize='large' />
        </Badge>
      </IconButton>
    </div>
  );
}