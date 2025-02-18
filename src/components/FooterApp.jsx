import { FaInstagram } from "react-icons/fa";

const FooterApp = () => {
  return (
    <footer className="bg-[#D2B48C] text-[#5A3E2B] p-4 text-center rounded-2xl shadow-md">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-lg">📞 +57 305 2298710</p>
        <p className="text-lg">✉️ psicotranspersonal.info@gmail.com</p>
        <a
          href="https://www.instagram.com/tu_cuenta"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-[#8B5E3C]"
        >
          <FaInstagram size={24} />
          <span>@psicotranspersonal</span>
        </a>
      </div>
    </footer>
  );
};

export default FooterApp;
