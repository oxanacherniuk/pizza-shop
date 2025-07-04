import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import { CartItemProps } from './CartItem.props';

function CartItem(props: CartItemProps) {
    const dispatch = useDispatch<AppDispatch>();
    
    const increace = () => {
        dispatch(cartActions.add(props.id));
    };

    const descreace = () => {
        dispatch(cartActions.remove(props.id));
    };

    const remove = () => {
        dispatch(cartActions.delete(props.id));
    };
    
    return (
            <div className={styles['item']}>
                    <div className={styles['image']} style={{ backgroundImage: `url('${props.image}')`}}></div>
                    <div className={styles['description']}>
                        <div className={styles['name']}>{props.name}</div>
                        <div className={styles['price']}>{props.price}&nbsp;₽</div>
                    </div>
                    <div className={styles['actions']}>
                        <button className={styles['minus']} onClick={descreace}>
                            <img src="/minus-icon.svg" alt="Удалить из корзины" />
                        </button>
                        <div className={styles['number']}>{props.count}</div>
                        <button className={styles['plus']} onClick={increace}>
                            <img src="/plus-icon.svg" alt="Добавить в корзину" />
                        </button>
                        <button className={styles['remove']} onClick={remove}>
                            <img src="/delete.svg" alt="Удалить все" />
                        </button>
                    </div>
                </div>
    );
}

export default CartItem;