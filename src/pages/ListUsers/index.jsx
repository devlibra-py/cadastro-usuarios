import { useEffect, useState } from "react";
import api from "../../services/api";
import Body from "../../components/Body/index.jsx";
import MainCardImage from "../../components/MainCardImage/index.jsx";

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <Body>
      <MainCardImage />

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.age}</p>
        </div>
      ))}
    </Body>
  );
}

export default ListUsers;
