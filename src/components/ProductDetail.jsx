import { PropTypes } from "prop-types";


export const ProductDetail = ({ handlerRemove, product={} }) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
                <button onClick={()=>handlerRemove(product.name)}>
                    remove
                </button>
                
            </td>
        </tr>
    )
}

ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
    handlerRemove: PropTypes.func.isRequired
}