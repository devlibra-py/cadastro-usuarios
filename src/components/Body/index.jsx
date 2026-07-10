import "../../pages/Home/styles.css";

function Body({ children }) {
  return (
    <div className="flex flex-col items-center justify-evenly w-full min-w-screen h-full min-h-screen bg-[#181f36]">
      {children}
    </div>
  );
}

export default Body;
