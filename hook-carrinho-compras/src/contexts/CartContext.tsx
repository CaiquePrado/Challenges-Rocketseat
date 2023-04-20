import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { Product, Stock } from "../types";

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
      const productAlreadyExists = cart.find(
        (cartItem) => cartItem.id === productId
      );

      if (!productAlreadyExists) {
        const { data: products } = await api.get<Product>(
          `products/${productId}`
        );
        const { data: stock } = await api.get<Stock>(`stock/${productId}`);
        if (stock.amount > 0) {
          setCart([...cart, { ...products, amount: 1 }]);
          localStorage.setItem(
            "@RocketShoes:cart",
            JSON.stringify([...cart, { ...products, amount: 1 }])
          );
          toast("Adicionado!");
          return;
        }
      }

      if (productAlreadyExists) {
        const { data: stock } = await api.get<Stock>(`stock/${productId}`);

        if (stock.amount > productAlreadyExists.amount) {
          const newProduct = [...cart].map((cartItem) =>
            cartItem.id === productId
              ? { ...cartItem, amount: Number(cartItem.amount) + 1 }
              : cartItem
          );
          setCart(newProduct);
          localStorage.setItem("@RocketShoes:cart", JSON.stringify("voce"));
          return;
        }
      }
    } catch {
      toast.error("Erro na adição do produto");
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const productsExists = [...cart].some(
        (cartItem) => cartItem.id === productId
      );
      if (!productsExists) {
        toast.error("Erro na remoção do produto");
        return;
      }
      const newProduct = [...cart].filter(
        (cartItem) => cartItem.id !== productId
      );
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
