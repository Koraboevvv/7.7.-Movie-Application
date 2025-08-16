import type { FC } from "react";
import Emblema from "../../shared/assets/EMBLEM.svg";
import Apple from "../../shared/assets/image 7.svg";
import Google from "../../shared/assets/image 8.svg";
import {
  FileText,
  Megaphone,
  HelpCircle,
  Phone,
  Film,
  CalendarDays,
  Music2,
  Dribbble,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="bg-black flex  justify-center py-8">
      <div className="bg-[#111] text-white rounded-xl px-8 py-6 flex gap-14 w-full max-w-6xl justify-between">
        
        <div className="flex flex-col gap-4">
           <div className="flex items-center text-[#C61F1F]">
      <img src={Emblema} alt="" />
          </div>

          <img
            src={Google}
            alt="Google Play"
            className="w-32 cursor-pointer"
          />
          <img
            src={Apple}
            alt="App Store"
            className="w-32 cursor-pointer"
          />
        </div>

        <div>
           <h4 className="text-sm mb-3">О нас</h4> 
          <ul className="flex flex-col gap-2  text-sm">
            <li className="flex items-center gap-2 text-[#A1A1A1] cursor-pointer  hover:text-[#C61F1F]">
              <FileText size={16} className="text-[#C61F1F]" /> Публичная оферта
            </li>
             <li className="flex items-center gap-2 text-[#A1A1A1] cursor-pointer  hover:text-[#C61F1F]">
              <Megaphone size={16} className="text-[#C61F1F]" /> Реклама
            </li>
            <li className="flex items-center gap-2 text-[#A1A1A1] cursor-pointer hover:text-[#C61F1F]" >
              <HelpCircle size={16} className="text-[#C61F1F]" /> F.A.Q
            </li>
            <li className="flex items-center gap-2 text-[#A1A1A1] cursor-pointer hover:text-[#C61F1F]">
              <Phone size={16} className="text-[#C61F1F]" /> Контакты
            </li>
          </ul>
        </div>

        <div>
           <h4 className="text-sm mb-3">Категории</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="flex items-center  gap-2 text-[#A1A1A1] cursor-pointer hover:text-[#C61F1F]">
              <Film size={16} className="text-[#C61F1F]" /> Кино
            </li>
            <li className="flex items-center gap-2 text-[#A1A1A1] cursor-pointer hover:text-[#C61F1F]">
               <CalendarDays size={16} className="text-[#C61F1F]" /> Театр
            </li>
            <li className="flex items-center gap-2 text-[#A1A1A1] cursor-pointer hover:text-[#C61F1F]">
              <Music2 size={16} className="text-[#C61F1F]" /> Концерты
            </li>
            <li className="flex items-center gap-2 text-[#A1A1A1] cursor-pointer hover:text-[#C61F1F]">
              <Dribbble size={16} className="text-[#C61F1F]" /> Спорт
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div>
             <h4 className="tex t-sm mb-3">Связаться с нами</h4>
            <p className="text-[#C61F1F] font-semibold">
              +998 (95) 897-33-38
            </p>
          </div>
          <div>
             <h4 className="text-sm mb-3">Социальные сети</h4>
            <div className="flex gap-4">
               <Instagram size={18} className="text-[#C61F1F] cursor-pointer" />
              <Facebook size={18} className="text-[#C61F1F] cursor-pointer" />
              <Youtube size={18} className="text-[#C61F1F] cursor-pointer" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
