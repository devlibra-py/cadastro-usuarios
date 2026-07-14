import { useEffect, useState } from "react";
import api from "../../services/api";
import Body from "../../components/Body/index.jsx";
import MainCardImage from "../../components/MainCardImage/index.jsx";
import DeleteIcon from "../../components/DeleteIcon";
import Title from "../../components/Title/index.jsx";
import DefaultButton from "../../components/Button";
import { useNavigate } from "react-router-dom";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data);
    }
    getUsers();
  }, []);

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);

    const updatedUsers = users.filter((user) => user.id !== id);

    setUsers(updatedUsers);
  }

  return (
    <Body>
      <MainCardImage />
      <Title>Lista de Usuários</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                className="text-2xl mb-0.7 capitalize
              "
              >
                {user.name}
              </h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <DeleteIcon onClick={() => deleteUsers(user.id)} />
          </div>
        ))}
      </div>

      <DefaultButton
        type="button"
        theme="standard"
        onClick={() => navigate("/")}
      >
        Voltar
      </DefaultButton>
    </Body>
  );
}

export default ListUsers;
