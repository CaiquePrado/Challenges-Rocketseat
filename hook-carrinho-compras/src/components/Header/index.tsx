import { MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import { useCart } from "../../contexts/CartContext";
import { Cart, Container } from "./styles";

export const Header = () => {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};
