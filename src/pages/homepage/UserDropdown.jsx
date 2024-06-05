import { useState } from "react";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative">
        Dropdown
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="btn btn-circle rounded-full w-14"
        >
          <img
            className="w-full h-full rounded-full"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt=""
          />
        </button>
      </div>
    </>
  );
};

export default UserDropdown;
