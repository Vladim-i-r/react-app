import { ProductDetail } from "./ProductDetail";
import { PropTypes } from "prop-types";

export const ProductGrid = ({handlerProductSelected, handlerRemove, products=[]}) => {
    return (
        <table className="table table-hover table-stripped">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>description</th>
                        <th>price</th>
                        <th>update</th>
                        <th>remove</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return<ProductDetail handlerRemove={handlerRemove} handlerProductSelected={handlerProductSelected} product={product} key={product.name}/>
                    })}
                </tbody>
            </table>
    )
}

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}

