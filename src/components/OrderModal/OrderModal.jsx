import s from './OrderModal.module.css'
import Modal from 'react-modal'

export function OrderModal({modalIsOpen, setModalIsOpen}) {
    function closeModal() {
        setModalIsOpen(false);
    }
    return(
        <>
            <Modal className={s.modal} isOpen={modalIsOpen}>
                <h3>Оформление заказа</h3>
                <form className={s.form}>
                    <input type="text" placeholder='Ваше имя' />
                    <input type="text" placeholder='Ваше email' />
                    <input type="text" placeholder='Ваше номер телефона' />
                    <button className={s.arrange}>Оформить</button>
                </form>
                <button onClick={closeModal} className={s.btn}>✕</button>
            </Modal>
        </>
    )
}