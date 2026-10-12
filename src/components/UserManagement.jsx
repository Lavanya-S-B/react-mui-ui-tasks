
import { useState } from "react";
import "../App.css";

const users = [
  { id: 1, name: "Arun", age: 22 },
  { id: 2, name: "Priya", age: 17 },
  { id: 3, name: "Karthik", age: 25 },
  { id: 4, name: "Divya", age: 16 },
  { id: 5, name: "Rahul", age: 19 },
  { id: 6, name: "Sneha", age: 18 },
];

function App() {
  const [filter, setFilter] = useState("all");

  const filteredUsers = users.filter((user) => {
    if (filter === "above") return user.age > 18;
    if (filter === "below") return user.age < 18;
    return true;
  });

  return (
    <div className="container">
      <h1>User Management</h1>
      <p className="subtitle">View and filter users by age</p>

      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All Users
        </button>

        <button
          className={filter === "above" ? "active" : ""}
          onClick={() => setFilter("above")}
        >
          Age &gt; 18
        </button>

        <button
          className={filter === "below" ? "active" : ""}
          onClick={() => setFilter("below")}
        >
          Age &lt; 18
        </button>
      </div>

      <div className="table-container">
        <div className="table-header">
          <h2>User List</h2>
          <span>{filteredUsers.length} users</span>
        </div>

        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <span
                    className={
                      user.age >= 18 ? "adult" : "minor"
                    }
                  >
                    {user.age >= 18 ? "18 or above" : "Below 18"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <p className="empty">No users found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
