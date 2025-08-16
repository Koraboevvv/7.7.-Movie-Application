import { memo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logoo from "../../shared/assets/LOGOTYPE – BILETICK.svg";
import FlagRU from "../../shared/assets/RU.svg";
import { TvMinimal, Clipboard, Ticket, Search } from "lucide-react";

const Header = () => {
  const nav = useNavigate();

  const links = [
    { to: "/posterDetail", icon: TvMinimal, label: "Афиша" },
    { to: "/seances", icon: Clipboard, label: "Сеансы" },
    { to: "/ticket", icon: Ticket, label: "Билеты" },
    { to: "/search", icon: Search, label: "Поиск" },
  ];

  return (
    <header className="bg-transparent text-w">
      <nav className="container flex justify-between h-[80px] items-center font-medium">

        <NavLink to="/">
          <img src={Logoo} alt="Logo" />
        </NavLink>

        <div className="flex gap-6 items-center">
          {links.map(({ to, icon: Icon, label }) => (
            <NavLink key={to} to={to}>
              {({ isActive }) => (
                <div
                  className={`transition cursor-pointer flex flex-col items-center justify-end gap-1 w-10 h-10 bg-no-repeat bg-center`}
                >
                  <Icon
                    size={20}
                    color={isActive ? "#C61F1F" : "#A1A1A1"}
                  />
                  <p
                    className={isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"}
                  >
                    {label}
                  </p>
                </div>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 py-[8px] text-white bg-black px-2  rounded-[12px]">
            <img src={FlagRU} alt="Ru" />
            <select defaultValue="ru" className="bg-black text-white outline-none">
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
          </div>
          <button
            onClick={() => nav("/login")}
            className=" bg-[#C61F1F] text-white rounded-[12px] font-medium py-3.5 md:py-4 px-12 md:px-16   duration-200"
          >
            Войти
          </button>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
