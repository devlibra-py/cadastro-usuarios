import { useEffect, useState } from "react";
import api from "../../services/api";
import Body from "../../components/Body/index.jsx";
import MainCardImage from "../../components/MainCardImage/index.jsx";
import DeleteIcon from "../../components/DeleteIcon";

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
      <h1>Lista de Usuários</h1>
      <div>
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-[#252d48] p-4 rounded-4xl flex justify-between items-center gap-5 max-w-[400]"
          >
            <img
              src={`https://avatarapi.runflare.run/public?usearname=${user.id}`}
              className="h-20"
            />
            <div className="text-white font-extralight text-sm">
              <h3
                className="text-2xl mb-0.7
              "
              >
                {user.name}
              </h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <DeleteIcon />
          </div>
        ))}
      </div>
    </Body>
  );
}

export default ListUsers;
