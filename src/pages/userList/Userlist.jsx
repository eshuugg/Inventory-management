import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getcompanyUsers } from '../../redux/action';






const Userlist = () => {

    const dispatch = useDispatch();

    const { users } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(getcompanyUsers())
    }, [])
    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                {users && users.user && users.user.map((item, index) => (
                    <tbody>
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{item.user_name}</td>
                            <td>{item.email}</td>
                            <td>{item.role?.role_name}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default Userlist