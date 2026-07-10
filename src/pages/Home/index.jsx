import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import DefaultButton from "../../components/Button/index.jsx";
import Body from "../../components/Body";
import MainCardImage from "../../components/MainCardImage";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  async function registerNewUser() {
    await api.post("/usuarios", {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    });
  }

  return (
    <Body>
      <MainCardImage />
      <div className="w-125 flex flex-col items-center gap-y-10">
        <h2 className="text-white text-center font-bold text-[38px]">
          Cadastrar Usuário
        </h2>
        <form
          className="w-full rounded-xl 
                       flex flex-col items-center gap-y-5"
          action=""
        >
          <div className="flex w-full gap-x-4">
            <div className="w-full">
              <label className="text-white text-xs font-medium" htmlFor="nome">
                Nome<span className="text-[#ef4f45] font-bold"> *</span>
              </label>
              <input
                className="border bg-white h-10 px-2 w-full outline-none rounded-xl"
                id="nome"
                type="text"
                placeholder="Nome do usuário"
                ref={inputName}
              />
            </div>

            <div className="w-full">
              <label className="text-white text-xs font-medium" htmlFor="idade">
                Idade<span className="text-[#ef4f45] font-bold"> *</span>
              </label>
              <input
                className="border bg-white h-10 px-2 w-full outline-none rounded-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                id="idade"
                type="number"
                placeholder="Idade do usuário"
                ref={inputAge}
              />
            </div>
          </div>

          <div className="w-full gap-4">
            <label className="text-white text-xs font-medium" htmlFor="email">
              Endereço de E-mail
              <span className="text-[#ef4f45] font-bold"> *</span>
            </label>
            <input
              className="border bg-white h-10 px-2 w-full outline-none rounded-xl"
              id="email"
              type="email"
              placeholder="E-mail do usuário"
              ref={inputEmail}
            />
          </div>

          <DefaultButton
            type="submit"
            onClick={registerNewUser}
            theme="primary"
          >
            Cadastrar Usuarios
          </DefaultButton>
        </form>
        <DefaultButton
          type="button"
          theme="standard"
          onClick={() => navigate("/lista-de-usuarios")}
        >
          Lista de Usuários
        </DefaultButton>
      </div>
    </Body>
  );
}

export default Home;
