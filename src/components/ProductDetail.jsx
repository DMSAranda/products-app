import { PropTypes } from "prop-types"
import { Button } from "react-bootstrap"

export const ProductDetail = ({ product = [], handlerRemove, handlerProductSelected }) => {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>
                <Button onClick={()=>handlerProductSelected(product)}>
                    Update
                </Button>
            </td>
            <td>
                <Button onClick={()=>handlerRemove(product.id)}>
                    Remove
                </Button>
            </td>
        </tr>
    )
}

ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}