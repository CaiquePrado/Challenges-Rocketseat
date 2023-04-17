import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { Product } from "../types";

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem("@RocketShoes:cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const newProduct = [...cart];
      await api.get(`/stock/${productId}`);
    } catch {
      toast.error("Quantidade solicitada fora de estoque");
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const newProduct = [...cart].filter((item) => item.id !== productId);
      setCart(newProduct);
      localStorage.setItem("@RocketShoes:cart", JSON.stringify(newProduct));
    } catch {
      toast.error("Erro na remoção do produto");
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      // TODO
    } catch {
      toast.error("Erro na adição do produto");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): CartContextData {
  return useContext(CartContext);
}
