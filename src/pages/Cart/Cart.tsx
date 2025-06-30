import { useDispatch, useSelector } from 'react-redux';
import Headling from '../../components/Headling/Headling';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Cart.module.css';
import CartItem from '../../components/CartItem/CartItem';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/cart.slice';
import Input from '../../components/Input/Input';

const DELIVERY_FEE = 169;

export function Cart() {
    const [cartProducts, setCartProducts] = useState<Product[]>([]);
    const [promocode, setPromocode] = useState<string>('');
    const [discountedTotal, setDiscountedTotal] = useState<number>(0);
    const items = useSelector((s: RootState) => s.cart.items);
    const jwt = useSelector((s: RootState) => s.user.jwt);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const total = items.map(i => {
        const product = cartProducts.find(p => p.id === i.id);
        if (!product) {
            return 0;
        }
        return i.count * product.price;
    }).reduce((acc, i) => acc + i, 0);

    useEffect(() => {
        setDiscountedTotal(total);
    }, [total]);

    const getItem = async (id: number) => {
        const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
        return data;
    };

    const loadAllItems = async () => {
        const res = await Promise.all(items.map(i => getItem(i.id)));
        setCartProducts(res);
    };

    const applyPromocode = () => {
        if (promocode === 'ФЛАУ73') {
            setDiscountedTotal(total - 150);
        } else {
            alert('Неверный промокод');
        }
    };

    const checkout = async () => {
        await axios.post(`${PREFIX}/order`, {
            products: items
        }, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch(cartActions.clean());
        navigate('/success');
    };

    useEffect(() => {
        loadAllItems();
    }, [items]);

    return (
        <>
            <Headling className={styles['headling']}>Корзина</Headling>
            {items.map(i => {
                const product = cartProducts.find(p => p.id === i.id);
                if (!product) {
                    return null;
                }
                return <CartItem key={product.id} count={i.count} {...product} />;
            })}
            <div className={styles['cart']}>
                <div className={styles['promocode']}>
                    <Input 
                        name='promocode' 
                        className={styles['input-promocode']} 
                        placeholder='Промокод' 
                        value={promocode} 
                        onChange={(e) => setPromocode(e.target.value)}
                    />
                    <Button 
                        className={styles['button-promocode']} 
                        appearence='big' 
                        onClick={applyPromocode}>Применить</Button>
                </div>
                <div className={styles['line']}>
                    <div className={styles['text']}>Итог</div>
                    <div className={styles['price']}>{discountedTotal}&nbsp;<span>₽</span></div>
                </div>
                <hr className={styles['hr']} />
                <div className={styles['line']}>
                    <div className={styles['text']}>Доставка</div>
                    <div className={styles['price']}>{DELIVERY_FEE}&nbsp;<span>₽</span></div>
                </div>
                <hr className={styles['hr']} />
                <div className={styles['line']}>
                    <div className={styles['text']}>Итог <span className={styles['total-count']}>({items.length})</span></div>
                    <div className={styles['price']}>{discountedTotal + DELIVERY_FEE}&nbsp;<span>₽</span></div>
                </div>
                <div className={styles['checkout']}>
                    <Button onClick={checkout} appearence='big'>оформить</Button>
                </div>
            </div>
        </>
    );
}