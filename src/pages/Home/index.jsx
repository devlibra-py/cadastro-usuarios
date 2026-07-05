import UsersImage from "../../assets/users.png";

function Home() {
  return (
    <div className="flex flex-col items-center justify-evenly w-full min-w-screen h-full min-h-screen bg-[#181f36]">
      <div className="bg-linear-to-r from-[#fe7e5d] to-[#7f3841] h-[30vh] w-[90vw] max-w-200 rounded-[30px] flex justify-center">
        <img src={UsersImage} alt="imagem-usuarios" />
      </div>

      <div className="w-125">
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
            />
          </div>

          <button className="border-none rounded-4xl bg-linear-to-r from-[#fe7e5d] to-[#ff6378] text-white text[16px] p-4 w-fit cursor-pointer hover:opacity-80 hover:active:opacity-50">
            Cadastrar Usuário
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
