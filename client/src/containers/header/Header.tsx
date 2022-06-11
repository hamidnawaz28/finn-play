import FinplayLogo from "../../assets/images/finnplay.svg";
import UserWatermark from "../../assets/images/user-watermark.svg";
import { HeaderLayout } from "../layouts";
import "./header.css";

const Header = () => {
  return (
    <HeaderLayout>
      <div className="header">
        <img className="header__logo" src={FinplayLogo} alt="finnplay-logo" />
        <div className="header__user">
          <img
            className="header__user__watermark"
            src={UserWatermark}
            alt="user-watermark"
          />
          <p className="header__user__text">Logout</p>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default Header;
