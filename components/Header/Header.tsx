import HeaderDesktop from "./Desktop/HeaderDesktop";
import css from "./Header.module.css";
import HeaderMobile from "./Mobile/HeaderMobile";


const Header = () => {


  return (
    <header className={css.header}>
      <HeaderDesktop />
      <HeaderMobile />
    </header>
  );
 
};

export default Header;
