import { ProductDetail } from "./ProductDetail";
import { PropTypes } from "prop-types";

export const ProductGrid = ({ handlerRemove, products=[]}) => {
    return (
        <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>description</th>
                        <th>price</th>
                        <th>remove</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return<ProductDetail handlerRemove={handlerRemove} product={product} key={product.name}/>
                    })}
                </tbody>
            </table>
    )
}

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired
}

