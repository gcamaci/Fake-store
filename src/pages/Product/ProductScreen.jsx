import { Link } from "react-router-dom"

const ProductScreen = () => {
    return (
        <div className="col-start-3 col-end-13 border">
            Product Page
            <div className="border">
                <Link to="/">Back</Link>
            </div>
            
        </div>
    )
}

export default ProductScreen