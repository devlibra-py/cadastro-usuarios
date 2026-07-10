import { Children } from "react";
import "../../pages/Home/styles.css";
import PropTypes from "prop-types";

function DefaultButton({ children, theme, ...props }) {
  return (
    <button
      className={`border-none rounded-4xl ${
        theme === "primary"
          ? "bg-linear-to-r from-[#fe7e5d] to-[#ff6378] text-white"
          : "bg-white border-2 text-blue-600"
      } text[16px] p-4 w-fit cursor-pointer hover:opacity-80 hover:active:opacity-50`}
      {...props}
    >
      {children}
    </button>
  );
}

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

export default DefaultButton;
