import "../../pages/Home/styles.css";

function Body({ children }) {
  return (
    <div className="flex flex-col items-center justify-evenly w-full h-full min-h-screen p-5 bg-[#181f36]">
      {children}
    </div>
  );
}

export default Body;
