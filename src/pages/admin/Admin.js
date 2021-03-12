import React, {useEffect} from "react";
import "./style.scss";
import {connect} from "react-redux";
import {loadUsers} from "../../redux/actions/users/usersAction";

function Admin(props) {
    const {isUsersLoaded, users} = props;
    useEffect(() => {
        props.loadUsers();
    }, [props.loadUsers])
    return (
        <section className='admin'>
            <div className='list__title'>
                <h1>List of users</h1>
                <hr/>
            </div>

            <table>
                <thead>
                <tr>
                    <th>Picture</th>
                    <th>Full name</th>
                    <th>Profile</th>
                    <th>Age</th>
                    <th>About</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {
                    isUsersLoaded ? 'loading users...' :
                        users && users.map(user =>
                            <tr>
                                <td className="picture"><img src={user.picture} alt='profile'/></td>
                                <td>{user.firstname} {user.lastname}</td>
                                <td>{user.profile}</td>
                                <td>{user.age}</td>
                                <td>{user.about}</td>
                                <td>{user.address}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                }

                </tbody>
            </table>
        </section>
    )
}

const mapStateToProps = ({isUsersLoaded, users}) => ({
    isUsersLoaded,
    users,
});

export default connect(
    mapStateToProps,
    {loadUsers}
)(Admin);
