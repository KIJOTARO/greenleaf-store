/// <reference types="vitest" />
import { describe, it, expect } from 'vitest';

import cartReducer, {
    addToCart,
    incrementItem,
    decrementItem,
    removeItem,
  } from './cartSlice';
  
  describe('cartSlice', () => {
    const initialState = { items: [] };
    const samplePlant = { id: 1, name: 'Aloe Vera', price: 10 };
  
    it('should return the initial state', () => {
      expect(cartReducer(undefined, {})).toEqual(initialState);
    });
  
    it('should handle addToCart', () => {
      const nextState = cartReducer(initialState, addToCart(samplePlant));
      expect(nextState.items).toHaveLength(1);
      expect(nextState.items[0]).toEqual({ ...samplePlant, quantity: 1 });
    });
  
    it('should not add the same item twice', () => {
      const stateWithItem = { items: [{ ...samplePlant, quantity: 1 }] };
      const nextState = cartReducer(stateWithItem, addToCart(samplePlant));
      expect(nextState.items).toHaveLength(1);
    });
  
    it('should handle incrementItem', () => {
      const stateWithItem = { items: [{ ...samplePlant, quantity: 1 }] };
      const nextState = cartReducer(stateWithItem, incrementItem(1));
      expect(nextState.items[0].quantity).toBe(2);
    });
  
    it('should handle decrementItem', () => {
      const state = { items: [{ ...samplePlant, quantity: 2 }] };
      const nextState = cartReducer(state, decrementItem(1));
      expect(nextState.items[0].quantity).toBe(1);
    });
  
    it('should not decrement below 1', () => {
      const state = { items: [{ ...samplePlant, quantity: 1 }] };
      const nextState = cartReducer(state, decrementItem(1));
      expect(nextState.items[0].quantity).toBe(1);
    });
  
    it('should handle removeItem', () => {
      const state = { items: [{ ...samplePlant, quantity: 1 }] };
      const nextState = cartReducer(state, removeItem(1));
      expect(nextState.items).toHaveLength(0);
    });
  });
  