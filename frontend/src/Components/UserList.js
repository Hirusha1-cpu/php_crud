import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/users')
            .then(response => {
                console.log(response);
                
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <>
                        <li key={user.id}>{user.name}</li>
                        <li key={user.id}>{user.email}</li>
                        <li key={user.id}>{user.phone_number}</li>
                    </>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
