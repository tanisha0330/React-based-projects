import React, { useState } from 'react';
import UserList from './components/UserList';
const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', isActive: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', isActive: false },
  ]);
  const toggleUserActivity = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };
  return (
    <div>
      <h1>User List</h1>
      <UserList users={users} toggleActivity={toggleUserActivity} />
    </div>
  );
}
export default App;