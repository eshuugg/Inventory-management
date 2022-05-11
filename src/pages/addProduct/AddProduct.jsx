import "./addProduct.css";
import React, { useState, useEffect } from "react";
import { Card, Col, Form, Row, Button } from 'react-bootstrap';
import { addProduct } from "../../redux/action";
import { useDispatch } from "react-redux";

export default function AddUser() {

  const initialState = {
    productName: "",
    productType: "",
    quantity: "",
    supplierName: "",
    supplyDate: "",
    rate: "",
    tax: "",
    totalCost: "",
    invoice_no: "",
    company_id: "",
    created_by: ""
  }

  const dispatch = useDispatch();

  const [state, setState] = useState(initialState);

  const { productName, productType, quantity, supplierName, supplyDate, rate, tax, totalCost, invoice_no, company_id, created_by } = state;


  // const [record, setRecord] = useState([]);


  const handleInput = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // const newRecord = ({ ...state, id: new Date().getTime().toString() })
    // setRecord([...record, newRecord])
    dispatch(addProduct(state));
    setState({ productName: "", productType: "", quantity: "", supplierName: "", supplyDate: "", rate: "", tax: "", totalCost: "", invoice_no: "", company_id: "", created_by: "" })
  }

  return (
    <>
      <div className="addInventory" style={{border:'2px solid black', borderRadius:'5px'}}>
        <div className="row justify-content-center mt-5 py-5 pt-0" style={{marginLeft:"15px" ,fontSize:"15px"}}>
          <h2 style={{marginLeft:'10px'}}>Add Product</h2>
          <div className="col-12" style={{ overflowX: "hidden" }}>
            <div className="row w-100">
              <div className="col-9 mt-4">
                <Form className="p-3" >
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label className="text-start" column sm="3">
                      Product Name:
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control name='productName' value={productName} onChange={(e) => handleInput(e)} type="text" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label className="text-start" column sm="3">
                      Product Type:
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control name='productType' value={productType} onChange={(e) => handleInput(e)} type="text" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label className="text-start" column sm="3">
                      Supplier Name:
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control name='supplierName' value={supplierName} onChange={(e) => handleInput(e)} type="text" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label className="text-start" column sm="3">
                      Supply Date:
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control name='supplyDate' value={supplyDate} onChange={(e) => handleInput(e)} type="date" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label className="text-start" column sm="3">
                      Quantity:
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control name='quantity' value={quantity} onChange={(e) => handleInput(e)} type="number" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label className="text-start" column sm="3">
                      Rate:
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control name='rate' value={rate} onChange={(e) => handleInput(e)} type="number" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label className="text-start" column sm="3">
                      Tax:
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control name='tax' value={tax} onChange={(e) => handleInput(e)} type="number" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label className="text-start" column sm="3">
                      Total Cost:
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control name='totalCost' value={totalCost} onChange={(e) => handleInput(e)} type="number" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label className="text-start" column sm="3">
                      Invoice No:
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control name='invoice_no' value={invoice_no} onChange={(e) => handleInput(e)} type="number" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label className="text-start" column sm="3">
                      Company Id:
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control name='company_id' value={company_id} onChange={(e) => handleInput(e)} type="number" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label className="text-start" column sm="3">
                      Created By:
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control name='created_by' value={created_by} onChange={(e) => handleInput(e)} type="string" />
                    </Col>
                  </Form.Group>
                  <Button onClick={handleSubmit} style={{ marginTop: "20px", float: "right", marginRight: "60px", height: "45px" }}>Submit</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
