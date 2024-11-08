import { useState } from 'react'
import { OrderModal } from '../OrderModal/OrderModal'
import s from './Card.module.css'
import item from '/item.png'
import { Link } from 'react-router-dom'

export function Card({ id, img, name, desc, price, count, addToCart }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function showModal() {
        setModalIsOpen(true);
    }
    return (
        <>

            <div className={s.item}>
                <img src={img} alt="#" />

                <h3>{name}</h3>

                <div className={s.price__btn}>
                    <Link to={`${id}`}>Подробнее</Link>
                    <p><span>{price}</span> ₽</p>
                </div>
                {
                    count > 0 ?
                        <button onClick={addToCart} className={s.add__cart}>Добавить в корзину</button>
                        :
                        <button onClick={showModal} className={s.btn__order}>Заказать</button>
                }
                <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />

            </div>
        </>
    )
}