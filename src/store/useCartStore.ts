import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/components/shop/ProductCard';

export interface CartItem extends Product {
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    toggleCart: () => void;
    isOpen: boolean;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,
            addItem: (product) => {
                const items = get().items;
                const existingItem = items.find((item) => item.id === product.id);

                if (existingItem) {
                    // For thrift (1-of-1), maybe don't allow > 1 quantity? 
                    // But assuming we might have multiples of some accessories.
                    // If 1-of-1, we should alert user.
                    // For now, let's implement standard quantity logic but cap at 1 if intended, 
                    // or just standard increment.
                    set({
                        items: items.map((item) =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                        isOpen: true,
                    });
                } else {
                    set({ items: [...items, { ...product, quantity: 1 }], isOpen: true });
                }
            },
            removeItem: (productId) => {
                set({ items: get().items.filter((item) => item.id !== productId) });
            },
            updateQuantity: (productId, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(productId);
                    return;
                }
                set({
                    items: get().items.map((item) =>
                        item.id === productId ? { ...item, quantity } : item
                    ),
                });
            },
            clearCart: () => set({ items: [] }),
            toggleCart: () => set({ isOpen: !get().isOpen }),
        }),
        {
            name: 'thrift-cart-storage',
            partialize: (state) => ({ items: state.items }), // Don't persist Open state
        }
    )
);
