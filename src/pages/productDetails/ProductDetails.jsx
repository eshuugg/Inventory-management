import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { productDetails } from '../../redux/action';
import { Card, Button } from 'react-bootstrap';


const ProductDetails = (props) => {

    const dispatch = useDispatch();

    const { products } = useSelector(state => state.data)

    const params = useParams();


    useEffect(() => {
        dispatch(productDetails(params))

    }, [])

    console.log(products, "products");

    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product Details</h1>
            </div>
            <hr />
            <br />
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <table>
                        <thead>
                            <tr>
                                <th scope="row">Product Name - </th>
                                <td>{products.productName}</td>
                            </tr>
                            <tr>
                                <th scope="row">Product Type -</th>
                                <td>{products.productType}</td>

                            </tr>
                            <tr>
                                <th scope="row">Created By -</th>
                                <td>{products.created_by}</td>
                            </tr>
                            <tr>
                                <th scope="col">In Stock -</th>
                                <td>{products.stocks.quantity}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            </tr>
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
            <br />
            <table className="table table-hover" style={{ border: '2px solid black', borderRadius: '5px' }}>
                <thead>
                    <tr>
                        <th scope="col">Supplier Id</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplier Name</th>
                        <th scope="col">Supply Date</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Tax</th>
                        <th scope="col">Total Cost</th>
                        <th scope="col">Invoice No</th>
                    </tr>
                </thead >
                {products && products.supplier && products.supplier.map((item, index) => (
                    <tbody style={{ cursor: 'pointer' }} >
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.quantity}</td>
                            <td>{item.supplierName}</td>
                            <td>{item.supplyDate}</td>
                            <td>{item.rate}</td>
                            <td>{item.tax}</td>
                            <td>{item.totalCost}</td>
                            <td>{item.invoice_no}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
            <br />
            <table className="table table-hover" style={{ border: '2px solid black', borderRadius: '10px' }}>
                <thead>
                    <tr>
                        <th scope="col">Sell Report Id</th>
                        <th scope="col">Date of Sell</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Total Cost</th>
                        <th scope="col">Sold To</th>
                        <th scope="col">Created By</th>
                        <th scope="col">Invoice No</th>
                    </tr>
                </thead >
                {products && products.sellReport && products.sellReport.map((item, index) => (

                    <tbody style={{ cursor: 'pointer' }} >
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.dateofSell}</td>
                            <td>{item.quantity}</td>
                            <td>{item.cost}</td>
                            <td>{item.totalCost}</td>
                            <td>{item.soldTo}</td>
                            <td>{item.created_by}</td>
                            <td>{item.invoice_no}</td>
                        </tr>
                    </tbody>
                ))}
            </table>

        </div>
    )
}

export default ProductDetails