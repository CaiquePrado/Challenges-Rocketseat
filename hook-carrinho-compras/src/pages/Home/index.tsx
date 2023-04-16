import { useEffect, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";

import { api } from "../../services/api";
import { ProductList } from "./styles";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

export const Home = () => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  // const { addProduct, cart } = useCart();

  // const cartItemsAmount = cart.reduce((sumAmount, product) => {
  //   // TODO
  // }, {} as CartItemsAmount)

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await api.get("/products");
    const data = response.data;

    setProducts((state) => [...state, data]);
  };

  function handleAddProduct(id: number) {
    // TODO
  }

  return (
    <ProductList>
      <li>
        <img
          src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
          alt="Tênis de Caminhada Leve Confortável"
        />
        <strong>Tênis de Caminhada Leve Confortável</strong>
        <span>R$ 179,90</span>
        <button
          type="button"
          data-testid="add-product-button"
          // onClick={() => handleAddProduct(product.id)}
        >
          <div data-testid="cart-product-quantity">
            <MdAddShoppingCart size={16} color="#FFF" />
            {/* {cartItemsAmount[product.id] || 0} */} 2
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
};
