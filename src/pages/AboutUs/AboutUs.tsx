import { useNavigate } from 'react-router-dom';
import Headling from '../../components/Headling/Headling';
import styles from './AboutUs.module.css';
import Button from '../../components/Button/Button';

export function AboutUs() {
    const navigate = useNavigate();
    
    return (
        <div className={styles['about']}>
            <div className={styles['about-head']}>
                <Button onClick={() => navigate('/')} appearence='small' className={styles['back-button']}>
                                <img src="/arrow-left-icon.svg" alt="" />
                </Button>
                <Headling>О нас</Headling>
            </div>
            <div className={styles['about-box']}>
                <div className={styles['about-text']}>
                <Headling>Мы</Headling>
                <p>Обычно люди приходят в Флавор Пиццу, чтобы просто поесть. Наши промоутеры раздают листовки про кусочек пиццы за двадцать рублей или ещё что-то выгодное. Мы делаем это как первый шаг, 
                чтобы познакомиться. <br /><br />
                Но для нас Флавор — не только пицца. Это и пицца тоже, но в первую очередь это большое дело, которое вдохновляет нас, заставляет
                каждое утро просыпаться и с интересом продолжать работу.
                <br /><br />
                <span className={styles['text-primary']}>В чём же наш интерес? Сейчас расскажем.</span>
                </p></div>
                <img className={styles['about-img']} src="/aboutus.jpg" alt="" />
            </div>
            <div className={styles['about-inner']}>
                <Headling>Идеальные ингредиенты</Headling>
                <div className={styles['ingridients-text']}>
                Почему мы так хотим познакомиться? Потому что дальше пицца делает всё сама. Люди видят, что она вкусная, и возвращаются снова. Нам главное первый раз это показать.
                <br /><br />
                Вообще пицца — очень простая штука, её сложно испортить. Достаточно хороших ингредиентов и правильного теста. Это конструктор, если детали качественные, то и результат будет в порядке. Вот они, наши детали:
                </div>
                <div className={styles['ingridients-box']}>
                    <div className={styles['ingridients-card']}>
                        <h2>Тесто</h2>
                        <p>Самая тонкая вещь. Главное - сделать его «живым». Это целый квест из граммов, градусов, процентов и часов с минутами. 
                            <br />Процесс непростой, но у нас получается!</p>
                    </div>
                    <div className={styles['ingridients-card']}>
                        <h2>Моцарелла</h2>
                        <p>Сыр в пицце - ключевой ингредиент. Мы используем настоящую моцареллу от российских поставщиков. 
                            <br />Сыр должен тянуться, как на картинке.</p>
                    </div>
                    <div className={styles['ingridients-card']}>
                        <h2>Начинка</h2>
                        <p>Есть два главных правила вкусной начинки: не экономить на начинке; фанатично соблюдать режим хранения. 
                            <br />Это и весь секрет.</p>
                    </div>
                    <div className={styles['ingridients-card']}>
                        <h2>Томатный соус</h2>
                        <p>Главное, что нужно знать про хороший томатный соус: он должен быть сделан из томатов. 
                            <br />Звучит логично, но задумайтесь!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}