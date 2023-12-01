import { useEffect, useState } from "react";

type User = {
  id: string;
  username: string;
};

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        users.map(({ id, username }) => <div key={id}>{username}</div>)
      ) : (
        <span>No Users</span>
      )}
    </div>
  );
};
