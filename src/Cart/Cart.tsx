import CartItem from "../CartItem/CartItem";
// Styling
import { Wrapper } from './Cart.styles'
// Types
import { CartItemType } from "../App";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart}) => {
    return (
        <Wrapper>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? <p>Add some!</p> : null}
            {cartItems.map(item => (
                <CartItem />
            ))}
        </Wrapper>
    )
}