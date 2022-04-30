import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginInitiate } from '../../redux/action';
import "./login.css";



export default function Login() {

    const initialState = {
        email: "",
        password: "",
    }

    const [state, setState] = useState(initialState)

    const { email, password } = state;

    const { currentUser } = useSelector(state => state.data);

    // console.log(currentUser, "currentUser");



    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate('/')
        }
    }, [currentUser, navigate])


    const dispatch = useDispatch();



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(state))
        // const newRecord = { ...state}
        // setRecord([...record, newRecord  ])
        setState({ email: "", password: "" })
    }

    const handleInput = (e) => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    return (
        <div>
            <div id="logreg-forms" style={{ textAlign: "center" }}>
                <form className="form-signin " onSubmit={handleSubmit}>
                    <h1 className='h3 mb-3 font-weight-normal' style={{ textAlign: "center" }}>
                        Log In
                    </h1>
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder='Email Address'
                        name="email"
                        onChange={handleInput}
                        value={email}
                    />
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={handleInput}
                        vlaue={password}
                    />
                    <button style={{ alignItems: "center", background: "#2a6bf7" }} className="btn btn-secondary btn-block" type="submit">
                        Log In
                    </button>
                    {/* <hr /> */}
                    {/* <p>Don't have an account</p> */}
                    {/* <Link to="/registration">
                        <button className="btn btn-primary btn-block" type="button" id="btn-signup">
                            <i className="fas fa-user-plus">Sign up New Account</i>
                        </button>
                    </Link> */}
                </form>
            </div>
        </div>
    )
}
