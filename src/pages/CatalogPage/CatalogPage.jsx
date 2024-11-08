
import { Catalog } from "../../components/Catalog/Catalog";


export function CatalogPage({cart, addToCart}) {
    return ( 
        <section>
            <Catalog cart={cart} addToCart={addToCart}/>
        </section>
    )
}