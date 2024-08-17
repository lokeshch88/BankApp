import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  // State to store users and loading/error status
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from the backend when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://192.168.0.78:8080/users');
        setUsers(response.data); // Store users in state
      } catch (error) {
        setError(error.message); // Set error message if there is an error
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this useEffect runs once after the initial render

  // Render loading, error, or user list
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      {users.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No users found</div>
      )}
    </div>
  );
};

export default UserList;
