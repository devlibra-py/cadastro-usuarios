import "../../pages/Home/styles.css";
import Image from "../../assets/users.png";

function MainCardImage() {
  return (
    <div className="bg-linear-to-r from-[#fe7e5d] to-[#7f3841] h-[30vh] w-[90vw] max-w-200 rounded-[30px] flex justify-center">
      <img src={Image} alt="imagem-usuarios" />
    </div>
  );
}

export default MainCardImage;
