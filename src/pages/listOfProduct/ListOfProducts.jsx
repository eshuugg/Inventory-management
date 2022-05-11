import React, { useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import { getCompanyProducts } from '../../redux/action';
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




const ListOfProducts = () => {


    let dispatch = useDispatch();

    let { product } = useSelector(state => state.data)

    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getCompanyProducts());
    }, []);

    // const productDetails = (product_id) => {
    //     navigate('/details')
    // }


    return (
        <div>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
            </div>
            <hr />
            <br />
            <table className="table table-hover" style={{ border: '2px solid black', borderRadius: '5px' }}>
                <thead>
                    <tr>
                        <th scope="col">Product Id</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Type</th>
                        <th scope="col">Created By</th>
                    </tr>
                </thead>
                {product && product.map((item, index) => (
                    <tbody  >
                        <tr >
                            <th scope="row">{index + 1}</th>
                            <td>{item.productName}</td>
                            <td>{item.productType}</td>
                            <td>{item.created_by}</td>
                            <td ><button type="button" class="btn btn-primary" onClick={() => navigate(`/product/details/${item.id}`)}>View</button></td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default ListOfProducts;
