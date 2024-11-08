import { useState } from 'react'
import { products } from '../../data/data'
import { Card } from '../Card/Card'
import s from './Catalog.module.css'
import item from '/item.png'
import { Search } from '../Search/Search'

export function Catalog({ cart, addToCart }) {
    const [query, setQuery] = useState('');
    const [sorting, setSorting] = useState('');
    const [category, setCategory] = useState(0);
    function sort(e) {
        setSorting(e.target.value);
    }
    function handleChange(e) {
        setQuery(e.target.value)
    }
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase())
            &&
            (product.category == category || category == 0)
            ;
    });
    const sortProducts = (sorting, products) => {
        switch (sorting) {
            case 'price_asc':
                return [...products].sort((a, b) => a.price - b.price);
            case 'price_desc':
                return [...products].sort((a, b) => b.price - a.price);
            default:
                return products;
        }
    };
    const sortedFilteredProducts = sortProducts(sorting, filteredProducts);
    return (
        <section>
            <div className={s.container}>

                <div className={s.catalog__block}>
                    <div className={s.title}>
                        <h2>Каталог товаров</h2>

                        <Search handleChange={handleChange} />
                    </div>

                    <div className={s.sort__category}>
                        <div className={s.category}>
                            <p>Категории:</p>

                            <div className={s.btns}>
                                <button onClick={() => setCategory(0)} className={s.active}>Все товары</button>
                                <button onClick={() => setCategory(1)}>Шины/колеса</button>
                                <button onClick={() => setCategory(2)}>Аксессуары</button>
                                <button onClick={() => setCategory(3)}>Ароматизаторы</button>
                            </div>
                        </div>
                        <div className={s.sort}>
                            <p>Сортировка:</p>
                            <select onChange={sort}>
                                <option value="price_asc">По возрастанию цены</option>
                                <option value="price_desc">По убыванию цены</option>
                            </select>
                        </div>
                    </div>


                    <div className={s.items}>

                        {sortedFilteredProducts.length ? (
                            sortedFilteredProducts.map((product, index) => {
                                return <Card {...product} addToCart={() => addToCart([...cart, product.id])} />

                            })
                        ) : (
                            <p className={s.error}>Ничего не найдено по запросу "{query}"</p>
                        )}
                    </div>

                    <div className={s.add__more}>
                        <button>Загрузить еще товары</button>
                    </div>
                </div>

            </div>


        </section>
    )
}