import { Search } from '../../components/Search/Search';
import s from './UsersPage.module.css'
import { useEffect, useState } from 'react'

export function UsersPage() {
    const [users, setUsers] = useState([]);
    const [message, setMeesage] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: formData
        });
        e.target.reset();
        setMeesage('Форма отправлена!')
    }


    async function fetchUsers() {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await responce.json();
        setUsers(users);
    }
    useEffect(() => {
        fetchUsers();
    }, []);


    const [query, setQuery] = useState('')
    function handleChange(e) {
        setQuery(e.target.value)
    }
    const filteredUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(query.toLowerCase());
    })
    return (
        <section>
            <div className={s.container}>

                <div className={s.title}>
                    <h2>Пользователи</h2>
                    <Search handleChange={handleChange} />
                </div>

                {
                    filteredUsers.length ?
                        filteredUsers.map(user => {
                            return (
                                <div className={s.user}>{user.name}</div>
                            )
                        })
                        :
                        <p className={s.error}>Пользователя по запросу "{query}" нет</p>
                }


                <form onSubmit={handleSubmit} className={s.form}>
                    <p>Добавить пользователя:</p>
                    <input type="text" name='name' placeholder='введите имя' />
                    <button type="submit">Отправить</button>
                    <div className={s.message}>{message}</div>
                </form>
            </div>
        </section>
    )
}