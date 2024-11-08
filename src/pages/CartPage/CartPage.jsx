import style from './CartPage.module.css'
import s from '../../components/Card/Card.module.css'
import { Link } from 'react-router-dom'
import { products } from '../../data/data'
export function CartPage({ cart }) {
    const cartProducts = cart.map(id => products.find(product => product.id == id));
    const summa = cartProducts.reduce((sum, product) => sum + product.price, 0);
    return (
        <section>
            <div className={style.container}>
                <p className={style.sum}>Итого к оплате: {summa} руб</p>
                <div className={style.cards}>
                    <div className={style.cart__inner}>
                        {
                            cartProducts.map(product =>
                                <div className={style.card}>
                                    <div className={style.card__img}>
                                        <img src={product.img} alt="#" />
                                    </div>
                                    <h5>{product.name}</h5>
                                    <p>{product.price}руб</p>
                                    <Link to={`/catalog/${product.id}`} className={style.more}>Подробнее</Link>
                                </div>
                            )

                        }
                    </div>
                </div>
            </div>
        </section>
    )
}