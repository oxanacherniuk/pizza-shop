import { Await, useLoaderData, useNavigate } from 'react-router-dom';
import type { Product } from '../../interfaces/product.interface';
import { Suspense } from 'react';
import Headling from '../../components/Headling/Headling';
import Button from '../../components/Button/Button';
import styles from './Product.module.css';

export function Product() {
    const data = useLoaderData() as { data: Product};
    const navigate = useNavigate();

    return <>
    <Suspense fallback={'Загружаю...'}>
        <Await
            resolve={data.data}
        >
            {({ data }: { data: Product }) => (
                <>
                    <div className={styles['product-top']}>
                        <Button onClick={() => navigate('/')} appearence='small' className={styles['back-button']}>
                            <img src="/arrow-left-icon.svg" alt="" />
                        </Button>
                        <Headling>{data.name}</Headling>
                        <Button appearence='big' className={styles['add-button']}>
                            <img src="/cart-wtite-icon.svg" alt="" />
                            В корзину
                        </Button>
                    </div>
                    <div className={styles['product-body']}>
                        <img className={styles['body-left']} src={data.image} alt="Фото блюда" />
                        <div className={styles['body-right']}>
                            <div className={styles['product-price']}>
                                <p className={styles['price-text']}>Цена</p>
                                <p className={styles['price-number']}>
                                    {data.price}&nbsp;
                                    <span className={styles['currency']}>₽</span>
                                </p>
                            </div>
                            <hr />
                            <div className={styles['product-raiting']}>
                                <p className={styles['raiting-text']}>Рейтинг</p>
                                <div className={styles['raiting-number']}>
                                    {data.rating}&nbsp;
                                    <img src="/star-icon.svg" alt="Звезда" />
                                </div>
                            </div>
                            <hr />
                            <div className={styles['product-ingredients']}>
                                <p className={styles['ingredients-text']}>Состав</p>
                                <p className={styles['ingredients-component']}>
                                    {data.ingredients.join(', ')}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Await>
    </Suspense>
    </>;
}