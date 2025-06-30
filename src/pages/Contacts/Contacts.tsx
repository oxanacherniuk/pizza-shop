import Headling from '../../components/Headling/Headling';
import styles from './Contacts.module.css';

export function Contacts() {
    return (
        <div className={styles['contacts']}>
            <Headling>Наши контакты</Headling>
            <div className={styles['contacts-box']}>
                <div className={styles['contacts-column']}>
                    <p className={styles['column-title']}>Верхняя Терраса</p>
                    <p><img src="/address-icon.svg" />&nbsp; ул. Привокзальная, 9а</p>
                    <p>Доставка<br />
                    Пн-Вс: 09:00 — 00:00</p>
                    <p>Ресторан и самовывоз<br />
                    Пн-Вс: 09:00 — 00:00</p>
                </div>
                <div className={styles['contacts-column']}>
                    <p className={styles['column-title']}>Аквамолл</p>
                    <p><img src="/address-icon.svg" />&nbsp; ш. Московское, 104</p>
                    <p>Доставка<br />
                    Пн-Вс: 09:00 — 00:00</p>
                    <p>Ресторан и самовывоз<br />
                    Пн-Вс: 09:00 — 00:00</p>
                </div>
                <div className={styles['contacts-column']}>
                    <p className={styles['column-title']}>Киндяковка</p>
                    <p><img src="/address-icon.svg" />&nbsp; ул. Варейкиса, 2Д</p>
                    <p>Доставка<br />
                    Пн-Вс: 09:00 — 00:00</p>
                    <p>Ресторан и самовывоз<br />
                    Пн-Вс: 09:00 — 00:00</p>
                </div>
                <div className={styles['contacts-column']}>
                    <p className={styles['column-title']}>Новый Город</p>
                    <p><img src="/address-icon.svg" />&nbsp; пр-т Ульяновский (Новый город), 11</p>
                    <p>Доставка<br />
                    Пн-Вс: 09:00 — 00:00</p>
                    <p>Ресторан и самовывоз<br />
                    Пн-Вс: 09:00 — 00:00</p>
                </div>
                <div className={styles['contacts-column']}>
                    <p className={styles['column-title']}>Север</p>
                    <p><img src="/address-icon.svg" />&nbsp; ул. Скочилова, 2а</p>
                    <p>Доставка<br />
                    Пн-Вс: 09:00 — 00:00</p>
                    <p>Ресторан и самовывоз<br />
                    Пн-Вс: 09:00 — 00:00</p>
                </div>
                <div className={styles['contacts-column']}>
                    <p className={styles['column-title']}>Центр</p>
                    <p><img src="/address-icon.svg" />&nbsp; ул. Гончарова, 30</p>
                    <p>Доставка<br />
                    Пн-Вс: 09:00 — 00:00</p>
                    <p>Ресторан и самовывоз<br />
                    Пн-Вс: 09:00 — 00:00</p>
                </div>
            </div>
        </div>
    );
}