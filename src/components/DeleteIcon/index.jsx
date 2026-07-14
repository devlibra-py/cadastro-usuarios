import "../../pages/Home/styles.css";
import Trash from "../../assets/trash.svg?react";

function DeleteIcon({ ...props }) {
  return (
    <div className="pl-7.5">
      <Trash
        type="button"
        className="w-7 h-7 cursor-pointer hover:opacity-75 active:opacity-60"
        {...props}
      />
    </div>
  );
}

export default DeleteIcon;
