import { useState } from "react";
import { HiChartBar, HiChat, HiUser, HiHome, HiCog } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate(); // Get the navigate function for routing

  const Menus = [
    { title: "Analytics", icon: <HiChartBar size={24} />, gap: false },
    { title: "Comment", icon: <HiChat size={24} />, gap: true },
    { title: "Accounts", icon: <HiUser size={24} />, gap: false },
    { title: "Home ", icon: <HiHome size={24} />},
    { title: "Logout", icon: <HiCog size={24} />}, // Change "Setting" to "Logout"
  ];

  const handleMenuItemClick = (title) => {
    if (title === "Logout") {
      // Handle logout here. For now, we'll navigate to the home page.
      navigate("/");
    }
  };

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-gradient-to-b from-purple-800 to-purple-900 h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-gray-700
           border-2 rounded-full ${!open ? "rotate-180" : ""}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open ? "w-12 h-12" : "w-8 h-8"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            VectorWeb
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-purple-700 text-gray-100 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-purple-700"}`}
              onClick={() => handleMenuItemClick(Menu.title)}
            >
              {Menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200 text-gray-100`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7 bg-gradient-to-b from-purple-500 to-purple-700">
        <h1 className="text-2xl font-semibold text-white">Analytics Page</h1>
      </div>
    </div>
  );
};

export default Nav;
